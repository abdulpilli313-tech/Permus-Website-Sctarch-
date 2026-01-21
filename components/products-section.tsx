"use client"

import { ArrowRight, Sparkles, Box, LayoutDashboard } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: "myndlab",
    name: "MyndLab",
    tagline: "AI-Powered Intelligence Platform",
    description: "A comprehensive AI platform that transforms enterprise data into actionable insights through advanced machine learning and natural language processing.",
    icon: Sparkles,
    gradient: "from-electric-violet to-data-cyan",
    features: ["AI Analytics", "NLP Engine", "Predictive Models", "Smart Automation"],
  },
  {
    id: "assetgo",
    name: "AssetGo",
    tagline: "Asset & Operations Management",
    description: "Streamline your asset lifecycle and operations with intelligent tracking, maintenance scheduling, and real-time visibility across your organization.",
    icon: Box,
    gradient: "from-data-cyan to-muted-lavender",
    features: ["Asset Tracking", "Maintenance Planning", "Resource Optimization", "Analytics Dashboard"],
  },
  {
    id: "equidesk",
    name: "EquiDesk",
    tagline: "Enterprise Desk & Workflow System",
    description: "A unified workspace solution that orchestrates complex workflows, manages approvals, and enhances team collaboration across departments.",
    icon: LayoutDashboard,
    gradient: "from-muted-lavender to-electric-magenta",
    features: ["Workflow Engine", "Task Management", "Team Collaboration", "Process Automation"],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="relative py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-electric-violet/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-data-cyan/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-data-cyan text-sm font-semibold tracking-wider uppercase mb-4">
            Our Products
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-6 text-balance">
            Enterprise-Grade Product Suite
          </h2>
          <p className="text-lg text-interface-grey/70 max-w-2xl mx-auto leading-relaxed text-pretty">
            Purpose-built solutions designed to address complex enterprise challenges and accelerate digital transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={product.id}
                className="glass-card rounded-2xl overflow-hidden group hover:border-electric-violet/40 transition-all duration-500 flex flex-col"
              >
                {/* Product header with gradient */}
                <div className={`h-32 bg-gradient-to-r ${product.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-lg rotate-12" />
                    <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Product content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl font-bold text-interface-grey mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-data-cyan font-medium mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-interface-grey/70 text-sm leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs font-medium text-interface-grey/60 bg-electric-violet/10 px-3 py-1.5 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-electric-violet/30 text-interface-grey hover:bg-electric-violet/10 hover:border-electric-violet rounded-lg transition-all group/btn"
                    asChild
                  >
                    <Link href={`/products/${product.id}`}>
                      <span>View Product</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* More products coming */}
        <div className="mt-12 text-center">
          <p className="text-interface-grey/50 text-sm">
            More products launching soon • Stay tuned for updates
          </p>
        </div>
      </div>
    </section>
  )
}
