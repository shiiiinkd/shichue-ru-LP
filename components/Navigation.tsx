"use client";

import Logo from "./Logo";
import PrimaryButton from "./PrimaryButton";

export default function Navigation() {
  const scrollToEmailForm = () => {
    const heroSection = document.querySelector("#hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <PrimaryButton
            onClick={scrollToEmailForm}
            size="sm"
            aria-label="事前登録フォームへスクロール"
          >
            事前登録
          </PrimaryButton>
        </div>
      </div>
    </nav>
  );
}
