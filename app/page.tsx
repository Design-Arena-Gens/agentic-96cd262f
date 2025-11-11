import CheckInForm from "@/components/CheckInForm";

function AuroraBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sunrise/30 blur-3xl" />
      <div className="absolute top-20 left-14 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-12">
      <AuroraBackdrop />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:text-left">
        <section className="flex-1 max-w-xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">
            Agentic Companion
          </span>
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Hi there, how are you today?
          </h1>
          <p className="text-lg leading-relaxed text-slate-200">
            Take a breath. This space is a gentle pause designed to help you notice how you feel,
            celebrate the highs, and support the lows. Choose the energy you&apos;re bringing into this moment.
          </p>
          <div className="flex flex-wrap gap-4 text-left text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="font-semibold text-white">Micro check-in</p>
              <p className="mt-2 leading-relaxed">
                Logging your mood for even 30 seconds builds emotional awareness and resilience over time.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="font-semibold text-white">No data stored</p>
              <p className="mt-2 leading-relaxed">
                This moment is yours. Nothing you select leaves the page—it&apos;s a private reflection.
              </p>
            </div>
          </div>
        </section>
        <section className="flex-1">
          <CheckInForm />
        </section>
      </div>
    </main>
  );
}
