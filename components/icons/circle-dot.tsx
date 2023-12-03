import React from 'react';
import Svg, {
  SvgProps,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

export const CircleDot: React.FC<SvgProps> = props => {
  return (
    <Svg viewBox="0 0 38 38" {...props}>
      <Circle
        cx="19"
        cy="19"
        r="18"
        fill="white"
        stroke="url(#paint0_linear_1_367)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_367"
          x1="19"
          y1="1"
          x2="19"
          y2="37"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0.00520833" stopColor="#A079E5" />
          <Stop offset="0.529167" stopColor="#5C4CF5" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
