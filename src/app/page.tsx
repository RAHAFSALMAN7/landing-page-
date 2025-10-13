import React from "react";
import Image from "next/image";

const SHOPIFY_CHECKOUT_URL =
  "https://cardarena.net/#ea0a55f5689f615f17470d2961f8ec54"; // ✅ رابط الشراء الجديد

export default function Page() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 flex flex-col"
    >
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            🎮 عالم زَكْس
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            اكتشف متعة اللعب والتحدي والتواصل في ألعابنا التفاعلية!
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center space-y-16">
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl leading-relaxed">
          جرّب أول <span className="font-semibold">3 أسئلة مجانًا</span> من كل لعبة، ثم ادفع لمتابعة التحدي والحصول على الوصول الكامل 🚀
        </p>

        {/* زر الشراء */}
        <a
          href={SHOPIFY_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-10 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          🛒 اشترِ الآن
        </a>

        {/* الألعاب */}
        <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-center items-stretch gap-10 mt-10">
          {/* 🎴 سمر */}
          <div className="flex-1 flex flex-col items-center">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/samar-card.jpg"
                alt="لعبة سمر"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-3xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-bold mt-8">سمر</h2>
            <p className="text-gray-700 text-base leading-relaxed mt-4 px-2">
              لعبة هادئة ودافئة تجمع بين الصراحة والفضفضة. بطاقاتها مليانة أسئلة
              عميقة ومسلية تخليك تعرف اللي حولك أكثر — من مشاعرهم إلى مواقفهم
              الطريفة. تخلق جو رايق ومناسب للسهرات أو الجلسات الطويلة بعد يوم طويل.
            </p>
            <a
              href="https://samardemo2.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-black text-white px-10 py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
              🎮 جرّب الديمو
            </a>
          </div>

          {/* 🎴 سوالف بيتنا */}
          <div className="flex-1 flex flex-col items-center">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/main.png"
                alt="لعبة سوالف بيتنا"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-3xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-bold mt-8">سوالف بيتنا</h2>
            <p className="text-gray-700 text-base leading-relaxed mt-4 px-2">
              اللعبة اللي تخليك ترجع لأيام العائلة والضحك على المواقف القديمة.
              تختبر ذكرياتك وسرعة بديهتك في مواقف &quot;بيتية&quot; واقعية – من الطبخ للضيوف
              للمشاكل الصغيرة اليومية. مثالية للعائلة والمجموعات الكبيرة وتضمن
              ضحكًا من القلب!
            </p>
            <a
              href="https://demosawalf.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-black text-white px-10 py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
              🎮 جرّب الديمو
            </a>
          </div>

          {/* 🎴 تخيل لو */}
          <div className="flex-1 flex flex-col items-center">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/khayal.jpg"
                alt="لعبة تخيل لو"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-3xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-bold mt-8">تخيل لو</h2>
            <p className="text-gray-700 text-base leading-relaxed mt-4 px-2">
              لعبة خفيفة ومليانة ضحك ومواقف غريبة! كل لاعب ياخذ سيناريو خيالي ويخلي
              الكل يتخيل كيف ممكن يتصرف — النتيجة؟ ضحك، مواقف مجنونة، وجلسة ما
              تنسى!
            </p>
            <a
              href="https://demokhayalk.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-black text-white px-10 py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
              🎮 جرّب الديمو
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-xs text-gray-500 text-center py-6 border-t mt-12">
        © 2025 جميع الحقوق محفوظة لدى{" "}
        <span className="font-semibold">Zuccess</span>
      </footer>
    </div>
  );
}
