import React from 'react';

const categories = [
  {
    title: 'Cloud (AWS)',
    emoji: '☁️',
    color: 'text-orange-400',
    skills: ['EC2', 'EKS', 'ECS', 'Lambda', 'S3', 'RDS', 'CloudFront', 'IAM', 'CloudWatch', 'Auto Scaling', 'ALB', 'API Gateway', 'ACM', 'Cost Explorer'],
  },
  {
    title: 'Containers & K8s',
    emoji: '🐳',
    color: 'text-blue-400',
    skills: ['Kubernetes (EKS, k3s)', 'Docker', 'Helm', 'Docker Compose', 'ECR', 'RBAC', 'Namespace isolation', 'Pod Security'],
  },
  {
    title: 'Infrastructure as Code',
    emoji: '⚙️',
    color: 'text-purple-400',
    skills: ['Terraform', 'AWS CloudFormation', 'ArgoCD'],
  },
  {
    title: 'CI/CD & Observability',
    emoji: '🔄',
    color: 'text-green-400',
    skills: ['Jenkins', 'GitHub Actions', 'Prometheus', 'Grafana', 'CloudWatch', 'Zero-downtime Deployments', 'ELK Stack'],
  },
  {
    title: 'Security & Tools',
    emoji: '🔒',
    color: 'text-red-400',
    skills: ['IAM', 'OPA', 'Security Groups', 'MFA', 'SSL/TLS', 'Git', 'Linux (Ubuntu/Amazon)', 'Nginx', 'Bash', 'Redis', 'VS Code'],
  },
  {
    title: 'Backend',
    emoji: '🐍',
    color: 'text-yellow-400',
    skills: ['Python', 'Django REST', 'PostgreSQL', 'APIs'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-28 px-6 md:px-12 bg-[#07070a] border-t border-neutral-900 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#ff2a2a 1px, transparent 0)', backgroundSize: '24px 24px' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Technical <span className="text-red-500">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="bg-[#0e0e12] border border-neutral-800/70 rounded-2xl p-7 hover:border-red-500/30 hover:bg-[#12121a] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{cat.emoji}</span>
                <h3 className={`text-base font-bold tracking-wide ${cat.color}`}>{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-[#1a1a24] border border-neutral-700/60 text-neutral-300 rounded-full px-4 py-1.5 text-xs font-semibold hover:border-red-500/40 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
