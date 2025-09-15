"use client";

import { useState } from "react";
import Section from "./Section";

const faqs = [
  {
    id: 1,
    question: "iPhone/Androidに対応していますか？",
    answer:
      "両方に対応予定です。アプリリリース時に事前登録いただいたメールアドレスにご案内をお送りします。",
  },
  {
    id: 2,
    question: "料金はかかりますか？",
    answer:
      "事前登録は完全無料です。アプリの料金体系については、リリース前に詳細をお知らせします。",
  },
  {
    id: 3,
    question: "声の権利について大丈夫ですか？",
    answer:
      "許諾を得た声優さんの音声、またはオリジナルで制作したボイスのみを使用予定です。権利管理には十分配慮しております。",
  },
  {
    id: 4,
    question: "いつリリースされますか？",
    answer:
      "リリース時期については、事前登録いただいた方に優先的にお知らせします。開発状況も定期的にご報告予定です。",
  },
  {
    id: 5,
    question: "登録したメールアドレスの扱いは？",
    answer:
      "アプリリリースのお知らせとサンプルボイスの配布のみに使用し、第三者に提供することはありません。",
  },
];

export default function Faq() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <Section background="soft">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            よくあるご質問
            <span className="inline-block ml-2">❓</span>
          </h2>
          <p className="text-lg text-gray-600">
            しちゅえーるについて気になることがあればお気軽にお問い合わせください
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openItems.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-border shadow-card overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-text pr-4">
                      {faq.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-6 h-6 text-primary transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  className={`transition-all duration-200 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
