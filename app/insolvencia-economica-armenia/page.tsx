import CityLandingPage, { cityMetadata } from "@/components/city-insolvency-landing"
import { getCityLanding } from "@/lib/city-landings"

const data = getCityLanding("insolvencia-economica-armenia")

export const metadata = cityMetadata(data)

export default function InsolvenciaArmeniaPage() {
  return <CityLandingPage data={data} />
}
