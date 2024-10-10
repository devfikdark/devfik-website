"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    { href: "/team", label: "Team" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md flex justify-center"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}>
        <div className="max-w-4xl w-full px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex-shrink-0">
              <Link href="/">
                {/* <Image src="/logo.png" alt="Logo" width={120} height={40} /> */}
                devfik
              </Link>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-foreground hover:text-foreground-normal lowercase">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className="md:hidden text-foreground hover:text-foreground-normal h-full"
              onClick={() => setIsMenuOpen(true)}>
              Menu
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-primary z-50 flex flex-col"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>
            <div className="flex justify-between items-center p-4">
              <div className="flex-shrink-0">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  {/* <Image src="/logo.png" alt="Logo" width={120} height={40} /> */}
                  devfik
                </Link>
              </div>
              <button className="text-foreground-normal" onClick={() => setIsMenuOpen(false)}>
                Close
              </button>
            </div>
            <nav className="flex-grow flex items-center justify-center">
              <ul className="space-y-6 text-center">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}>
                    <Link
                      href={item.href}
                      className="text-2xl text-foreground-normal lowercase w-full"
                      onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
