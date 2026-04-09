export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="mb-10 max-w-3xl">
      <p className="mb-3 inline-block rounded-full border border-blue-300/20 bg-blue-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-slate-300">{subtitle}</p> : null}
    </header>
  )
}
