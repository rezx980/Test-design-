"use client";

import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  Upload,
  BarChart3,
  Sparkles,
  Zap,
  Download,
  ArrowRight
} from "lucide-react";

export default function Home() {

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{opacity:0, y:40}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.7}}
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <Sparkles size={16} className="text-cyan-400"/>
              AI Powered Chart Generator
            </div>


            <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
              حوّل ملفات
              <span className="text-cyan-400"> Excel </span>
              إلى
              <span className="text-purple-400"> Line Chart </span>
              احترافي
            </h1>


            <p className="text-gray-400 text-lg mt-6">
              ارفع ملف Excel الخاص بك، واحصل على رسم بياني واضح وجميل خلال ثوانٍ.
              بدون تعقيد أو برامج إضافية.
            </p>


            <div className="flex gap-4 mt-8">

              <button className="
              flex items-center gap-2
              bg-cyan-500
              text-black
              px-6 py-3
              rounded-full
              font-bold
              hover:scale-105
              transition
              ">
                ابدأ الآن
                <ArrowRight size={18}/>
              </button>


              <button className="
              px-6 py-3
              rounded-full
              border border-white/20
              bg-white/5
              ">
                شاهد كيف يعمل
              </button>

            </div>

          </motion.div>



          {/* Animation Preview */}

          <motion.div
          initial={{opacity:0,scale:0.8}}
          animate={{opacity:1,scale:1}}
          transition={{duration:0.8}}
          className="
          rounded-3xl
          bg-white/10
          border border-white/20
          backdrop-blur-xl
          p-8
          "
          >

            <motion.div
            animate={{y:[0,-10,0]}}
            transition={{repeat:Infinity,duration:3}}
            className="
            bg-green-500/20
            rounded-2xl
            p-6
            text-center
            "
            >

              <FileSpreadsheet
              size={60}
              className="mx-auto text-green-400"
              />

              <p className="mt-3">
                Excel File
              </p>

            </motion.div>


            <div className="text-center text-cyan-400 text-3xl my-5">
              ↓
            </div>


            <motion.div
            animate={{scale:[1,1.05,1]}}
            transition={{repeat:Infinity,duration:2}}
            className="
            bg-cyan-500/20
            rounded-2xl
            p-6
            "
            >

              <BarChart3
              size={70}
              className="mx-auto text-cyan-400"
              />

              <p className="text-center mt-3">
                Line Chart
              </p>

            </motion.div>


          </motion.div>


        </div>

      </section>




      {/* HOW IT WORKS */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          كيف يعمل الموقع؟
        </h2>


        <div className="grid md:grid-cols-3 gap-6 mt-12">


          {[
            ["📁","ارفع Excel","اختر ملف البيانات الخاص بك"],
            ["⚙️","تحليل البيانات","نقوم بمعالجة البيانات تلقائياً"],
            ["📈","احصل على الرسم","رسم بياني جاهز للتحميل"]
          ].map((item,i)=>(

            <motion.div
            whileHover={{y:-10}}
            key={i}
            className="
            rounded-3xl
            bg-white/10
            border border-white/20
            p-8
            backdrop-blur-xl
            "
            >

              <div className="text-4xl">
                {item[0]}
              </div>

              <h3 className="text-xl font-bold mt-5">
                {item[1]}
              </h3>

              <p className="text-gray-400 mt-3">
                {item[2]}
              </p>


            </motion.div>

          ))}


        </div>

      </section>





      {/* FEATURES */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          لماذا تستخدمنا؟
        </h2>


        <div className="grid md:grid-cols-4 gap-5 mt-10">


        {[
          ["⚡","سريع"],
          ["🎨","تصميم جميل"],
          ["📊","رسوم واضحة"],
          ["⬇️","تحميل بسهولة"]
        ].map((x,i)=>(

          <div
          key={i}
          className="
          bg-white/10
          border border-white/20
          rounded-2xl
          p-6
          text-center
          "
          >

            <div className="text-3xl">
              {x[0]}
            </div>

            <p className="mt-3">
              {x[1]}
            </p>

          </div>

        ))}


        </div>

      </section>



      {/* FOOTER */}

      <footer className="
      border-t
      border-white/10
      py-8
      text-center
      text-gray-400
      ">

        © 2026 Excel Chart
        —
        Original Design Rights

      </footer>


    </main>
  );
          }
