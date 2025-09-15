import EmailForm from "./EmailForm";
import Section from "./Section";

export default function FinalCta() {
  return (
    <Section>
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-bg-soft rounded-3xl p-8 md:p-12 lg:p-16">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 blob-bg opacity-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 blob-bg opacity-15" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
            事前登録で
            <br />
            <span className="gradient-text">サンプルアラーム1本</span>
            <br />
            プレゼント
            <span className="inline-block ml-2">🎁</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-8">
            推しの声で目覚める新しい朝を、
            <br className="hidden sm:block" />
            いち早く体験してみませんか？
          </p>

          <EmailForm
            size="lg"
            buttonText="メールで事前登録する"
            className="max-w-md mx-auto"
          />

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2" />
              登録無料
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2" />
              30秒で完了
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2" />
              サンプルボイス付き
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
