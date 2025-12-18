"use client";

const technologies = {
  "Frontend": ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  "Backend": ["Node.js", "Python", "Java", "GraphQL", "REST APIs", "Microservices"],
  "Mobile": ["React Native", "Flutter", "iOS", "Android", "Progressive Web Apps"],
  "AI & Data": ["Machine Learning", "TensorFlow", "OpenAI", "Data Analytics", "Natural Language Processing"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Serverless"],
  "Database": ["PostgreSQL", "MongoDB", "Redis", "Firebase", "MySQL"]
};

const Skills = () => {
  return (
    <section className="bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl mb-6">
            Technologies & Expertise
          </h2>
          <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            Leveraging cutting-edge technologies to build exceptional solutions
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="space-y-12">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {techs.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm hover:shadow-md hover:scale-105 hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-default"
                  >
                    {tech}
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
