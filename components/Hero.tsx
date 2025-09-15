import Image from "next/image";
import EmailForm from "./EmailForm";
import Section from "./Section";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 blob-bg opacity-20" />
      <div className="absolute bottom-20 left-10 w-96 h-96 blob-bg opacity-15" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">
            <span className="gradient-text">推しの声</span>で
            <br />
            朝を迎えよう！
            <span className="inline-block ml-2">☀️</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            好きな声をアラームにできるアプリ『しちゅえーる』。
            <br className="hidden sm:block" />
            推し活のテンションで一日が始まる、新しい目覚まし体験。
            <span className="inline-block ml-2">🎵💚</span>
          </p>

          <div className="mb-6">
            <EmailForm
              size="lg"
              buttonText="今すぐ事前登録する"
              className="max-w-md mx-auto lg:mx-0"
            />
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
            {/* Phone mockup */}
            <div className="relative animate-float">
              <Image
                src="/phone-mockup.svg"
                alt="しちゅえーるアプリのスクリーンショット"
                width={300}
                height={600}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />

              {/* Speech bubbles */}
              <div
                className="absolute -top-8 -left-8 bg-white rounded-2xl p-3 shadow-card animate-float"
                style={{ animationDelay: "1s" }}
              >
                <p className="text-sm font-medium text-primary">おはよう！</p>
              </div>

              <div
                className="absolute -bottom-4 -right-8 bg-accent rounded-2xl p-3 shadow-card animate-float"
                style={{ animationDelay: "2s" }}
              >
                <p className="text-sm font-medium text-text">今日も頑張ろう♪</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
