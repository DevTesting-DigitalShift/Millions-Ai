import Image from "next/image";

const CompanyLogo = () => {
  return (
    <section className="mt-20 text-center">
      <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6 font-bold">
        Evaluated 5,000+ leading AI Agents across business functions
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[repeat(12,minmax(2rem,7rem))] gap-x-8 gap-y-6 items-center justify-items-center max-w-7xl mx-auto">
        <Logo name="harvey" />
        <Logo name="legora" />
        <Logo name="clay" />
        <Logo name="writer" />

        <Logo name="sana" />
        <Logo name="regie-ai" />
        <Logo name="glean" />
        <Logo name="rillet" />

        <Logo name="observe-ai" scale="scale-125" />
        <Logo name="moveworks" />
        <Logo name="cresta" />
        <Logo name="procure-ai" scale="scale-135 mb-6" />

        <Logo name="robin" />
        <Logo name="leenaLogo" />
        <Logo name="happy-robot" />
        <Logo name="kore-ai" />

        <Logo name="athena" scale="scale-125" />
        <Logo name="lakhera" isBlack scale="scale-125" />
        <Logo name="copy-ai" />
        <Logo name="people-ai" scale="scale-225" />

        <Logo name="ambience" />
        <Logo name="orby" />
        <Logo name="ada" />
        <Logo name="lexisNexis" />
      </div>
    </section>
  );
};

function Logo({
  name,
  isBlack,
  scale,
}: {
  name: string;
  isBlack?: boolean;
  scale?: string;
}) {
  const showTooltip = name === "sana" || name === "ambience";

  return (
    <div className="relative group flex flex-col items-center justify-center gap-2">
      <div className="flex items-center justify-center h-10 w-full">
        <Image
          src={`/logos/${name}.svg`}
          alt={name}
          width={240}
          height={80}
          unoptimized
          className={`max-h-full max-w-full object-contain ${scale ?? ""}`}
          style={
            isBlack ? { filter: "grayscale(100%) brightness(0)" } : undefined
          }
        />
      </div>

      {showTooltip && (
        <div className="pointer-events-none absolute -top-10 opacity-0 scale-95 translate-y-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
          <div className="relative rounded-sm bg-foreground text-background text-xs font-medium px-4 py-2 shadow-lg">
            {name === "sana" ? "Sana AI" : "Ambience"}

            <span className="absolute left-1/2 top-full -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
          </div>
        </div>
      )}
    </div>
  );
}

export default CompanyLogo;
