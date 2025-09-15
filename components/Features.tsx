import Section from "./Section";
import SpeechBubbleIcon from "./icons/SpeechBubbleIcon";
import SunIcon from "./icons/SunIcon";
import PlayIcon from "./icons/PlayIcon";

export default function Features() {
  return (
    <Section background="soft">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* 共感セクション */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-6 text-center md:text-left">
            普通のアラーム、もう無理…
            <span className="inline-block ml-2">😴</span>
          </h2>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <p className="text-gray-700">毎朝同じ音で起きるのがつらい</p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <p className="text-gray-700">スヌーズを何回も押してしまう</p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <p className="text-gray-700">朝から憂鬱な気分で一日がスタート</p>
            </div>
          </div>
        </div>

        {/* 解決セクション */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-6 text-center md:text-left">
            <span className="gradient-text">しちゅえーる</span>が
            <br />
            理想の声をお届け
            <span className="inline-block ml-2">✨</span>
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <SpeechBubbleIcon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-text mb-1">
                  好きな声で目覚める
                </h3>
                <p className="text-gray-600 text-sm">
                  推しの声で毎朝幸せな気分に
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <PlayIcon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-text mb-1">
                  豊富なバリエーション
                </h3>
                <p className="text-gray-600 text-sm">
                  100種類以上の声とシチュエーション
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <SunIcon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-text mb-1">
                  爽やかな朝の始まり
                </h3>
                <p className="text-gray-600 text-sm">
                  推し活のテンションで一日をスタート
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
