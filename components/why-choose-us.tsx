import { Check } from "lucide-react"

const benefits = [
  {
    title: "High-Quality Certified Equipment",
    description: "All products meet international quality standards and certifications",
  },
  {
    title: "Trusted Suppliers & Brands",
    description: "Partnerships with leading manufacturers worldwide",
  },
  {
    title: "Complete Installation & Support",
    description: "Professional installation and ongoing technical support",
  },
  {
    title: "Competitive Pricing",
    description: "Best value without compromising on quality",
  },
  {
    title: "Reliable After-Sales Service",
    description: "Dedicated support team for maintenance and troubleshooting",
  },
  {
    title: "Fast Turnaround",
    description: "Quick delivery and efficient project completion",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Choose Plant Tech Trade</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
