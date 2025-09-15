import Section from "./Section";

const trustItems = [
  {
    id: 1,
    title: "収録予定100種類以上",
    description: "豊富なバリエーションをご用意",
    emoji: "🎵",
  },
  {
    id: 2,
    title: "毎週追加（予定）",
    description: "継続的に新しい声を配信",
    emoji: "📅",
  },
  {
    id: 3,
    title: "権利管理に配慮",
    description: "許諾・オリジナルボイスのみ使用",
    emoji: "⚖️",
  },
];

export default function Trust() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
          安心してご利用いただけます
          <span className="inline-block ml-2">🛡️</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {trustItems.map((item) => (
          <div key={item.id} className="text-center p-6">
            <div className="text-3xl mb-3">{item.emoji}</div>
            <h3 className="font-semibold text-text mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-gray-500 max-w-2xl mx-auto">
          ※ 権利に配慮したオリジナル・許諾ボイスのみを予定しております。
          安心してご利用ください。
        </p>
      </div>
    </Section>
  );
}
