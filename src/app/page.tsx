"use client";
import Script from "next/script";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Send,
  MessageCircle,
  X,
  Star,
  Truck,
  ShieldCheck,
  CreditCard,
  Gift,
} from "lucide-react";
// 🖼️ مكون معرض الصور بسلايدر يدوي
function GallerySlider() {
const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg",
  "/images/gallery-9.jpg",
  "/images/gallery-10.jpg",
];
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* الصورة */}
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl overflow-hidden shadow-2xl border border-[#C2A679]/40 bg-[#2F3A33]"
      >
        <img
          src={images[index]}
          alt={`Furniture ${index + 1}`}
          className="w-full h-[480px] object-cover rounded-3xl"
        />
      </motion.div>

      {/* أزرار التنقل */}
      <button
        onClick={prev}
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-[#E9E2D0]/80 hover:bg-[#E9E2D0] text-[#1C1C1A] p-3 rounded-full shadow-md transition"
      >
        ◀
      </button>

      <button
        onClick={next}
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-[#E9E2D0]/80 hover:bg-[#E9E2D0] text-[#1C1C1A] p-3 rounded-full shadow-md transition"
      >
        ▶
      </button>

      {/* المؤشرات (النقاط) */}
      <div className="flex justify-center mt-6 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-[#C2A679]" : "bg-[#E9E2D0]/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// 🔢 عدّاد متحرك
function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = Math.ceil(end / (duration / 16));
    const animate = () => {
      start += increment;
      if (start > end) start = end;
      setCount(start);
      if (start < end) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration]);
  return <span>{count.toLocaleString()}</span>;
}

// 🎁 مكون عرض الأسبوع
function PromoWidget() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissedUntil = localStorage.getItem("promoDismissedUntil");
    const now = Date.now();
    if (dismissedUntil && now < Number(dismissedUntil)) return;
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    const oneDay = 24 * 60 * 60 * 1000;
    localStorage.setItem("promoDismissedUntil", String(Date.now() + oneDay));
    setVisible(false);
  }

  function goToProducts() {
    const el = document.querySelector("#products");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ⬇️ هون بالضبط بدك تبدّل الكود القديم بهذا الجديد:
  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-[60] w-[20rem] max-w-[90vw] rounded-2xl border border-[#C2A679] bg-[#F9F7F3] shadow-2xl overflow-hidden"
        >
          <div className="relative">
            <div className="h-1 w-full bg-gradient-to-r from-[#3B4A3F] to-[#C2A679]" />
            <button
              onClick={dismiss}
              className="absolute -top-2 -left-2 rounded-full bg-white/90 p-1 shadow hover:bg-white"
            >
              <X className="h-4 w-4 text-[#1C1C1C]" />
            </button>
          </div>

          <div className="p-4" dir="rtl">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9E2D0]">
                <Gift className="h-5 w-5 text-[#3B4A3F]" />
              </div>
              <h3 className="text-lg font-bold text-[#1C1C1C]">🎁 عرض الأسبوع</h3>
            </div>

            <p className="text-sm leading-6 text-[#3B4A3F]">
              خصم{" "}
              <span className="font-extrabold text-[#C2A679]">25%</span> على أول طلب — استخدم الكود{" "}
              <span className="rounded-md bg-[#F3EDE1] px-2 py-1 font-mono text-xs">
                WELCOME25
              </span>{" "}
              🎉
            </p>

            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={goToProducts}
                className="rounded-xl bg-[#3B4A3F] px-4 py-2 text-sm font-semibold text-[#E9E2D0] shadow hover:bg-[#2F3A33]"
              >
                تسوق الآن
              </button>
              <button
                onClick={dismiss}
                className="text-xs text-[#6B6B6B] underline underline-offset-2 hover:text-[#3B4A3F]"
              >
                لاحقًا
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

// 🌿 الصفحة الرئيسية
export default function FurnitureLandingPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "مرحباً 👋! أنا مساعد منزلك الراقي. كيف يمكنني مساعدتك اليوم؟",
    },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  function sendMessage() {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { role: "user", text: input },
      { role: "bot", text: "شكرًا لتواصلك! سنرد عليك قريبًا 💬" },
    ]);
    setInput("");
  }
