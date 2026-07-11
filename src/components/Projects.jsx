import React from 'react';

const projects = [
  {
    title: "Bankpe – End-to-End Cloud & DevOps Platform",
    tech: "AWS, Terraform, Kubernetes, Jenkins",
    details: [
      "Provisioned a production-ready AWS ecosystem using reusable Terraform modules with remote state management and workspaces for automated environment scaling.",
      "Integrated Jenkins with GitHub Webhooks for automated rolling deployments to EKS, including automated health checks and rollback mechanisms to ensure system stability."
    ],
    github: "https://github.com/tusharshrivastav007/bankpe-devops"
  },
  {
    title: "Xoom App – Scalable Cloud-Native Backend",
    tech: "Django REST, AWS ECS, CloudWatch, S3",
    details: [
      "Engineered containerized microservices on AWS ECS using Auto Scaling based on real-time CPU and Memory utilization, ensuring horizontal scalability under variable traffic loads.",
      "Established global content delivery using S3 and CloudFront while configuring proactive incident response with CloudWatch Alarms and custom monitoring dashboards."
    ],
    github: "https://github.com/tusharshrivastav007/xoom-backend"
  },
  {
    title: "Django CI/CD Automation Lab",
    tech: "Docker, Jenkins, GitHub Actions, DevOps",
    details: [
      "Developed a reference CI/CD architecture for Django applications using multi-stage Dockerfiles to optimize production image sizes and integrated security linting in the Jenkins pipeline."
    ],
    github: "https://github.com/tusharshrivastav007/django-cicd-lab"
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

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
