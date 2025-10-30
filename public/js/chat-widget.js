"use strict";

var ChatWidget = (() => {
  var define = Object.defineProperty;
  var getSymbols = Object.getOwnPropertySymbols;
  var hasOwn = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  var assign = (obj, props) => {
    for (var key in props || {}) if (hasOwn.call(props, key)) define(obj, key, { enumerable: true, configurable: true, writable: true, value: props[key] });
    if (getSymbols)
      for (var sym of getSymbols(props))
        if (propIsEnumerable.call(props, sym)) define(obj, sym, props[sym]);
    return obj;
  };
  var merge = (a, b) => assign(assign({}, a), b);
  var run = (ctx, args, gen) =>
    new Promise((resolve, reject) => {
      function step(result) {
        try {
          if (result.done) resolve(result.value);
          else Promise.resolve(result.value).then(next, fail);
        } catch (err) {
          reject(err);
        }
      }
      function next(value) {
        step(gen.next(value));
      }
      function fail(err) {
        step(gen.throw(err));
      }
      step((gen = gen.apply(ctx, args)).next());
    });

  (function () {
    const defaults = {
      webhookUrl: "",
      theme: {
        primaryColor: "#007bff",
        secondaryColor: "#0056b3",
        userMessageBg: "#007bff",
        botMessageBg: "#f0f0f0",
        userMessageText: "#ffffff",
        botMessageText: "#333333",
      },
      welcomeMessage: null,
      animations: true,
      branding: null,
      responseAccessor: "reply",
    };

    const config = window.ChatWidgetConfig || {};
    const options = merge(defaults, config);
    const script = document.currentScript;

    if (script) {
      options.webhookUrl = script.getAttribute("data-webhook") || options.webhookUrl;
      options.theme.primaryColor = script.getAttribute("data-primary-color") || options.theme.primaryColor;
      options.theme.secondaryColor = script.getAttribute("data-secondary-color") || options.theme.secondaryColor;
      options.theme.userMessageBg = script.getAttribute("data-user-bg") || options.theme.userMessageBg;
      options.theme.botMessageBg = script.getAttribute("data-bot-bg") || options.theme.botMessageBg;
      options.theme.userMessageText = script.getAttribute("data-user-text") || options.theme.userMessageText;
      options.theme.botMessageText = script.getAttribute("data-bot-text") || options.theme.botMessageText;
      options.welcomeMessage = script.getAttribute("data-welcome") || options.welcomeMessage;
      options.animations = script.getAttribute("data-animations") !== "false";
      options.branding = script.getAttribute("data-branding") || options.branding;
      options.responseAccessor = script.getAttribute("data-response-path") || options.responseAccessor;
    }

    if (!options.webhookUrl) {
      console.error("ChatWidget Error: data-webhook attribute is required.");
      return;
    }

    const colors = options.theme;
    const webhook = options.webhookUrl;
    const welcome = options.welcomeMessage;
    const animations = options.animations;
    const branding = options.branding;

    // Create basic button
    const style = document.createElement("style");
    style.textContent = `
      .chat-widget-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: ${colors.primaryColor};
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        z-index: 9999;
      }
      .chat-widget-btn:hover {
        background: ${colors.secondaryColor};
        transform: scale(1.05);
      }
      .chat-widget-box {
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 360px;
        max-width: 90vw;
        height: 480px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.25);
        display: none;
        flex-direction: column;
        overflow: hidden;
        z-index: 10000;
      }
      .chat-widget-header {
        background: ${colors.primaryColor};
        color: white;
        padding: 12px 15px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .chat-widget-messages {
        flex: 1;
        overflow-y: auto;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        background: ${colors.botMessageBg};
      }
      .chat-msg {
        max-width: 80%;
        padding: 8px 12px;
        border-radius: 12px;
        font-size: 14px;
        line-height: 1.4;
      }
      .chat-user {
        align-self: flex-end;
        background: ${colors.userMessageBg};
        color: ${colors.userMessageText};
      }
      .chat-bot {
        align-self: flex-start;
        background: ${colors.botMessageBg};
        color: ${colors.botMessageText};
      }
      .chat-input {
        display: flex;
        border-top: 1px solid #ddd;
        padding: 8px;
        background: #fff;
      }
      .chat-input input {
        flex: 1;
        border: 1px solid #ccc;
        border-radius: 20px;
        padding: 8px 12px;
        outline: none;
      }
      .chat-input button {
        background: ${colors.primaryColor};
        border: none;
        color: #fff;
        border-radius: 20px;
        padding: 8px 14px;
        margin-left: 8px;
        cursor: pointer;
        transition: 0.2s;
      }
      .chat-input button:hover {
        background: ${colors.secondaryColor};
      }
      .chat-branding {
        font-size: 11px;
        text-align: center;
        color: #aaa;
        padding: 5px;
      }
    `;
    document.head.appendChild(style);

    const btn = document.createElement("div");
    btn.className = "chat-widget-btn";
    btn.innerHTML = "💬";

    const box = document.createElement("div");
    box.className = "chat-widget-box";

    box.innerHTML = `
      <div class="chat-widget-header">
        <span>المساعد الذكي</span>
        <button id="chatCloseBtn" style="background:none;border:none;color:#fff;font-size:18px;cursor:pointer;">×</button>
      </div>
      <div class="chat-widget-messages" id="chatMessages"></div>
      <div class="chat-input">
        <input id="chatInput" type="text" placeholder="اكتب رسالتك..." />
        <button id="chatSend">إرسال</button>
      </div>
      ${branding ? `<div class="chat-branding">${branding}</div>` : ""}
    `;

    document.body.appendChild(btn);
    document.body.appendChild(box);

    const messagesBox = box.querySelector("#chatMessages");
    const input = box.querySelector("#chatInput");
    const sendBtn = box.querySelector("#chatSend");
    const closeBtn = box.querySelector("#chatCloseBtn");

    btn.onclick = () => {
      box.style.display = "flex";
      btn.style.display = "none";
      if (welcome) addMessage(welcome, "chat-bot");
    };

    closeBtn.onclick = () => {
      box.style.display = "none";
      btn.style.display = "flex";
    };

    function addMessage(text, cls) {
      const msg = document.createElement("div");
      msg.className = `chat-msg ${cls}`;
      msg.innerText = text;
      messagesBox.appendChild(msg);
      messagesBox.scrollTop = messagesBox.scrollHeight;
    }

    sendBtn.onclick = async () => {
      const msg = input.value.trim();
      if (!msg) return;
      addMessage(msg, "chat-user");
      input.value = "";
      try {
        const res = await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: { text: msg } }),
        });
        const data = await res.json();
        const reply =
          data[options.responseAccessor] ||
          data.reply ||
          data.message ||
          "شكرًا لتواصلك 🌿";
        addMessage(reply, "chat-bot");
      } catch (err) {
        addMessage("⚠️ حدث خطأ في الاتصال.", "chat-bot");
      }
    };
  })();
})();
