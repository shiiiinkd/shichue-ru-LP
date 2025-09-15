"use client";

import { useState, FormEvent } from "react";
import PrimaryButton from "./PrimaryButton";

interface EmailFormProps {
  className?: string;
  placeholder?: string;
  buttonText?: string;
  size?: "sm" | "md" | "lg";
}

export default function EmailForm({
  className = "",
  placeholder = "メールアドレスを入力",
  buttonText = "事前登録する",
  size = "md",
}: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("メールアドレスを入力してください");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("正しいメールアドレスを入力してください");
      return;
    }

    setIsLoading(true);

    try {
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      const surveyUrl = process.env.NEXT_PUBLIC_SURVEY_URL;

      if (!formspreeEndpoint) {
        throw new Error("Formspree endpoint not configured");
      }

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: "New Shichueru Pre-registration",
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Redirect to survey if configured, otherwise show success message
      if (surveyUrl) {
        window.location.href = surveyUrl;
      } else {
        alert(
          "事前登録ありがとうございます！\nアプリリリース時にご連絡いたします。"
        );
        setEmail("");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setError("送信に失敗しました。もう一度お試しください。");
    } finally {
      setIsLoading(false);
    }
  };

  const inputSizeClasses = {
    sm: "h-8 text-sm",
    md: "h-10 text-base",
    lg: "h-12 text-lg",
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className={`w-full ${inputSizeClasses[size]} px-4 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200`}
            required
            disabled={isLoading}
          />
          {error && (
            <p className="mt-2 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
        </div>
        <PrimaryButton
          type="submit"
          size={size}
          isLoading={isLoading}
          className="sm:px-8"
          aria-label="メールアドレスで事前登録"
        >
          {buttonText}
        </PrimaryButton>
      </div>
      <p className="mt-3 text-xs text-gray-600 text-center sm:text-left">
        メールだけ・30秒・無料 / 登録でサンプルアラームボイスをプレゼント 🎵
      </p>
    </form>
  );
}
