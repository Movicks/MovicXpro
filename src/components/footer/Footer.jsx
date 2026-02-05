import { Link } from "react-router-dom"
import { GitHub, LinkedIn, YouTube, Mail, Call } from "@mui/icons-material"
import { FaXTwitter, FaWhatsapp, FaTiktok } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="w-full rounded-t-2xl Container-Bg border-t border-white/20 lg:mt-5">
      {/* subtle depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* brand */}
        <div className="space-y-5 md:col-span-2">
          <h2 className="text-2xl font-semibold gradient-text">
            MovicX
          </h2>
          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            Frontend engineer focused on building precise, scalable,
            and performance-driven user interfaces with modern web technologies.
          </p>
        </div>

        {/* navigation */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white mb-4">
            Navigation
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="text-gray-400 transition hover:text-white">Home</Link></li>
            <li><Link to="/projects" className="text-gray-400 transition hover:text-white">Projects</Link></li>
            <li><Link to="/about" className="text-gray-400 transition hover:text-white">About</Link></li>
            <li><Link to="/contact" className="text-gray-400 transition hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* contact */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white mb-4">
            Contact
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Call className="text-gray-500" fontSize="small" />
              <a
                href="tel:+2349039062234"
                className="text-gray-400 transition hover:text-white"
              >
                +234 903 906 2234
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="text-gray-500" fontSize="small" />
              <a
                href="mailto:victoride013@gmail.com"
                className="text-gray-400 transition hover:text-white"
              >
                victoride013@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* social */}
        <div className="md:hidden xl:block">
          <h3 className="text-sm font-semibold tracking-wide text-white mb-4">
            Connect
          </h3>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Movicks" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-white hover:scale-110">
              <GitHub />
            </a>
            <a href="https://www.linkedin.com/in/onaiterimoh-victor-idepe-40b516235" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-white hover:scale-110">
              <LinkedIn />
            </a>
            <a href="https://x.com/onaivictor" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-white hover:scale-110">
              <FaXTwitter />
            </a>
            <a href="https://wa.link/p1m3cn" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-white hover:scale-110">
              <FaWhatsapp />
            </a>
            <a href="https://www.tiktok.com/@dev_movicx" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-white hover:scale-110">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between md:gap-4 text-xs text-gray-500">
          <span>© 2024 MovicX. All rights reserved.</span>
          <span className="tracking-wide">
            Designed & engineered with precision
          </span>
        </div>
      </div>
    </footer>
  )
}
