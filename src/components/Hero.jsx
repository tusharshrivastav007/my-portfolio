import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePhoto from '../assets/about/navin_photo.jpg';
const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#07070a] flex items-center">
      {/* Dot grid */}
      <div className="absolute inset-0 z-10 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '28px 28px' }} />
      {/* Red ambient */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-red-700/8 rounded-full blur-[180px] z-10 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-14 py-28 flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

        {/* LEFT: Text */}
        <div className="flex-1 flex flex-col items-start text-left">
          {/* Badge */}
          <div data-aos="fade-up"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-mono font-bold mb-8 tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          {/* Name */}
          <h1 data-aos="fade-up" data-aos-delay="80"
            className="text-white text-5xl md:text-6xl lg:text-7xl font-black mb-3 tracking-tight leading-[1.05]">
            Tushar Shrivastav
          </h1>

          {/* Role */}
          <p data-aos="fade-up" data-aos-delay="160"
            className="text-lg md:text-xl font-bold text-red-500 mb-2 tracking-tight">
            Platform Engineer · DevOps Engineer · Cloud Engineer
          </p>

          {/* Location */}
          <p data-aos="fade-up" data-aos-delay="200"
            className="text-neutral-500 text-sm font-mono mb-6">
            📍 Ahmedabad, India
          </p>

          {/* Bio from resume */}
          <p data-aos="fade-up" data-aos-delay="260"
            className="text-neutral-400 text-base max-w-xl leading-relaxed mb-10 font-medium">
            Building high-availability AWS cloud infrastructure, GitOps pipelines, and Kubernetes-based 
            platforms with 3+ years at Hidden Brains Infotech. Specialized in IaC, CI/CD automation, 
            observability, and cloud security.
          </p>

          {/* Action buttons */}
          <div data-aos="fade-up" data-aos-delay="320" className="flex flex-wrap items-center gap-4 mb-10">
            <a href="#projects"
              className="px-7 py-3 rounded-full bg-white text-black text-sm font-black hover:bg-neutral-100 transition-all duration-300 shadow-lg hover:scale-105">
              View Projects
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-red-600 text-white text-sm font-black hover:bg-red-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-red-900/30 hover:scale-105">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" />
              </svg>
              Resume
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/tushar-shrivastav007" target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group relative p-3 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-neutral-800 transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-neutral-900 border border-neutral-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">LinkedIn</span>
            </a>
            {/* GitHub */}
            <a href="https://github.com/tusharshrivastav007" target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              className="group relative p-3 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:border-white/50 hover:bg-neutral-800 transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-neutral-900 border border-neutral-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">GitHub</span>
            </a>
          </div>

          {/* Tags */}
          <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap gap-3">
            {['☁️ AWS EKS / ECS', '⚙️ Terraform', '🐳 Kubernetes', '🔄 CI/CD Jenkins'].map(tag => (
              <span key={tag} className="text-xs text-neutral-500 bg-neutral-900/60 border border-neutral-800 px-4 py-1.5 rounded-full font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT: Profile photo */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-shrink-0">
          <div className="relative">
            <div className="w-64 md:w-80 lg:w-[340px] aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.7)] ring-1 ring-red-500/10">
              <img src={profilePhoto} alt="Tushar Shrivastav"
                className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/70 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10">
                  <p className="text-[9px] font-mono text-red-500 font-bold tracking-[0.2em] mb-0.5">PLATFORM · DEVOPS · CLOUD</p>
                  <p className="text-sm font-black text-white tracking-wide">Tushar Shrivastav</p>
                  <p className="text-[10px] text-neutral-400 font-medium">Hidden Brains Infotech · Jan 2021 – Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce pointer-events-none">
        <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
