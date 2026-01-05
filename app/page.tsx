import Image from 'next/image';
import { ArrowRight, Check, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen font-sans text-gray-800">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-b from-brand-light-orange/50 to-white pt-8 pb-12 md:pt-12 md:pb-16 lg:pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left z-10">
            <div className="inline-flex flex-wrap gap-2 sm:gap-3 items-center justify-center lg:justify-start mb-2">
              <div className="bg-brand-orange text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-sm animate-pulse">
                副業初心者・未経験者 大歓迎！
              </div>
              <div className="bg-yellow-400 text-gray-900 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-sm flex items-center gap-1">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" /> 利用者満足度 No.1
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 tracking-tight">
              <span className="block text-brand-orange text-2xl sm:text-3xl mb-2">まるなげ！</span>
              資金ゼロ・知識ゼロから始める<br />
              <span className="text-brand-orange">『丸投げ』海外物販</span>で<br />
              月収<span className="text-brand-orange">＋10万円</span>を目指しませんか？
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-bold mb-4">
              「パソコン1台で、世界中を旅しながら稼ぐ」<br />
              そんな理想のライフスタイルを手に入れませんか？
            </p>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              面倒な出品作業や、在庫管理は全て「丸投げ」におまかせ！<br />
              あなたは「売れた商品を仕入れる」だけ！<br />
              スキマ時間でできる、リスクゼロの物販ビジネス。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="#contact"
                className="group relative bg-brand-orange hover:bg-orange-600 text-white text-lg sm:text-xl font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                無料で相談する
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                  30秒で完了!
                </span>
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 relative w-full flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/60 blur-3xl rounded-full -z-10" />

            <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg aspect-square mx-auto">
              <Image
                src="/images/user-relaxing.png"
                alt="スマホでくつろぐ様子"
                fill
                className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-700 ease-in-out"
                priority
              />

              {/* Floating Badges */}
              <div className="absolute top-4 sm:top-10 right-2 sm:-right-4 bg-white p-2 sm:p-3 rounded-xl shadow-lg flex items-center gap-2 animate-[bounce_3s_infinite] text-xs sm:text-sm">
                <div className="bg-brand-light-orange p-2 rounded-full">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">利益率</p>
                  <p className="font-bold text-brand-orange">13~20%</p>
                </div>
              </div>

              <div className="absolute bottom-4 sm:bottom-10 left-2 sm:-left-4 bg-white p-2 sm:p-3 rounded-xl shadow-lg flex items-center gap-2 animate-[bounce_4s_infinite] text-xs sm:text-sm">
                <div className="bg-green-100 p-2 rounded-full">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">作業時間</p>
                  <p className="font-bold text-green-600">1日30分〜</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for other sections - will add incrementally */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center">
          <p className="text-gray-500">その他のセクションを実装中...</p>
        </div>
      </section>
    </main>
  );
}
