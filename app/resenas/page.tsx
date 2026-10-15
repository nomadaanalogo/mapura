import type { Metadata } from "next"
import SocialGrowthSection from "@/components/social-growth-section"

export const metadata: Metadata = {
  title: "Déjanos tu reseña | Mapura Grupo Consultor",
  description: "Comparte tu experiencia con Mapura Grupo Consultor y síguenos en nuestras redes sociales.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ResenasPage() {
  return (
    <main className="min-h-screen flex items-center bg-blue-50">
      <SocialGrowthSection />
    </main>
  )
}
