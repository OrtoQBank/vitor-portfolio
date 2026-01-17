"use client";

import LogoLoop from "../shared/LogoLoop";

export default function TrustBadges() {
  const badges = [
    { node: <span className="text-gray-400 font-bold text-2xl">SBOT</span> },
    { node: <span className="text-gray-400 font-bold text-2xl">SBCJ</span> },
    { node: <span className="text-gray-400 font-bold text-2xl">ISAKOS</span> },
    { node: <span className="text-gray-400 font-bold text-2xl">SLARD</span> },
    { node: <span className="text-gray-400 font-bold text-2xl">AMB</span> },
  ];

  return (
    <section className="py-12 px-6 border-y border-gray-200 bg-white">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wide font-medium">
          Certificações e Associações
        </p>
        <div className="opacity-60">
          <LogoLoop
            logos={badges}
            speed={50}
            direction="left"
            logoHeight={32}
            gap={64}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#ffffff"
            ariaLabel="Certificações e Associações"
          />
        </div>
      </div>
    </section>
  );
}
