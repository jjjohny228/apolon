import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Privacy Policy | Apostol',
  description: 'Privacy Policy for Apostol platform',
};

export default async function PoliciesPage() {
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
                  href="/terms"
                  className="text-sm hover:text-textColor transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <section className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg mb-8">
            <strong>Effective Date:</strong> 08.12.2024
          </p>
          <p className="mb-6">
            This Privacy Policy explains how Apostol (&quot;we,&quot;
            &quot;our,&quot; or &quot;us&quot;) collects, uses, shares, and
            protects the personal information of users (&quot;you&quot;) while
            using our platform.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect the following types of information:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, and
              data from linked TikTok accounts.
            </li>
            <li>
              <strong>Usage Data:</strong> IP addresses, device information,
              browser type, and interaction metrics with our services.
            </li>
            <li>
              <strong>Cookies:</strong> Analytical cookies to track platform
              performance and usage trends.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Enhance the user experience.</li>
            <li>Provide account integration with TikTok.</li>
            <li>
              Troubleshoot, perform analytics, and improve platform performance.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Sharing</h2>
          <p className="mb-6">
            We do not sell user data. Specific data may be processed by
            third-party services (e.g., TikTok API) under their respective
            terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            4. Data Security
          </h2>
          <p className="mb-6">
            Your data is encrypted during transmission and stored securely. We
            regularly update our systems to prevent breaches.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Access and update personal information.</li>
            <li>Request data deletion or cessation of data processing.</li>
            <li>Withdraw consent for data collection at any time.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            6. Children&apos;s Privacy
          </h2>
          <p className="mb-6">
            This service is not intended for users under 13. We do not knowingly
            collect data from minors.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            7. Updates to This Policy
          </h2>
          <p className="mb-6">
            We may update this Privacy Policy periodically. Significant changes
            will be communicated via email or app notification.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Contact Information
          </h2>
          <p className="mb-6">
            For questions, contact us at{' '}
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

