import React from 'react';

const Achievements = () => {
  return (
    <section id="achievements" className="relative w-full py-28 px-6 md:px-12 bg-[#07070a] border-t border-neutral-900 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#ff2a2a 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
            Certifications & <span className="text-red-500">Education</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Certification Card */}
          <div data-aos="fade-right"
            className="bg-[#0e0e12] border border-neutral-800/70 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300 shadow-xl relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all duration-500" />
            
            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 border border-red-500/20">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">AWS Certified Cloud Practitioner</h3>
            <p className="text-red-400 font-mono text-sm mb-4">Credential ID: CLF-C02</p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Validated overall understanding of the AWS Cloud platform, covering basic cloud concepts, security, compliance, technology, and billing & pricing.
            </p>
          </div>

          {/* Education Card */}
          <div data-aos="fade-left"
            className="bg-[#0e0e12] border border-neutral-800/70 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300 shadow-xl relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all duration-500" />
            
            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 border border-red-500/20">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6.5" /></svg>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">B.Tech in Information Technology</h3>
            <p className="text-red-400 font-mono text-sm mb-1">Parul University, Vadodara</p>
            <p className="text-neutral-500 text-sm font-bold tracking-wide mb-4">2019 – 2023 | CGPA: 7.8</p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Focused on core computer science fundamentals, software engineering principles, and distributed systems.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
