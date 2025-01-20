import { useEffect } from 'react';
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
    label: '経営者', 
    percentage: 25, 
    startAngle: 0, 
    endAngle: 90,
    gradient: { start: '#000000', end: '#333333' }
  },
  { 
    label: '法人・団体', 
    percentage: 18, 
    startAngle: 90, 
    endAngle: 154.8,
    gradient: { start: '#333333', end: '#4D4D4D' }
  },
  { 
    label: '営業', 
    percentage: 15, 
    startAngle: 154.8, 
    endAngle: 209.8,
    gradient: { start: '#4D4D4D', end: '#666666' }
  },
  { 
    label: 'エンジニア', 
    percentage: 12, 
    startAngle: 209.8, 
    endAngle: 253.2,
    gradient: { start: '#666666', end: '#808080' }
  },
  { 
    label: 'その他', 
    percentage: 10, 
    startAngle: 253.2, 
    endAngle: 289.2,
    gradient: { start: '#808080', end: '#999999' }
  },
  { 
    label: 'クリエイター', 
    percentage: 8, 
    startAngle: 289.2, 
    endAngle: 318,
    gradient: { start: '#999999', end: '#B3B3B3' }
  },
  { 
    label: '飲食', 
    percentage: 7, 
    startAngle: 318, 
    endAngle: 343.2,
    gradient: { start: '#B3B3B3', end: '#CCCCCC' }
  },
  { 
    label: '農家', 
    percentage: 5, 
    startAngle: 343.2, 
    endAngle: 360,
    gradient: { start: '#CCCCCC', end: '#E6E6E6' }
  },
];

export const RatioChart = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const setCurrentSection = useSetAtom(currentSectionAtom);

  useEffect(() => {
    if (inView) {
      setCurrentSection('ratio');
    }
  }, [inView, setCurrentSection]);

  const size = 440;
  const strokeWidth = 60;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;

  const getLabelPosition = (startAngle: number, endAngle: number) => {
    const angle = ((startAngle + endAngle) / 2) * (Math.PI / 180);
    const distance = radius + strokeWidth + 40;
    return {
      x: center + distance * Math.cos(angle - Math.PI / 2),
      y: center + distance * Math.sin(angle - Math.PI / 2),
    };
  };

  return (
    <section ref={ref} className="py-32">
      <div className="max-w-[1312px] mx-auto px-9">
        <div className="relative flex justify-center items-center">
          {/* グラフレイヤー */}
          <div className="relative w-[440px] h-[440px]">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
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
                  strokeWidth={strokeWidth}
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              ))}
            </svg>

            {/* テキストレイヤー */}
            {participants.map((participant, index) => {
              const pos = getLabelPosition(participant.startAngle, participant.endAngle);
              return (
                <motion.div
                  key={index}
                  className="absolute whitespace-nowrap text-sm font-genei-gothic"
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