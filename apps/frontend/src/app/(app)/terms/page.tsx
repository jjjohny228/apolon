import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Terms of Service | Apostol',
  description: 'Terms of Service for Apostol platform',
};

export default async function TermsPage() {
  return (
    <div className="min-h-screen bg-primary text-textColor">
      <header className="border-b border-tableBorder bg-third">
        <nav className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-2xl flex items-center justify-center gap-[10px] text-textColor"
              >
                <div className="max-w-[55px]">
                  <Image
                    src={'/postiz.svg'}
                    width={55}
                    height={55}
                    alt="Logo"
                  />
                </div>
                <span className="text-xl font-semibold">Apostol</span>
              </Link>
            </div>
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-textColor transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/policies"
                  className="text-sm hover:text-textColor transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <section className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg mb-8">
            <strong>Effective Date:</strong> 08.12.2024
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="mb-6">
            By using Apostol, you agree to these Terms of Service
            (&quot;Terms&quot;). If you disagree, please discontinue use.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            2. Service Description
          </h2>
          <p className="mb-6">
          Apostol is a free platform offering TikTok account analysis,
            niche suggestions, and video posting integration.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            3. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Use the service ethically and legally.</li>
            <li>
              Do not exploit or misuse features for unauthorized purposes.
            </li>
            <li>Maintain the confidentiality of your account credentials.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            4. Prohibited Conduct
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Posting harmful, illegal, or offensive content via TikTok
              integration.
            </li>
            <li>Attempting to reverse-engineer our platform.</li>
            <li>Overloading servers or disrupting service.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            5. Intellectual Property
          </h2>
          <p className="mb-6">
            All Apostol content, logos, and branding are owned by us.
            Unauthorized use is prohibited.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            6. Limitation of Liability
          </h2>
          <p className="mb-6">
            We are not responsible for any loss or damage resulting from your
            use of the service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Governing Law</h2>
          <p className="mb-6">
            These Terms are governed by the laws of Ukraine.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
          <p className="mb-6">
            We reserve the right to terminate accounts for violation of these
            Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            9. Changes to Terms
          </h2>
          <p className="mb-6">
            We may modify these Terms. Continued use signifies acceptance of
            updated Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Contact Information
          </h2>
          <p className="mb-6">
            For inquiries, email{' '}
            <a
              href="mailto:hlib3114@gmail.com"
              className="text-blue-400 hover:underline"
            >
              hlib3114@gmail.com
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="border-t border-tableBorder bg-third mt-12">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 Apostol. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

