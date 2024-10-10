import { BlurFade } from "@/components/blur-fade";
import { Heading } from "@/components/ui/heading";

export function HowWeWork() {
  return (
    <BlurFade delay={0.25} yOffset={10}>
      <section className="container mt-40 lg:mt-72">
        <div className="px-4 lg:px-14">
          <div className="relative p-6 md:p-16">
            <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
              <div className="mb-10 lg:mb-0 lg:col-span-6 lg:order-2">
                <BlurFade delay={0.5} yOffset={10}>
                  <Heading className="text-4xl font-bold">
                    We ship <span className="italic">fast</span> and we ship <span className="italic">right</span>
                  </Heading>
                </BlurFade>

                <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist" aria-orientation="vertical">
                  <div className={`text-start group focus:outline-none hover:bg-background p-4 md:p-5 rounded-2xl`}>
                    <span className="flex gap-x-6">
                      <svg
                        className="shrink-0 mt-2 size-6 md:size-7 text-foreground-normal group-hover:text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
                        <path d="m7 16.5-4.74-2.85" />
                        <path d="m7 16.5 5-3" />
                        <path d="M7 16.5v5.17" />
                        <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
                        <path d="m17 16.5-5-3" />
                        <path d="m17 16.5 4.74-2.85" />
                        <path d="M17 16.5v5.17" />
                        <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
                        <path d="M12 8 7.26 5.15" />
                        <path d="m12 8 4.74-2.85" />
                        <path d="M12 13.5V8" />
                      </svg>

                      <span className="grow">
                        <span className="block text-lg font-semibold text-foreground-normal group-hover:text-primary">
                          Collaborative Discovery
                        </span>
                        <span className="block mt-1 text-foreground group-hover:text-foreground-normal">
                          We begin by understanding your business goals and challenges, working closely with you to
                          define a tailored solution that meets your unique needs.
                        </span>
                      </span>
                    </span>
                  </div>
                  <div className={`text-start group focus:outline-none hover:bg-background p-4 md:p-5 rounded-xl`}>
                    <span className="flex gap-x-6">
                      <svg
                        className="shrink-0 mt-2 size-6 md:size-7 text-foreground-normal group-hover:text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M9 8h7" />
                        <path d="M8 12h6" />
                        <path d="M11 16h5" />
                      </svg>

                      <span className="grow">
                        <span className="block text-lg font-semibold text-foreground-normal group-hover:text-primary">
                          Agile Development
                        </span>
                        <span className="block mt-1 text-foreground group-hover:text-foreground-normal">
                          Using an agile approach, we build, test, and refine your project in iterative cycles, ensuring
                          flexibility, transparency, and high-quality results at every stage.
                        </span>
                      </span>
                    </span>
                  </div>
                  <div className={`text-start group focus:outline-none hover:bg-background p-4 md:p-5 rounded-xl`}>
                    <span className="flex gap-x-6">
                      <svg
                        className="shrink-0 mt-2 size-6 md:size-7 text-foreground-normal group-hover:text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M22 11v1a10 10 0 1 1-9-10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" x2="9.01" y1="9" y2="9" />
                        <line x1="15" x2="15.01" y1="9" y2="9" />
                        <path d="M16 5h6" />
                        <path d="M19 2v6" />
                      </svg>

                      <span className="grow">
                        <span className="block text-lg font-semibold text-foreground-normal group-hover:text-primary">
                          Ongoing Support
                        </span>
                        <span className="block mt-1 text-foreground group-hover:text-foreground-normal">
                          Our partnership doesn't end at delivery. We provide continuous support and updates, ensuring
                          your solution evolves as your business grows.
                        </span>
                      </span>
                    </span>
                  </div>
                </nav>
              </div>

              <div className="lg:col-span-6">
                <div className="relative">
                  <div>
                    <picture>
                      <img
                        className="shadow-xl rounded-xl shadow-gray-900/20"
                        width={500}
                        height={500}
                        src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                        alt="Advanced tools"
                      />
                    </picture>
                  </div>

                  <div className="hidden absolute top-0 end-0 translate-x-16 md:block lg:translate-x-16">
                    <svg
                      className="w-16 h-auto text-primary"
                      width="121"
                      height="135"
                      viewBox="0 0 121 135"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                        stroke="currentColor"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                        stroke="currentColor"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                        stroke="currentColor"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 grid grid-cols-12 size-full">
              <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-card w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full"></div>
            </div>
          </div>
        </div>
      </section>
    </BlurFade>
  );
}
