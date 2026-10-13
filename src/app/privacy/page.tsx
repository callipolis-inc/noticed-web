import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Noticed",
  description:
    "Privacy Policy for Noticed personal & shared notebooks. Offline-first architecture, local sovereignty, and explicit data protection standards.",
};

export default function PrivacyPage() {
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
          Legal / Privacy
        </span>
      </header>

      {/* Article Content */}
      <article className="relative z-10 max-w-3xl mx-auto space-y-12 sm:space-y-16">
        {/* Document Title Header */}
        <section className="space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-[0.24em] text-white/50">
            Official Policy · Callipolis Inc.
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white/95">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-white/50 pt-2 border-t border-white/5">
            <span>Effective Date: October 13, 2026</span>
            <span>·</span>
            <span>Last Updated: October 13, 2026</span>
            <span>·</span>
            <span>App: Noticed (iOS & Android)</span>
          </div>
        </section>

        {/* 1. Our Privacy Philosophy */}
        <section className="space-y-4 border-t border-white/10 pt-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-normal text-white/90">
            1. Our Privacy Philosophy
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light">
            At <strong className="text-white font-medium">Noticed</strong>, we believe that personal reflections, creative folios, field notes, and manuscripts are intimate and sovereign. We architected Noticed as an <strong className="text-white font-medium">offline-first, local-sovereign notebook</strong>:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-white/70 font-light pl-2">
            <li>Your notes belong exclusively to you and reside directly on your physical device.</li>
            <li>We do <strong className="text-white">not</strong> sell, rent, monetize, or broker your personal information.</li>
            <li>We do <strong className="text-white">not</strong> employ third-party advertising SDKs, tracking pixels, or cross-app analytics trackers.</li>
          </ul>
        </section>

        {/* 2. Information We Collect and Process */}
        <section className="space-y-4 border-t border-white/10 pt-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-normal text-white/90">
            2. Information We Collect and Process
          </h2>

          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-white/80">
              A. Information Stored Locally on Your Device
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
              By default, all your creative data is stored directly on your device inside secure sandboxed storage (IndexedDB & SQLite):
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-white/70 font-light pl-2">
              <li><strong className="text-white font-medium">Manuscripts & Notes</strong>: Text content, marginalia (sidenotes & footnotes), inline highlights, and typographic styling.</li>
              <li><strong className="text-white font-medium">Notebooks & Folios</strong>: Space titles, palette shades, cover styling, and font choices.</li>
              <li><strong className="text-white font-medium">Media Attachments</strong>: Photographs, analog darkroom parameters, video moments, and voice recordings.</li>
              <li><strong className="text-white font-medium">Preferences</strong>: Theme selections (Alabaster, Obsidian, Sage, etc.), font size, haptic feedback toggles, and sorting options.</li>
            </ul>
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-white/80">
              B. Account & Cloud Synchronization Data (Optional)
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
              If you voluntarily enable <strong className="text-white font-medium">Cloud Synchronization</strong> to back up your chronicle across devices:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-white/70 font-light pl-2">
              <li><strong className="text-white font-medium">Authentication Data</strong>: Your email address and securely hashed authentication credentials managed through Supabase.</li>
              <li><strong className="text-white font-medium">Encrypted Backups</strong>: Encrypted copies of your spaces, notes, and media attachments uploaded to our secure database and storage buckets.</li>
              <li><strong className="text-white font-medium">Author Persona</strong>: Your chosen author name and avatar photograph.</li>
            </ul>
            <p className="text-xs font-mono text-white/50 italic">
              *You can use Noticed indefinitely in offline-first mode without creating a cloud account.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-white/80">
              C. Device Hardware Permissions
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
              Noticed requests system permissions strictly to power intentional interactions you trigger:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-white/70 font-light pl-2">
              <li><strong className="text-white font-medium">Microphone</strong>: Requested solely when you record voice memos or use dictation. Audio is captured locally; dictation is parsed on-device. Audio files are never analyzed for advertising.</li>
              <li><strong className="text-white font-medium">Camera & Photo Library</strong>: Requested when you take pictures or attach existing media to a note. We never scan or access media outside the items you select.</li>
              <li><strong className="text-white font-medium">Haptics</strong>: Powers subtle tactile feedback during navigation.</li>
            </ul>
          </div>
        </section>

        {/* 3. How We Use Your Information */}
        <section className="space-y-4 border-t border-white/10 pt-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-normal text-white/90">
            3. How We Use Your Information
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
            We use collected data solely to deliver the service:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-white/70 font-light pl-2">
            <li>Render your field notes, typography, and analog media frames cleanly.</li>
            <li>Synchronize your notebooks across your authorized devices when Cloud Sync is on.</li>
            <li>Allow you to generate complete archive backups (JSON) and exported manuscripts.</li>
          </ul>
          <p className="text-sm sm:text-base text-white/85 pt-2">
            We <strong className="text-white">never</strong> sell user data to brokers, and we <strong className="text-white">never</strong> train public AI models on your private notebooks.
          </p>
        </section>

        {/* 4. Data Storage, Security & Retention */}
        <section className="space-y-4 border-t border-white/10 pt-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-normal text-white/90">
            4. Data Storage, Security & Retention
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-white/70 font-light pl-2">
            <li><strong className="text-white font-medium">Local Storage</strong>: Data is held in sandboxed device storage and remains until you manually delete items or tap &ldquo;Reset All Data&rdquo;.</li>
            <li><strong className="text-white font-medium">Encryption in Transit & At Rest</strong>: Cloud synchronization is transmitted via TLS 1.3/HTTPS, and persistent database storage is encrypted at rest using industry-standard AES-256 via Supabase infrastructure.</li>
          </ul>
        </section>

        {/* 5. Account & Data Deletion Instructions (MANDATORY FOR GOOGLE PLAY & APPLE) */}
        <section id="data-deletion" className="space-y-6 border-t border-white/10 pt-8 scroll-mt-20">
          <div className="inline-block px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 font-mono text-[10px] uppercase tracking-widest">
            Data Sovereignty · Google Play & Apple Requirement
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-normal text-white/95">
            5. Account & Data Deletion (Right to Erasure)
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light">
            In compliance with Apple App Store Guideline 5.1.1(v), Google Play User Data policies, and GDPR/CCPA regulations, users have the unconditional right to permanently purge their account and all associated personal data.
          </p>

          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white/90 font-semibold">
              Option A: Immediate In-App Deletion
            </h3>
            <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-white/70 pl-1 font-light">
              <li>Open the <strong className="text-white">Noticed</strong> mobile application on your device.</li>
              <li>Tap your author avatar or pen name in the top bar to open the <strong className="text-white">Profile Sheet</strong>.</li>
              <li>Scroll down to the <strong className="text-white">Account & Data Privacy</strong> section.</li>
              <li>Tap <strong className="text-rose-400">Delete Account & Data</strong>, review the irreversible confirmation dialog, and tap <strong className="text-rose-400">Delete Everything</strong>.</li>
            </ol>
            <p className="text-xs text-white/50 italic pt-1">
              *This immediately wipes all remote cloud databases, uploaded photographs, voice memos, auth records, and clears your device&apos;s local cache.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white/90 font-semibold">
              Option B: Remote Web / Email Deletion Request
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              If you have uninstalled the application or cannot access your device, you may submit a remote account erasure request:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-white/70 pl-1 font-light">
              <li>Send an email to <a href="mailto:support@callipolis.co?subject=Account%20Deletion%20Request" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">support@callipolis.co</a> with the subject <code className="text-white/90 bg-white/10 px-1.5 py-0.5 rounded text-[11px]">Account Deletion Request</code>.</li>
              <li>The email must be sent from your registered account email address for verification.</li>
              <li>Our automated compliance engine will verify and purge all cloud database rows, storage attachments, and auth credentials within 7 business days.</li>
            </ul>
          </div>
        </section>

        {/* 6. Third-Party Service Providers */}
        <section className="space-y-4 border-t border-white/10 pt-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-normal text-white/90">
            6. Third-Party Service Providers
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
            We limit external service providers strictly to infrastructure hosting:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-white/70 font-light pl-2">
            <li><strong className="text-white font-medium">Supabase Inc.</strong>: Powers secure database authentication and cloud storage sync.</li>
            <li><strong className="text-white font-medium">Cloudflare Inc.</strong>: Powers SSL certificate provisioning, CDN edge delivery, and web distribution.</li>
          </ul>
        </section>

        {/* 7. Children's Privacy */}
        <section className="space-y-4 border-t border-white/10 pt-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-normal text-white/90">
            7. Children&apos;s Privacy
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
            Noticed does not knowingly solicit or collect personal information from individuals under 13 years of age. If we become aware that a child under 13 has registered for cloud sync, we will delete their cloud account immediately.
          </p>
        </section>

        {/* 8. Contact Information */}
        <section className="space-y-4 border-t border-white/10 pt-8 pb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-normal text-white/90">
            8. Contact Us
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
            For questions regarding this policy or privacy inquiries:
          </p>
          <div className="text-xs sm:text-sm font-mono text-white/75 space-y-1 pt-2">
            <div>Callipolis Inc. · Publisher of Noticed</div>
            <div>Inquiries: <a href="mailto:support@callipolis.co" className="text-white underline decoration-white/30 hover:decoration-white">support@callipolis.co</a></div>
            <div>Website: <a href="https://noticed.app" className="text-white underline decoration-white/30 hover:decoration-white">noticed.app</a></div>
          </div>
        </section>
      </article>

      {/* Bottom Footer */}
      <footer className="relative z-10 max-w-3xl mx-auto pt-8 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-white/45 gap-4">
        <div>© 2026 NOTICED · Callipolis Inc.</div>
        <div className="flex items-center gap-4">
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
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
