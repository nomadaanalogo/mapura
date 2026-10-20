import CityLandingPage, { cityMetadata } from "@/components/city-insolvency-landing"
import { getCityLanding } from "@/lib/city-landings"

const data = getCityLanding("insolvencia-economica-cali")

export const metadata = cityMetadata(data)

export default function InsolvenciaCaliPage() {
  return <CityLandingPage data={data} />
}
