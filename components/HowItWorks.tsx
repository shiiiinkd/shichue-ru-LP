import Section from "./Section";
import NoteIcon from "./icons/NoteIcon";
import SpeechBubbleIcon from "./icons/SpeechBubbleIcon";
import SunIcon from "./icons/SunIcon";

const steps = [
  {
    id: 1,
    title: "事前登録",
    description: "メールアドレスだけで簡単登録",
    detail: "30秒で完了！",
    icon: NoteIcon,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "好みの声・シチュを選ぶ",
    description: "100種類以上から選択",
    detail: "毎週新しい声を追加予定",
    icon: SpeechBubbleIcon,
    color: "bg-primary",
  },
  {
    id: 3,
    title: "時間をセット",
    description: "理想の朝の始まり",
    detail: "推し活テンションでスタート！",
    icon: SunIcon,
    color: "bg-accent",
  },
];

export default function HowItWorks() {
  return (
    <Section background="soft">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
          カンタン3ステップ
          <span className="inline-block ml-2">✨</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          しちゅえーるで理想の朝を迎えるまでの流れ
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div key={step.id} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-border z-0 transform -translate-x-1/2" />
              )}

              <div className="relative z-10 text-center">
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft`}
                >
                  <IconComponent className="text-white" size={28} />
                </div>

                {/* Step number */}
                <div className="inline-flex items-center justify-center w-8 h-8 bg-text text-white rounded-full text-sm font-bold mb-4">
                  {step.id}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 mb-2">{step.description}</p>
                <p className="text-sm text-primary font-medium">
                  {step.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
