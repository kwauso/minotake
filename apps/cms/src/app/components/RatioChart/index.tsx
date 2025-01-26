import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSetAtom } from 'jotai';
import { currentSectionAtom } from '@/store/atoms';
import { motion } from 'framer-motion';

type Participant = {
  label: string;
  percentage: number;
  startAngle: number;
  endAngle: number;
  gradient: {
    start: string;
    end: string;
  };
};

const participants: Participant[] = [
  { 
    label: '農家・専門家', 
    percentage: 30, 
    startAngle: 0, 
    endAngle: 108,
    gradient: { start: '#000000', end: '#333333' }
  },
  { 
    label: '運営', 
    percentage: 20, 
    startAngle: 108, 
    endAngle: 180,
    gradient: { start: '#333333', end: '#4D4D4D' }
  },
  { 
    label: 'デザイナー・編集', 
    percentage: 15, 
    startAngle: 180, 
    endAngle: 234,
    gradient: { start: '#4D4D4D', end: '#666666' }
  },
  { 
    label: '企画', 
    percentage: 10, 
    startAngle: 234, 
    endAngle: 270,
    gradient: { start: '#666666', end: '#808080' }
  },
  { 
    label: '営業', 
    percentage: 10, 
    startAngle: 270, 
    endAngle: 306,
    gradient: { start: '#808080', end: '#999999' }
  },
  { 
    label: 'エンジニア', 
    percentage: 5, 
    startAngle: 306, 
    endAngle: 324,
    gradient: { start: '#999999', end: '#B3B3B3' }
  },
  { 
    label: '法務', 
    percentage: 5, 
    startAngle: 324, 
    endAngle: 342,
    gradient: { start: '#B3B3B3', end: '#CCCCCC' }
  },
  { 
    label: '会計', 
    percentage: 5, 
    startAngle: 342, 
    endAngle: 360,
    gradient: { start: '#CCCCCC', end: '#E6E6E6' }
  }
];

export const RatioChart = () => {
  const [isSpSize, setIsSpSize] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const setCurrentSection = useSetAtom(currentSectionAtom);

  useEffect(() => {
    if (inView) {
      setCurrentSection('ratio');
    }
  }, [inView, setCurrentSection]);

  useEffect(() => {
    setIsSpSize(window.innerWidth <= 767);
    const handleResize = () => {
      setIsSpSize(window.innerWidth <= 767);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // サイズの設定を画面サイズに応じて変更
  const size = {
    pc: 440,
    sp: 246
  };

  const strokeWidth = {
    pc: 48,
    sp: 32
  };

  const currentSize = isSpSize ? size.sp : size.pc;
  const currentStrokeWidth = isSpSize ? strokeWidth.sp : strokeWidth.pc;

  const radius = (currentSize - currentStrokeWidth) / 2;
  const center = currentSize / 2;

  const getLabelPosition = (startAngle: number, endAngle: number, label: string) => {
    const angle = ((startAngle + endAngle) / 2) * (Math.PI / 180);
    
    // SP表示で農家・専門家の場合の特別な調整
    if (isSpSize && label === '農家・専門家') {
      return {
        x: center + 100, // 左に20px移動
        y: center - 130, // 上に50px移動
      };
    }

    // 通常のラベル位置計算
    const labelDistance = isSpSize ? {
      x: 25,
      y: 25
    } : {
      x: 40,
      y: 40
    };
    
    const distance = radius + currentStrokeWidth + 
      (Math.abs(Math.sin(angle - Math.PI / 2)) > 0.5 ? labelDistance.y : labelDistance.x);
    
    return {
      x: center + distance * Math.cos(angle - Math.PI / 2),
      y: center + distance * Math.sin(angle - Math.PI / 2),
    };
  };

  return (
    <section ref={ref} className="py-32">
      <div className="max-w-[1312px] mx-auto px-9">
        <div className="relative flex justify-center items-center">
          <div className="relative sp:w-[246px] sp:h-[246px] w-[440px] h-[440px]">
            <svg width={currentSize} height={currentSize} viewBox={`0 0 ${currentSize} ${currentSize}`}>
              <defs>
                {participants.map((_, index) => (
                  <linearGradient
                    key={`gradient-${index}`}
                    id={`gradient-${index}`}
                    gradientTransform={`rotate(${(_.startAngle + _.endAngle) / 2})`}
                  >
                    <stop offset="0%" stopColor={_.gradient.start} />
                    <stop offset="100%" stopColor={_.gradient.end} />
                  </linearGradient>
                ))}
              </defs>
              {participants.map((participant, index) => (
                <motion.path
                  key={index}
                  d={describeArc(center, center, radius, participant.startAngle, participant.endAngle)}
                  fill="none"
                  stroke={`url(#gradient-${index})`}
                  strokeWidth={currentStrokeWidth}
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              ))}
            </svg>

            {/* テキストレイヤー */}
            {participants.map((participant, index) => {
              const pos = getLabelPosition(participant.startAngle, participant.endAngle, participant.label);
              return (
                <motion.div
                  key={index}
                  className="absolute whitespace-nowrap font-auto sp:subhead4 subhead2"
                  style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {`${participant.label} / ${participant.percentage}%`}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// SVGアーク描画のヘルパー関数
function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
}

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
} 