import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Smartphone, Monitor, Phone, ShoppingCart, LayoutGrid, ArrowLeft } from 'lucide-react';
import exploreScreen from '../assets/explore-screen.png';
import signupScreen from '../assets/signup-screen.png';
import productDetailScreen from '../assets/product-detail-screen.png';
import homeScreen from '../assets/home-screen.png';
import signupScreen2 from '../assets/signup-screen-2.png';

const projectData = {
  "mobile-app": {
    title: "Mobile App Development",
    projectName: "Fashion Hub E-commerce App",
    subtitle: "Android App / Fashion Brand",
    description: "A premium Android e-commerce app built for fashion enthusiasts with seamless shopping experience, inventory sync, and rich mobile UX. Features a modern explore interface, secure payment gateway, and intuitive product discovery.",
    features: [
      "Beautiful explore interface with product categories",
      "Responsive UI for all Android screens",
      "Firebase push notifications",
      "Integrated secure payment gateway",
      "Google/phone authentication",
      "Dark mode support",
      "Real-time inventory management",
      "Advanced search and filter options"
    ],
    stats: [
      { label: "Downloads", value: "5k+" },
      { label: "Rating", value: "4.8/5" },
      { label: "Platform", value: "Android" }
    ],
    appScreenImage: exploreScreen,
    screens: [exploreScreen, productDetailScreen, homeScreen],
    icon: <Smartphone size={80} className="text-white opacity-20" />
  },
  "ui-ux": {
    title: "UI/UX Design",
    projectName: "MG Studio UI Redesign",
    subtitle: "Design System / Conversion Focused",
    description: "A modern user interface designed for businesses to improve engagement and conversion with polished visual hierarchy and strong brand consistency.",
    features: [
      "High-conversion landing experience",
      "Interactive prototyping and motion design",
      "Accessible typography and color system",
      "Mobile-first responsive layouts",
      "Brand-led iconography and illustration"
    ],
    stats: [
      { label: "Design Systems", value: "1" },
      { label: "Launch Time", value: "4 weeks" },
      { label: "Focus", value: "UI/UX" }
    ],
    icon: <LayoutGrid size={90} className="text-white opacity-20" />
  },
  "web-dev": {
    title: "Web Development",
    projectName: "Modern Business Website",
    subtitle: "Web Project / Full Stack",
    description: "A fast, responsive website built for a service brand that delivers strong SEO performance, clear messaging, and a smooth customer journey.",
    features: [
      "Performance-first responsive web build",
      "SEO-friendly page structure",
      "CMS-ready content sections",
      "Interactive animations and micro-interactions",
      "Secure contact and lead capture flows"
    ],
    stats: [
      { label: "Speed", value: "A+" },
      { label: "Pages", value: "8+" },
      { label: "Focus", value: "Web" }
    ],
    icon: <Monitor size={80} className="text-white opacity-20" />
  },
  ecommerce: {
    title: "E-commerce Development",
    projectName: "ShopEase Online Store",
    subtitle: "E-commerce Project / Retail",
    description: "A secure online store designed for smooth checkout, product discovery, and customer trust, optimized for fast conversions.",
    features: [
      "Secure payment integration",
      "Product catalog and filters",
      "Shopping cart and checkout UX",
      "Order tracking and customer account",
      "Mobile-first shopping experience"
    ],
    stats: [
      { label: "Conversion", value: "27%" },
      { label: "Products", value: "1200+" },
      { label: "Focus", value: "E-commerce" }
    ],
    icon: <ShoppingCart size={80} className="text-white opacity-20" />
  },
  ios: {
    title: "iOS Development Services",
    projectName: "Fashion Hub iOS App",
    subtitle: "Apple Ecosystem / Premium UX",
    description: "A polished iOS app built with Apple platform best practices, high performance, and a premium user experience. Features a sleek signup flow, secure authentication, and optimized performance for iPhone users.",
    features: [
      "Native iOS interface design with premium aesthetics",
      "App Store ready architecture",
      "Smooth gesture-based navigation",
      "Secure OAuth and password authentication",
      "Performance and battery optimization",
      "Seamless user onboarding flow",
      "Real-time notifications",
      "iCloud sync support"
    ],
    stats: [
      { label: "Platform", value: "iOS" },
      { label: "Release", value: "Q1 2026" },
      { label: "Focus", value: "Apple" }
    ],
    appScreenImage: signupScreen2,
    screens: [signupScreen2, signupScreen],
    icon: <Phone size={80} className="text-white opacity-20" />
  },
  "software-dev": {
    title: "Software Development",
    projectName: "Dar Ul Islam School Management System",
    subtitle: "School Management / Education Platform",
    description: "A comprehensive school management system for Dar Ul Islam School Saifpur, featuring smart fee management, teacher-led attendance tracking, principal dashboards, and student/parent portals.",
    features: [
      "Principal control dashboard and analytics",
      "Teacher task assignment and management",
      "Smart fee tracking and payment management",
      "Attendance alerts and notifications",
      "Student progress monitoring portals",
      "Homework and assignment tracking",
      "Parent-teacher communication system",
      "Secure role-based access control"
    ],
    stats: [
      { label: "Users", value: "500+" },
      { label: "Features", value: "8+" },
      { label: "Focus", value: "Education" }
    ],
    projectUrl: "https://dar-ul-islam-school-a2ki.vercel.app/",
    icon: <Monitor size={80} className="text-white opacity-20" />
  },
  "facebook-ads": {
    title: "Facebook Advertisement",
    projectName: "High-ROI Campaign",
    subtitle: "Ad Strategy / Growth",
    description: "A campaign designed to reach the right audience, increase brand awareness, and generate measurable ROI from social ads.",
    features: [
      "Targeted audience research",
      "Creative ad format design",
      "Performance tracking and optimization",
      "Retargeting strategy",
      "ROI-focused reporting"
    ],
    stats: [
      { label: "CTR", value: "4.5%" },
      { label: "ROAS", value: "6x" },
      { label: "Focus", value: "Ads" }
    ],
    icon: <Monitor size={80} className="text-white opacity-20" />
  }
};

