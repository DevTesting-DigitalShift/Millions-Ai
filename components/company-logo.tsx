const CompanyLogo = () => {
  return (
    <div className="mt-20 text-center">
      <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6 font-bold">
        Evaluated 5,000+ leading AI Agents across business functions
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center max-w-5xl mx-auto mt-15">
        <Logo name="Canva" />
        <Logo name="HubSpot" />
        <Logo name="Vanta" />
        <Logo name="Intercom" />
        <Logo name="Google" />
        <Logo name="OpenAI" />
        <Logo name="Webflow" />
        <Logo name="Cursor" />

        <Logo name="Ramp" />
        <Logo name="Rippling" />
        <Logo name="Notion" />
        <Logo name="Perplexity" />
        <Logo name="Uber" />
        <Logo name="Figma" />
        <Logo name="Dropbox" />
        <Logo name="Verkada" />
      </div>
    </div>
  );
};

function Logo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity">
      <span className="text-sm font-medium text-foreground/70">{name}</span>
    </div>
  );
}

export default CompanyLogo;
