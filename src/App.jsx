import { useState } from 'react';
import { motion } from 'framer-motion';
import { Logo } from './components/Logo';
import { Link, Routes, Route } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import LanguageServicesCard from './components/LanguageServicesCard';
import heroImage from './assets/hero.png';
// import contact from 'https://wa.me/qr/6B74S3PPOSBWP1';
// import { mgLogo } from './components/Logo';
import { Smartphone, Globe,  Cpu, Laptop, ShieldCheck, ShoppingCart, Mail, MessageCircle, ExternalLink } from 'lucide-react';

// 1. Data Definitions
const emailAddress = 'hussainmgstudio@gmail.com';
const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

const services = [
  { id: "mobile-app", title: "Mobile App Development", desc: "We build high-performance, native-feel iOS and Android applications that provide a seamless user experience and robust functionality.", icon: <Smartphone className="text-green-600" /> },
  { id: "ui-ux", title: "UI/UX Designer", desc: "We craft intuitive and visually stunning user interfaces focused on user-centric journeys to maximize engagement and conversion.", icon: <ShieldCheck className="text-blue-500" /> },
  { id: "software-dev", title: "Software Development", desc: "Delivering custom, scalable software solutions designed to automate your workflows and solve complex business challenges.", icon: <Laptop className="text-purple-500" /> },
  { id: "ecommerce", title: "E-commerce Development", desc: "Build powerful, fast, and secure online stores with smooth checkout experiences to turn visitors into loyal customers.", icon: <ShoppingCart className="text-orange-500" /> },
  { id: "facebook-ads", title: "Facebook Advertisement", desc: "Data-driven ad campaigns designed to target the right audience, increase brand reach, and deliver a high return on investment (ROI).", icon: <Cpu className="text-red-500" /> },
  { id: "ios", title: "IoS Development Services", desc: "Specialized development for the Apple ecosystem, ensuring your app meets premium standards of performance, security, and design.", icon: <Globe className="text-emerald-500" /> },
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

// 2. Main Components
const Home = () => {
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
        <a href="#contact" className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition inline-block">
          Schedule a Free Call
        </a>
        </header>

        <section id="schedule" className="py-16 px-6 bg-slate-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-green-600 font-bold uppercase tracking-widest text-sm">-Schedule a Call-</span>
              <h2 className="text-4xl font-extrabold text-slate-900 mt-4">Connect with MG Studio</h2>
              <p className="text-slate-600 max-w-2xl mx-auto mt-4">
                Choose one of the contact options below to schedule a call, send a message, or request a meeting.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="https://www.fiverr.com/s/Ay5WZ3q"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 hover:shadow-2xl transition flex flex-col items-start gap-4"
              >
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                  <ExternalLink size={28} />
                </div>
                <div>
                  <p className="text-slate-500 uppercase text-xs font-semibold">Fiverr</p>
                  <h3 className="text-xl font-bold mt-2">Hire on Fiverr</h3>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/ali-hussain-mgstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 hover:shadow-2xl transition flex flex-col items-start gap-4"
              >
                <div className="p-4 bg-sky-50 text-sky-600 rounded-2xl">
                  <ExternalLink size={28} />
                </div>
                <div>
                  <p className="text-slate-500 uppercase text-xs font-semibold">LinkedIn</p>
                  <h3 className="text-xl font-bold mt-2">Connect on LinkedIn</h3>
                </div>
              </a>
              <a
                href="https://wa.me/qr/6B74S3PPOSBWP1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 hover:shadow-2xl transition flex flex-col items-start gap-4"
              >
                <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <p className="text-slate-500 uppercase text-xs font-semibold">WhatsApp</p>
                  <h3 className="text-xl font-bold mt-2">Message on WhatsApp</h3>
                </div>
              </a>
              <a
                href={emailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 hover:shadow-2xl transition flex flex-col items-start gap-4"
              >
                <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-slate-500 uppercase text-xs font-semibold">Email</p>
                  <h3 className="text-xl font-bold mt-2">Send an Email</h3>
                </div>
              </a>
            </div>
          </div>
        </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm">-What We Offer-</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Our Creative Services</h2>
          </div>
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-center">
            <div className="rounded-[32px] overflow-hidden shadow-2xl bg-slate-100">
              <img
                src={heroImage}
                alt="Web development showcase"
                className="w-full h-full object-cover min-h-[320px]"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((s, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10 }}
                  className="p-8 border border-slate-100 rounded-xl hover:shadow-2xl transition-all bg-white group"
                >
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
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
        </div>
      </section>

      {/* Languages & Technologies Section */}
      <LanguageServicesCard />

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
            <ContactForm />
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

const MGStudioPortfolio = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectPage />} />
    </Routes>
  );
};

export default MGStudioPortfolio;

// ContactForm component (placed here to keep changes minimal)
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  function onChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        value={form.name}
        onChange={onChange}
        className="w-full p-4 rounded-xl outline-none"
        placeholder="Your Name"
      />

      <input
        name="email"
        type="email"
        value={form.email}
        onChange={onChange}
        className="w-full p-4 rounded-xl outline-none"
        placeholder="Your Email"
        required
      />

      <textarea
        name="message"
        value={form.message}
        onChange={onChange}
        className="w-full p-4 rounded-xl outline-none h-32"
        placeholder="How can we help?"
        required
      />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg"
      >
        {status === 'sending' ? 'SENDING...' : 'SUBMIT MESSAGE'}
      </button>

      {status === 'success' && <p className="text-green-200 mt-2">Message sent — you'll receive an email shortly.</p>}
      {status === 'error' && <p className="text-amber-200 mt-2">There was an error sending your message.</p>}
    </form>
  );
}