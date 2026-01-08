export default function Hero() {
  return (
    <section className="bg-linear-to-b from-muted to-background py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Reliable Scientific & Solar Solutions for Modern Laboratories
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Plant Tech Trade supplies premium quality control equipment, laboratory instruments, and complete solar
                energy solutions for research, pharmaceutical, and clinical laboratories worldwide.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded font-medium hover:bg-primary/90 transition-colors text-center"
              >
                Get a Quote
              </a>
              <a
                href="#contact"
                className="border-2 border-primary text-primary px-6 py-3 rounded font-medium hover:bg-primary/5 transition-colors text-center"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-primary/10">
                <img
                  src="/professional-laboratory-equipment-setup-with-micro.jpg"
                  alt="Laboratory Equipment Setup"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
