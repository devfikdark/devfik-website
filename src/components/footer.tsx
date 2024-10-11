export function Footer() {
  return (
    <footer className="border-t border-dashed mt-40 lg:mt-60 group">
      <div className="container max-w-6xl mx-auto w-full py-8">
        <div className="flex mb-20">
          <div>
            <h2 className="text-primary text-3xl font-bold">devfik</h2>
            <p>Innovating tomorrow, building today</p>
          </div>

          <div className="ml-auto flex gap-2">
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
            <a href="https://www.facebook.com/devfik" rel="noreferrer" target="_blank">
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
