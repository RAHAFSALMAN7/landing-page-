/* eslint-disable @typescript-eslint/no-explicit-any */
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
      width: `${Math.random() * 10 + 6}px`,
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
        {`(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="vO4t_xmN-nOwkIJBhFii9";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`}
      </Script>

      <div
        dir="rtl"
        className="bg-gradient-to-b from-[#fefaf6] to-[#f9f3ec] text-gray-900 scroll-smooth"
      >
        {/* 🧭 Navbar */}
        <nav className="fixed top-0 left-0 right-0 bg-[#fff5e9]/80 backdrop-blur-md shadow-sm z-50 py-3 border-b border-[#e9dfd3]">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
            <h1 className="font-extrabold text-xl text-[#5b4031]">
              Spark of Positivity ✨
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

        {/* 🌟 Hero Section مع الصورة الجديدة */}
        <section className="relative flex flex-col items-center text-center pt-32 pb-24 px-6 overflow-hidden bg-[#fff5e9]">
          {/* 🖼️ خلفية الصورة */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/pic1.png"
              alt="Spark of Positivity Hero Image"
              fill
              priority
              quality={95}
              className="object-cover opacity-75 brightness-[1.05] saturate-110"
            />
          </div>

          {/* ✨ لمعة ذهبية متحركة */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f9e7d3]/50 to-transparent mix-blend-overlay"
            animate={{
              backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ backgroundSize: "200% 100%" }}
          />

          {/* 🟤 طبقة شفافة فوق الصورة */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#fffaf3]/80 via-[#fefaf6]/70 to-[#f9f3ec]/90 z-[1]" />

          {/* ✨ زخارف متحركة */}
          <div className="absolute inset-0 z-[2] overflow-hidden">
            {decorations.map((d, i) => (
              <motion.span
                key={i}
                initial={{
                  opacity: 0.4,
                  y: d.yStart,
                  x: d.xStart,
                  scale: d.scale,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: d.duration,
                  repeat: Infinity,
                  delay: d.delay,
                }}
                className="absolute rounded-full blur-[1px]"
                style={{
                  top: d.top,
                  left: d.left,
                  width: d.width,
                  height: d.height,
                  backgroundColor: d.color,
                }}
              />
            ))}
          </div>

          {/* 💫 المحتوى الأمامي */}
          <div className="relative z-[3] flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-4xl sm:text-5xl font-extrabold text-[#3d2c1e] mb-6 leading-tight drop-shadow-[0_2px_3px_rgba(255,255,255,0.8)]"
            >
              مرحبًا بك في{" "}
              <span className="text-[#080844] animate-pulse-slow">
                Spark of Positivity
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-lg sm:text-xl max-w-2xl text-[#4b3b2d] leading-relaxed mb-8"
            >
              ألعاب اجتماعية عائلية مصمّمة لتملأ يومك بالضحك، المشاعر، والطاقة الإيجابية.
            </motion.p>

            <motion.a
              href={SHOPIFY_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#080700] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
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
              بطاقات من لعبة سوالف بيتنا 🏠
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

        {/* 🚀 CTA */}
        <section id="cta" className="py-16 text-center bg-[#ffff] text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            جاهز تبدأ المتعة؟ 
          </h2>
          <p className="max-w-2xl mx-auto text-gray-200 mb-8 leading-relaxed">
            كل لحظة مع{" "}
            <span className="font-semibold">Spark of Positivity</span>{" "}
            هي لحظة ضحك وتواصل وسعادة. 
          </p>
          <a
            href={SHOPIFY_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#080844] px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            اشترِ لعبتك الآن
          </a>
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