const products = [
  {
    id: 1,
    name: "كرسي فخم من المخمل",
    price: 150,
    image: "/images/chair-velvet.jpg",
  },
  {
    id: 2,
    name: "أريكة ثلاثية فاخرة",
    price: 420,
    image: "/images/sofa-luxury.jpg",
  },
  {
    id: 3,
    name: "طاولة طعام خشب طبيعي",
    price: 350,
    image: "/images/dining-table.jpg",
  },
  {
    id: 4,
    name: "سرير ملكي بتصميم عصري",
    price: 720,
    image: "/images/bed-modern.jpg",
  },
  {
    id: 5,
    name: "إضاءة سقفية نحاسية",
    price: 180,
    image: "/images/ceiling-lamp.jpg",
  },
  {
    id: 6,
    name: "خزانة أنيقة بلمسة معدنية",
    price: 310,
    image: "/images/wardrobe-metal.jpg",
  },
  {
    id: 7,
    name: "كرسي جلدي للمكتب",
    price: 230,
    image: "/images/office-chair.jpg",
  },
  {
    id: 8,
    name: "مكتبة جدارية خشبية",
    price: 270,
    image: "/images/wall-shelf.jpg",
  },
];


  const testimonials = [
    { name: "سارة م.", text: "منتجات فاخرة وجودة ممتازة!" },
    { name: "خالد ر.", text: "خدمة رائعة وسرعة في التوصيل 👌" },
    { name: "ليلى ك.", text: "الأثاث أجمل من الصور، راقٍ جدًا!" },
  ];

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-[#F9F7F3] to-[#E9E2D0] text-[#1C1C1C] font-sans scroll-smooth"
    >
     {/* 🌟 Header - Premium Modern Design */}
<header
  className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
>
  <div
    className="backdrop-blur-lg bg-[#F9F7F3]/70 border-b border-[#C2A679]/30 shadow-sm"
  >
    <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
      {/* 🔸 Logo */}
      <div className="flex items-center gap-2">
        <span className="text-3xl font-extrabold text-[#3B4A3F] tracking-tight">
          منزلك
        </span>
        <span className="text-3xl font-light text-[#C2A679]">الراقي</span>
      </div>

      {/* 🔹 Navigation */}
      <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
        <a
          href="#products"
          className="text-[#1C1C1A] hover:text-[#C2A679] transition-colors duration-300"
        >
          المنتجات
        </a>
        <a
          href="#gallery"
          className="text-[#1C1C1A] hover:text-[#C2A679] transition-colors duration-300"
        >
          المعرض
        </a>
        <a
          href="#testimonials"
          className="text-[#1C1C1A] hover:text-[#C2A679] transition-colors duration-300"
        >
          الآراء
        </a>
        <a
          href="#contact"
          className="text-[#1C1C1A] hover:text-[#C2A679] transition-colors duration-300"
        >
          تواصل معنا
        </a>
      </nav>

      {/* 🛍️ CTA Button */}
      <button className="hidden md:block px-6 py-2.5 rounded-full bg-[#C2A679] text-[#1C1C1A] font-semibold text-sm shadow-md hover:bg-[#b89a63] transition-all duration-300">
        تسوق الآن
      </button>
    </div>
  </div>
</header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-5xl font-bold text-[#1C1C1C] leading-tight mb-6">
            توازن مثالي بين <span className="text-[#3B4A3F]">الفخامة</span> والراحة
          </h1>
          <p className="text-[#6B6B6B] mb-8 text-lg leading-relaxed">
            اكتشف مجموعتنا المختارة من الأثاث المصمم ليمنحك تجربة راقية تجمع بين الأناقة والدفء.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-[#3B4A3F] text-[#E9E2D0] rounded-2xl font-medium hover:bg-[#2F3A33] transition-all shadow-md">
              تسوق الآن
            </button>
            <button className="px-8 py-3 bg-[#E9E2D0] rounded-2xl font-medium hover:bg-[#D6CFC2] transition-all">
              اكتشف المزيد
            </button>
          </div>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D6CFC2]"
>
  <video
    src="/galary1.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover rounded-3xl"
      style={{ width: "100%", maxWidth: "700px", height: "400px", margin: "0 auto" }} // 👈 تحكمي هون بالطول والعرض

  />
  {/* طبقة شفافة لإضافة تأثير فخم فوق الفيديو */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/30 to-transparent pointer-events-none"></div>
</motion.div>
</section>


      {/* Stats */}
      <section className="relative z-20 -mt-10">
        <div className="max-w-5xl mx-auto bg-[#F9F7F3] rounded-3xl shadow-xl border border-[#D6CFC2] flex flex-col md:flex-row justify-between items-center text-center px-8 py-8 gap-8">
          {[
            { number: 7, label: "سنوات الخبرة" },
            { number: 2, label: "فروع داخل المملكة" },
            { number: 10000, label: "قطعة أثاث مباعة" },
            { number: 260, label: "تصميم مميز" },
          ].map((item, i) => (
            <div key={i} className="flex-1 relative">
              <h3 className="text-3xl font-extrabold text-[#3B4A3F]">
                <AnimatedCounter target={item.number} />+
              </h3>
              <p className="text-sm text-[#6B6B6B] mt-1">{item.label}</p>
              {i < 3 && <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-[#E9E2D0]" />}
            </div>
          ))}
        </div>
      </section>

      {/* 🌿 Why Choose Us - Background Image Version */}
<section
  id="why-us"
  className="relative py-32 bg-fixed bg-center bg-cover"
  style={{ backgroundImage: "url('/images/why-bg.jpg')" }}
>
  {/* طبقة غامقة شفافة لتوضيح النص */}
  <div className="absolute inset-0 bg-[#1C1C1A]/70 backdrop-blur-[1px]" />

  <div className="max-w-6xl mx-auto px-6 relative z-10 text-center text-[#E9E2D0]">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-5xl font-extrabold mb-6"
    >
      لماذا <span className="text-[#C2A679]">تختارنا؟</span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-lg mb-20 leading-relaxed text-[#E9E2D0]/90"
    >
      نحن لا نقدم أثاثًا فقط، بل <span className="text-[#C2A679] font-semibold">تجربة متكاملة</span> 
      تمزج بين الجودة والتصميم والخدمة المتميزة — لتعيش كل يوم في منزل يعكس ذوقك.
    </motion.p>

    {/* 🧩 عناصر Why Us فوق الصورة */}
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
      {[
        {
          title: "توصيل سريع",
          desc: "نوصل طلبك خلال 48 ساعة في أغلب المدن.",
          icon: Truck,
          color: "bg-[#C2A679]/20",
        },
        {
          title: "دفع آمن",
          desc: "خيارات دفع موثوقة لحماية مشترياتك.",
          icon: CreditCard,
          color: "bg-[#C2A679]/20",
        },
        {
          title: "تركيب مجاني",
          desc: "فريق متخصص يقوم بالتركيب باحترافية وسرعة.",
          icon: ShieldCheck,
          color: "bg-[#C2A679]/20",
        },
        {
          title: "ضمان جودة",
          desc: "نضمن جودة منتجاتنا لأكثر من 10 سنوات.",
          icon: Star,
          color: "bg-[#C2A679]/20",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="relative rounded-3xl p-8 border border-[#C2A679]/40 bg-[#2F3A33]/60 backdrop-blur-md shadow-xl transition-all duration-300 hover:bg-[#2F3A33]/80"
        >
          <div
            className={`w-16 h-16 flex items-center justify-center mx-auto mb-6 rounded-2xl ${item.color} text-[#C2A679] shadow-lg`}
          >
            <item.icon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
          <p className="text-sm text-[#E9E2D0]/80 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


     {/* 🪑 Products Section */}
<section id="products" className="max-w-7xl mx-auto px-6 py-20">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-4xl font-bold mb-12 text-center text-[#E9E2D0]"
  >
    منتجاتنا المختارة
  </motion.h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    {[
  {
    id: 1,
    name: "كرسي فخم من المخمل",
    price: 150,
    image: "/images/chair-velvet.jpg",
  },
  {
    id: 2,
    name: "أريكة ثلاثية فاخرة",
    price: 420,
    image: "/images/sofa-luxury.jpg",
  },
  {
    id: 3,
    name: "طاولة طعام خشب طبيعي",
    price: 350,
    image: "/images/dining-table.jpg",
  },
  {
    id: 4,
    name: "سرير ملكي بتصميم عصري",
    price: 720,
    image: "/images/bed-modern.jpg",
  },
  {
    id: 5,
    name: "إضاءة سقفية نحاسية",
    price: 180,
    image: "/images/ceiling-lamp.jpg",
  },
  {
    id: 6,
    name: "خزانة أنيقة بلمسة معدنية",
    price: 310,
    image: "/images/wardrobe-metal.jpg",
  },
  {
    id: 7,
    name: "كرسي جلدي للمكتب",
    price: 230,
    image: "/images/office-chair.jpg",
  },
  {
    id: 8,
    name: "مكتبة جدارية خشبية",
    price: 270,
    image: "/images/wall-shelf.jpg",
  },
].map((p, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: i * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.03 }}
    className="bg-[#2F3A33] rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-[#C2A679]/40"
  >
    <img
      src={p.image}
      alt={p.name}
      className="rounded-t-2xl aspect-[4/3] object-cover"
    />
    <div className="p-5 flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-lg text-[#E9E2D0]">{p.name}</h3>
        <p className="text-[#C2A679] text-sm mt-1">${p.price}</p>
      </div>
      <button className="bg-[#C2A679] hover:bg-[#b69660] text-[#1C1C1A] p-2 rounded-xl transition shadow">
        <ShoppingCart className="w-4 h-4" />
      </button>
    </div>
  </motion.div>
))}

  </div>
</section>
{/* 🖼️ معرض الصور + 🎥 فيديو جانبي (شبكة فاخرة) */}
<section
  id="gallery"
  className="py-24 bg-[#1C1C1A] relative overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
    {/* 🎥 الفيديو على اليسار */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#C2A679]/40"
    >
      <video
        src="/galary.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[480px] object-cover rounded-3xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/50 to-transparent pointer-events-none"></div>
    </motion.div>

    {/* 🖼️ شبكة الصور على اليمين */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-[#E9E2D0]">معرض الصور</h2>

      <p className="text-[#C2A679] text-base md:text-lg mb-10 leading-relaxed max-w-md mx-auto">
        لقطات من واقع الجمال — تفاصيل تصنع الفخامة وتروي قصة كل تصميم.
      </p>

      {/* شبكة الصور */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          "/images/gallery-1.jpg",
          "/images/gallery-2.jpg",
          "/images/gallery-3.jpg",
          "/images/gallery-4.jpg",
          "/images/gallery-5.jpg",
          "/images/gallery-6.jpg",
          "/images/gallery-7.jpg",
          "/images/gallery-8.jpg",
        ].map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl border border-[#C2A679]/30 shadow-lg hover:shadow-[#C2A679]/30 transition-all duration-300"
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-[110px] sm:h-[120px] md:h-[100px] lg:h-[110px] xl:h-[115px] object-cover"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>




     {/* 💬 Testimonials Section - فخم ومميز */}
<section
  id="testimonials"
  className="relative py-24 bg-gradient-to-b from-[#2F3A33] to-[#1C1C1A] overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-[#E9E2D0] mb-6"
    >
      آراء <span className="text-[#C2A679]">عملائنا</span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto text-[#D6CFC2] mb-16 leading-relaxed"
    >
      ثقة عملائنا هي سر نجاحنا — آراء حقيقية من عملاء جربوا الفخامة والراحة مع <strong>منزلك الراقي</strong>.
    </motion.p>

    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="relative backdrop-blur-xl bg-white/10 border border-[#C2A679]/20 rounded-3xl shadow-2xl p-8 text-center transition-all duration-300 hover:border-[#C2A679]/60"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#3B4A3F] flex items-center justify-center shadow-md">
            <Star className="w-6 h-6 text-[#C2A679]" />
          </div>
          <p className="text-[#E9E2D0] italic leading-relaxed mt-6 mb-4">“{t.text}”</p>
          <p className="font-semibold text-[#C2A679]">{t.name}</p>
          <div className="flex justify-center mt-3 text-[#C2A679]">
            {[...Array(5)].map((_, j) => (
              <Star
                key={j}
                className="w-4 h-4 drop-shadow-[0_0_4px_rgba(194,166,121,0.8)]"
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* زخرفة خلفية فاخرة */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#C2A679]/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#3B4A3F]/20 rounded-full blur-3xl" />
  </div>
</section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1C1C1C] text-[#E9E2D0] py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="text-lg font-bold mb-2 text-[#C2A679]">منزلك الراقي</div>
            <p className="text-[#D6CFC2] leading-relaxed">
              الأناقة تبدأ من المنزل — أثاث فاخر يجمع بين الفخامة والطبيعة.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-2 text-[#C2A679]">روابط سريعة</div>
            <ul className="space-y-1 text-[#D6CFC2]">
              <li>المنتجات</li>
              <li>الضمان</li>
              <li>التوصيل</li>
              <li>سياسة الإرجاع</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2 text-[#C2A679]">تواصل معنا</div>
            <ul className="space-y-1 text-[#D6CFC2]">
              <li>📞 920000000</li>
              <li>✉️ info@manzilk.com</li>
              <li>📍 الرياض - المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-[#A8A29E] mt-8">
          © {new Date().getFullYear()} منزلك الراقي. جميع الحقوق محفوظة.
        </div>
      </footer>

  

      {/* Promo Widget */}
      <PromoWidget />
            {/* 🧩 Chat Widget Script */}
      <Script
        src="/js/chat-widget.js"
        strategy="afterInteractive"
data-webhook="/api/chat"
        data-primary-color="#3B4A3F"
        data-secondary-color="#C2A679"
        data-user-bg="#3B4A3F"
        data-bot-bg="#F9F7F3"
        data-user-text="#E9E2D0"
        data-bot-text="#1C1C1A"
        data-welcome="مرحبًا 👋! كيف يمكنني مساعدتك اليوم؟"
        data-branding="💬 مدعوم من منزلك الراقي"
      />

    </main>
  );
}
