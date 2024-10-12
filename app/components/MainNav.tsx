"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

import { AmericanTypewriter } from "../utils/fonts";
import Link from "next/link";
import { useI18n } from "@/locales/client";

interface MainNavProps {
  children?: React.ReactNode;
  closeMenu?: () => void;
}

export default function MainNav({
  children,
  closeMenu,
}: MainNavProps): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();
  const t = useI18n();

  const scrollTargetRef = useRef<string | null>(null);

  const linksLeft = useMemo(
    () => [
      { href: "/", label: t("nav.home"), id: "home" },
      { href: "/#about", label: t("nav.about"), id: "about" },
    ],
    [t]
  );

  const linksRight = useMemo(
    () => [
      { href: "/menu", label: t("nav.menu") },
      { href: "/#contact", label: t("nav.contact"), id: "contact" },
    ],
    [t]
  );

  const handleScroll = useCallback(
    (id: string, href: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        router.push(href, { scroll: false });
      } else {
        scrollTargetRef.current = id;
        router.push(href);
      }
    },
    [router]
  );

  useEffect(() => {
    if (scrollTargetRef.current) {
      const targetId = scrollTargetRef.current;
      const scrollToElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          scrollTargetRef.current = null;
        } else {
          setTimeout(scrollToElement, 100);
        }
      };
      scrollToElement();
    }
  }, [pathname]);

  return (
    <nav className="mx-6 flex flex-col md:flex-row items-left md:items-center md:space-x-4 lg:space-x-20 space-y-4 md:space-y-0 md:ml-6 md:mt-0">
      {linksLeft.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`flex items-center text-xl hover:text-[#DCBB94] ${AmericanTypewriter.className}`}
          onClick={() => {
            if (link.id) {
              handleScroll(link.id, link.href);
            } else {
              router.push(link.href);
              closeMenu?.();
            }
          }}
        >
          {link.label}
        </Link>
      ))}
      {children}
      {linksRight.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`flex items-center text-xl hover:text-[#DCBB94] ${AmericanTypewriter.className}`}
          onClick={() => {
            if (link.id) {
              handleScroll(link.id, link.href);
            } else {
              router.push(link.href);
              closeMenu?.();
            }
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
