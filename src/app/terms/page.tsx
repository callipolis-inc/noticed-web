import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Noticed",
  description:
    "Terms of Service for Noticed notebooks and digital archives. 100% user content ownership, offline-first data sovereignty, and fair use standards.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050708] text-white selection:bg-amber-900/40 selection:text-amber-100 px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Background Ambient Glow */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 10%, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Top Navigation */}
      <header className="relative z-10 max-w-3xl mx-auto mb-12 sm:mb-16 flex items-center justify-between border-b border-white/10 pb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-200"
        >
          <span className="text-white/40">←</span> Back to Noticed
        </Link>
        <span className="text-[11px] font-mono tracking-widest text-white/40 uppercase">
          Legal / Terms
        </span>
      </header>

      {/* Article Content */}
      <article className="relative z-10 max-w-3xl mx-auto space-y-12 sm:space-y-16">
        {/* Document Title Header */}
        <section className="space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-[0.24em] text-white/50">
            Terms of Service · Callipolis Inc.
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white/95">
            Terms of Service
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-white/50 pt-2 border-t border-white/5">
            <span>Effective Date: October 13, 2026</span>
            <span>·</span>
            <span>Last Updated: October 13, 2026</span>
            <span>·</span>
            <span>App: Noticed (iOS & Android)</span>
          </div>
        </section>

        {/* 1. Agreement to Terms */}
        <section className="space-y-4 border-t border-white/10 pt-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-normal text-white/90">
            1. Agreement to Terms
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light">
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User&rdquo;) and <strong className="text-white font-medium">Callipolis Inc.</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, or &ldquo;us&rdquo;), governing your access to and use of the <strong className="text-white font-medium">Noticed</strong> mobile applications, websites, and associated services (collectively, the &ldquo;Service&rdquo;).
          </p>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light">
            By downloading, installing, or accessing Noticed, you acknowledge that you have read, understood, and agreed to be bound by these Terms and our <Link href="/privacy" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">Privacy Policy</Link>.
          </p>
        </section>

        {/* 2. Content Sovereignty & 100% User Ownership */}
        <section className="space-y-4 border-t border-white/10 pt-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-normal text-white/90">
            2. Content Sovereignty & 100% User Ownership
          </h2>
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-white/80 font-semibold">
              A. Absolute User Copyright
            </h3>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light">
              We believe your thoughts and manuscripts are deeply personal. <strong className="text-white font-medium">You retain sole, exclusive ownership and full copyright of all content you author, import, or curate inside Noticed</strong> (including field notes, marginalia, voice recordings, polaroid photographs, and custom notebooks).
            </p>
          </div>

          <div className="space-y-3 pt-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-white/80 font-semibold">
              B. Strictly Limited Technical License
            </h3>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light">
              You grant Callipolis Inc. solely the limited technical license necessary to deliver the application:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-white/70 font-light pl-2">
              <li>Storing and indexing your records locally on your device.</li>
              <li>Transmitting and encrypting cloud backups across authorized devices when you activate Cloud Sync.</li>
            </ul>
            <p className="text-sm sm:text-base text-white/85 pt-1">
              We <strong className="text-white">never</strong> claim copyright over your writing, we <strong className="text-white">never</strong> sell your content, and we <strong className="text-white">never</strong> train public AI models on your private notebooks.
            </p>
          </div>
        </section>

        {/* 3. Subscriptions & Atelier Pro Tier */}
        <section className="space-y-4 border-t border-white/10 pt-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-normal text-white/90">
            3. Atelier Pro & Premium Membership
          </h2>
          <div className="space-y-3 text-sm sm:text-base text-white/75 font-light leading-relaxed">
            <p>
              <strong className="text-white font-medium">Free Tier</strong>: Core offline-first field notes, standard typography, on-device encryption, and basic media curation are available to all users.
            </p>
            <p>
              <strong className="text-white font-medium">Atelier Pro</strong>: We offer an optional patron tier providing expanded capabilities, such as unlimited gallery photos per note, audio memo import &amp; archival trimming, video documentation, and luxury bespoke notebook folios.
            </p>
            <p>
              <strong className="text-white font-medium">Store Billing &amp; Refunds</strong>: Purchases initiated via mobile stores (Apple App Store or Google Play Store) are processed directly by Apple Inc. or Google LLC respectively, subject to their terms of purchase and refund policies.
            </p>
          </div>
        </section>

        {/* 4. Acceptable Use Policy */}
        <section className="space-y-4 border-t border-white/10 pt-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-normal text-white/90">
            4. Acceptable Use Policy
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light">
            You agree not to use Noticed to:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-white/70 font-light pl-2">
            <li>Violate any applicable local or international laws.</li>
            <li>Transmit malicious software or exploit cloud synchronization endpoints.</li>
            <li>Attempt unauthorized access to remote database instances or other users&apos; synchronized data.</li>
            <li>Reverse-engineer or decompile proprietary binary components of Noticed, except where permitted by applicable law.</li>
          </ul>
        </section>

        {/* 5. Intellectual Property of Callipolis Inc. */}
        <section className="space-y-4 border-t border-white/10 pt-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-normal text-white/90">
            5. Intellectual Property of Callipolis Inc.
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light">
            The Noticed software code, trademark, visual design system, tactile darkroom simulation algorithms, and proprietary brand folios are the exclusive property of Callipolis Inc. and protected by copyright and intellectual property legislation.
          </p>
        </section>

        {/* 6. Disclaimer of Warranties & Limitation of Liability */}
        <section className="space-y-4 border-t border-white/10 pt-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-normal text-white/90">
            6. Disclaimer & Limitation of Liability
          </h2>
          <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-mono uppercase">
            THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND. CALLIPOLIS INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE. USERS ARE ENCOURAGED TO REGULARLY USE THE IN-APP ARCHIVE EXPORT TOOL TO MAINTAIN PERSONAL LOCAL JSON BACKUPS.
          </p>
        </section>

        {/* 7. Governing Law & Contact */}
        <section className="space-y-4 border-t border-white/10 pt-8 pb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-normal text-white/90">
            7. Contact Information
          </h2>
          <div className="text-xs sm:text-sm font-mono text-white/75 space-y-1 pt-1">
            <div>Callipolis Inc. · Legal Counsel</div>
            <div>Inquiries: <a href="mailto:support@callipolis.co" className="text-white underline decoration-white/30 hover:decoration-white">support@callipolis.co</a></div>
            <div>Website: <a href="https://noticed.app" className="text-white underline decoration-white/30 hover:decoration-white">noticed.app</a></div>
          </div>
        </section>
      </article>

      {/* Bottom Footer */}
      <footer className="relative z-10 max-w-3xl mx-auto pt-8 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-white/45 gap-4">
        <div>© 2026 NOTICED · Callipolis Inc.</div>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span>·</span>
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
        </div>
      </footer>
    </main>
  );
}
