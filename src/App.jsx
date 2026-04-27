import { motion } from 'framer-motion';
import { Logo } from './components/Logo';
import AndroidProject from './components/androidapp';
import { Link } from 'react-router-dom';
// import contact from 'https://wa.me/qr/6B74S3PPOSBWP1';
// import { mgLogo } from './components/Logo';
import { Smartphone, Globe,  Cpu, Laptop, ShieldCheck, ShoppingCart } from 'lucide-react';

// 1. Data Definitions
const services = [
  { title: "Mobile App Development", desc: "We build high-performance, native-feel iOS and Android applications that provide a seamless user experience and robust functionality.", icon: <Smartphone className="text-green-600" /> },
  { title: "UI/UX Designer", desc: "We craft intuitive and visually stunning user interfaces focused on user-centric journeys to maximize engagement and conversion.", icon: <ShieldCheck className="text-blue-500" /> },
  { title: "Software Development", desc: "Delivering custom, scalable software solutions designed to automate your workflows and solve complex business challenges.", icon: <Laptop className="text-purple-500" /> },
  { title: "E-commerce Development", desc: "Build powerful, fast, and secure online stores with smooth checkout experiences to turn visitors into loyal customers.", icon: <ShoppingCart className="text-orange-500" /> },
  { title: "Facebook Advertisement", desc: "Data-driven ad campaigns designed to target the right audience, increase brand reach, and deliver a high return on investment (ROI).", icon: <Cpu className="text-red-500" /> },
  { title: "IoS Development Services", desc: "Specialized development for the Apple ecosystem, ensuring your app meets premium standards of performance, security, and design.", icon: <Globe className="text-emerald-500" /> },
];

const projects = [
  { name: "Fashion Industry", color: "bg-emerald-900", icon: "👗" },
  { name: "Job Portal", color: "bg-rose-900", icon: "💼" },
  { name: "School Management", color: "bg-orange-500", icon: "🏫" }
];
// const services = [
  // { 
    // id: "mobile-app",
    // title: "Mobile App Development", 
    // ... baaki details
  // },
  // { 
    // id: "ui-ux",
    // title: "UI/UX Designer", 
    // ... baaki details
  // },
  // Issi tarah sab mein id add karein
// ];

// 2. Main Component
const MGStudioPortfolio = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans scroll-smooth">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-tighter text-blue-600"><Logo /></h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#work" className="hover:text-blue-600 transition">Portfolio</a>
          <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-6 text-center max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-green-600 font-bold uppercase tracking-widest text-sm"
        >
          App Development Agency
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 mt-4"
        >
          Expert Mobile App Developers for <span className="text-blue-600">Creative Solutions</span>
        </motion.h2>
        <p className="text-lg text-slate-600 mb-8">
          MG Studio specializes in UI/UX design, full-stack development, and smart business automation.
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition" href="#contact">
          Schedule a Free Call
        </button>
      </header>

      {/* Services Grid Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm">-What We Offer-</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Our Creative Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
  <motion.div 
    key={i} 
    whileHover={{ y: -10 }}
    className="p-8 border border-slate-100 rounded-xl hover:shadow-2xl transition-all bg-white group"
  >
    {/* Icon (Yahan se src hata dein, iski zaroorat nahi) */}
    <div className="text-4xl mb-4">{s.icon}</div>
    
    <h3 className="text-xl font-bold mb-3">{s.title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
    
    {/* Link use karein naya page kholne ke liye */}
    <Link 
      to={`/project/${s.id}`} 
      className="mt-4 text-green-600 font-semibold flex items-center gap-2 hover:underline inline-flex"
    >
      Read More <span>→</span>
    </Link>
  </motion.div>
))}
        
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
             <span className="text-green-600 font-bold uppercase tracking-widest text-sm">-What We Done-</span>
             <h2 className="text-3xl font-bold mt-2">Our Latest Case Studies</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className={`${p.color} h-80 rounded-2xl flex flex-col items-center justify-center text-white relative overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform`}>
                <div className="text-6xl mb-4">{p.icon}</div>
                <h4 className="text-2xl font-bold">{p.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">Let's Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-4 rounded-full text-green-600">📍</div>
                <div>
                  <p className="font-bold text-lg">Pakistan Office</p>
                  <p className="text-slate-600 text-lg">Office No. 144, Block G1 Johar Town, Lahore</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-4 rounded-full text-green-600">📞</div>
                <div>
                  <p className="font-bold text-lg">Call Us</p>
                  <p className="text-slate-600 text-lg">+92 3174057239</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-4 rounded-full text-green-600">✉️</div>
                <div>
                  <p className="font-bold text-lg">Mail Us</p>
                  <p className="text-slate-600 text-lg">mgstudio2580@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-600 p-10 rounded-3xl shadow-2xl">
            <h3 className="text-white text-2xl font-bold mb-6 text-center">Get In Touch</h3>
            <form className="space-y-4">
              <input className="w-full p-4 rounded-xl outline-none" placeholder="Your Name" src={AndroidProject} />
              <input className="w-full p-4 rounded-xl outline-none" placeholder="Your Email" />
              <textarea className="w-full p-4 rounded-xl outline-none h-32" placeholder="How can we help?"></textarea>
              <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg">
                SUBMIT MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white text-center">
        <p className="opacity-50 text-sm">© 2026 MG Studio. Based in Lahore, Serving Globally.</p>
      </footer>
    </div>
  );
};

export default MGStudioPortfolio;