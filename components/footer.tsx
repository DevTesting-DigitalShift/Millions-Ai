export default function Footer() {
  return (
    <footer className="bg-[#FFF8EE]">
      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 text-center">
        <h2 className="text-5xl font-semibold tracking-tight text-zinc-900">
          You are serious about your AI, right?
        </h2>

        <div className="mt-10 flex flex-col items-center gap-6">
          <button className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90 px-7 py-3 text-sm font-medium shadow-sm transition hover:opacity-90">
            Meet your AI →
          </button>

          <div className="flex items-center gap-2 text-sm font-medium text-orange-500">
            <span className="text-xl text-primary">MRI</span>
            Ask the Expert
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="w-full pb-10 container-section">
        <div className="bg-[#FAEFE0] border-[#F3D7B2] border  w-full h-full py-14 pl-20 rounded-3xl">
          <div className="grid grid-cols-2 gap-12 text-sm sm:grid-cols-3 md:grid-cols-5">
            {/* Products */}
            <div>
              <h3 className="mb-4 font-semibold text-xl text-primary">
                Products
              </h3>
              <ul className="space-y-2 text-primary/70 cursor-pointer font-medium">
                <li>Login</li>
                <li>MAIGrid™</li>
                <li>MAIGent™</li>
                <li>MAIScore</li>
                <li>Compare</li>
                <li>Reachout</li>
                <li>Integrate</li>
                <li>Changelog</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-4 font-semibold text-xl text-primary">
                Resources
              </h3>
              <ul className="space-y-2 text-primary/70 cursor-pointer font-medium">
                <li>Get Started</li>
                <li>Partner Program</li>
                <li>Power Puff Club</li>
                <li>FAQs</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 font-semibold text-xl text-primary">
                Company
              </h3>
              <ul className="space-y-2 text-primary/70 cursor-pointer font-medium">
                <li>About</li>
                <li>MillionLives Initiative</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="mb-4 font-semibold text-xl text-primary">
                Follow Us
              </h3>
              <ul className="space-y-2 text-primary/70 cursor-pointer font-medium">
                <li className="flex items-center gap-2">Linkedin</li>
                <li>Instagram</li>
                <li>X</li>
                <li>MillionCast</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-4 font-semibold text-xl text-primary">Legal</h3>
              <ul className="space-y-2 text-primary/70 cursor-pointer font-medium">
                <li>Privacy</li>
                <li>Terms of Use</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
