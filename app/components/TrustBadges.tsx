"use client";

import LogoLoop from "../shared/LogoLoop";

export default function TrustBadges() {
  const achievementText = "Top 1 Ortopedia - Exame SBOT";
  
  const badges = [
    { node: <span className="text-gray-900 font-normal text-5xl md:text-6xl lg:text-7xl whitespace-nowrap">{achievementText}</span> },
    { node: <span className="text-gray-900 font-normal text-5xl md:text-6xl lg:text-7xl whitespace-nowrap">{achievementText}</span> },
    
  ];

  return (
    <section className="py-16 px-6 border-y border-gray-200 bg-white overflow-hidden">
      <div className="w-full">
        <LogoLoop
          logos={badges}
          speed={60}
          direction="left"
          logoHeight={80}
          gap={100}
          pauseOnHover={false}
          fadeOut={false}
          fadeOutColor="#ffffff"
          ariaLabel="Top 1 Ortopedia - Exame SBOT"
        />
      </div>
    </section>
  );
}
