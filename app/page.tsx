"use client";

import { DialogTrigger } from "@/components/ui/dialog";

import type React from "react";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Code,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Phone,
  Calendar,
  Building,
  Users,
  Clock,
  TrendingUp,
  Zap,
  Download,
  Linkedin,
  Award,
  Star,
  Eye,
  MessageCircle,
  Send,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Portfolio() {
  const [typedText, setTypedText] = useState("");
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const phrases = [
    "Hi, I'm Mahmoud Nabil",
    "Frontend Developer (Angular)",
    "Building Modern, Scalable, Animated Web Apps",
  ];

  const projects = [
    {
      id: 1,
      title: "Cairah AI Healthcare ",
      description:
        "Modern healthcare platform with AI-powered features and responsive design.",
      fullDescription:
        "A cutting-edge healthcare platform that leverages artificial intelligence to provide personalized medical insights. Built with Angular and featuring smooth GSAP animations, the platform offers an intuitive user experience with real-time data visualization and responsive design across all devices.",
      tech: ["Angular", "TypeScript", "SCSS", "GSAP"],
      color: "border-primary/50",
      gradient: "from-primary to-secondary",
      features: [
        "AI-Powered Diagnostics",
        "Real-time Analytics",
        "Responsive Design",
        "GSAP Animations",
      ],
      status: "Live",
      duration: "3 months",
      team: "4 developers",
    },
    {
      id: 2,
      title: "LMS Platform",
      description:
        "Comprehensive learning management system with interactive features.",
      fullDescription:
        "A full-featured learning management system designed for educational institutions. The platform includes course management, student tracking, interactive assessments, and real-time communication tools. Built with Angular and RxJS for reactive programming patterns.",
      tech: ["Angular", "RxJS", "Bootstrap", "TypeScript"],
      color: "border-secondary/50",
      gradient: "from-secondary to-accent",
      features: [
        "Course Management",
        "Student Analytics",
        "Interactive Assessments",
        "Real-time Chat",
      ],
      status: "Live",
      duration: "6 months",
      team: "6 developers",
    },
    {
      id: 3,
      title: "Khardah Associations",
      description:
        "Community platform for local associations and organizations.",
      fullDescription:
        "A community-driven platform that connects local associations and organizations. Features include event management, member directories, communication tools, and resource sharing. The platform emphasizes user engagement and community building.",
      tech: ["Angular", "SCSS", "TypeScript"],
      color: "border-accent/50",
      gradient: "from-accent to-primary",
      features: [
        "Event Management",
        "Member Directory",
        "Resource Sharing",
        "Community Forums",
      ],
      status: "Live",
      duration: "4 months",
      team: "3 developers",
    },
    {
      id: 4,
      title: "Parq Parking Platform",
      description:
        "Smart parking solution with real-time availability tracking.",
      fullDescription:
        "An innovative parking management system that provides real-time parking space availability, reservation capabilities, and payment processing. The platform uses advanced algorithms to optimize parking space utilization and enhance user experience.",
      tech: ["Angular", "TypeScript", "GSAP", "Bootstrap"],
      color: "border-primary/50",
      gradient: "from-primary via-secondary to-accent",
      features: [
        "Real-time Tracking",
        "Space Reservation",
        "Payment Integration",
        "Analytics Dashboard",
      ],
      status: "Live",
      duration: "5 months",
      team: "5 developers",
    },
  ];

  const skills = [
    {
      name: "Angular",
      level: 90,
      color: "text-red-500",
      icon: "🅰️",
      category: "Frontend Framework",
      experience: "2+ years",
    },
    {
      name: "TypeScript",
      level: 85,
      color: "text-blue-500",
      icon: "📘",
      category: "Programming Language",
      experience: "2+ years",
    },
    {
      name: "GSAP",
      level: 80,
      color: "text-green-500",
      icon: "🎬",
      category: "Animation Library",
      experience: "1+ years",
    },
    {
      name: "RxJS",
      level: 75,
      color: "text-purple-500",
      icon: "🔄",
      category: "Reactive Programming",
      experience: "1+ years",
    },
    {
      name: "SCSS",
      level: 85,
      color: "text-pink-500",
      icon: "🎨",
      category: "CSS Preprocessor",
      experience: "2+ years",
    },
    {
      name: "Bootstrap",
      level: 80,
      color: "text-indigo-500",
      icon: "🅱️",
      category: "CSS Framework",
      experience: "2+ years",
    },
  ];

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      // Hero section animations
      const heroTl = gsap.timeline();
      heroTl
        .from(".hero-content", {
          opacity: 0,
          y: 100,
          duration: 1.2,
          ease: "power3.out",
        })
        .from(
          ".hero-buttons",
          {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-social",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3"
        );

      // Particle animation
      if (particlesRef.current) {
        const particles = particlesRef.current.children;
        gsap.set(particles, {
          x: () => Math.random() * window.innerWidth,
          y: () => Math.random() * window.innerHeight,
          scale: () => Math.random() * 0.5 + 0.5,
          opacity: () => Math.random() * 0.5 + 0.2,
        });

        gsap.to(particles, {
          y: "-=100",
          rotation: 360,
          duration: () => Math.random() * 10 + 10,
          repeat: -1,
          ease: "none",
          stagger: {
            each: 0.1,
            repeat: -1,
          },
        });
      }

      // About section scroll animations
      gsap.fromTo(
        ".about-card",
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Timeline animations
      gsap.fromTo(
        ".timeline-item",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Skills section animations
      gsap.fromTo(
        ".skill-card",
        {
          opacity: 0,
          y: 60,
          rotationY: 45,
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Skill bar animations
      gsap.fromTo(
        ".skill-bar",
        {
          width: "0%",
        },
        {
          width: (i, el) => el.dataset.width + "%",
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Projects section animations
      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          y: 100,
          rotationX: 45,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Contact section animations
      gsap.fromTo(
        ".contact-item",
        {
          opacity: 0,
          scale: 0.8,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax scrolling for background elements
      gsap.to(".parallax-slow", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".parallax-fast", {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Smooth scroll reveal for text elements
      gsap.utils.toArray(".reveal-text").forEach((element: any) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Hover animations for interactive elements
      gsap.utils.toArray(".hover-lift").forEach((element: any) => {
        const tl = gsap.timeline({ paused: true });
        tl.to(element, {
          y: -10,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });

        element.addEventListener("mouseenter", () => tl.play());
        element.addEventListener("mouseleave", () => tl.reverse());
      });
    };

    loadGSAP();
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = phrases[currentPhrase];

    if (typedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        if (currentPhrase < phrases.length - 1) {
          setCurrentPhrase(currentPhrase + 1);
          setTypedText("");
        }
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentPhrase]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div
        ref={particlesRef}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full parallax-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(8,145,178,0.1),transparent_50%)]" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float parallax-slow" />
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float parallax-fast"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-float parallax-slow"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 h-32 flex items-center justify-center hero-content">
            <h1 className="text-4xl md:text-6xl font-bold text-glow">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance hero-content">
            Crafting exceptional user experiences with cutting-edge technology
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center hero-buttons">
            <Button size="lg" className="glow animate-pulse-glow hover-lift">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass bg-transparent border border-gray-800 text-gray-900 dark:border-gray-300 dark:text-gray-100 hover-lift"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://linkedin.com/in/mahmoud-elkhol"
              className="text-muted-foreground hover:text-primary transition-colors hero-social hover-lift"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Mahmoudnabil911"
              className="text-muted-foreground hover:text-primary transition-colors hero-social hover-lift"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:mahmodnabil2328@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hero-social hover-lift"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow reveal-text">
            About Me
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Main About Card */}
            <Card className="glass p-8 glow lg:col-span-2 about-card hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center glow">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary">
                    Mahmoud Nabil
                  </h3>
                  <p className="text-muted-foreground">
                    Frontend Developer (Angular)
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 reveal-text">
                Passionate Frontend Developer with expertise in Angular,
                specializing in creating modern, scalable, and highly animated
                web applications. I combine technical excellence with creative
                design principles to deliver exceptional user experiences that
                engage and delight users.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6 reveal-text">
                My journey in web development spans across various industries,
                from healthcare AI platforms to comprehensive learning
                management systems. I thrive on transforming complex
                requirements into intuitive, performant, and visually stunning
                applications.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge className="glass bg-primary/20 text-primary border-primary/30 hover-lift">
                  <Zap className="w-3 h-3 mr-1" />
                  Performance Focused
                </Badge>
                <Badge className="glass bg-secondary/20 text-secondary border-secondary/30 hover-lift">
                  <Code className="w-3 h-3 mr-1" />
                  Clean Code Advocate
                </Badge>
                <Badge className="glass bg-accent/20 text-accent border-accent/30 hover-lift">
                  <Building className="w-3 h-3 mr-1" />
                  Scalable Architecture
                </Badge>
              </div>
            </Card>

            {/* Contact Info Card */}
            <Card className="glass p-6 glow about-card hover-lift">
              <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm reveal-text">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    mahmodnabil2328@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm reveal-text">
                  <span className="h-4 w-4 text-muted-foreground">📱</span>
                  <span className="text-muted-foreground">+201027197422</span>
                </div>
                <div className="flex items-center gap-3 text-sm reveal-text">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Nasr City, Cairo, Egypt
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16 timeline-container">
            <h3 className="text-2xl font-bold text-center mb-8 text-glow reveal-text">
              Professional Experience
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

              <div className="space-y-8">
                {/* Current Position */}
                <div className="relative flex items-start gap-6 timeline-item">
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center glow">
                    <Building className="h-8 w-8 text-white" />
                  </div>

                  <Card className="glass p-6 glow flex-1 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-primary">
                          Frontend Developer
                        </h4>
                        <p className="text-lg text-secondary">Dopave</p>
                      </div>
                      <Badge className="glass bg-primary/20 text-primary border-primary/30 w-fit">
                        <Calendar className="w-3 h-3 mr-1" />
                        Feb 2024 - Present
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4 reveal-text">
                      Leading frontend development initiatives, creating
                      responsive and interactive web applications using Angular,
                      TypeScript, and modern CSS frameworks. Collaborating with
                      cross-functional teams to deliver high-quality user
                      experiences.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="glass hover-lift">
                        Angular
                      </Badge>
                      <Badge variant="secondary" className="glass hover-lift">
                        TypeScript
                      </Badge>
                      <Badge variant="secondary" className="glass hover-lift">
                        SCSS
                      </Badge>
                      <Badge variant="secondary" className="glass hover-lift">
                        RxJS
                      </Badge>
                      <Badge variant="secondary" className="glass hover-lift">
                        Team Leadership
                      </Badge>
                    </div>
                  </Card>
                </div>

                {/* Freelance Experience */}
                <div className="relative flex items-start gap-6 timeline-item">
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center glow">
                    <Code className="h-8 w-8 text-white" />
                  </div>

                  <Card className="glass p-6 glow flex-1 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-secondary">
                          Freelance Frontend Developer
                        </h4>
                        <p className="text-lg text-accent">Independent</p>
                      </div>
                      <Badge className="glass bg-secondary/20 text-secondary border-secondary/30 w-fit">
                        <Calendar className="w-3 h-3 mr-1" />
                        Jan 2023 - Feb 2024
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4 reveal-text">
                      Delivered custom web solutions for diverse clients,
                      specializing in Angular applications with advanced
                      animations and responsive designs. Managed full project
                      lifecycles from concept to deployment, ensuring client
                      satisfaction and technical excellence.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="glass hover-lift">
                        Angular
                      </Badge>
                      <Badge variant="secondary" className="glass hover-lift">
                        GSAP
                      </Badge>
                      <Badge variant="secondary" className="glass hover-lift">
                        Bootstrap
                      </Badge>
                      <Badge variant="secondary" className="glass hover-lift">
                        Client Management
                      </Badge>
                      <Badge variant="secondary" className="glass hover-lift">
                        Project Planning
                      </Badge>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass p-6 glow text-center about-card hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 glow">
                <span className="text-2xl font-bold text-white">15+</span>
              </div>
              <h4 className="font-semibold text-primary mb-2">
                Projects Completed
              </h4>
              <p className="text-sm text-muted-foreground reveal-text">
                Successfully delivered web applications across various
                industries
              </p>
            </Card>

            <Card className="glass p-6 glow text-center about-card hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 glow">
                <span className="text-2xl font-bold text-white">2+</span>
              </div>
              <h4 className="font-semibold text-secondary mb-2">
                Years Experience
              </h4>
              <p className="text-sm text-muted-foreground reveal-text">
                Dedicated to frontend development and user experience design
              </p>
            </Card>

            <Card className="glass p-6 glow text-center about-card hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 glow">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-accent mb-2">Best Practices</h4>
              <p className="text-sm text-muted-foreground reveal-text">
                Committed to exceeding expectations and delivering quality
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 px-4 bg-card/20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-glow reveal-text">
            Skills & Technologies
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-balance reveal-text">
            Expertise in modern frontend technologies with a focus on
            performance, scalability, and user experience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 skills-grid">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="glass p-6 glow hover:glow-accent transition-all duration-500 group cursor-pointer skill-card hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.category}
                    </p>
                  </div>
                  <Badge className="glass bg-primary/20 text-primary border-primary/30 text-xs">
                    {skill.experience}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Proficiency</span>
                    <span className={`text-sm font-bold ${skill.color}`}>
                      {skill.level}%
                    </span>
                  </div>

                  <div className="relative">
                    <div className="w-full bg-muted/20 rounded-full h-3 overflow-hidden">
                      <div
                        className="skill-bar h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-2000 ease-out relative overflow-hidden"
                        data-width={skill.level}
                        style={{ width: "0%" }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3" />
                    <span>Continuously improving</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass p-6 glow text-center skill-card hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 glow">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-primary mb-2">
                Frontend Development
              </h3>
              <p className="text-sm text-muted-foreground reveal-text">
                Specialized in Angular, TypeScript, and modern CSS frameworks
                for building scalable applications.
              </p>
            </Card>

            <Card className="glass p-6 glow text-center skill-card hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 glow">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-secondary mb-2">
                Animation & UX
              </h3>
              <p className="text-sm text-muted-foreground reveal-text">
                Expert in GSAP animations and creating engaging user experiences
                with smooth interactions.
              </p>
            </Card>

            <Card className="glass p-6 glow text-center skill-card hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 glow">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-accent mb-2">Best Practices</h3>
              <p className="text-sm text-muted-foreground reveal-text">
                Committed to clean code, performance optimization, and following
                industry standards.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow reveal-text">
            Featured Projects
          </h2>

          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-balance reveal-text">
            Explore my portfolio of innovative web applications, each crafted
            with precision and attention to detail.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group perspective-1000 project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card
                  className={`glass p-0 glow hover:glow-accent transition-all duration-500 cursor-pointer group-hover:scale-105 group-hover:-rotate-1 transform-gpu ${project.color} border-2 overflow-hidden relative hover-lift`}
                >
                  {/* Project Header with Gradient */}
                  <div
                    className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 right-4">
                      <Badge className="glass bg-white/20 text-white border-white/30">
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-6">
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <Clock className="h-4 w-4" />
                        {project.duration}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {project.team}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2 reveal-text">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="glass text-xs hover-lift"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Key Features Preview */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        {project.features.slice(0, 4).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1 text-muted-foreground reveal-text"
                          >
                            <Star className="h-3 w-3 text-primary" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="group-hover:text-primary flex-1 hover-lift"
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="glass max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl text-glow">
                              {project.title}
                            </DialogTitle>
                          </DialogHeader>

                          <div className="space-y-6">
                            {/* Project Header */}
                            <div
                              className={`h-24 bg-gradient-to-br ${project.gradient} rounded-lg relative overflow-hidden`}
                            >
                              <div className="absolute inset-0 bg-black/20" />
                              <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white">
                                <Badge className="glass bg-white/20 text-white border-white/30">
                                  {project.status}
                                </Badge>
                                <div className="flex items-center gap-2 text-sm">
                                  <Clock className="h-4 w-4" />
                                  {project.duration}
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Users className="h-4 w-4" />
                                  {project.team}
                                </div>
                              </div>
                            </div>

                            {/* Full Description */}
                            <div>
                              <h4 className="font-semibold text-primary mb-2">
                                Project Overview
                              </h4>
                              <p className="text-muted-foreground leading-relaxed">
                                {project.fullDescription}
                              </p>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className="font-semibold text-secondary mb-3">
                                Technologies Used
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                  <Badge
                                    key={tech}
                                    className="glass bg-primary/20 text-primary border-primary/30"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h4 className="font-semibold text-accent mb-3">
                                Key Features
                              </h4>
                              <div className="grid grid-cols-2 gap-3">
                                {project.features.map((feature, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-2 text-sm"
                                  >
                                    <Star className="h-4 w-4 text-primary" />
                                    {feature}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 pt-4">
                              <Button className="glow flex-1 hover-lift">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                View Live Project
                              </Button>
                              <Button
                                variant="outline"
                                className="glass bg-transparent hover-lift"
                              >
                                <Github className="mr-2 h-4 w-4" />
                                Source Code
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Button
                        variant="outline"
                        size="sm"
                        className="glass bg-transparent hover-lift"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="
      glass glow bg-transparent hover-lift reveal-text
      border border-gray-300 dark:border-gray-700
      text-gray-800 dark:text-gray-200
      hover:bg-gray-100 dark:hover:bg-gray-800
      hover:text-gray-900 dark:hover:text-white
      transition-all duration-300 ease-in-out
    "
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-4 bg-card/20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-glow reveal-text">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-balance reveal-text">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <Card className="glass p-6 glow hover:glow-accent transition-all duration-300 group contact-item hover-lift">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center glow group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      mahmodnabil2328@gmail.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6 glow hover:glow-accent transition-all duration-300 group contact-item hover-lift">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center glow group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      +201027197422
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6 glow hover:glow-accent transition-all duration-300 group contact-item hover-lift">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center glow group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Nasr City, Cairo, Egypt
                    </p>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <div className="flex gap-4 pt-4 contact-item">
                <a
                  href="https://linkedin.com/in/mahmoud-elkhol"
                  className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center glow hover:glow-accent transition-all duration-300 hover:scale-110 hover-lift"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
                <a
                  href="https://github.com/Mahmoudnabil911"
                  className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center glow hover:glow-accent transition-all duration-300 hover:scale-110 hover-lift"
                >
                  <Github className="h-6 w-6 text-white" />
                </a>
                <a
                  href="mailto:mahmodnabil2328@gmail.com"
                  className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center glow hover:glow-accent transition-all duration-300 hover:scale-110 hover-lift"
                >
                  <MessageCircle className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>

            <Card className="glass p-8 glow lg:col-span-2 contact-item hover-lift">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Input
                      className="glass peer pt-6 pb-2 px-4 placeholder-transparent"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        formData.name || focusedField === "name"
                          ? "top-2 text-xs text-primary"
                          : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
                      }`}
                    >
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <Input
                      className="glass peer pt-6 pb-2 px-4 placeholder-transparent"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        formData.email || focusedField === "email"
                          ? "top-2 text-xs text-primary"
                          : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
                      }`}
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <Textarea
                    className="glass peer pt-6 pb-2 px-4 min-h-32 placeholder-transparent resize-none"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      formData.message || focusedField === "message"
                        ? "top-2 text-xs text-primary"
                        : "top-6 text-sm text-muted-foreground"
                    }`}
                  >
                    Project Details
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full glow animate-pulse-glow group relative overflow-hidden hover-lift"
                  size="lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground reveal-text">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Available for freelance projects
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Usually responds within 24 hours
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground reveal-text">
            © 2024 Mahmoud Nabil. Built with Next.js and passion for innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}
