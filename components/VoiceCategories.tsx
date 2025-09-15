import Section from "./Section";

const categories = [
  { id: 1, name: "お姉さん", emoji: "👩‍💼", description: "優しく起こしてくれる" },
  { id: 2, name: "ロリ", emoji: "👧", description: "可愛い声で目覚める" },
  { id: 3, name: "王子様", emoji: "🤴", description: "素敵な朝のご挨拶" },
  { id: 4, name: "執事", emoji: "🤵", description: "丁寧にお起こしします" },
  { id: 5, name: "VTuber風", emoji: "🎭", description: "配信風のノリで起床" },
  {
    id: 6,
    name: "ツンデレ",
    emoji: "😤",
    description: "ちょっと素直じゃない？",
  },
  { id: 7, name: "おっとり", emoji: "😌", description: "ゆったりとした声で" },
  { id: 8, name: "クール", emoji: "😎", description: "かっこいい声で目覚め" },
];

export default function VoiceCategories() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
          豊富なボイスカテゴリ
          <span className="inline-block ml-2">🎵</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          あなたの好みに合わせて選べる、多彩な声とシチュエーション
        </p>
      </div>

      <div className="relative">
        <div
          className="flex overflow-x-auto pb-6 gap-4 scroll-smooth"
          style={{ scrollbarWidth: "thin" }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex-shrink-0 w-48 bg-white rounded-xl border border-border shadow-card p-6 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-4xl mb-3">{category.emoji}</div>
              <h3 className="font-semibold text-text mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-4">
          <p className="text-sm text-gray-500">← スワイプしてもっと見る →</p>
        </div>
      </div>
    </Section>
  );
}
