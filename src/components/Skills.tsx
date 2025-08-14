import { Code, Database, Globe, Palette, Server, Smartphone } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
      color: 'text-primary'
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
      color: 'text-secondary'
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      skills: ['AWS', 'Firebase', 'Docker', 'GraphQL', 'Redis'],
      color: 'text-accent'
    },
    {
      icon: Palette,
      title: 'Design & UX',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'UI Design', 'User Research'],
      color: 'text-primary'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA'],
      color: 'text-secondary'
    },
    {
      icon: Globe,
      title: 'Tools & Others',
      skills: ['Git', 'Webpack', 'Jest', 'CI/CD', 'Agile'],
      color: 'text-accent'
    }
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL',
    'MongoDB', 'AWS', 'Docker', 'Git', 'Figma', 'Next.js', 'Tailwind CSS',
    'GraphQL', 'Redux', 'Express', 'Firebase', 'Jest', 'Webpack', 'Vue.js'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="p-6 hover-lift group">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-muted group-hover:${category.color} transition-colors duration-300`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold ml-3">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale shadow-soft"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;