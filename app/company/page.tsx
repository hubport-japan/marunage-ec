export default function Company() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">運営会社情報</h1>

                    <div className="space-y-6 text-gray-700">
                        <section className="border-b border-gray-200 pb-6">
                            <h2 className="text-lg font-bold mb-3 text-gray-900">会社名</h2>
                            <p className="text-xl">HUB PORT JAPAN株式会社</p>
                        </section>

                        <section className="border-b border-gray-200 pb-6">
                            <h2 className="text-lg font-bold mb-3 text-gray-900">代表取締役</h2>
                            <p>山本 雄介</p>
                        </section>

                        <section className="border-b border-gray-200 pb-6">
                            <h2 className="text-lg font-bold mb-3 text-gray-900">所在地</h2>
                            <p>〒409-3611</p>
                            <p>山梨県西八代郡市川三郷町大塚1973</p>
                        </section>

                        <section className="border-b border-gray-200 pb-6">
                            <h2 className="text-lg font-bold mb-3 text-gray-900">電話番号</h2>
                            <p>055-242-7435</p>
                            <p className="text-sm text-gray-500 mt-1">受付時間：平日 10:00〜17:00</p>
                        </section>

                        <section className="border-b border-gray-200 pb-6">
                            <h2 className="text-lg font-bold mb-3 text-gray-900">事業内容</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>海外物販代行サービス「まるなげ！」の運営</li>
                                <li>国際物流サポート</li>
                                <li>ECプラットフォーム出品代行</li>
                                <li>物販ビジネスコンサルティング</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold mb-3 text-gray-900">お問い合わせ</h2>
                            <p className="mb-3">サービスに関するお問い合わせは、以下の方法で承っております。</p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="font-bold mb-2">電話でのお問い合わせ</p>
                                <p>055-242-7435</p>
                                <p className="text-sm text-gray-500 mt-1">受付時間：平日 10:00〜17:00</p>

                                <p className="font-bold mb-2 mt-4">フォームでのお問い合わせ</p>
                                <p className="text-sm text-gray-500">トップページの「無料相談フォーム」よりお問い合わせください。</p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-10 text-center">
                        <a href="/" className="inline-block bg-brand-orange text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors">
                            トップページに戻る
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
