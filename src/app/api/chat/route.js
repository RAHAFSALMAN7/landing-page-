export async function POST(req) {
  try {
    const body = await req.json();
    const userMessage = body?.message?.text?.toLowerCase() || "";

    // ✅ بيانات دقيقة من موقع "منزلك الراقي"
    const info = {
      name: "منزلك الراقي",
      slogan: "الأناقة تبدأ من المنزل — أثاث فاخر يجمع بين الفخامة والطبيعة.",
      experience: "لدينا أكثر من 7 سنوات خبرة في تصميم الأثاث الفاخر.",
      branches: "لدينا فرعان داخل المملكة العربية السعودية 🇸🇦.",
      piecesSold: "تم بيع أكثر من 10,000 قطعة أثاث فاخرة حتى الآن 🪑.",
      designs: "نقدم أكثر من 260 تصميمًا مميزًا يناسب جميع الأذواق 🎨.",
      delivery: "🚚 نوفر توصيل مجاني داخل الرياض خلال 48 ساعة في أغلب المدن.",
      warranty: "🛡️ نضمن جودة منتجاتنا لأكثر من 10 سنوات.",
      contact: "📞 +966 920000000 — ✉️ info@manzilk.com — 📍 الرياض - المملكة العربية السعودية",
      products:
        "🪑 منتجاتنا وأسعارها بالدولار الأمريكي:\n" +
        "- كرسي فخم من المخمل: $150\n" +
        "- أريكة ثلاثية فاخرة: $420\n" +
        "- طاولة طعام خشب طبيعي: $350\n" +
        "- سرير ملكي بتصميم عصري: $720\n" +
        "- إضاءة سقفية نحاسية: $180\n" +
        "- خزانة أنيقة بلمسة معدنية: $310\n" +
        "- كرسي جلدي للمكتب: $230\n" +
        "- مكتبة جدارية خشبية: $270\n",
      whyUs:
        "✨ لماذا تختارنا؟\n" +
        "- توصيل سريع خلال 48 ساعة 🚚\n" +
        "- دفع آمن وسهل 💳\n" +
        "- تركيب مجاني بواسطة فريق محترف 🧰\n" +
        "- ضمان جودة لأكثر من 10 سنوات 🛡️",
      reviews:
        "⭐ آراء عملائنا:\n" +
        "سارة م.: منتجات فاخرة وجودة ممتازة!\n" +
        "خالد ر.: خدمة رائعة وسرعة في التوصيل 👌\n" +
        "ليلى ك.: الأثاث أجمل من الصور، راقٍ جدًا!",
    };

    let reply =
      "مرحبًا 👋 أنا مساعد *منزلك الراقي*، جاهز لأساعدك بكل ما تحتاجه حول الأثاث، الأسعار، والتوصيل.";

    // 🧠 منطق الردود الدقيقة بناءً على الأسعار الحقيقية
    if (userMessage.includes("مرحبا") || userMessage.includes("السلام")) {
      reply = "أهلًا وسهلًا بك في *منزلك الراقي* 🌿! كيف يمكنني خدمتك اليوم؟";
    } else if (userMessage.includes("منتجات") || userMessage.includes("أثاث") || userMessage.includes("سعر")) {
      reply = info.products;
    } else if (userMessage.includes("كرسي") && userMessage.includes("مخمل")) {
      reply = "💺 سعر الكرسي الفخم من المخمل هو *$150*.";
    } else if (userMessage.includes("أريكة") || userMessage.includes("كنبة")) {
      reply = "🛋️ سعر الأريكة الثلاثية الفاخرة هو *$420*.";
    } else if (userMessage.includes("طاولة")) {
      reply = "🍽️ سعر طاولة الطعام الخشبية الطبيعية هو *$350*.";
    } else if (userMessage.includes("سرير")) {
      reply = "🛏️ سعر السرير الملكي بتصميم عصري هو *$720*.";
    } else if (userMessage.includes("إضاءة") || userMessage.includes("لمبة")) {
      reply = "💡 سعر الإضاءة السقفية النحاسية هو *$180*.";
    } else if (userMessage.includes("خزانة")) {
      reply = "🚪 سعر الخزانة الأنيقة بلمسة معدنية هو *$310*.";
    } else if (userMessage.includes("كرسي") && userMessage.includes("مكتب")) {
      reply = "🪑 سعر الكرسي الجلدي للمكتب هو *$230*.";
    } else if (userMessage.includes("مكتبة")) {
      reply = "📚 سعر المكتبة الجدارية الخشبية هو *$270*.";
    } else if (userMessage.includes("توصيل") || userMessage.includes("شحن")) {
      reply = info.delivery;
    } else if (userMessage.includes("ضمان")) {
      reply = info.warranty;
    } else if (userMessage.includes("فروع")) {
      reply = info.branches;
    } else if (userMessage.includes("خبرة")) {
      reply = info.experience;
    } else if (userMessage.includes("لماذا") || userMessage.includes("تختارنا")) {
      reply = info.whyUs;
    } else if (userMessage.includes("تواصل") || userMessage.includes("رقم") || userMessage.includes("إيميل")) {
      reply = info.contact;
    } else if (userMessage.includes("آراء") || userMessage.includes("تقييم") || userMessage.includes("عملاء")) {
      reply = info.reviews;
    } else if (userMessage.includes("شكرا") || userMessage.includes("شكراً")) {
      reply = "🙏 العفو! يسعدنا دائمًا خدمتك 💛 لا تتردد في السؤال عن أي منتج.";
    } else {
      reply =
        "😊 يمكنك سؤالي عن الأسعار بالدولار، المنتجات، التوصيل، الضمان، أو آراء العملاء وسأخبرك بالتفاصيل بدقة.";
    }

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  } catch (err) {
    console.error("❌ خطأ في الخادم:", err);
    return new Response(
      JSON.stringify({ reply: "⚠️ حدث خطأ أثناء معالجة الرسالة. حاول مجددًا لاحقًا." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
