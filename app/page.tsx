"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ShipIcon as ChipIcon,
  CircuitBoardIcon,
  CpuIcon,
  GraduationCapIcon,
  MailIcon,
  MenuIcon,
  XIcon,
  LinkedinIcon,
  GithubIcon,
  FileTextIcon,
  AwardIcon,
  ZapIcon,
  DatabaseIcon,
  SettingsIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ExternalLinkIcon,
} from "lucide-react"
import { BriefcaseIcon } from "@heroicons/react/24/outline"
//
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("intro")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null)
  const [activeEducation, setActiveEducation] = useState<string | null>("masters")
  const [activeExperience, setActiveExperience] = useState<string | null>(null)
  const [showMoreProjects, setShowMoreProjects] = useState(false)

  const sections = [
    { id: "intro", label: "Introduction", icon: ChipIcon },
    { id: "experience", label: "Experience", icon: BriefcaseIcon },
    { id: "projects", label: "Projects", icon: CpuIcon },
    { id: "skills", label: "Skills", icon: SettingsIcon },
    { id: "certifications", label: "Certifications", icon: AwardIcon },
    { id: "contact", label: "Contact", icon: MailIcon },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  const toggleExperience = (expId: string) => {
    setExpandedExperience(expandedExperience === expId ? null : expId)
  }

  const projects = [
    {
      id: "rtl-repository",
      title: "RTL Projects-for Learning and Verification",
      period: "Ongoing",
      shortDesc:
        "Designed, simulated, and verified 40+ RTL modules including counters, adders, multipliers, multiplexers, ALUs, and small processor cores and Protocols",
      fullDesc: [
        "Designed, simulated, and verified 40+ RTL modules including counters, adders, multipliers, multiplexers, ALUs, and small processor cores using Icarus Verilog and GTKWave.",
        "Applied rigorous functional verification techniques including testbench creation, waveform analysis, and corner-case testing to validate RTL behavior.",
        "Maintained organized GitHub repository demonstrating professional coding practices, documentation, and version control.",
      ],
      tools: ["Icarus Verilog", "GTKWave", "Verification", "GitHub", "SystemVerilog", "Testbenches"],
      github: "https://github.com/kruthi2316/RTL_Projects",
      icon: DatabaseIcon,
      color: "chart-4",
    },
    {
      id: "soc-implementation",
      title: "Multi-Voltage Domain SoC Implementation with Advanced Power Optimization",
      period: "06/2024–08/2024",
      shortDesc:
        "Designed a multi-voltage SoC (0.8V, 0.9V, 1.2V) with IEEE 1801 UPF power intent integrating power gating, isolation cells, and level shifters.",
      fullDesc: [
        "Designed a multi-voltage SoC (0.8V, 0.9V, 1.2V) with IEEE 1801 UPF power intent integrating power gating, isolation cells, and level shifters for energy-efficient operation.",
        "Executed full RTL-to-GDSII flow using Cadence Genus and Innovus with NanGate 45nm library achieving 40% power reduction and optimized area (41×41μm) with clean DRC/LVS reports.",
        "Developed TCL automation scripts for floorplanning, placement optimization, power domain partitioning, and physical verification, enhancing design flow productivity.",
        "Applied STA, cross-domain timing closure, hierarchical power distribution, and low-power design methodologies to ensure robust functionality.",
      ],
      tools: ["Cadence Genus", "Innovus", "UPF", "TCL", "NanGate 45nm", "Low Power Design"],
      github: "https://github.com/kruthi2316/Multi-Voltage-Domain-SoC-Implementation-with-Advanced-Power-Optimization",
      icon: CpuIcon,
      color: "secondary",
    },
    {
      id: "rtl-gdsii-counter",
      title: "RTL-to-GDSII Implementation of 4-bit Synchronous Counter in 45nm CMOS Technology",
      period: "06/2024–08/2024",
      shortDesc:
        "Completed ASIC design flow using Synopsys Design Compiler/Vision and Cadence Innovus, including synthesis, floorplanning, placement, routing, and sign-off verification.",
      fullDesc: [
        "Completed ASIC design flow using Synopsys Design Compiler/Vision and Cadence Innovus, including synthesis, floorplanning, placement, routing, and sign-off verification.",
        "Achieved timing closure at 3.33 GHz with optimized PPA, 93.98% placement utilization, and zero DRC/LVS violations.",
        "Gained hands-on experience in STA, power planning, digital layout design, and verification using OSU 45nm standard cell library.",
        "Developed verification testbenches using SystemVerilog and functional simulation with ModelSim/GTKWave.",
      ],
      tools: ["Synopsys DC", "Cadence Innovus", "45nm CMOS", "STA", "SystemVerilog", "ModelSim", "GTKWave"],
      github: "https://github.com/kruthi2316/RTL-to-GDSII-Implementation-of-4-bit-Synchronous-Counter-in-45nm-CMOS-Technology",
      icon: CircuitBoardIcon,
      color: "accent",
    },

    {
      id: "multiplier-analysis",
      title: "A Comparative Analysis of 8-bit Multiplier Designs in Cadence Virtuoso",
      period: "01/2024–04/2024",
      shortDesc:
        "Designed and simulated different multiplier architectures (array, Wallace tree, and Booth) using Cadence Virtuoso.",
      fullDesc: [
        "Designed and simulated different multiplier architectures (array, Wallace tree, and Booth) using Cadence Virtuoso.",
        "Evaluated performance metrics including propagation delay, dynamic power consumption, and area, identifying trade-offs for high-performance digital IC design.",
      ],
      tools: ["Cadence Virtuoso", "Multiplier Design", "Performance Analysis", "Power Analysis"],
      github: "https://github.com/kruthi2316/A-Comparative-Analysis-of-8-bit-Multiplier-Designs-in-Cadence-Virtuoso",
      icon: CpuIcon,
      color: "secondary",
    },
    {
      id: "ring-oscillator",
      title: "Design of an Ultra Low-Frequency CMOS Ring Oscillator using Power Devices",
      period: "01/2023–05/2023",
      shortDesc:
        "Developed a thyristor-based CMOS ring oscillator operating in the 1 Hz range for ultra-low-frequency applications.",
      fullDesc: [
        "Developed a thyristor-based CMOS ring oscillator operating in the 1 Hz range for ultra-low-frequency applications with minimized power consumption.",
        "Validated design performance using Cadence Virtuoso, including transient analysis, frequency stability, and power optimization.",
      ],
      tools: ["Cadence Virtuoso", "CMOS Design", "Low Power", "Oscillator Design"],
      github: "https://github.com/kruthi2316/Design-of-an-Ultra-Low-Frequency-CMOS-Ring-Oscillator-using-Power-Devices",
      icon: CircuitBoardIcon,
      color: "chart-4",
    },
    {
      id: "aeroponic-system",
      title: "Development of a Smart Aeroponic System using IoT Devices",
      period: "03/2022–05/2023",
      shortDesc:
        "Led a team to develop a smart aeroponic system achieving 70% precision control efficiency and enhanced crop productivity.",
      fullDesc: [
        "Led a team to develop a smart aeroponic system achieving 70% precision control efficiency and enhanced crop productivity.",
        "Designed sensor networks with Arduino Mega and ESP-S2 microcontrollers, integrating water-level, pH, temperature, and humidity sensors.",
        "Implemented IoT data acquisition and automated control for environmental and nutrient management in real-time.",
      ],
      tools: ["Arduino Mega", "ESP-S2", "IoT", "Sensors", "Real-time Control"],
      github: "https://github.com/kruthi2316/Development-of-a-Smart-Aeroponic-System-using-IoT-Devices",
      icon: SettingsIcon,
      color: "secondary",
    },
  ]

  const experiences = [
    {
      id: "vicor",
      title: "Electrical Design Engineer Co-op",
      company: "Vicor Corporation, Andover, MA",
      period: "01/2025 – 07/2025",
      shortDesc:
        "Designed and implemented test boards for external non-dynamic bidirectional analog V/I controllers compatible with Vicor's Post-Regulated Modules.",
      fullDesc: [
        "Designed and implemented a test board for external non-dynamic bidirectional analog V/I controllers compatible with Vicor’s Post-Regulated Modules (PRM) including schematic capture, component scaling, BOM preparation, and layout verification using Altium Designer.",
        "Performed Failure Analysis (FA) on DC-DC modules (VTM, BCM, PRM), identified design flaws, and implemented fixes to enhance module reliability and performance efficiency to 94–98%.",
        "Automated efficiency testing and endurance evaluation using Python scripts and I2C-based controller programming, achieving 100% stable operation across maximum output capacitance scenarios.",
        " Collaborated with cross-functional teams including hardware validation, firmware, and manufacturing to ensure seamless design integration and compliance with quality standards.",
      ],
      tools: ["Altium Designer", "Python", "I2C", "DC-DC Modules", "Failure Analysis"],
      color: "accent",
    },
    {
      id: "ta",
      title: "Graduate Teaching Assistant",
      company: "Northeastern University, Boston, MA",
      period: "01/2024 – 12/2024",
      shortDesc:
        "Taught multiple courses including Microwave Circuit Design, Fundamentals of Electronics, and Digital Design Lab.",
      fullDesc: [
        "EECE 7245 - Microwave Circuit Design for Wireless Communication: Graded weekly assignments/projects, provided detailed feedback, and assisted students in using AWR Microwave Office for designing and simulating RF and microwave circuits.",
        "EECE 2412 - Fundamentals of Electronics: Conducted recitation classes reinforcing circuit analysis concepts, facilitated PSpice simulations, and guided students through problem-solving of diodes, amplifiers, IC timers, BJTs, and MOSFETs.",
        "EECE 2323 - Lab for Fundamentals of Digital Design: Assisted in design and implementation of a fully functional single-cycle MIPS processor using SystemVerilog RTL coding in Xilinx Vivado, and validated on TUL PYNQ Z2 FPGA board.",
        "EECE 2413 - Lab for Fundamentals of Electronics: Provided hands-on guidance in electronic experiments using oscilloscopes, function generators, and MATLAB for circuit verification.",
        "Supported debugging, STA, and RTL-to-FPGA testing for student projects, ensuring correct implementation and functional verification.",
      ],
      tools: ["AWR Microwave Office", "PSpice", "SystemVerilog", "Xilinx Vivado", "MATLAB", "FPGA"],
      color: "secondary",
    },
    {
      id: "research",
      title: "Research Assistant, Sonmezuglu Lab",
      company: "Northeastern University, Boston, MA",
      period: "01/2024 – 08/2024",
      shortDesc:
        "Designed trans-impedance amplifier circuits using integrator and differentiator blocks with tunable pseudo-resistors.",
      fullDesc: [
        "Designed trans-impedance amplifier circuits using integrator and differentiator blocks with tunable pseudo-resistors.",
        "Implemented and simulated circuits in Cadence Virtuoso (180nm CMOS) optimizing power (<1mW), noise (<10pA), and gain, supporting biomedical signal acquisition research.",
        "Collaborated with a multidisciplinary team to align electronic designs with overall research goals and data acquisition protocols.",
        "Applied analog layout best practices, parasitic extraction, and post-layout verification to ensure high-fidelity analog performance.",
      ],
      tools: ["Cadence Virtuoso", "180nm CMOS", "Analog Layout", "Parasitic Extraction"],
      color: "chart-4",
    },
    {
      id: "bhel",
      title: "Graduate Intern",
      company: "Bharat Heavy Electrical Limited, Bengaluru, India",
      period: "08/2022 – 10/2022",
      shortDesc:
        "Tested and validated equipment used in fabrication of diodes and thyristors, ensuring compliance with industry quality standards.",
      fullDesc: [
        "Tested and validated equipment used in fabrication of diodes and thyristors, ensuring compliance with industry quality standards.",
        "Assisted in process optimization and prototype testing, gaining hands-on experience in control systems, electronic testing methodologies, and automation.",
      ],
      tools: ["Testing Equipment", "Quality Standards", "Process Optimization", "Control Systems"],
      color: "accent",
    },
    {
      id: "stovekraft",
      title: "Graduate Engineer Trainee",
      company: "Stovekraft Limited, Bengaluru Rural, India",
      period: "02/2023 – 06/2023",
      shortDesc:
        "Analyzed and improved manufacturing workflows, reducing production cycle time and cost by 10% while optimizing manpower allocation.",
      fullDesc: [
        "Analyzed and improved manufacturing workflows, reducing production cycle time and cost by 10% while optimizing manpower allocation.",
        "Implemented 5S workplace methodology and Lean Six Sigma practices, meticulously maintaining production and quality control records.",
        "Collaborated with cross-functional teams to identify bottlenecks, improve assembly line efficiency, and ensure product consistency.",
      ],
      tools: ["5S Methodology", "Lean Six Sigma", "Process Optimization", "Quality Control"],
      color: "secondary",
    },
  ]

  const educationData = [
    {
      id: "masters",
      degree: "Master of Science in Electrical and Computer Engineering",
      institution: "Northeastern University, Boston, MA",
      period: "Expected December 2025",
      gpa: "GPA: 3.73/4.0",
      concentration: "Concentration: Microsystems, Materials and Devices",
      courses: [
        "VLSI Design",
        "Solid State Devices",
        "Microwave Circuit Design",
        "Computer Architecture",
        "Analog IC Design",
        "Digital Signal Processing",
        "Embedded Systems",
      ],
    },
    {
      id: "bachelors",
      degree: "Bachelor of Engineering in Electronics and Communication",
      institution: "Visvesvaraya Technological University, Belgaum, India",
      period: "May 2023",
      gpa: "GPA: 9.33/10",
      concentration: "",
      courses: [
        "Analog Circuits",
        "Digital System Design",
        "Embedded Systems",
        "Computer Networks",
        "Verilog HDL",
        "Microprocessor Systems",
      ],
    },
  ]

  const handleEducationClick = (educationId: string) => {
    setActiveEducation(educationId)
  }

  const handleExperienceClick = (expId: string) => {
    if (activeExperience === expId) {
      setActiveExperience(null)
    } else {
      setActiveExperience(expId)
    }
  }

  return (
    <div className="min-h-screen bg-background dark">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="circuit-node" style={{ top: "20%", left: "15%" }}></div>
        <div className="circuit-node" style={{ bottom: "30%", right: "20%" }}></div>
        <div className="circuit-node" style={{ top: "60%", left: "70%" }}></div>

        <div className="circuit-trace" style={{ top: "20%", left: "15%", width: "200px" }}></div>
        <div className="circuit-trace vertical" style={{ bottom: "30%", right: "20%" }}></div>
        <div className="circuit-trace" style={{ top: "60%", left: "70%", width: "150px", animationDelay: "1s" }}></div>
      </div>
      {/* fix navbar width here */}
      <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between max-w-7xl">
          <div className="flex items-center space-x-2">
            <ChipIcon className="h-6 w-6 text-secondary glow-secondary circuit-pulse" />
            <span className="font-heading font-black text-2xl bg-gradient-to-r from-secondary via-chart-4 to-secondary bg-clip-text text-transparent">
              Kruthi Narayana Swamy
            </span>
          </div>

          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center space-x-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-secondary hover:glow-secondary ${
                  activeSection === section.id ? "text-secondary glow-secondary" : "text-muted-foreground"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="container py-4 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center space-x-2 w-full p-2 rounded-lg text-left transition-all duration-300 hover:bg-secondary/20 ${
                    activeSection === section.id ? "bg-secondary/20 text-secondary" : "text-muted-foreground"
                  }`}
                >
                  <section.icon className="h-4 w-4" />
                  <span>{section.label}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section id="intro" className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/5 to-chart-4/10" />
        <div className="absolute inset-0 opacity-10">
          <img src="/vlsi-circuit-board.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <img
            src="/vlsi-circuit-board.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <img
            src="/vlsi-circuit-board.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-secondary rounded-full circuit-pulse shadow-lg shadow-secondary/30"></div>
          <div
            className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-chart-4 rounded-full circuit-pulse shadow-lg shadow-chart-4/30"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-accent rounded-full circuit-pulse shadow-lg shadow-accent/20"
            style={{ animationDelay: "2.5s" }}
          ></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-secondary/30 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/my_profile1.png-fBXI5eLOk2lIAt39mPGVZ23XvTAQDO.jpeg"
                  alt="Kruthi Narayana Swamy - VLSI Design Engineer"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center", scale: "1.25" }}
                />
              </div>
            </div>
            <h1 className="font-heading font-bold text-4xl mb-6 bg-gradient-to-r from-secondary via-chart-4 to-secondary bg-clip-text text-transparent">
              VLSI Design Engineer
            </h1>
            <p className="text-lg text-beige/90 leading-relaxed font-bold">
              Passionate Masters student in ECE specializing in VLSI design, analog circuits, and digital systems. Ready
              to contribute innovative solutions in semiconductor design and verification with hands-on experience in
              Cadence Virtuoso, SystemVerilog, and advanced EDA tools.
            </p>
            <p className="text-lg text-secondary mb-8 font-bold mt-6">Available for Full-Time from January 2026</p>

            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <Card className="enhanced-card hover:border-secondary/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <CpuIcon className="h-8 w-8 text-secondary mx-auto mb-3 glow-secondary" />
                  <h3 className="font-semibold mb-2">Digital Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Expert in Verilog, SystemVerilog, and MIPS processor design
                  </p>
                </CardContent>
              </Card>
              <Card className="enhanced-card hover:border-accent/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <ZapIcon className="h-8 w-8 text-chart-4 mx-auto mb-3 glow-cyan" />
                  <h3 className="font-semibold mb-2">Analog IC Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Cadence Virtuoso expertise in trans-impedance circuits
                  </p>
                </CardContent>
              </Card>
              <Card className="enhanced-card hover:border-chart-4/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <CircuitBoardIcon className="h-8 w-8 text-accent mx-auto mb-3 glow-accent" />
                  <h3 className="font-semibold mb-2">Physical Design</h3>
                  <p className="text-sm text-muted-foreground">RTL-to-GDSII, STA, Power Planning, DRC/LVS</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="font-medium btn-glow bg-secondary hover:bg-secondary/90 text-primary"
                onClick={() => scrollToSection("contact")}
              >
                <MailIcon className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                size="lg"
                className="font-medium border-2 border-accent text-accent hover:bg-accent btn-glow"
                style={{ backgroundColor: "rgba(60, 60, 60, 0.6)" }}
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative py-20 bg-secondary/10 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/vlsi-circuit-board.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-12 text-center bg-gradient-to-r from-secondary via-chart-4 to-secondary bg-clip-text text-transparent">
              Experience & Education
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                className="p-6 rounded-lg enhanced-card hover:border-secondary/30 transition-all duration-300"
                style={{ backgroundColor: "rgba(60, 59, 60, 0.2)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCapIcon
                    className="h-5 w-5 text-secondary glow-secondary"
                    style={{ background: "none", boxShadow: "none", borderRadius: 0, padding: 0 }}
                  />
                  <h3 className="font-semibold text-lg">Education</h3>
                </div>

                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted-foreground/20"></div>

                  {/* Moving Trail */}
                  <motion.div
                    className="absolute left-4 w-0.5 bg-gradient-to-b from-secondary to-accent"
                    initial={{ height: 0, top: 0 }}
                    animate={{
                      height: activeEducation === "masters" ? "50%" : "100%",
                      top: activeEducation === "masters" ? "0%" : "0%",
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />

                  <div className="space-y-6">
                    {educationData.map((edu, index) => (
                      <motion.div
                        key={edu.id}
                        className={`relative pl-12 cursor-pointer transition-all duration-300 ${
                          activeEducation === edu.id
                            ? "bg-secondary/5 p-3 rounded-lg"
                            : "hover:bg-secondary/5 p-3 rounded-lg"
                        }`}
                        onClick={() => handleEducationClick(edu.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Timeline Dot */}
                        <motion.div
                          className={`absolute left-3 w-2 h-2 rounded-full border-2 ${
                            activeEducation === edu.id
                              ? "bg-secondary border-secondary shadow-lg shadow-secondary/30"
                              : "bg-background border-muted-foreground/40"
                          }`}
                          animate={{
                            scale: activeEducation === edu.id ? 1.2 : 1,
                            boxShadow:
                              activeEducation === edu.id
                                ? "0 0 20px rgba(160, 171, 45, 0.5)"
                                : "0 0 0px rgba(160, 171, 45, 0)",
                          }}
                          transition={{ duration: 0.3 }}
                        />

                        <div>
                          <h4 className="font-semibold text-base mb-1">{edu.degree}</h4>
                          <p className="text-secondary font-medium text-sm">{edu.institution}</p>
                          <p className="text-xs text-muted-foreground">
                            {edu.period} | {edu.gpa}
                          </p>
                          {edu.concentration && <p className="text-xs mt-1">{edu.concentration}</p>}

                          <AnimatePresence>
                            {activeEducation === edu.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-3 overflow-hidden"
                              >
                                <div className="flex flex-wrap gap-1">
                                  {edu.courses.map((course, i) => (
                                    <motion.button
                                      key={i}
                                      className="glass-button px-2 py-0.5 rounded-full text-xs"
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: i * 0.1 }}
                                    >
                                      {course}
                                    </motion.button>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 rounded-lg enhanced-card hover:border-accent/30 transition-all duration-300"
                style={{ backgroundColor: "rgba(59, 60, 60, 0.2)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <BriefcaseIcon
                    className="h-5 w-5 text-accent glow-accent"
                    style={{ background: "none", boxShadow: "none", borderRadius: 0, padding: 0 }}
                  />
                  <h3 className="font-semibold text-lg">Professional Experience</h3>
                </div>

                <div className="relative max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent">
                  {/* Timeline Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted-foreground/20"></div>

                  {/* Moving Trail */}
                  <motion.div
                    className="absolute left-4 w-0.5 bg-gradient-to-b from-accent to-chart-4"
                    initial={{ height: 0 }}
                    animate={{
                      height: activeExperience
                        ? `${((experiences.findIndex((exp) => exp.id === activeExperience) + 1) / experiences.length) * 100}%`
                        : "0%",
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />

                  <div className="space-y-4 pr-2">
                    {experiences.map((exp, index) => (
                      <div key={exp.id} className="relative pl-12">
                        {/* Timeline Dot */}
                        <motion.div
                          className={`absolute left-3 w-2 h-2 rounded-full border-2 ${
                            activeExperience === exp.id
                              ? "bg-accent border-accent shadow-lg shadow-accent/30"
                              : "bg-background border-muted-foreground/40"
                          }`}
                          animate={{
                            scale: activeExperience === exp.id ? 1.2 : 1,
                            boxShadow:
                              activeExperience === exp.id
                                ? "0 0 20px rgba(188, 138, 148, 0.5)"
                                : "0 0 0px rgba(188, 138, 148, 0)",
                          }}
                          transition={{ duration: 0.3 }}
                        />

                        <motion.div
                          className="cursor-pointer"
                          onClick={() => handleExperienceClick(exp.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="p-4 rounded-lg enhanced-card hover:border-accent/30 transition-all duration-300">
                            <h4 className={`font-semibold text-sm text-${exp.color} mb-1`}>{exp.title}</h4>
                            <p className="text-xs font-medium text-muted-foreground">{exp.company}</p>
                            <p className="text-xs text-muted-foreground">{exp.period}</p>

                            <AnimatePresence>
                              {activeExperience === exp.id && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.4, ease: "easeInOut" }}
                                  className="mt-4 overflow-hidden"
                                >
                                  <div className="space-y-3">
                                    <div>
                                      <h5 className="text-xs font-medium mb-2 text-accent">Key Responsibilities:</h5>
                                      <div className="space-y-1">
                                        {exp.fullDesc.slice(0, 4).map((desc, i) => (
                                          <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1, duration: 0.3 }}
                                            className="text-xs text-muted-foreground"
                                          >
                                            • {desc.length > 300 ? desc.substring(0, 300) + "..." : desc}
                                          </motion.div>
                                        ))}
                                      </div>
                                    </div>

                                    <div>
                                      <h5 className="text-xs font-medium mb-2 text-accent">Key Skills:</h5>
                                      <div className="flex flex-wrap gap-1">
                                        {exp.tools.slice(0, 6).map((tool, i) => (
                                          <motion.button
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.05, duration: 0.2 }}
                                            className="glass-button px-2 py-0.5 rounded text-xs"
                                          >
                                            {tool}
                                          </motion.button>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Target Roles */}
            <Card className="enhanced-card">
              <CardHeader>
                <CardTitle className="text-center">Target Roles</CardTitle>
                <CardDescription className="text-center">
                  Actively seeking opportunities in the following VLSI engineering positions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg enhanced-card hover:border-secondary/40 transition-all duration-300">
                    <h4 className="font-semibold text-secondary">VLSI Design Engineer</h4>
                    <p className="text-sm text-muted-foreground mt-1">Digital circuit design and architecture</p>
                  </div>
                  <div className="p-4 rounded-lg enhanced-card hover:border-accent/40 transition-all duration-300">
                    <h4 className="font-semibold text-accent">RTL Engineer</h4>
                    <p className="text-sm text-muted-foreground mt-1">Register Transfer Level design and coding</p>
                  </div>
                  <div className="p-4 rounded-lg enhanced-card hover:border-chart-4/40 transition-all duration-300">
                    <h4 className="font-semibold text-chart-4">Digital Design Engineer</h4>
                    <p className="text-sm text-muted-foreground mt-1">Digital system design and implementation</p>
                  </div>
                  <div className="p-4 rounded-lg enhanced-card hover:border-secondary/40 transition-all duration-300">
                    <h4 className="font-semibold text-secondary">Analog Design Engineer</h4>
                    <p className="text-sm text-muted-foreground mt-1">Analog and mixed-signal circuit design</p>
                  </div>
                  <div className="p-4 rounded-lg enhanced-card hover:border-accent/40 transition-all duration-300">
                    <h4 className="font-semibold text-accent">Physical Design Engineer</h4>
                    <p className="text-sm text-muted-foreground mt-1">Place & route, timing closure, DRC/LVS</p>
                  </div>
                  <div className="p-4 rounded-lg enhanced-card hover:border-chart-4/40 transition-all duration-300">
                    <h4 className="font-semibold text-chart-4">Verification Engineer</h4>
                    <p className="text-sm text-muted-foreground mt-1">Testbench development and validation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/vlsi-circuit-board.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-12 text-center bg-gradient-to-r from-secondary via-chart-4 to-secondary bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, showMoreProjects ? projects.length : 6).map((project) => {
                const IconComponent = project.icon
                return (
                  <Card
                    key={project.id}
                    className={`enhanced-card hover:border-${project.color}/50 hover:shadow-2xl hover:shadow-${project.color}/20 transition-all duration-300 group`}
                    style={{ backgroundColor: "rgba(60, 60, 60, 0.4)" }}
                  >
                    <CardHeader>
                      <CardTitle
                        className="flex items-center gap-2 cursor-pointer hover:text-secondary transition-colors"
                        onClick={() => toggleProject(project.id)}
                      >
                        <span className="flex items-center justify-center shrink-0 h-6 w-6">
                          <IconComponent
                            className={`h-6 w-6 text-${project.color} group-hover:glow-${project.color} transition-all`}
                          />
                        </span>
                        <span className="text-sm flex-1">{project.title}</span>
                        <span className="flex items-center justify-center shrink-0 h-4 w-4 ml-2">
                          {expandedProject === project.id ? (
                            <ChevronUpIcon className="h-4 w-4" />
                          ) : (
                            <ChevronDownIcon className="h-4 w-4" />
                          )}
                        </span>
                      </CardTitle>
                      <CardDescription className="text-xs">{project.period}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {expandedProject === project.id ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                          <ul className="text-sm mb-4 space-y-2">
                            {project.fullDesc.map((desc, i) => (
                              <motion.li
                                key={i}
                                className="text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                • {desc}
                              </motion.li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tools.map((tool, i) => (
                              <motion.button
                                key={i}
                                className="glass-button px-2 py-1 rounded text-xs"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                              >
                                {tool}
                              </motion.button>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <button
                              className="glass-button px-3 py-1 rounded text-xs flex items-center gap-1 hover:bg-secondary/20 transition-colors"
                              onClick={() => window.open(project.github, "_blank")}
                            >
                              <GithubIcon className="h-3 w-3" />
                              GitHub
                            </button>
                            <button className="glass-button px-3 py-1 rounded text-xs flex items-center gap-1 hover:bg-secondary/20 transition-colors">
                              <FileTextIcon className="h-3 w-3" />
                              Report
                            </button>
                          </div>
                        </motion.div>
                      ) : (
                        <div>
                          <p className="text-sm mb-4 line-clamp-3">{project.shortDesc}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tools.slice(0, 4).map((tool, i) => (
                              <button key={i} className="glass-button px-3 py-1 rounded-full text-xs">
                                {tool}
                              </button>
                            ))}
                            {project.tools.length > 4 && (
                              <button className="glass-button px-3 py-1 rounded-full text-xs">
                                +{project.tools.length - 4} more
                              </button>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <button
                              className="glass-button px-3 py-1 rounded text-xs flex items-center gap-1 hover:bg-secondary/20 transition-colors"
                              onClick={() => window.open(project.github, "_blank")}
                            >
                              <ExternalLinkIcon className="h-3 w-3" />
                              View More
                            </button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {projects.length > 6 && (
              <div className="text-center mt-8">
                <motion.button
                  className="glass-button px-6 py-3 rounded-lg text-sm font-medium hover:bg-secondary/20 transition-all duration-300"
                  onClick={() => setShowMoreProjects(!showMoreProjects)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showMoreProjects ? "Show Less Projects" : `More Projects (+${projects.length - 6})`}
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="skills" className="relative py-20 bg-accent/10 overflow-hidden">
        <div className="absolute inset-0 opacity-8">
          <img src="/vlsi-circuit-board.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-12 text-center bg-gradient-to-r from-secondary via-chart-4 to-secondary bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Programming Languages */}
              <Card className="enhanced-card hover:border-secondary/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CpuIcon className="h-5 w-5 text-secondary glow-secondary" />
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Verilog", "SystemVerilog", "C/C++/Embedded C", "Python", "TCL", "VHDL", "Bash/CSH", "Perl"].map(
                      (lang) => (
                        <button
                          key={lang}
                          className="glass-button px-3 py-1 rounded-full text-xs"
                          style={{ backgroundColor: "rgba(60, 60, 50, 0.85 )" }}
                        >
                          {lang}
                        </button>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Software/EDA Tools */}
              <Card className="enhanced-card hover:border-accent/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <SettingsIcon className="h-5 w-5 text-accent glow-accent" />
                    Software / EDA Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Cadence Virtuoso",
                      "Synopsys Design Compiler",
                      "Cadence Innovus",
                      "Synopsys IC Compiler",
                      "Cadence Genus",
                      "Xilinx Vivado",
                      "LTSpice/PSpice",
                      "Altium Designer",
                      "AWR Microwave Office",
                      "ModelSim/GTKWave",
                    ].map((tool) => (
                      <button
                        key={tool}
                        className="glass-button px-3 py-1 rounded-full text-xs"
                        style={{ backgroundColor: "rgba(60, 50, 60, 1 )" }}
                      >
                        {tool}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interests/Specializations */}
              <Card className="enhanced-card hover:border-chart-4/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ZapIcon className="h-5 w-5 text-chart-4 glow-cyan" />
                    Interests & Specializations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "RTL Design",
                      "Digital Logic Design",
                      "Verification",
                      "Analog IC Design",
                      "DFT & Test Methodologies",
                      "Physical Design",
                      "Timing Closure",
                      "PCB Design",
                      "FPGA Prototyping",
                      "Low-Power Design",
                      "Power-Aware Synthesis",
                    ].map((interest) => (
                      <button
                        key={interest}
                        className="glass-button px-3 py-1 rounded-full text-xs"
                        style={{ backgroundColor: "rgba(50, 60, 60, 0.85 )" }}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/vlsi-circuit-board.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-12 text-center bg-gradient-to-r from-secondary via-chart-4 to-secondary bg-clip-text text-transparent">
              Additional Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="enhanced-card hover:border-chart-4/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCapIcon className="h-5 w-5 text-chart-4" />
                    Academic Excellence
                  </CardTitle>
                  <CardDescription>Outstanding Academic Performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Maintained exceptional academic performance with 9.33/10 GPA in undergraduate studies and 3.73/4.0
                    in graduate studies, demonstrating consistent excellence in VLSI and ECE coursework.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button className="glass-button px-2 py-1 rounded text-xs">High GPA</button>
                    <button className="glass-button px-2 py-1 rounded text-xs">Academic Excellence</button>
                    <button className="glass-button px-2 py-1 rounded text-xs">VLSI Specialization</button>
                  </div>
                </CardContent>
              </Card>

              <Card className="enhanced-card hover:border-secondary/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ZapIcon className="h-5 w-5 text-secondary glow-secondary" />
                    Availability
                  </CardTitle>
                  <CardDescription>Ready for Full-time Opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Available for full-time positions from January 2026. Open to relocation and eager to contribute to
                    innovative VLSI design projects.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button className="glass-button px-2 py-1 rounded text-xs">Available Jan 2026</button>
                    <button className="glass-button px-2 py-1 rounded text-xs">Open to Relocation</button>
                    <button className="glass-button px-2 py-1 rounded text-xs">Full-time Ready</button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/cadence-innovus-layout.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-8 bg-gradient-to-r from-secondary via-chart-4 to-secondary bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to contribute to innovative VLSI projects and semiconductor design challenges
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card
                className="contact-card hover:border-secondary/30 transition-all duration-300 cursor-pointer shadow-[0_0_40px_8px_rgba(120,120,255,0.25)] hover:shadow-[0_0_64px_16px_rgba(120,120,255,0.45)]"
                onClick={() => window.open("mailto:narayanaswamy.k@northeastern.edu", "_blank")}
              >
                <CardContent className="p-6 text-center">
                  <MailIcon className="h-8 w-8 text-secondary mx-auto mb-3 glow-secondary" />
                  <h3 className="font-semibold mb-2">Send Email</h3>
                  <p className="text-xs text-muted-foreground break-all">narayanaswamy.k@northeastern.edu</p>
                </CardContent>
              </Card>
              <Card
                className="contact-card hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-[0_0_40px_8px_rgba(0,200,255,0.25)] hover:shadow-[0_0_64px_16px_rgba(0,200,255,0.45)]"
                onClick={() => window.open("https://www.linkedin.com/in/kruthi-narayana-swamy", "_blank")}
              >
                <CardContent className="p-6 text-center">
                  <LinkedinIcon className="h-8 w-8 text-accent mx-auto mb-3 glow-accent" />
                  <h3 className="font-semibold mb-2">LinkedIn Profile</h3>
                  <p className="text-xs text-muted-foreground">Professional Network</p>
                </CardContent>
              </Card>
              <Card
                className="contact-card hover:border-chart-4/30 transition-all duration-300 cursor-pointer shadow-[0_0_40px_8px_rgba(0,255,180,0.25)] hover:shadow-[0_0_64px_16px_rgba(0,255,180,0.45)]"
                onClick={() => window.open("https://github.com/kruthi2316", "_blank")}
              >
                <CardContent className="p-6 text-center">
                  <GithubIcon className="h-8 w-8 text-chart-4 mx-auto mb-3 glow-cyan" />
                  <h3 className="font-semibold mb-2">GitHub Portfolio</h3>
                  <p className="text-xs text-muted-foreground">Code Repository</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Removed small buttons, now only clickable cards above */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <ChipIcon className="h-5 w-5 text-secondary glow-secondary circuit-pulse" />
              <span className="font-heading font-semibold bg-gradient-to-r from-secondary via-chart-4 to-secondary bg-clip-text text-transparent">
                Kruthi Narayana Swamy
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Kruthi Narayana Swamy. Built with passion for VLSI design and innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
