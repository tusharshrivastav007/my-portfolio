import React from 'react';
const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#07070a] py-28 px-6 md:px-12 border-t border-neutral-900 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#ff2a2a 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
            About <span className="text-red-500">Me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div data-aos="fade-up" data-aos-delay="150" className="flex-1">
            <p className="text-base md:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl">
              Platform, DevOps, and Cloud Engineer with <strong className="text-white">3+ years of hands-on experience</strong> at Hidden Brains Infotech Pvt. Ltd., Ahmedabad. 
              I specialize in designing <strong className="text-white">high-availability AWS cloud systems</strong>, implementing Infrastructure as Code (IaC), 
              setting up GitOps pipelines with ArgoCD & Helm, and architecting robust Kubernetes-based platforms on EKS.
            </p>

            {/* Detail grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mb-10">
              {[
                { label: 'Name',      value: 'Tushar Shrivastav' },
                { label: 'Role',      value: 'Platform / DevOps / Cloud Engineer' },
                { label: 'Company',   value: 'Hidden Brains Infotech Pvt. Ltd.' },
                { label: 'Location',  value: 'Ahmedabad, India' },
                { label: 'Email',     value: 'tusharshrivastav007@gmail.com' },
                { label: 'Phone',     value: '+91 7879525484' },
                { label: 'LinkedIn',  value: 'linkedin.com/in/tushar-shrivastav007', link: 'https://www.linkedin.com/in/tushar-shrivastav007' },
                { label: 'GitHub',    value: 'github.com/tusharshrivastav007', link: 'https://github.com/tusharshrivastav007' },
                { label: 'Education', value: 'B.Tech IT — Parul University, Vadodara' },
                { label: 'CGPA',      value: '7.8 (2019 – 2023)' },
                { label: 'Cert',      value: 'AWS Certified Cloud Practitioner (CLF-C02)' },
                { label: 'Status',    value: 'Open to Work' },
              ].map(item => (
                <div key={item.label} className="flex gap-3 items-start border-b border-neutral-900 pb-3">
                  <span className="text-red-500 font-bold text-[11px] uppercase tracking-wider mt-0.5 w-20 flex-shrink-0">{item.label}</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-neutral-300 text-sm font-medium break-all hover:text-red-500 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-neutral-300 text-sm font-medium break-all">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-red-600 text-white text-sm font-bold hover:bg-red-700 transition-all flex items-center gap-2 hover:scale-105 shadow-md shadow-red-900/30">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" />
                </svg>
                Resume
              </a>
              <a href="#contact"
                className="px-6 py-3 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 text-sm font-bold hover:bg-neutral-800 hover:text-white transition-all hover:scale-105">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
