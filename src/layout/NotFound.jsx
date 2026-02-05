import { Link, useNavigate } from "react-router-dom"

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center px-6">

      {/* Background typography */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-[18rem] md:text-[26rem] font-extrabold tracking-tight text-white/[0.03]">
          404
        </span>
      </div>

      {/* Main content card */}
      <div className="relative z-10 w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-12 shadow-2xl">

        {/* Meta */}
        <p className="text-xs uppercase tracking-[0.25em] text-gray-400 text-center">
          Error · Page Missing
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-center text-4xl md:text-5xl font-semibold text-white leading-tight">
          This page no longer exists
        </h1>

        {/* Description */}
        <p className="mt-4 text-center text-gray-400 leading-relaxed max-w-md mx-auto">
          The resource you are attempting to access may have been removed,
          renamed, or is temporarily unavailable.
        </p>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px w-full bg-white/10" />
          <span className="text-[11px] tracking-widest text-gray-500">OPTIONS</span>
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="group relative inline-flex items-center justify-center rounded-2xl bg-white px-8 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Go back
          </button>

          <Link
            to="/"
            className="group inline-flex items-center justify-center rounded-2xl border border-white/20 px-8 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Return home
          </Link>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-gray-500">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </section>
  )
}
