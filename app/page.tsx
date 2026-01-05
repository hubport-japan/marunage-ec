import Image from 'next/image';
import { ArrowRight, Check, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen font-sans text-gray-800">
      {/* MOBILE HEADER BANNER */}
      <div className="lg:hidden bg-brand-orange text-white py-2 px-4 text-center font-bold text-sm sticky top-0 z-50 shadow-md">
        まるなげ！ The World EC
      </div>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-brand-light-orange/50 to-white pt-6 pb-16 md:pt-12 md:pb-16 lg:pb-20 overflow-hidden min-h-[85vh] md:min-h-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left z-10">
            <div className="inline-flex flex-wrap gap-2 sm:gap-3 items-center justify-center lg:justify-start mb-3 sm:mb-2">
              <div className="bg-brand-orange text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-sm animate-pulse">
                副業初心者・未経験者 大歓迎！
              </div>
              <div className="bg-yellow-400 text-gray-900 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-sm flex items-center gap-1">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" /> 利用者満足度 No.1
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 tracking-tight">
              <span className="block text-brand-orange text-3xl sm:text-4xl mb-3 lg:text-3xl lg:mb-2">まるなげ！</span>
              資金ゼロ・知識ゼロから始める<br />
              <span className="text-brand-orange">『丸投げ』海外物販</span>で<br />
              月収<span className="text-brand-orange">＋10万円</span>を目指しませんか？
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-bold mb-3 sm:mb-4">
              「パソコン1台で、世界中を旅しながら稼ぐ」<br />
              そんな理想のライフスタイルを手に入れませんか？
            </p>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-2">
              面倒な出品作業や、在庫管理は全て「丸投げ」におまかせ！<br />
              あなたは「売れた商品を仕入れる」だけ！<br />
              スキマ時間でできる、リスクゼロの物販ビジネス。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6 sm:pt-4">
              <Link href="#contact" className="group relative bg-brand-orange hover:bg-orange-600 text-white text-lg sm:text-xl font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center">
                無料で相談する
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">30秒で完了!</span>
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/60 blur-3xl rounded-full -z-10" />
            <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg aspect-square mx-auto">
              <Image src="/marunage-ec/images/user-relaxing.png" alt="スマホでくつろぐ様子" fill className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-700 ease-in-out" priority />
              <div className="absolute top-4 sm:top-10 right-2 sm:-right-4 bg-white p-2 sm:p-3 rounded-xl shadow-lg flex items-center gap-2 animate-[bounce_3s_infinite] text-xs sm:text-sm">
                <div className="bg-brand-light-orange p-2 rounded-full"><Star className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" /></div>
                <div><p className="text-xs text-gray-500">利益率</p><p className="font-bold text-brand-orange">15%</p></div>
              </div>
              <div className="absolute bottom-4 sm:bottom-10 left-2 sm:-left-4 bg-white p-2 sm:p-3 rounded-xl shadow-lg flex items-center gap-2 animate-[bounce_4s_infinite] text-xs sm:text-sm">
                <div className="bg-green-100 p-2 rounded-full"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" /></div>
                <div><p className="text-xs text-gray-500">作業時間</p><p className="font-bold text-green-600">1日30分〜</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
            物販に興味はあるけど、<br className="lg:hidden" />こんな<span className="text-brand-pink relative inline-block">不安<span className="absolute bottom-1 left-0 w-full h-3 bg-brand-pink/20 -z-10 transform -rotate-2"></span></span>ありませんか？
          </h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "在庫を抱えるのが怖い", icon: "📦", desc: "「売れるかわからない商品を大量に仕入れて、部屋が在庫の山になる...」そんな恐怖とはサヨナラしましょう。" },
              { title: "物販で成功するためのリサーチや出品作業が不安", icon: "💻", desc: "「何時間リサーチしても、結局何が売れるかわからない...」まるなげなら、そんな悩みは不要です。" },
              { title: "忙しくて時間がない", icon: "⏰", desc: "仕事から帰ってきて、クタクタの状態で梱包作業...。大切な自由時間を犠牲にする必要はありません。" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-2xl text-center hover:bg-orange-50 transition-colors border-2 border-transparent hover:border-brand-light-orange shadow-sm">
                <div className="text-4xl sm:text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto bg-red-50 p-4 sm:p-6 rounded-2xl border border-red-100 mb-6 sm:mb-8 mt-8 sm:mt-12">
            <p className="font-bold text-gray-700 leading-relaxed text-sm sm:text-base">
              このまま、今の働き方を定年まで続けますか？ <br />
              それとも、<span className="text-brand-orange text-lg sm:text-xl">今、新しい一歩を踏み出しますか？</span>
            </p>
          </div>
          <div className="text-center mt-6">
            <div className="inline-block animate-bounce relative top-2"><ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-brand-orange rotate-90 mx-auto" /></div>
            <div className="inline-block mt-4 bg-gradient-to-r from-brand-orange to-orange-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-2xl border-4 border-white transform hover:scale-105 transition-transform animate-pulse">
              <p className="text-xl sm:text-2xl lg:text-3xl font-black">その悩み、すべて解決します！</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-sm sm:text-base opacity-90">👇 今すぐ解決策をチェック 👇</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-12 md:py-16 lg:py-20 bg-brand-cream overflow-visible pt-20 sm:pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              あなたの作業は<br className="lg:hidden" /><span className="text-brand-orange text-4xl sm:text-5xl">『ポチる』</span>と<span className="text-brand-orange text-4xl sm:text-5xl">『送る』</span>だけ！
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">面倒な作業は「まるなげ！」がすべて代行します。</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
            <div className="lg:w-1/3 bg-white p-6 sm:p-8 pt-16 rounded-3xl shadow-lg border-t-8 border-brand-orange relative transform hover:-translate-y-2 transition-transform">
              <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-4 sm:px-6 py-2 rounded-full font-bold shadow-md text-sm sm:text-base whitespace-nowrap">あなたにお願いすること</div>
              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-orange-100 p-2 sm:p-3 rounded-full"><span className="text-xl sm:text-2xl">🛒</span></div>
                  <div><h3 className="font-bold text-base sm:text-lg mb-1">商品の仕入れ</h3><p className="text-xs sm:text-sm text-gray-500">注文が入ってから商品を購入（ポチる）だけ！在庫リスクなし。</p></div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-orange-100 p-2 sm:p-3 rounded-full"><span className="text-xl sm:text-2xl">💬</span></div>
                  <div><h3 className="font-bold text-base sm:text-lg mb-1">お客様対応</h3><p className="text-xs sm:text-sm text-gray-500">購入者への返信対応。テンプレートがあるから安心！</p></div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 text-center bg-orange-50 py-3 sm:py-4 rounded-xl"><p className="font-bold text-brand-orange text-sm sm:text-base">これだけでOK！</p></div>
            </div>
            <div className="flex items-center justify-center text-brand-light-orange lg:w-16"><ArrowRight className="w-10 h-10 sm:w-12 sm:h-12 rotate-90 lg:rotate-0" /></div>
            <div className="lg:w-3/5 bg-gray-900 text-white p-6 sm:p-8 pt-16 rounded-3xl shadow-xl relative overflow-hidden group min-h-[400px] sm:min-h-0">
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-brand-orange/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white border border-gray-600 px-4 sm:px-6 py-2 rounded-full font-bold shadow-md whitespace-nowrap text-sm sm:text-base">まるなげ！ にお任せ</div>
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 relative z-10">
                <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base">
                  <li className="flex items-center gap-2 sm:gap-3"><Check className="text-brand-green w-5 h-5 sm:w-6 sm:h-6 shrink-0" /><span><b>AI翻訳</b>・最適化出品</span></li>
                  <li className="flex items-center gap-2 sm:gap-3"><Check className="text-brand-green w-5 h-5 sm:w-6 sm:h-6 shrink-0" /><span><b>在庫管理</b>・価格改定API</span></li>
                  <li className="flex items-center gap-2 sm:gap-3"><Check className="text-brand-green w-5 h-5 sm:w-6 sm:h-6 shrink-0" /><span>専門スタッフによる<b>検品</b></span></li>
                </ul>
                <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base">
                  <li className="flex items-center gap-2 sm:gap-3"><Check className="text-brand-green w-5 h-5 sm:w-6 sm:h-6 shrink-0" /><span><b>格安レート</b>での国際配送</span></li>
                  <li className="flex items-center gap-2 sm:gap-3"><Check className="text-brand-green w-5 h-5 sm:w-6 sm:h-6 shrink-0" /><span>購入者への<b>お届け完了通知</b></span></li>
                  <li className="flex items-center gap-2 sm:gap-3"><Check className="text-brand-green w-5 h-5 sm:w-6 sm:h-6 shrink-0" /><span><b>利益計算</b>の自動見える化</span></li>
                </ul>
              </div>
              <div className="mt-4 sm:mt-8 relative h-32 sm:h-48 w-full rounded-xl overflow-hidden bg-gray-800 border border-gray-700">
                <Image src="/marunage-ec/images/logistics-hub.png" alt="物流倉庫の様子" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 font-bold text-base sm:text-lg text-brand-orange">物流・管理はすべて丸投げ！</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANAGEMENT SYSTEM SECTION */}
      <section className="py-12 md:py-16 lg:py-20 bg-brand-light-orange/20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-brand-orange">専用管理シート</span>で<br />利益も配送も一元管理！
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">ややこしい計算や管理は一切不要。<br />利用者専用のシートを見るだけで、すべての状況がひと目でわかります。</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-green-100 p-2 sm:p-3 rounded-full text-2xl sm:text-3xl">📊</div>
                <h3 className="text-lg sm:text-xl font-bold">利益が見える化</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">受注が入った瞬間、その取引で<span className="font-bold text-brand-orange">「いくら利益が出るか」</span>がシート上で即座に確認できます。利益計算の手間はゼロです。</p>
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 pt-4 border-t border-gray-100">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full text-2xl sm:text-3xl">🚚</div>
                <h3 className="text-lg sm:text-xl font-bold">配送状況もリアルタイム</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">「今どこに商品があるか」「いつ届くか」も全てシートで管理。商品の状況確認もスムーズです。</p>
            </div>
            <div className="bg-gray-900 text-white p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-brand-orange rounded-full blur-3xl -mr-10 -mt-10 opacity-50"></div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">💬</span> 困った時は専用チャットへ
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                「この商品仕入れて大丈夫？」<br />「使い方がわからない...」<br /><br />
                そんな時は、利用者専用のチャットですぐに相談可能！<br />まるなげスタッフがあなたの疑問を即座に解決します。
              </p>
              <button className="w-full bg-white text-gray-900 font-bold py-2 sm:py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm sm:text-base">充実のサポート体制</button>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs sm:text-sm">Why Choose Us</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">
              まるなげ！が選ばれる<br /><span className="text-brand-orange text-4xl sm:text-5xl">3つの理由</span>
            </h2>
          </div>
          <div className="space-y-16 sm:space-y-24">
            {/* Reason 01 */}
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
              <div className="md:w-1/2 relative">
                <div className="absolute -top-6 sm:-top-10 -left-6 sm:-left-10 text-[6rem] sm:text-[10rem] font-black text-gray-100 -z-10 leading-none">01</div>
                <div className="bg-orange-50 rounded-3xl p-6 sm:p-8 aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl sm:text-9xl">💰</div>
                </div>
              </div>
              <div className="md:w-1/2 space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-3 sm:gap-4">
                  <span className="bg-brand-orange text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">1</span>
                  受注時に「利益」が確定！
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  通常の物販は「売れるかわからない」商品を仕入れますが、私たちは「売れてから」仕入れます。<br />
                  さらに、受注した時点で送料や手数料を含めた利益が自動計算されるため、<span className="font-bold text-red-500 underline decoration-red-200 decoration-4">赤字のリスクがありません。</span>
                </p>
                <div className="mt-4 sm:mt-6 bg-gray-50 p-4 sm:p-5 rounded-xl border border-gray-200">
                  <p className="text-xs text-center text-gray-500 mb-2 sm:mb-3 font-bold">💰 売上構成イメージ</p>
                  <div className="flex h-8 sm:h-10 rounded-full overflow-hidden text-xs font-bold text-white leading-8 sm:leading-10 text-center shadow-md">
                    <div className="w-[60%] bg-gray-400 flex items-center justify-center">仕入れ 60%</div>
                    <div className="w-[25%] bg-gray-300 flex items-center justify-center text-[10px] sm:text-xs">関税・送料等 25%</div>
                    <div className="w-[15%] bg-brand-orange animate-pulse flex items-center justify-center">利益 15%</div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-2 px-1">
                    <span>販売価格 100%</span>
                    <span className="text-brand-orange font-bold">= あなたの利益!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reason 02 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-12">
              <div className="md:w-1/2 relative">
                <div className="absolute -top-6 sm:-top-10 -right-6 sm:-right-10 text-[6rem] sm:text-[10rem] font-black text-gray-100 -z-10 leading-none">02</div>
                <div className="bg-pink-50 rounded-3xl p-6 sm:p-8 aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl sm:text-9xl">✨</div>
                </div>
              </div>
              <div className="md:w-1/2 space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-3 sm:gap-4">
                  <span className="bg-brand-orange text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">2</span>
                  面倒な出品作業や、在庫管理は全て「丸投げ」におまかせ！
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  説明文の作成、価格調整... <br />
                  時間のかかる作業はすべて「まるなげ」のシステムとスタッフが代行します。<br />
                  <span className="font-bold bg-orange-50 px-2 py-1 rounded">🤖 AIが最適な翻訳とキーワード選定</span>を行うため、あなたはシステムに登録された商品が<span className="font-bold text-brand-orange">売れるのを待つだけ</span>です。
                </p>
              </div>
            </div>

            {/* Reason 03 */}
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
              <div className="md:w-1/2 relative">
                <div className="absolute -top-6 sm:-top-10 -left-6 sm:-left-10 text-[6rem] sm:text-[10rem] font-black text-gray-100 -z-10 leading-none">03</div>
                <div className="bg-blue-50 rounded-3xl p-6 sm:p-8 aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl sm:text-9xl">✈️</div>
                </div>
              </div>
              <div className="md:w-1/2 space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-3 sm:gap-4">
                  <span className="bg-brand-orange text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">3</span>
                  海外物流も安心・安全
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  海外住所の入力や、通関手続きの専門知識は一切不要。<br />
                  商品を<span className="font-bold text-brand-orange">「指定の倉庫に送るだけ」</span>で、あとは「まるなげ」が海外のお客様へ確実にお届けします。<br />
                  <span className="font-bold bg-blue-50 px-2 py-1 rounded">✈️ 提携配送業者による格安レート</span>で、送料も大幅に削減。万が一の返品対応もサポートします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFIT SIMULATION SECTION */}
      <section className="py-12 md:py-16 lg:py-20 bg-brand-light-orange/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">どれくらい稼げるの？</h2>
            <p className="text-base sm:text-lg text-gray-600">1商品あたりの利益シミュレーション実例</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Example 1 */}
              <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-gray-100">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-xl flex items-center justify-center text-3xl sm:text-4xl">👟</div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-bold mb-1">実例 A</p>
                    <h3 className="text-lg sm:text-xl font-bold">限定スニーカー</h3>
                    <p className="text-xs text-gray-400">※米国AmazonやeBay等のECサイトで販売</p>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <div className="flex justify-between text-gray-500"><span>販売価格</span><span>30,000円</span></div>
                  <div className="flex justify-between text-gray-500"><span>仕入れ値</span><span>- 18,000円</span></div>
                  <div className="flex justify-between text-gray-500"><span>手数料・送料</span><span>- 7,500円</span></div>
                  <div className="h-px bg-gray-200 my-2"></div>
                  <div className="flex justify-between items-end"><span className="font-bold text-gray-800">利益</span><span className="text-2xl sm:text-3xl font-black text-brand-orange">+4,500円</span></div>
                  <div className="text-right text-xs text-brand-orange font-bold mt-1">利益率 15%</div>
                </div>
              </div>

              {/* Example 2 */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-xl flex items-center justify-center text-3xl sm:text-4xl">🎮</div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-bold mb-1">実例 B</p>
                    <h3 className="text-lg sm:text-xl font-bold">レトロゲーム機</h3>
                    <p className="text-xs text-gray-400">※欧州AmazonやeBay等のECサイトで販売</p>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <div className="flex justify-between text-gray-500"><span>販売価格</span><span>15,000円</span></div>
                  <div className="flex justify-between text-gray-500"><span>仕入れ値</span><span>- 9,000円</span></div>
                  <div className="flex justify-between text-gray-500"><span>手数料・送料</span><span>- 3,750円</span></div>
                  <div className="h-px bg-gray-200 my-2"></div>
                  <div className="flex justify-between items-end"><span className="font-bold text-gray-800">利益</span><span className="text-2xl sm:text-3xl font-black text-brand-orange">+2,250円</span></div>
                  <div className="text-right text-xs text-brand-orange font-bold mt-1">利益率 15%</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 text-center text-xs sm:text-sm text-gray-500">
              ※これらは一例です。為替や時期により変動します。<br />システム上で自動計算されるため、上記の計算をご自身でする必要はありません。
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16">
            未経験から始めた<br />利用者の声
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Case 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-light-orange rounded-full flex items-center justify-center text-2xl sm:text-3xl">👩</div>
                <div>
                  <p className="font-bold text-base sm:text-lg">30代 主婦 Aさん</p>
                  <p className="text-brand-orange text-xs sm:text-sm font-bold">開始3ヶ月で月利5万円達成</p>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 font-bold mb-1">Before</p>
                  <p className="text-xs sm:text-sm text-gray-600">メルカリで不用品販売をしていましたが、梱包・発送作業が大変で、子育てとの両立が困難でした...</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg border border-brand-light-orange">
                  <p className="text-xs text-brand-orange font-bold mb-1">After</p>
                  <p className="text-xs sm:text-sm text-gray-700">「本当に『ポチる』だけで終わって驚きました。子供が寝たあとのスキマ時間だけで月5万円。家族旅行の資金が貯まりました！」</p>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl sm:text-3xl">👨‍💼</div>
                <div>
                  <p className="font-bold text-base sm:text-lg">40代 会社員 Bさん</p>
                  <p className="text-brand-orange text-xs sm:text-sm font-bold">本業+15万円の副収入</p>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 font-bold mb-1">Before</p>
                  <p className="text-xs sm:text-sm text-gray-600">副業に興味はあったものの、帰宅後は疲れて何もできず。時間がないことを言い訳にしていました...</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <p className="text-xs text-blue-600 font-bold mb-1">After</p>
                  <p className="text-xs sm:text-sm text-gray-700">「出品作業がないから、疲れていても大丈夫。利益管理画面を見るのが楽しみで、今では月15万円の副収入。住宅ローンの繰り上げ返済ができました！」</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOW SECTION */}
      <section className="py-12 md:py-16 lg:py-20 bg-white" id="flow">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16">始めるまでの流れ</h2>
          <div className="space-y-6 sm:space-y-8 relative">
            <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-gray-200 -z-10 md:left-1/2 md:-ml-0.5"></div>
            {[
              { step: "01", title: "無料相談に申込み", desc: "まずは下記フォームよりお申し込みください。" },
              { step: "02", title: "ヒアリング・アカウント開設", desc: "担当者があなたに合ったプランをご案内します。" },
              { step: "03", title: "ECサイトで受注発生", desc: "あなたのショップで商品が売れます。" },
              { step: "04", title: "商品を倉庫へ送る", desc: "指定の商品を仕入れて、倉庫へ送ります。" },
              { step: "05", title: "利益確定！", desc: "売上金が振り込まれます。" },
            ].map((item, index) => (
              <div key={index} className={`flex items-start gap-6 sm:gap-8 md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-orange text-white flex items-center justify-center font-black text-lg sm:text-xl ml-0 md:mx-auto border-4 border-white shrink-0 shadow-sm z-10">
                  {item.step}
                </div>
                <div className="bg-gray-50 flex-1 p-4 sm:p-6 rounded-xl border hover:border-brand-orange transition-colors md:text-center w-full">
                  <h3 className="font-bold text-base sm:text-lg mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">{item.desc}</p>
                </div>
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">よくあるご質問</h2>
          <div className="space-y-4 sm:space-y-6">
            {[
              { q: "本当に知識がなくても大丈夫ですか？", a: "はい、大丈夫です。出品や発送などの専門的な知識が必要な部分は全て代行しますので、マニュアル通りに仕入れを行うだけで始められます。" },
              { q: "初期費用はどれくらいかかりますか？", a: "サービス利用料やプランについては、現在の状況や目標金額に合わせて最適なものをご提案しています。まずは無料相談にてお問い合わせください。" },
              { q: "スマホだけで作業できますか？", a: "利益の確認などはスマホでも可能ですが、商品の仕入れ（購入）などの作業はパソコンで行うことを推奨しています。" },
              { q: "売れなかった場合はどうなりますか？", a: "私たちは「受注が入ってから」商品を仕入れる無在庫販売の手法をとっています。Amazon等のプラットフォームでも認められている正規の手法（ドロップシッピング）ですので、安心して取り組めます。在庫リスクそのものがありません。" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
                <h3 className="font-bold text-base sm:text-lg text-gray-800 flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="text-brand-orange">Q.</span>
                  {item.q}
                </h3>
                <p className="text-gray-600 pl-6 sm:pl-8 leading-relaxed text-sm sm:text-base">
                  <span className="font-bold text-gray-400 mr-2">A.</span>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-20 lg:py-24 bg-brand-orange text-white text-center" id="contact">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="inline-block bg-red-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 animate-bounce">
            ⚠️ 毎月30名様限定募集
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black mb-4 sm:mb-6">まずは話を聞いてみませんか？</h2>
          <p className="text-lg sm:text-xl opacity-90 mb-3 sm:mb-4 max-w-2xl mx-auto">
            無理な勧誘は一切ありません。<br />あなたに合った副業プランをご提案します。
          </p>
          <p className="text-xs sm:text-sm opacity-75 mb-8 sm:mb-12 max-w-2xl mx-auto">
            ※質の高いサポートを提供するため、毎月のご案内は30名様までとさせていただいております。<br />お早めのお申し込みをおすすめします。
          </p>
          <div className="bg-white text-gray-800 p-6 sm:p-8 rounded-3xl max-w-xl mx-auto shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">無料相談 お申し込みフォーム</h3>
            <form className="space-y-3 sm:space-y-4 text-left">
              <div>
                <label className="block text-xs sm:text-sm font-bold mb-1 ml-1">お名前</label>
                <input type="text" placeholder="山田 太郎" className="w-full p-3 sm:p-4 bg-gray-100 rounded-xl border border-transparent focus:bg-white focus:border-brand-orange outline-none transition-colors text-sm sm:text-base" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-bold mb-1 ml-1">メールアドレス</label>
                <input type="email" placeholder="example@mail.com" className="w-full p-3 sm:p-4 bg-gray-100 rounded-xl border border-transparent focus:bg-white focus:border-brand-orange outline-none transition-colors text-sm sm:text-base" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-bold mb-1 ml-1">現在の状況</label>
                <select className="w-full p-3 sm:p-4 bg-gray-100 rounded-xl border border-transparent focus:bg-white focus:border-brand-orange outline-none transition-colors text-sm sm:text-base">
                  <option>副業を探している</option>
                  <option>物販の経験がある</option>
                  <option>その他</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-brand-orange text-white font-bold text-lg sm:text-xl py-3 sm:py-4 rounded-xl shadow-lg hover:bg-orange-600 transition-colors mt-4">
                無料で相談を申し込む
              </button>
              <p className="text-xs text-center text-gray-400 mt-4">※ご入力いただいた情報は厳重に管理いたします。</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 sm:py-12 text-center text-xs sm:text-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="mb-3 sm:mb-4">&copy; 2024 HUB PORT JAPAN株式会社 All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/company" className="hover:text-white transition-colors">運営会社</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
            <Link href="/terms" className="hover:text-white transition-colors">特定商取引法に基づく表記</Link>
          </div>
        </div>
      </footer>

      {/* FLOATING CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-brand-orange/20 p-3 sm:p-4 lg:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <Link href="#contact" className="block w-full bg-brand-orange text-white text-center font-bold py-2 sm:py-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors animate-pulse text-sm sm:text-base">
          無料で相談する (30秒)
        </Link>
      </div>
    </main>
  );
}
