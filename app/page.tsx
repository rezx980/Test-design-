// app/page.tsx
import HomePage from '@/components/HomePage';

export default function Page() {
  return <HomePage />;
};
import { motion } from "framer-motion";
import { 
  Upload, 
  LineChart, 
  Zap, 
  Shield, 
  ArrowRight,
  Sparkles,
  Database,
  Download
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section مع تأثير زجاجي وحركات دخول */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* شعار مع تأثير توهج */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/80">تحليل بيانات بذكاء</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            حوّل ملفات 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Excel </span> 
            إلى رسوم بيانية
          </h1>
          
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            ارفع ملفك واستخرج الرؤى البصرية في ثوانٍ. أول عمود نصي يصبح المحور X، والأعمدة الرقمية تتحول إلى خطوط بيانية نابضة بالحياة.
          </p>

          {/* أزرار CTA مع تأثير تعويم */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-medium text-lg shadow-lg shadow-purple-500/30 flex items-center gap-2 hover:shadow-purple-500/50 transition-all"
            >
              ابدأ الآن
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-medium text-lg border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <Upload className="w-5 h-5" />
              رفع ملف تجريبي
            </motion.button>
          </div>
        </motion.div>
      </header>

      {/* قسم المزايا مع بطاقات Glassmorphism */}
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* قسم طريقة العمل مع رسوم توضيحية */}
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            ثلاث خطوات لرسم بياني احترافي
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-lg shadow-purple-500/20">
                  {index + 1}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-white/60">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* قسم المعاينة التجريبي (اختياري) */}
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white">معاينة الرسم البياني</h3>
            <span className="text-sm text-white/40">بيانات تجريبية</span>
          </div>
          
          {/* هنا يمكنك إضافة مخطط تفاعلي باستخدام Chart.js أو Recharts */}
          <div className="h-64 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
            <LineChart className="w-16 h-16 text-white/20" />
            <span className="text-white/20 mr-2">سيظهر الرسم البياني هنا</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// بيانات المزايا
const features = [
  {
    icon: <Upload className="w-7 h-7 text-blue-400" />,
    title: "رفع سهل وسريع",
    description: "ادعم ملفات .xlsx و .csv واسحبها وأفلتها مباشرة في المتصفح"
  },
  {
    icon: <LineChart className="w-7 h-7 text-purple-400" />,
    title: "رسوم بيانية ديناميكية",
    description: "تحويل تلقائي للأعمدة الرقمية إلى خطوط بيانية تفاعلية مع تنسيق احترافي"
  },
  {
    icon: <Zap className="w-7 h-7 text-yellow-400" />,
    title: "معالجة فورية",
    description: "خوارزميات سريعة تعالج بياناتك في لحظات وتعرض النتائج بدون تأخير"
  }
];

// بيانات الخطوات
const steps = [
  {
    title: "ارفع ملفك",
    description: "اختر ملف Excel أو CSV من جهازك"
  },
  {
    title: "حدد الأعمدة",
    description: "اختر عمود النص للمحور X والأعمدة الرقمية للخطوط"
  },
  {
    title: "استخرج الرؤى",
    description: "شاهد الرسم البياني التفاعلي ونمّقه كما تريد"
  }
];
