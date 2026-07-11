import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      e.target.reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full py-28 px-6 md:px-12 bg-[#07070a] border-t border-neutral-900 overflow-hidden">
      {/* Dot grid bg */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#ff2a2a 1px, transparent 0)', backgroundSize: '24px 24px' }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-neutral-400 text-base max-w-md mx-auto leading-relaxed">
            Currently open for new opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Direct contact cards */}
          <a
            href="mailto:tusharshrivastav007@gmail.com"
            data-aos="fade-up"
            className="flex items-center gap-5 bg-[#0e0e12] border border-neutral-800 rounded-2xl p-6 hover:border-red-500/50 hover:bg-[#12121a] transition-all duration-300 group"
          >
            <div className="p-3 rounded-xl bg-red-600/10 border border-red-500/20 text-red-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-2 11H4a2 2 0 01-2-2V8a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider mb-1">Email</p>
              <p className="text-white font-bold text-sm group-hover:text-red-400 transition-colors">tusharshrivastav007@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+917878523490"
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex items-center gap-5 bg-[#0e0e12] border border-neutral-800 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-[#12121a] transition-all duration-300 group"
          >
            <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider mb-1">Phone</p>
              <p className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">+91 7878523490</p>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
