import { Download, User, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Full-Stack Developer & UI/UX Enthusiast</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating 
                scalable, user-friendly applications using modern technologies. I'm passionate 
                about clean code, intuitive design, and delivering exceptional user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy working with React, Node.js, TypeScript, and modern CSS frameworks 
                to build applications that not only look great but perform exceptionally well. 
                I'm always eager to learn new technologies and take on challenging projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Available for projects</span>
              </div>
            </div>

            <Button className="gradient-bg hover:shadow-glow transition-all duration-300">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 text-center hover-lift">
              <div className="gradient-text text-3xl font-bold mb-2">50+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="gradient-text text-3xl font-bold mb-2">5+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="gradient-text text-3xl font-bold mb-2">30+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="gradient-text text-3xl font-bold mb-2">100%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;