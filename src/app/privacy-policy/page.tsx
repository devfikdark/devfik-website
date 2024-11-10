import { AnimatedGridPattern } from "@/components/animated-grid-pattern";
import { BlurFade } from "@/components/blur-fade";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="min-h-[40vh] flex justify-center items-center container max-w-6xl mx-auto relative">
        <BlurFade delay={0.25} yOffset={10}>
          <div className="flex flex-col items-center justify-center">
            <Heading className="text-5xl md:text-8xl text-center">Privacy Policy</Heading>
            <p className="text-center my-6">Last update: 10th November 2024</p>
          </div>
        </BlurFade>
        <AnimatedGridPattern
          className={cn("[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]", "inset-x-0 ")}
          duration={3}
          maxOpacity={0.1}
          numSquares={30}
        />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container max-w-6xl mx-auto">
        <h1 className="text-2xl font-medium text-foreground-normal">Your privacy is important to us</h1>
        <p className="my-4">
          At devfik, we are committed to protecting your privacy and ensuring the security of your personal information.
          This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services.
        </p>
        <br />
        <br />
        <h1 className="text-2xl font-medium text-foreground-normal">Information we collect</h1>
        <p className="my-4">
          We collect information that you provide to us when you use our services. This includes information you provide
          when you contact us, subscribe to our newsletter, or use our website. The information we collect may include
          your name, email address, phone number. <br /> When you visit our website, we also collect information about
          your browsing behavior, including the pages you visit and the products you view. This information is collected
          using cookies and similar technologies.
        </p>
        <br />
        <br />
        <h1 className="text-2xl font-medium text-foreground-normal">How we use your information</h1>
        <p className="my-4">
          We use the information we collect to provide and improve our services, to communicate with you, and to
          personalize your experience. We may use your information to send you newsletters, promotional emails, and
          other marketing materials. We may also use your information to analyze our website traffic and improve our
          website design and functionality.
        </p>
        <br />
        <br />
        <h1 className="text-2xl font-medium text-foreground-normal">How we protect your information</h1>
        <p className="my-4">
          We take appropriate measures to protect your information from unauthorized access, disclosure, alteration, and
          destruction. We use industry-standard encryption and secure data storage practices to safeguard your data. We
          also limit access to your information to only those employees who need it to provide our services to you.
        </p>
        <br />
        <br />
        <h1 className="text-2xl font-medium text-foreground-normal">How we share your information</h1>
        <p className="my-4">
          We do not sell, rent, or lease your personal information to third parties. We may share your information with
          trusted third-party service providers who assist us in operating our website and conducting our business.
          These third parties are contractually obligated to protect your information and are not allowed to use it for
          their own purposes.
        </p>
        <br />
        <br />
        <h1 className="text-2xl font-medium text-foreground-normal">Links to other websites</h1>
        <p className="my-4">
          Our website may contain links to other websites. We are not responsible for the privacy practices of these
          websites. We encourage you to read the privacy policies of each website you visit.
        </p>
        <br />
        <br />
        <h1 className="text-2xl font-medium text-foreground-normal">Changes to this Privacy Policy</h1>
        <p className="my-4">
          We may update this Privacy Policy from time to time to reflect changes in our business practices or legal
          requirements. We will notify you of any changes by posting the new Privacy Policy on our website.
        </p>
        <br />
        <br />
        <h1 className="text-2xl font-medium text-foreground-normal">Contact us</h1>
        <p className="my-4">
          If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
          <a href="mailto:support@devfik.com" className="underline underline-offset-2">
            support@devfik.com
          </a>
          .
        </p>
      </div>
    </>
  );
}
