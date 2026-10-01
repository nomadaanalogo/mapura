import Link from "next/link"
import Image from "next/image"
import { FaMapMarkerAlt, FaPhone, FaInstagram } from "react-icons/fa"

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Mapura+Grupo+Consultor+%7C+Abogados/@3.5506895,-76.2924628,1086m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e3a050051720b25:0x596f567203f7b177!8m2!3d3.5506895!4d-76.2898879!16s%2Fg%2F11xt0yny0s!5m1!1e1"

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Image
              src="/images/mapura-logo-new.webp"
              alt="Mapura Grupo Consultor"
              width={200}
              height={70}
              className="h-12 w-auto object-contain mb-4"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Firma referente en Ley de Insolvencia Económica en Colombia. Somos una firma de consultoría legal
              centrados en el cliente: escuchamos, orientamos y diseñamos estrategias legales que te permitan
              recuperar tu tranquilidad financiera.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-white/90">Navegación</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/academia" className="hover:text-white transition-colors">
                  Academia
                </Link>
              </li>
              <li>
                <a href="#contact-form" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <Link href="/politica-privacidad" className="hover:text-white transition-colors">
                  Política de Protección de Datos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-white/90">Contacto</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-[#4EA5A7]" />
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline decoration-white/30 hover:decoration-white"
                >
                  Calle 62 # 25A-28, Las Mercedes, Palmira, Valle del Cauca
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="flex-shrink-0 text-[#4EA5A7]" />
                <span>+57 310 653 7502</span>
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram className="flex-shrink-0 text-[#4EA5A7]" />
                <span>@mapuragrupoconsultor</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/50 text-xs">
          © {new Date().getFullYear()} Mapura Grupo Consultor. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
