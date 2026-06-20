import React from 'react';

const experiences = [
  {
    role: "Software Engineer – Platform, DevOps & Backend",
    company: "Hidden Brains Infotech Pvt. Ltd.",
    location: "Ahmedabad, India",
    duration: "Jan 2023 – Present",
    details: [
      "Cloud Architecture: Engineered and maintained high-availability AWS infrastructure including Amazon EKS, ECS, and Lambda to support over 10,000 daily transactions across production environments.",
      "Infrastructure as Code (IaC): Standardized cloud resource provisioning using Terraform and CloudFormation, eliminating manual configuration errors and enabling consistent environment replication across dev, staging, and production.",
      "GitOps & Kubernetes: Pioneered the implementation of ArgoCD and Helm for declarative deployments on EKS, utilizing namespace isolation and RBAC to ensure secure, self-healing, and zero-downtime application rollouts.",
      "Observability & Monitoring: Architected a comprehensive monitoring stack using Prometheus and Grafana, providing real-time visualization of resource utilization, system health, and performance metrics.",
      "CI/CD Automation: Developed robust delivery pipelines via Jenkins and GitHub Actions, streamlining the software lifecycle and reducing deployment lead times by 50% through automated release workflows.",
      "Security & Governance: Enforced cloud security best practices using IAM least-privilege roles, OPA-based policy controls, and automated SSL/TLS management, maintaining a record of zero security incidents.",
      "Backend Performance: Optimized Python and Django RESTful APIs and database schemas, resulting in a 30% improvement in response latency through strategic indexing and Redis-based caching.",
      "Cost Optimization: Implemented AWS serverless architectures and intelligent resource scheduling, reducing infrastructure overhead by 40% while maintaining 99.9% uptime SLAs."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full py-28 px-6 md:px-12 bg-[#07070a] border-t border-neutral-900 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#ff2a2a 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Professional <span className="text-red-500">Experience</span>
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} data-aos="fade-up" className="relative pl-8 md:pl-0">
              {/* Timeline Line (Mobile) */}
              <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-neutral-800" />

              <div className="bg-[#0e0e12] border border-neutral-800/70 rounded-2xl p-6 md:p-8 hover:border-red-500/30 transition-all duration-300 relative group shadow-xl">
                {/* Node */}
                <div className="hidden md:block absolute -left-12 top-10 w-4 h-4 rounded-full bg-[#07070a] border-2 border-red-500 group-hover:bg-red-500 transition-colors duration-300 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-6 border-b border-neutral-800/60">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-1 tracking-tight">{exp.role}</h3>
                    <p className="text-red-500 font-bold text-sm tracking-wide">{exp.company}</p>
                    <p className="text-neutral-500 text-xs mt-1 font-mono">📍 {exp.location}</p>
                  </div>
                  <div className="shrink-0 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold px-4 py-2 rounded-full h-fit">
                    {exp.duration}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-4">
                  {exp.details.map((detail, dIdx) => {
                    const colonIndex = detail.indexOf(':');
                    const boldText = detail.substring(0, colonIndex + 1);
                    const restText = detail.substring(colonIndex + 1);
                    return (
                      <li key={dIdx} className="flex gap-3 text-neutral-400 text-sm md:text-base leading-relaxed">
                        <span className="text-red-500 mt-1 shrink-0">▹</span>
                        <span>
                          <strong className="text-neutral-200">{boldText}</strong>{restText}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
