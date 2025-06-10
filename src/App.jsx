import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Sparkles,
  Zap,
  Shield,
  ArrowRight,
  Star,
  Users,
  Trophy,
} from "lucide-react";
import Header from "./components/Header";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Nav Section */}
      <Header/>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              animation: "float 6s ease-in-out infinite",
            }}
          ></div>
          <div
            className="absolute top-40 right-10 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              animation: "float 8s ease-in-out infinite reverse",
            }}
          ></div>
          <div
            className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
            style={{
              transform: `translateX(-50%) translateY(${scrollY * 0.2}px)`,
              animation: "float 10s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div
            className={`mb-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium">NextGen Solutions</span>
            </div>
          </div>

          {/* Hero Title */}
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Revolusi Digital
            <br />
            <span className="text-4xl md:text-6xl">Masa Depan</span>
          </h1>

          {/* Hero Subtitle */}
          <p
            className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Bergabunglah dengan jutaan pengguna yang telah merasakan
            transformasi digital dengan solusi inovatif kami
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10 flex items-center">
                Mulai Sekarang
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
              Pelajari Lebih Lanjut
            </button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-8 max-w-md mx-auto transform transition-all duration-1000 delay-900 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">500K+</div>
              <div className="text-sm text-gray-400">Pengguna</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("features")}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Fitur Unggulan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Teknologi terdepan yang dirancang khusus untuk mempercepat
              transformasi digital Anda
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Performa Lightning",
                description:
                  "Kecepatan pemrosesan data hingga 10x lebih cepat dengan teknologi AI terbaru",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Keamanan Tingkat Militer",
                description:
                  "Enkripsi end-to-end dan sistem keamanan berlapis untuk melindungi data Anda",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Kolaborasi Seamless",
                description:
                  "Platform terintegrasi untuk tim global dengan sinkronisasi real-time",
                color: "from-blue-500 to-cyan-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                }}
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials/CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Testimonial */}
          <div className="mb-16">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-light italic text-gray-200 mb-8">
              "Solusi terbaik yang pernah kami gunakan. Produktivitas tim
              meningkat 300% dalam 3 bulan pertama."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Mahesa Aakmal</div>
                <div className="text-gray-400">CEO, TechCorp Indonesia</div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Memulai Transformasi?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan perusahaan yang telah mempercayai
              solusi kami untuk mengakselerasi pertumbuhan bisnis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                <span className="flex items-center justify-center">
                  Coba Gratis 30 Hari
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-10 py-4 border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Hubungi Tim Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Glassmorphism effect */
        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom gradient text */
        .gradient-text {
          background: linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
