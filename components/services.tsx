import ServiceCard from "./service-card"
import { Beaker, FlaskConical, Shield, Activity, Package, Sun } from "lucide-react"

const services = [
  {
    icon: Beaker,
    title: "Quality Control Equipment",
    description: "Precision instruments for laboratory quality assurance and testing",
  },
  {
    icon: FlaskConical,
    title: "Research & Pharma Lab Equipment",
    description: "Complete solutions for research, pharmaceutical, and clinical laboratories",
  },
  {
    icon: Shield,
    title: "Lab Glassware & Safety Gloves",
    description: "Premium protective equipment and laboratory glassware",
  },
  {
    icon: Activity,
    title: "Data Loggers & Analyzers",
    description: "Advanced data loggers and moisture analyzers for precision monitoring",
  },
  {
    icon: Package,
    title: "Disposable Lab Items & Kits",
    description: "High-quality disposable laboratory items and diagnostic kits",
  },
  {
    icon: Sun,
    title: "Solar Power Solutions",
    description: "Complete end-to-end solar installation with professional equipment",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Products & Services</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions across scientific equipment, laboratory supplies, and renewable energy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
