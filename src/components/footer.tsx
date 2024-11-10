import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-dashed mt-40 lg:mt-60 group">
      <div className="container max-w-6xl mx-auto w-full py-8 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row mb-10 md:mb-20 gap-8 md:gap-0">
          <div>
            <picture>
              <img alt="Logo" height={40} src="/images/white_logo_full.png" width={120} />
            </picture>
            <p className="mt-4">Innovating tomorrow, building today</p>
            <div className="flex mt-2 gap-2">
              <a href="mailto:support@devfik.com">
                <picture>
                  <img alt="Mail" height={35} src="/images/mail.png" width={35} />
                </picture>
              </a>
              <a href="https://x.com/devfik" rel="noreferrer" target="_blank">
                <picture>
                  <img alt="X" height={35} src="/images/x.png" width={35} />
                </picture>
              </a>
              <a href="https://www.linkedin.com/company/devfik" rel="noreferrer" target="_blank">
                <picture>
                  <img alt="LinkedIn" height={35} src="/images/linkedin.png" width={35} />
                </picture>
              </a>
              <a href="https://www.facebook.com/people/Devfik/61565410763624" rel="noreferrer" target="_blank">
                <picture>
                  <img alt="Facebook" height={35} src="/images/facebook.png" width={35} />
                </picture>
              </a>
              <a href="https://github.com/devfikdark" rel="noreferrer" target="_blank">
                <picture>
                  <img alt="Github" height={35} src="/images/github.png" width={35} />
                </picture>
              </a>
            </div>
          </div>

          <div className="md:ml-auto flex flex-col sm:flex-row gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-foreground-normal">Company</h3>
              <Link href="/">Index</Link>
              <Link href="/our-work">Our Work</Link>
              <Link href="/our-story">Our Story</Link>
              <Link href="/contact-us">Contact Us</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-foreground-normal">Legal</h3>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <picture className="w-full">
          <img
            alt="devfik"
            className="w-full h-auto transition-all duration-500 filter grayscale group-hover:filter-none"
            src="/images/devfik.png"
          />
        </picture>
      </div>
    </footer>
  );
}
