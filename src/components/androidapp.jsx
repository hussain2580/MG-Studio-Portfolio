import { motion } from 'framer-motion';
import { Smartphone, CheckCircle, ArrowLeft, PlayCircle } from 'lucide-react';

const AndroidProject = () => {
  const projectInfo = {
    title: "Saree Style E-commerce App",
    category: "Mobile Application / Fashion",
    description: "A high-end Android application built for a fashion brand in Lahore, featuring real-time inventory and seamless checkout.",
    features: [
      "Responsive UI for all Android screens",
      "Firebase Push Notifications",
      "Integrated Payment Gateway",
      "User Authentication (Google/Phone)",
      "Dark Mode Support"
    ],
    stats: [
      { label: "Downloads", value: "5k+" },
      { label: "Rating", value: "4.8/5" },
      { label: "Platform", value: "Android" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Hero */}
      <section className="bg-slate-900 py-20 px-6 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <button className="flex items-center gap-2 text-green-400 mb-6 hover:underline">
              <ArrowLeft size={18} /> Back to Portfolio
            </button>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              {projectInfo.title}
            </motion.h1>
            <p className="text-slate-400 text-lg mb-8 max-w-xl">
              {projectInfo.description}
            </p>
            <div className="flex flex-wrap gap-8">
              {projectInfo.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-green-500 font-bold text-2xl">{stat.value}</p>
                  <p className="text-slate-400 text-sm uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Mockup */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-[500px] bg-slate-800 rounded-[3rem] border-[8px] border-slate-700 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-b-xl z-10"></div>
              {/* Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                 <Smartphone size={80} className="text-white opacity-20" />
                 <p className="absolute bottom-10 text-white font-bold">Project Screen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-bold mb-8">Key Features & Functionality</h2>
          <div className="space-y-4">
            {projectInfo.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                <CheckCircle className="text-green-600" />
                <span className="font-medium text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4 italic">"The result was a 40% increase in mobile sales within the first 3 months of launch."</h3>
          <p className="text-slate-500 mb-6">- Client Feedback from MG Studio</p>
          <div className="flex gap-4">
             <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700">
               <PlayCircle size={20} /> View Demo
             </button>
             <button className="border border-slate-300 px-6 py-3 rounded-lg hover:bg-white transition">
               Read Case Study
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AndroidProject;