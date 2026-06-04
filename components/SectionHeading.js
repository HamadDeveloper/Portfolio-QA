export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const isLeft = align === 'left';

  return (
    <div className={`mb-12 ${isLeft ? 'max-w-3xl text-left' : 'mx-auto max-w-3xl text-center'}`}>
      <span className="inline-flex rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_30px_rgba(125,211,252,0.12)]">
        {eyebrow}
      </span>
      <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-slate-400 md:text-lg">{description}</p> : null}
    </div>
  );
}
