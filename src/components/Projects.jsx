import React from 'react';

const projects = [
  {
    title: "Bankpe – End-to-End Cloud & DevOps Platform",
    tech: "AWS, Terraform, Kubernetes, Jenkins",
    details: [
      "Provisioned a production-ready AWS ecosystem using reusable Terraform modules with remote state management and workspaces for automated environment scaling.",
      "Integrated Jenkins with GitHub Webhooks for automated rolling deployments to EKS, including automated health checks and rollback mechanisms to ensure system stability."
    ],
    github: "https://github.com/tusharshrivastav/bankpe-devops"
  },
  {
    title: "Xoom App – Scalable Cloud-Native Backend",
    tech: "Django REST, AWS ECS, CloudWatch, S3",
    details: [
      "Engineered containerized microservices on AWS ECS using Auto Scaling based on real-time CPU and Memory utilization, ensuring horizontal scalability under variable traffic loads.",
      "Established global content delivery using S3 and CloudFront while configuring proactive incident response with CloudWatch Alarms and custom monitoring dashboards."
    ],
    github: "https://github.com/tusharshrivastav/xoom-backend"
  },
  {
    title: "Django CI/CD Automation Lab",
    tech: "Docker, Jenkins, GitHub Actions, DevOps",
    details: [
      "Developed a reference CI/CD architecture for Django applications using multi-stage Dockerfiles to optimize production image sizes and integrated security linting in the Jenkins pipeline."
    ],
    github: "https://github.com/tusharshrivastav/django-cicd-lab"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full py-28 px-6 md:px-12 bg-[#07070a] border-t border-neutral-900 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#ff2a2a 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
            Featured <span className="text-red-500">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}
              className="bg-[#0e0e12] border border-neutral-800/70 rounded-2xl overflow-hidden hover:border-red-500/40 transition-all duration-300 group flex flex-col h-full shadow-lg">
              
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-red-400 transition-colors">{project.title}</h3>
                
                <p className="text-red-500/80 text-xs font-mono mb-4 bg-red-500/10 w-fit px-3 py-1 rounded-md border border-red-500/20">
                  {project.tech}
                </p>

                <ul className="space-y-3 mb-6 flex-grow">
                  {project.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-2 text-neutral-400 text-sm leading-relaxed">
                      <span className="text-red-500 mt-1 shrink-0 text-xs">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-white hover:text-red-400 transition-colors w-fit">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
