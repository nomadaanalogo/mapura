import CityLandingPage, { cityMetadata } from "@/components/city-insolvency-landing"
import { getCityLanding } from "@/lib/city-landings"

const data = getCityLanding("insolvencia-economica-pereira")

export const metadata = cityMetadata(data)

export default function InsolvenciaPereiraPage() {
  return <CityLandingPage data={data} />
}
