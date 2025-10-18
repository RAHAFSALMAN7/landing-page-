/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Script from "next/script"; // ✅ لإضافة الشات سكربت بشكل آمن

const SHOPIFY_CHECKOUT_URL =
  "https://cardarena.net/#ea0a55f5689f615f17470d2961f8ec54";

export default function Page() {
  // ✅ توليد الزخارف بعد تحميل الصفحة فقط (لتجنب hydration error)
  const [decorations, setDecorations] = React.useState<any[]>([]);

  React.useEffect(() => {
    const points = Array.from({ length: 15 }).map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 10 + 5}px`,
      height: `${Math.random() * 10 + 6}px`,
      color:
        i % 3 === 0 ? "#e6d2b5" : i % 3 === 1 ? "#f3e8d9" : "#d4b893",
      delay: Math.random() * 3,
      duration: Math.random() * 4 + 4,
      scale: Math.random() * 0.8 + 0.4,
      yStart: Math.random() * 200,
      xStart: Math.random() * 1000 - 500,
    }));
    setDecorations(points);
  }, []);

  return (
    <>
    {/* 💬 Chatbase Script */}
<Script id="chatbase-script" strategy="afterInteractive">
  {`(function(){
    if(!window.chatbase || window.chatbase("getState")!=="initialized"){
      window.chatbase=(...arguments)=>{
        if(!window.chatbase.q){window.chatbase.q=[]}
        window.chatbase.q.push(arguments)
      };
      window.chatbase=new Proxy(window.chatbase,{
        get(target,prop){
          if(prop==="q"){return target.q}
          return(...args)=>target(prop,...args)
        }
      })
    }
    const onLoad=function(){
      const script=document.createElement("script");
      script.src="https://www.chatbase.co/embed.min.js";
      script.id="vO4t_xmN-nOwkIJBhFii9";
      script.domain="www.chatbase.co";
      document.body.appendChild(script)
    };
    if(document.readyState==="complete"){onLoad()}
    else{window.addEventListener("load",onLoad)}
  })();`}
</Script>

{/* 🌟 Chatbase Popup Script */}
<Script id="chatbase-popup" strategy="afterInteractive">
  {`
    // إنشاء عنصر البوب-أب
    const popup = document.createElement("div");
    popup.id = "chatbase-popup";
    popup.innerHTML = \`
      <div class="popup-content">
 
<p>هل ترغب بالتعرف علينا أكثر؟ &quot;شات بوتنا&quot; جاهز لمساعدتك</p>
        شات بوتنا بالزاوية جاهز يحكي معك ويجاوب على أي استفسار 🤖</p>
 
        <button id="close-popup">×</button>
      </div>
    \`;
    document.body.appendChild(popup);

    // إضافة الأنماط
    const style = document.createElement("style");
    style.innerHTML = \`
      #chatbase-popup {
        position: fixed;
        bottom: 100px;
        right: 20px;
        background: #1A2E3B;
        color: #fff;
        border-radius: 16px;
        padding: 16px 20px;
        max-width: 280px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        font-family: 'Inter', sans-serif;
        font-size: 15px;
        line-height: 1.5;
        display: none;
        z-index: 9999;
        animation: fadeIn 0.6s ease;
      }
      #chatbase-popup p { margin: 0; }
      #chatbase-popup #close-popup {
        position: absolute;
        top: 4px;
        right: 8px;
        background: none;
        border: none;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
      }
      @keyframes fadeIn {
        from {opacity: 0; transform: translateY(20px);}
        to {opacity: 1; transform: translateY(0);}
      }
    \`;
    document.head.appendChild(style);

    // إظهار البوب-أب بعد 5 ثواني
    setTimeout(() => {
      popup.style.display = "block";
      document.getElementById("close-popup").addEventListener("click", () => {
        popup.style.display = "none";
      });
    }, 5000);
  `}
</Script>

      <div
        dir="rtl"
        className="bg-gradient-to-b from-[#fefaf6] to-[#f9f3ec] text-gray-900 scroll-smooth"
      >
        {/* 🧭 Navbar */}
        <nav className="fixed top-0 left-0 right-0 bg-[#fff5e9]/80 backdrop-blur-md shadow-sm z-50 py-3 border-b border-[#e9dfd3]">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
            <h1 className="font-extrabold text-xl text-[#5b4031]">
              Spark of Positivity ✨ - ومضات ايجابية
            </h1>
            <div className="flex gap-6 text-sm sm:text-base font-semibold text-[#5b4031]/80">
              <a href="#samar" className="hover:text-[#080844] transition-colors">
                سمر
              </a>
              <a href="#sawalif" className="hover:text-[#080844] transition-colors">
                سوالف بيتنا
              </a>
              <a href="#khayal" className="hover:text-[#080844] transition-colors">
                تخيل لو
              </a>
              <a href="#cta" className="hover:text-[#080844] transition-colors">
                اشترِ الآن
              </a>
            </div>
          </div>
        </nav>

  {/* 🌟 Hero Section متجاوب مع خلفية متحركة على الموبايل */}
<section className="relative flex flex-col items-center justify-center text-center min-h-[75vh] sm:min-h-[85vh] px-6 overflow-hidden bg-[#fff5e9]">

  {/* 🖼️ خلفية الصورة - تظهر فقط على الشاشات الكبيرة */}
  <div className="hidden sm:block absolute inset-0 w-full h-full z-0">
    <Image
      src="/banar.jpg"
      alt="Spark of Positivity Hero Image"
      fill
      priority
      quality={95}
      className="object-cover object-[center_30%] transition-all duration-500"
    />
  </div>

  {/* ✨ خلفية متحركة - تظهر فقط على الموبايل */}
  <div className="absolute inset-0 block sm:hidden z-0 animate-gradient bg-gradient-to-r from-[#f6d365] via-[#fda085] to-[#f6d365] bg-[length:200%_200%]" />

  {/* 🕶️ تظليل خفيف لجعل النص واضح */}
  <div className="absolute inset-0 bg-black/30 sm:bg-black/25 z-[1]" />

  {/* ⚡ المحتوى */}
  <div className="relative z-10 flex flex-col items-center justify-center text-white px-4 max-w-3xl">

    {/* النص - يظهر فقط على الشاشات الصغيرة */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="block sm:hidden text-center"
    >
      <h1 className="text-3xl font-extrabold mb-4 leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]">
        اشعل شرارة الإيجابية في كل لحظة ✨
      </h1>

      <p className="text-base font-medium text-white/90 leading-relaxed drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)]">
        ألعاب تفتح القلوب وتخلق لحظات ضحك وتأمل لا تُنسى مع العائلة والأصدقاء.
      </p>
    </motion.div>

    {/* زر الشراء - يظهر على جميع الأجهزة */}
    <motion.a
      href={SHOPIFY_CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#fffaf3] text-[#080844] px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 mt-6"
      whileHover={{ scale: 1.05 }}
    >
      اشترِ الآن وابدأ المغامرة
    </motion.a>
  </div>
</section>








        {/* ⚡ المميزات */}
        <section className="py-16 bg-[#fefaf6] text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#3d2c1e]">
            لماذا تختار Spark of Positivity؟
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
            {[
              { icon: "", title: "تواصل حقيقي", text: "تقرّب الناس وتفتح قلوبهم بطريقة مرحة ومريحة." },
              { icon: "", title: "لكل العائلة", text: "للكبار والصغار، للجلسات اليومية أو المناسبات." },
              { icon: "", title: "طاقة إيجابية", text: "تجارب تخلّيك تضحك وتفكر وتعيش لحظة صادقة." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 bg-[#fff5e9] rounded-2xl shadow-md hover:shadow-lg transition-all border border-[#f1e4d3]"
              >
                <span className="text-4xl">{feature.icon}</span>
                <h3 className="text-xl font-semibold mt-4 mb-2 text-[#3d2c1e]">{feature.title}</h3>
                <p className="text-[#5c4a3a] text-sm leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
  {/* 💖 القصة + الفيديو + الكويز */}
<section className="bg-[#fffaf3] py-20 px-6">
  <div className="max-w-6xl mx-auto flex flex-col gap-20">

    {/* 🔹 الصف الأول: القصة + الفيديو */}
    <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
      
      {/* 💫 قصة Spark of Positivity */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 flex flex-col justify-between text-center lg:text-right bg-[#fff5e9] rounded-3xl shadow-md border border-[#f1e4d3] p-6 sm:p-8 min-h-[550px] sm:min-h-[610px] md:min-h-[650px]"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3d2c1e] mb-6 sm:mb-8">
          💫 قصة Spark of Positivity
        </h2>

        <div className="flex flex-col gap-4 justify-center flex-grow">
          <p className="text-[#4b3b2d] leading-relaxed text-base sm:text-lg md:text-xl">
            بدأت فكرة <span className="font-semibold text-[#080844]">Spark of Positivity</span> من جلسة عائلية بسيطة
            مليانة ضحك وفضفضة حقيقية. وقتها اكتشفنا إن اللحظات الصادقة هي اللي تخلق أقوى الروابط،
            وإن اللعب مش بس متعة… هو وسيلة للتقارب، للضحك، وللتعبير عن نفسنا بدون أحكام.
          </p>

          <p className="text-[#4b3b2d] leading-relaxed text-base sm:text-lg md:text-xl">
            من هون وُلدت الفكرة 💡: ليش ما نصمم ألعاب تخلّي كل جلسة 
            مساحة دافئة للضحك، للمشاعر، وللتواصل الحقيقي؟
            وكل كرت فيها يحمل "شرارة" صغيرة من الإيجابية.
          </p>

          <p className="text-[#4b3b2d] leading-relaxed text-base sm:text-lg md:text-xl">
            اليوم، كل لعبة من ألعابنا صُممت بحب لتذكّرك إن السعادة أبسط مما نتصور —  
            جلسة مع الناس اللي بتحبهم، وكلمة صادقة، وضحكة من القلب ❤️
          </p>
        </div>
      </motion.div>

      {/* 🎥 الفيديو داخل إطار موبايل كرتوني */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ rotate: 2, scale: 1.03 }}
        className="flex-1 flex justify-center"
      >
        <div className="relative w-[260px] sm:w-[300px] md:w-[360px] aspect-[9/16] bg-[#222] rounded-[3rem] p-3 shadow-2xl border-[8px] border-[#333]">
          
          {/* 🔹 الشاشة (الفيديو) */}
          <div className="relative w-full h-full overflow-hidden rounded-[2rem] border-[4px] border-[#111]">
            <video
              src="/ad.mp4" // ضع مسار الفيديو داخل مجلد public
              controls
              playsInline
              loop
              muted
              autoPlay
              className="w-full h-full object-cover rounded-[1.8rem]"
            />
          </div>

          {/* 🔹 تفاصيل كرتونية (سماعة + زر) */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2 rounded-full bg-[#444]" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#444]" />
        </div>
      </motion.div>
    </div>

    {/* 🔹 الصف الثاني: اختبار الشخصية */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#3d2c1e] mb-6">
        🎯 اكتشف أي لعبة تناسبك أكثر!
      </h2>
      <QuizSection />
    </div>

  </div>
</section>




        {/* 🎴 الأقسام */}
        <GameSection
          id="samar"
          title=" سمر"
          img="/samar-card.jpg"
          bullets={[" تحدث بصراحة", " شارك مشاعرك", " اكتشف من حولك"]}
          text="لعبة دافئة وهادئة تشجعك على الفضفضة والتقارب. كل جلسة تفتح مواضيع جديدة وتقرّب الناس أكثر."
          demo="https://samardemo2.netlify.app/"
        />
{/* 🖼️ معرض صور لعبة سمر */}
        <section className="bg-[#fffaf3] py-12">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold text-[#3d2c1e] mb-6">
              بطاقات من لعبة سمر 🌸
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
              {["card1.png", "card3.png", "card5.png", "card6.png"].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={`/${src}`}
                    alt={`سمر ${i + 1}`}
                    width={300}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GameSection
          id="sawalif"
          title=" سوالف بيتنا"
          img="/main.png"
          reverse
          bullets={[" أسرار العيلة", " ضحك بلا حدود", " من يعرفك أكثر؟"]}
          text="اللعبة العائلية اللي تختبر معرفتكم ببعض بطريقة ممتعة مليانة ضحك وذكريات لا تُنسى."
          demo="https://demosawalf.netlify.app/"
        />
 {/* 🖼️ معرض صور سوالف بيتنا */}
        <section className="bg-[#fffaf3] py-12">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold text-[#3d2c1e] mb-6">
              بطاقات من لعبة سوالف بيتنا 
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
              {["ser1.png", "ser2.png", "ser3.png", "ser4.png"].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={`/${src}`}
                    alt={`سوالف بيتنا ${i + 1}`}
                    width={300}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 🖼️ تخيّل لو مع الصور الجديدة */}
        <GameSection
          id="khayal"
          title=" تخيّل لو"
          img="/khayal.jpg"
          bullets={[" مواقف مجنونة", " ضحك خيالي", " خيالك هو البطل!"]}
          text="انطلق بخيالك! كل كرت سيناريو مجنون يجعلك تضحك وتفكر بطرق جديدة، مثالية للجلسات الحيوية."
          demo="https://demokhayalk.netlify.app/"
        />

        {/* 🖼️ معرض صور مصغّرة لكروت تخيّل لو */}
        <section className="bg-[#fefaf6] py-12">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold text-[#3d2c1e] mb-6">
              بطاقات من لعبة تخيّل لو 💭
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
              {["01.jpg", "02.jpg", "03.jpg", "04.jpg"].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={`/${src}`}
                    alt={`تخيل لو ${i + 1}`}
                    width={300}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 💬 آراء العملاء */}
        <Testimonials />

        {/* 📩 الاشتراك */}
        <SubscribeSection />

        {/* 🚀 CTA مع معرض صور عصري */}
<section
  id="cta"
  className="py-20 text-center bg-[#fffaf3] text-[#3d2c1e] relative overflow-hidden"
>
  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
    جاهز تبدأ المتعة؟ 🎉
  </h2>
  <p className="max-w-2xl mx-auto text-[#4b3b2d] mb-12 leading-relaxed text-lg">
    كل لحظة مع{" "}
    <span className="font-semibold text-[#080844]">Spark of Positivity</span>{" "}
    هي لحظة ضحك وتواصل وسعادة. استكشف أجواء ألعابنا من الصور التالية 💛
  </p>

  {/* 🖼️ شبكة الصور */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
    {[1, 2, 3, 4, 5,6].map((i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: i * 0.15 }}
        viewport={{ once: true }}
        className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl border border-[#f1e4d3]"
      >
        <Image
          src={`/${i}.png`}
          alt={`صورة ${i}`}
          width={600}
          height={400}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* طبقة شفافة أنيقة عند الهوفر */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="text-white text-lg font-semibold bg-[#080844]/70 px-6 py-2 rounded-full shadow-md"
          >
            ✨ Spark {i}
          </motion.span>
        </div>
      </motion.div>
    ))}
  </div>

  {/* 🚀 CTA Button */}
  <motion.a
    href={SHOPIFY_CHECKOUT_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-16 bg-[#080844] text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
  >
    اشترِ لعبتك الآن
  </motion.a>
</section>


        {/* Footer */}
        <footer className="bg-[#fff5e9] text-xs sm:text-sm text-[#5c4a3a] text-center py-6 border-t border-[#e9dfd3] mt-12">
          © 2025 جميع الحقوق محفوظة لدى{" "}
          <span className="font-semibold text-[#080844]">
            Spark of Positivity
          </span>
        </footer>
      </div>
    </>
  );
}

/* 🔹 قسم لعبة */
const GameSection = ({ id, title, img, text, bullets, demo, reverse = false }: any) => (
  <motion.section
    id={id}
    className={`py-20 flex flex-col ${
      reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    } items-center justify-center gap-10 max-w-6xl mx-auto px-6 bg-[#fefaf6]`}
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <Image
      src={img}
      alt={title}
      width={400}
      height={500}
      className="rounded-3xl shadow-xl object-contain"
    />
    <div className="text-center lg:text-right max-w-lg">
      <h2 className="text-3xl font-bold text-[#080844] mb-4">{title}</h2>
      <p className="text-[#4b3b2d] leading-relaxed mb-4">{text}</p>
      <ul className="mt-6 space-y-2 text-[#5c4a3a] text-right list-disc list-inside">
        {bullets.map((b: string, i: number) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block bg-[#080844] text-white px-10 py-3 rounded-full text-base font-semibold shadow-lg hover:scale-105 transition"
      >
        🎮 جرّب الديمو
      </a>
    </div>
  </motion.section>
);

/* 🔹 آراء العملاء */
const Testimonials = () => (
  <section className="bg-[#f9f3ec] py-20 text-center">
    <h2 className="text-3xl font-bold mb-12 text-[#3d2c1e]">
      آراء من جرّبوا ألعابنا 💬
    </h2>
    <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
      {[
        { name: "أحمد", text: "لعبة سوالف بيتنا كانت أحلى جلسة عائلية " },
        { name: "رهف", text: "تخيل لو؟ ضحكنا لدرجة الدموع " },
        { name: "ليان", text: "سمر خلتنا نتكلم بصراحة ومريحة جدًا " },
      ].map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#fff5e9] border border-[#f1e4d3] shadow-md rounded-2xl p-6 max-w-sm"
        >
          <p className="text-[#4b3b2d] italic mb-4">“{t.text}”</p>
          <p className="font-semibold text-[#080844]">— {t.name}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

/* 🔹 قسم الاشتراك */
const SubscribeSection = () => (
  <section className="py-16 text-center bg-[#fffaf3]">
    <h2 className="text-2xl font-bold text-[#080844] mb-4">
       اشترك ليصلك كل جديد
    </h2>
    <p className="text-[#4b3b2d] mb-6">
      انضم لعائلة Spark of Positivity لتصلك أحدث الألعاب والعروض.
    </p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
    >
      <input
        type="email"
        placeholder="ادخل بريدك الإلكتروني"
        required
        className="w-full sm:flex-1 px-4 py-3 border border-[#e1d5c9] rounded-full focus:outline-none focus:ring-2 focus:ring-[#080844] bg-[#fffdf8]"
      />
      <button
        type="submit"
        className="bg-[#080844] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-200 shadow-lg"
      >
         اشترك الآن
      </button>
    </form>
  </section>
  
);

/* 🔹 مكون اختبار الشخصية */
const QuizSection = () => {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<string[]>([]);
  const [result, setResult] = React.useState<string | null>(null);

  const questions = [
    {
      q: "كيف تفضل قضاء وقتك مع العائلة؟",
      options: [
        "جلسة دافئة وهادئة",
        "ضحك ولعب وسوالف",
        "خيال ومواقف مجنونة",
      ],
    },
    {
      q: "ما نوع الألعاب التي تستمتع بها أكثر؟",
      options: [
        "اللي تخليك تتكلم وتفكر",
        "اللي فيها تحدي وضحك",
        "اللي تفتح خيالك وتخليك تضحك من قلبك",
      ],
    },
    {
      q: "اختر الجملة الأقرب لك:",
      options: [
        "أحب أسمع مشاعر الناس 💬",
        "أحب أضحك وأكتشف أسرار الكل 😂",
        "أعيش اللحظة بخيالي 🪄",
      ],
    },
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      const samar = newAnswers.filter((a) => a.includes("دافئة") || a.includes("مشاعر")).length;
      const sawalif = newAnswers.filter((a) => a.includes("ضحك") || a.includes("أسرار")).length;
      const khayal = newAnswers.filter((a) => a.includes("خيال") || a.includes("لحظة")).length;

      if (samar > sawalif && samar > khayal) setResult("🎴 سمر");
else if (sawalif > samar && sawalif > khayal) setResult("🏠 سوالف بيتنا");
      else setResult("💭 تخيّل لو");
    }
  };

  const restart = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="max-w-xl mx-auto bg-[#fff5e9] p-8 rounded-3xl shadow-md border border-[#f1e4d3]">
      {!result ? (
        <>
          <h3 className="text-xl font-semibold mb-6 text-[#080844]">
            {questions[step].q}
          </h3>
          <div className="flex flex-col gap-4">
            {questions[step].options.map((opt, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAnswer(opt)}
                className="bg-white border border-[#e1d5c9] text-[#3d2c1e] py-3 px-4 rounded-full hover:bg-[#080844] hover:text-white transition-all duration-200"
              >
                {opt}
              </motion.button>
            ))}
          </div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-[#080844] mb-4">
            اللعبة المناسبة لك هي:
          </h3>
          <p className="text-3xl font-extrabold text-[#3d2c1e] mb-6">
            {result}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={restart}
            className="bg-[#080844] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-200"
          >
            🔁 أعد الاختبار
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};
