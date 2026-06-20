import React from 'react';

const stats = [
  { value: '3+',     label: 'YEARS EXP' },
  { value: '10K+',   label: 'DAILY TXN' },
  { value: '40%',    label: 'COST REDUCED' },
  { value: '50%',    label: 'FASTER DEPLOY' },
  { value: '99.9%',  label: 'UPTIME SLA' },
  { value: '0',      label: 'SEC INCIDENTS' },
];

const Stats = () => (
  <section id="stats" className="w-full bg-[#07070a] border-t border-b border-neutral-900 py-10 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, i) => (
          <div key={i} data-aos="fade-up" data-aos-delay={i * 80}
            className="flex flex-col items-center justify-center bg-[#0e0e12] border border-neutral-800/70 rounded-2xl py-8 px-4 hover:border-red-500/40 hover:bg-[#12121a] transition-all duration-300 group">
            <span className="text-3xl md:text-4xl font-black text-white tracking-tight group-hover:text-red-400 transition-colors duration-300">
              {stat.value}
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.18em] text-neutral-500 mt-2 uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
