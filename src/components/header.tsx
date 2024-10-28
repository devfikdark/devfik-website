"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { gambetta } from "@/lib/fonts";
import { cn } from "@/lib/utils";

/* eslint-disable id-length */

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { href: "/", label: "Index" },
    { href: "/our-work", label: "Our Work" },
    { href: "/our-story", label: "Our Story" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.header
        animate={{ y: isVisible ? 0 : -100 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md flex justify-center"
        initial={{ y: 0 }}
        transition={{ duration: 0.3 }}>
        <div className="max-w-6xl w-full px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex-shrink-0">
              <Link className="text-primary font-bold text-xl" href="/">
                <picture>
                  <img alt="Logo" height={40} src="/images/white_logo_full.png" width={120} />
                </picture>
              </Link>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      className={cn(
                        "text-foreground hover:text-foreground-normal text-lg lowercase",
                        gambetta.className,
                      )}
                      href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className={cn("md:hidden text-foreground hover:text-foreground-normal h-full", gambetta.className)}
              onClick={() => setIsMenuOpen(true)}>
              Menu
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            animate="visible"
            className="fixed inset-0 bg-card z-50 flex flex-col backdrop-blur-md"
            exit="exit"
            initial="hidden"
            variants={menuVariants}>
            <div className="flex justify-between items-center px-4 py-2">
              <div className="flex-shrink-0">
                <Link className="text-foreground-normal text-xl" href="/" onClick={() => setIsMenuOpen(false)}>
                  <picture>
                    <img alt="Logo" height={40} src="/images/white_logo_full.png" width={120} />
                  </picture>
                </Link>
              </div>
              <button className={cn("text-foreground-normal", gambetta.className)} onClick={() => setIsMenuOpen(false)}>
                Close
              </button>
            </div>
            <nav className="flex-grow flex items-center justify-center">
              <motion.ul className="space-y-6 text-center">
                {menuItems.map((item) => (
                  <motion.li key={item.href} variants={itemVariants}>
                    <Link
                      className={cn("text-4xl text-foreground-normal lowercase w-full", gambetta.className)}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