const ProjectPage = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
        <div className="max-w-3xl text-center bg-white shadow-xl rounded-3xl p-10">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-slate-600 mb-8">We couldn’t find the project you requested. Please go back to the portfolio and choose another service.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 py-20 px-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-green-400 mb-6 hover:underline">
              <ArrowLeft size={18} /> Back to Portfolio
            </Link>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              {project.title}
            </motion.h1>
            <p className="text-green-400 font-semibold uppercase tracking-wide mb-3">{project.subtitle}</p>
            <p className="text-slate-300 text-lg mb-8">{project.description}</p>
            <div className="grid grid-cols-3 gap-6">
              {project.stats.map((stat, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-3xl text-center">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-slate-400 uppercase text-xs mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            {project.appScreenImage ? (
              <div className="w-full max-w-3xl">
                <img
                  src={project.appScreenImage}
                  alt={project.projectName}
                  className="w-full h-auto rounded-3xl shadow-2xl object-contain"
                />
              </div>
            ) : (
              <div className="relative w-full max-w-md h-[520px] bg-slate-800 rounded-[3rem] border-[8px] border-slate-700 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-b-xl z-10"></div>
                <div className="w-full h-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                  {project.icon}
                  <p className="absolute bottom-10 text-white font-bold">{project.projectName}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-bold mb-8">Project Highlights</h2>
          <div className="space-y-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <span className="text-green-600 mt-1">✔</span>
                <p className="font-medium text-slate-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-50 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">Why this work matters</h3>
          <p className="text-slate-600 leading-relaxed mb-6">This project demonstrates our ability to match the right product experience to each business need. From Android-first apps to conversion-led web builds and premium iOS releases, MG Studio delivers the right solution for each client.</p>
          <div className="flex gap-4">
            {project.projectUrl && (
              <a 
                href={project.projectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition font-semibold"
              >
                Visit Project →
              </a>
            )}
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
