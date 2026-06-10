import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const LanguageCard = ({ name, icon, color }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-8 border border-slate-100 rounded-xl hover:shadow-2xl transition-all bg-white group text-center"
    >
      <div className={`text-5xl mb-4 flex justify-center ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900">{name}</h3>
      <p className="text-slate-500 text-sm">Professional development & expertise</p>
    </motion.div>
  );
};

const LanguageServicesCard = () => {
  const languages = [
    { name: "HTML5", icon: "🌐", color: "text-orange-600" },
    { name: "Tailwind CSS", icon: "🎨", color: "text-cyan-600" },
    { name: "JavaScript", icon: "⚡", color: "text-yellow-600" },
    { name: "Node.js", icon: "🚀", color: "text-green-600" },
    { name: "React", icon: "⚛️", color: "text-blue-600" },
    { name: "React Native", icon: "📱", color: "text-purple-600" },
    { name: "Kotlin", icon: "🔷", color: "text-violet-600" },
    { name: "Java", icon: "☕", color: "text-red-600" },
    { name: "Swift", icon: "🦅", color: "text-pink-600" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold uppercase tracking-widest text-sm">-Our Expertise-</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Languages & Technologies</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            We master modern programming languages and frameworks to deliver cutting-edge solutions
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {languages.map((lang, i) => (
            <LanguageCard key={i} name={lang.name} icon={lang.icon} color={lang.color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageServicesCard;
