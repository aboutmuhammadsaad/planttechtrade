import Image from "next/image"

interface Product {
  id: string
  name: string
  category: string
  image: string
  description: string
}

const products: Product[] = [
  {
    id: 1,
    name: "GAC-2500-INTL",
    category: "Gas Chromatograph Analyzer",
    image: "/images/gac-2500-intl-removebg.png",
    description: "Professional-grade gas chromatograph for quality control and research laboratories",
  },
  {
    id: 2,
    name: "Mini GAC Analyzer",
    category: "Portable Gas Chromatograph",
    image: "/images/djminigac-removebg.png",
    description: "Compact, portable gas chromatograph analyzer for field and lab testing",
  },
  {
    id: 3,
    name: "Solar Panel Systems",
    category: "Renewable Energy",
    image: "/images/solorpannel.jpeg",
    description: "High-efficiency photovoltaic solar panels for sustainable energy solutions",
  },
  {
    id: 4,
    name: "Ellitech Data Logger",
    category: "Temperature & Humidity Monitoring",
    image: "/images/ellitech-removebg.png",
    description: "Digital handheld device for precise environmental data logging and monitoring",
  },
  {
    id: 5,
    name: "Lab Chromatography Paper",
    category: "Lab Consumables",
    image: "/images/blotterpaper-removebg.png",
    description: "Premium quality filter and blotter paper for chromatography and lab applications",
  },
]

export default function Products() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Products</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our high-quality laboratory equipment and renewable energy solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-primary mb-2">{product.category}</p>
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
