import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { useEffect, useState } from "react";
import SeoHead from "@/components/SeoHead";
import { BreadcrumbSchema, WebPageSchema } from "@/components/JsonLd";

export default function About() {
  const text = "About Myself";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let interval: ReturnType<typeof setInterval>;

    const startTyping = () => {
      setDisplayedText("");
      interval = setInterval(() => {
        index++;
        setDisplayedText(text.slice(0, index));

        if (index === text.length) {
          clearInterval(interval);
          setTimeout(() => {
            index = 0;
            startTyping();
          }, 10000);
        }
      }, 120);
    };

    startTyping();
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SeoHead
        title="About"
        description="Learn about Abhishek Panda — MBA Finance professional, business analyst, and finance strategist. Explore portfolio, education, skills, and professional journey."
        canonical="https://pandaabhishek.vercel.app/about"
        ogImage="https://pandaabhishek.vercel.app/assets/portarit.jpeg"
        ogImageWidth="600"
        ogImageHeight="600"
        publishedTime="2024-01-01"
        modifiedTime="2026-07-10"
      />
      <WebPageSchema
        name="About | Abhishek Panda"
        description="Learn about Abhishek Panda — MBA Finance professional, business analyst, and finance strategist."
        url="https://pandaabhishek.vercel.app/about"
        datePublished="2024-01-01"
        dateModified="2026-07-10"
        breadcrumb={[
          { name: "Home", url: "https://pandaabhishek.vercel.app/" },
          { name: "About", url: "https://pandaabhishek.vercel.app/about" },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://pandaabhishek.vercel.app/" },
          { name: "About", url: "https://pandaabhishek.vercel.app/about" },
        ]}
      />
      <main className="relative min-h-screen bg-[#05070A] overflow-hidden text-white px-4 sm:px-6 py-10">
        {/* Animated background effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00BFFF]/5 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl opacity-20" />
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `
              linear-gradient(rgba(0,191,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,191,255,0.06) 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* BACK BUTTON */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="
          fixed
          top-5
          left-5
          z-50
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          border
          border-white/15
          bg-white/8
          backdrop-blur-xl
          hover:bg-white/15
          hover:border-white/30
          transition-all
          duration-300
          shadow-lg
        "
          aria-label="Back to home page"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          <span className="hidden sm:inline">Back</span>
        </motion.a>

        {/* MAIN CONTENT */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen gap-8">

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center"
          >
            <div
              className="
              w-[200px]
              sm:w-[280px]
              md:w-[320px]
              h-[200px]
              sm:h-[280px]
              md:h-[320px]
              rounded-2xl
              overflow-hidden
              border
              border-[#00BFFF]/20
              bg-gradient-to-br from-[#07111F] to-[#0a1525]
              flex items-center justify-center
              shadow-[0_20px_60px_rgba(0,191,255,0.1)]
              hover:border-[#00BFFF]/40
              transition-all
              duration-300
            "
            >
              <img
                src="/scroll-animation/ezgif-frame-100.png"
                alt="Abhishek Panda - MBA Finance candidate"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* DIVIDER LINE */}
            <div
              className="
              mt-6
              h-[1px]
              bg-gradient-to-r
              from-transparent
              via-[#D4AF37]/30
              to-transparent
              w-[90vw]
              sm:w-[400px]
              md:w-[500px]
            "
            />
          </motion.div>

          {/* GLASS BOX CONTAINER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
            relative
            w-full
            max-w-4xl
            h-[500px]
            sm:h-[550px]
            md:h-[600px]
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-3xl
            overflow-hidden
            shadow-[0_20px_70px_rgba(0,0,0,0.5)]
            group
          "
          >
            {/* GLASS EFFECT */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

            {/* HEADER SECTION */}
            <div
              className="
              relative
              z-20
              flex
              items-center
              justify-center
              px-6
              py-6
              sm:py-8
              border-b
              border-white/10
              bg-black/30
              backdrop-blur-2xl
            "
            >
              <h1
                className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
                tracking-tight
              "
              >
                {displayedText}
                <span className="animate-pulse ml-2">|</span>
              </h1>
            </div>

            {/* SCROLLABLE CONTENT */}
            <div
              className="
              relative
              z-10
              h-[calc(100%-80px)]
              overflow-y-auto
              px-6
              sm:px-10
              md:px-12
              py-8
              scrollbar-thin
              scrollbar-track-transparent
              scrollbar-thumb-white/10
              hover:scrollbar-thumb-white/20
            "
            >
              <div
                className="
                text-white/70
                text-sm
                sm:text-base
                leading-8
                tracking-wide
                space-y-6
              "
              >
                <p>
                  I completed my Master of Business Administration (MBA) with a specialization in Finance and Analytics, driven by a deep-seated passion for understanding how markets operate and how strategic financial choices guide the modern business world. My interest in finance was sparked during my Bachelor of Commerce in Accountancy, where I realized I had a strong aptitude for numerical analysis, corporate reporting, and valuation. This academic curiosity quickly turned into a dedicated professional path centered on investment research, corporate finance, and strategic asset management.
                </p>

                <p>
                  Today, I specialize in quantitative financial modeling, valuation, budgeting, and strategy formulation. I enjoy constructing detailed financial frameworks that evaluate risk, identify growth drivers, and support executive leadership in high-stakes environments. During my internship at Autoliv Limited, I had the privilege of working on variance analysis, reconciliation processes, budgeting, and forecasting. These hands-on experiences taught me how to align operational metrics with corporate objectives and showed me the concrete impact of financial planning on business sustainability.
                </p>

                <p>
                  Beyond standard corporate finance, I am highly interested in the intersection of technology and capital markets. I actively explore how big data, visual analytics, and quantitative techniques can improve asset allocation and risk modeling. My ultimate career objective is to step into a leadership or senior analyst position within investment banking, corporate strategy, or financial advisory, where I can steer capital allocation and help firms steer through complex macroeconomic landscapes.
                </p>

                <p>
                  In my spare time, I actively follow global economic news, analyze corporate earnings reports, and participate in financial markets to test my investment theories. I am also committed to continuous professional growth, seeking additional credentials like the CFA to keep my skills sharp. I believe that in the financial sector, staying curious and adaptable is key to navigating volatility and finding hidden opportunities.
                </p>

                <p>
                  For me, finance is not just a career; it is a vital lens to interpret business health, foster capital appreciation, and create long-term economic value. Every market movement tells a story, and I want to be someone who can read, interpret, and act on those stories.
                </p>
              </div>
            </div>
          </motion.div>

          {/* DOWNLOAD BUTTON */}
          <motion.a
            href="/assets/Resume2.0.pdf"
            download="Abhishek_Panda_Resume.pdf"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="
            group
            relative
            overflow-hidden
            inline-flex
            items-center
            justify-center
            gap-3
            px-8
            sm:px-10
            py-3
            sm:py-4
            rounded-2xl
            border
            border-[#D4AF37]/30
            bg-[#D4AF37]/5
            backdrop-blur-xl
            hover:bg-[#D4AF37]/15
            hover:border-[#D4AF37]/60
            transition-all
            duration-300
            shadow-[0_10px_40px_rgba(0,0,0,0.4)]
            hover:shadow-[0_15px_50px_rgba(212,175,55,0.1)]
          "
            aria-label="Download Abhishek Panda Resume"
          >
            <Download size={16} aria-hidden="true" />
            <span className="text-xs tracking-[0.25em] uppercase font-semibold">Download Resume</span>
          </motion.a>
        </div>
      </main>
    </>
  );
}
