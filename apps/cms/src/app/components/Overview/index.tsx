import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSetAtom } from 'jotai';
import { currentSectionAtom } from '@/app/store/navigation';

export const Overview = () => {
  const setCurrentSection = useSetAtom(currentSectionAtom);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setCurrentSection('overview');
    }
  }, [inView, setCurrentSection]);

  return (
    <section id="summary" className="py-32">
      <div className="flex flex-col w-full max-w-[90vw] md:max-w-[1080px] mx-auto items-center gap-[60px] px-4">
        {/* メイン画像 */}
        <div className="relative w-full h-[540px] rounded-[40px] overflow-hidden">
          <Image
            src="/images/publications/kv.png"
            alt="ワイン畑の風景"
            fill
            className="object-cover"
          />
        </div>

        {/* コンテンツブロック1 */}
        <div className="w-full items-start gap-5 md:gap-10 px-4 flex flex-col md:flex-row">
          <div className="flex w-full md:w-[580px] items-start gap-5 md:gap-10 py-[3px]">
            <div className="w-[100px] flex items-center py-1">
              <div className="opacity-50 font-genei-gothic text-xs">
                何をするか
              </div>
            </div>
            <h3 className="font-genei-gothic text-[32px] leading-[48px]">
              自然派ワインを作り、<br />
              土地を最大限に活かす｡
            </h3>
          </div>
          <p className="flex-1 font-genei-gothic text-[15px] leading-[32px]">
            私たちは、化学肥料や農薬に頼らない栽培を通して、土地本来の生命力を再生・循環させることを目指します。そうして得られる一粒一粒のぶどうを、自然や社会へのポジティブなインパクトへとつなげていきます。
          </p>
        </div>

        <div className="w-full h-px bg-black/10" />

        {/* コンテンツブロック2 */}
        <div className="w-full items-start gap-5 md:gap-10 px-4 flex flex-col md:flex-row">
          <div className="flex w-full md:w-[580px] items-start gap-5 md:gap-10 py-[3px]">
            <div className="w-[100px] flex items-center py-1">
              <div className="opacity-50 font-genei-gothic text-xs">
                背景
              </div>
            </div>
            <h3 className="font-genei-gothic text-[32px] leading-[48px]">
              群馬の山々は、<br />
              ぶどう作りに適している。
            </h3>
          </div>
          <p className="flex-1 font-genei-gothic text-[15px] leading-[32px]">
            群馬の山々は、リジェネラティブな自然派ワインづくりに理想的な環境を持っています。標高、水はけの良い土壌、昼夜の寒暖差――そして何より、まだ誰も手をつけていない豊かな自然が残されています。
          </p>
        </div>

        <div className="w-full h-px bg-black/10" />

        {/* コンテンツブロック3 */}
        <div className="w-full items-start gap-5 md:gap-10 px-4 flex flex-col md:flex-row">
          <div className="flex w-full md:w-[580px] items-start gap-5 md:gap-10 py-[3px]">
            <div className="w-[100px] flex items-center py-1">
              <div className="opacity-50 font-genei-gothic text-xs">
                目指す世界
              </div>
            </div>
            <h3 className="font-genei-gothic text-[32px] leading-[48px]">
              自然と共にある<br />
              豊かな暮らしを守る｡
            </h3>
          </div>
          <p className="flex-1 font-genei-gothic text-[15px] leading-[32px]">
            自然と共にある豊かな暮らしを守りながら、次世代が「さらにその先」を描きたくなるような、新しい地域活性のかたちを示していきたい。私たちと共に、群馬から世界へ誇れる自然派ワインの産地を育て、未来を紡ぐ一歩を踏み出しませんか？
          </p>
        </div>
      </div>
    </section>
  );
}; 