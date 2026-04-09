export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 inline-block rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-300">{subtitle}</p>}
    </div>
  )
}
