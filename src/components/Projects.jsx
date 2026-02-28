export default function Projects() {
  const projects = [
    {
      name: "Meaningful Beauty (Shopify E-commerce)",
      role: "Programmer Analyst",
      company: "Snippet Commerce 360, Kochi",
      timeline: "June 2024 - Present",
      link: "https://meaningfulbeauty.com/",
      summary:
        "Contributed to a high-traffic Shopify-based e-commerce platform focused on subscription and account management.",
      highlights: [
        "Developed React.js applications to consume and utilize Shopify page data for seamless user experience.",
        "Implemented global state management using Context API and useReducer for complex user and subscription data.",
        "Optimized performance with API response caching to reduce redundant network calls.",
        "Enhanced critical flows: Subscription Overview, Manage Kit, Order History, and Cancellation pages.",
        "Collaborated directly with clients in daily stand-ups to align delivery with business requirements.",
      ],
      tech: ["React.js", "Context API", "useReducer", "Shopify"],
    },
    {
      name: "Real Estate Property Discovery Platform (PWA)",
      role: "Programmer Analyst",
      company: "Snippet Commerce 360, Kochi",
      timeline: "June 2024 - Present",
      summary:
        "Built a Progressive Web App with advanced property search and filtering experience.",
      highlights: [
        "Implemented 40+ dynamic filters with persistence across pages using Redux-based global state.",
        "Designed intuitive UI interactions including interactive breadcrumbs for quick filter changes.",
        "Improved performance through lazy loading, code splitting, and efficient React Hooks usage.",
      ],
      tech: ["React.js", "Redux", "PWA", "Code Splitting"],
    },
    {
      name: "ChatBuddy - Real-Time Social Chat Application",
      role: "Full Stack Developer",
      company: "Personal Project",
      timeline: "Live Project",
      summary:
        "Developed a full-stack MERN application for real-time messaging, user connections, and subscription features.",
      highlights: [
        "Integrated Socket.IO for real-time communication and Razorpay for secure payment processing.",
        "Designed RESTful APIs for user profiles, feeds, and connection requests using Express.js and MongoDB.",
        "Implemented JWT-based authentication and authorization for secure session management.",
        "Deployed on AWS EC2 with NGINX reverse proxy and PM2 process management.",
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "Razorpay", "AWS EC2"],
      link: "https://chatbuddy.co.in/",
    },
  ];

  return (
    <section id="projects" className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-xl border border-[#cfd6e6] bg-white/70 p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-[#1f2947] hover:text-[#16203b] transition"
                    >
                      Visit
                    </a>
                  )}
                </div>
                <p className="text-[#5a627f] mt-1">
                  {project.role} | {project.company}
                </p>
              </div>
              <p className="text-sm text-[#76809f]">{project.timeline}</p>
            </div>

            <p className="text-[#5a627f] mt-4">{project.summary}</p>

            <ul className="mt-4 space-y-2 text-[#2f3654] list-disc list-inside">
              {project.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1 rounded-full bg-white/65 border border-[#cfd6e6] text-[#2b3351]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
