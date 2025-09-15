import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-border">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-gray-600 max-w-md">
              推しの声で朝を迎える新しいアラームアプリ「しちゅえーる」。
              推し活のテンションで一日が始まる、特別な目覚まし体験をお届けします。
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-text mb-4">リンク</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  利用規約
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2024 しちゅえーる. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              権利に配慮したオリジナル・許諾ボイスのみを予定
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
