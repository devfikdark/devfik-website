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
            <picture>
              <img src="/images/mail.png" alt="Mail" width={35} height={35} />
            </picture>
            <picture>
              <img src="/images/x.png" alt="X" width={35} height={35} />
            </picture>
            <picture>
              <img src="/images/linkedin.png" alt="LinkedIn" width={35} height={35} />
            </picture>
            <picture>
              <img src="/images/facebook.png" alt="Facebook" width={35} height={35} />
            </picture>
          </div>
        </div>
        <picture className="w-full">
          <img
            src="/images/devfik.png"
            alt="devfik"
            className="w-full h-auto transition-all duration-500 filter grayscale group-hover:filter-none"
          />
        </picture>
      </div>
    </footer>
  );
}
