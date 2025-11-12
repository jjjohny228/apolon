'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useT } from '@gitroom/react/translation/get.transation.service.client';
import { useVariables } from '@gitroom/react/helpers/variable.context';

export const HomeComponent = () => {
  const t = useT();
  const { isGeneral } = useVariables();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full h-full bg-newBgColor text-newTextColor overflow-auto">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-newBgColorInner border-b border-newTableBorder">
        <nav className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-2xl flex items-center justify-center gap-[10px] text-newTextColor"
              >
                <div className="max-w-[55px]">
                  <Image
                    src={'/logo.svg'}
                    width={55}
                    height={55}
                    alt="Logo"
                  />
                </div>
                <span className="text-xl font-semibold">
                  {isGeneral ? 'Apostol' : 'Gitroom'}
                </span>
              </Link>
            </div>
            <ul className="flex items-center gap-6">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm text-newTextColor hover:text-textItemFocused transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-sm text-newTextColor hover:text-textItemFocused transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <Link
                  href="/policies"
                  className="text-sm text-newTextColor hover:text-textItemFocused transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-newTextColor hover:text-textItemFocused transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero px-4 py-20 md:py-32 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-newTextColor">
            Boost Your TikTok Success with AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-newTextColor opacity-80">
            Monitor trends, discover niches, and post content with ease.
          </p>
          <Link
            href="/auth/login"
            className="inline-block px-8 py-4 bg-newBtnPrimary text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="content-section px-4 py-20 bg-newBgColorInner">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-newTextColor">
            About {isGeneral ? 'Apostol' : 'Gitroom'}
          </h2>
          <p className="text-lg md:text-xl text-center text-newTextColor opacity-80 leading-relaxed">
            {isGeneral
              ? 'Apostol helps creators grow their TikTok accounts using advanced AI insights.'
              : 'Gitroom helps creators grow their social media accounts using advanced AI insights.'}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="content-section px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-newTextColor">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="feature-card bg-newBgColorInner p-8 rounded-lg border border-newTableBorder hover:border-newBtnPrimary transition-colors">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-newBtnPrimary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-newTextColor">
                Account Analysis
              </h3>
              <p className="text-newTextColor opacity-80">
                Deep insights into your social media profiles.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="feature-card bg-newBgColorInner p-8 rounded-lg border border-newTableBorder hover:border-newBtnPrimary transition-colors">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-newBtnPrimary"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-newTextColor">
                Lots of social media platforms
              </h3>
              <p className="text-newTextColor opacity-80">
                Post you content everywhere
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="feature-card bg-newBgColorInner p-8 rounded-lg border border-newTableBorder hover:border-newBtnPrimary transition-colors">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-newBtnPrimary"
                >
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-newTextColor">
                Scheduled Posting
              </h3>
              <p className="text-newTextColor opacity-80">
                Post videos directly to social media platforms. And schedule them for later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-newBgColorInner border-t border-newTableBorder py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm text-newTextColor opacity-60">
            © 2024 {isGeneral ? 'Apostol' : 'Gitroom'}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

