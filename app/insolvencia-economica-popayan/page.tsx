import CityLandingPage, { cityMetadata } from "@/components/city-insolvency-landing"
import { getCityLanding } from "@/lib/city-landings"

const data = getCityLanding("insolvencia-economica-popayan")

export const metadata = cityMetadata(data)

export default function InsolvenciaPopayanPage() {
  return <CityLandingPage data={data} />
}
