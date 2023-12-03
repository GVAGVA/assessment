import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const PlusIcon: React.FC<SvgProps> = props => {
  return (
    <Svg viewBox="0 0 8 8" {...props}>
      <Path
        d="M6.77453 3.44509H4.55231V1.22287C4.55231 1.07553 4.49378 0.934218 4.38959 0.830031C4.2854 0.725844 4.1441 0.667313 3.99675 0.667313C3.84941 0.667313 3.7081 0.725844 3.60392 0.830031C3.49973 0.934218 3.4412 1.07553 3.4412 1.22287V3.44509H1.21898C1.07163 3.44509 0.930327 3.50362 0.82614 3.60781C0.721953 3.712 0.663422 3.8533 0.663422 4.00065C0.663422 4.14799 0.721953 4.2893 0.82614 4.39348C0.930327 4.49767 1.07163 4.5562 1.21898 4.5562H3.4412V6.77842C3.4412 6.92577 3.49973 7.06707 3.60392 7.17126C3.7081 7.27545 3.84941 7.33398 3.99675 7.33398C4.1441 7.33398 4.2854 7.27545 4.38959 7.17126C4.49378 7.06707 4.55231 6.92577 4.55231 6.77842V4.5562H6.77453C6.92187 4.5562 7.06318 4.49767 7.16737 4.39348C7.27156 4.2893 7.33009 4.14799 7.33009 4.00065C7.33009 3.8533 7.27156 3.712 7.16737 3.60781C7.06318 3.50362 6.92187 3.44509 6.77453 3.44509Z"
        fill="white"
      />
    </Svg>
  );
};
