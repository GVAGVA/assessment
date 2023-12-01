import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const MessageIcon: React.FC<SvgProps> = props => {
  return (
    <Svg viewBox="0 0 24 25" {...props}>
      <Path
        d="M24 16.9047V21.9047C24 22.7003 23.6839 23.4634 23.1213 24.026C22.5587 24.5886 21.7956 24.9047 21 24.9047H16C14.5971 24.9032 13.2192 24.5329 12.0047 23.8308C10.7901 23.1288 9.78145 22.1196 9.08 20.9047C9.83387 20.8993 10.5852 20.8162 11.322 20.6567C11.8832 21.3583 12.595 21.9247 13.4048 22.3138C14.2146 22.703 15.1016 22.9049 16 22.9047H21C21.2652 22.9047 21.5196 22.7993 21.7071 22.6118C21.8946 22.4242 22 22.1699 22 21.9047V16.9047C21.9998 16.0059 21.7972 15.1187 21.4074 14.3089C21.0175 13.4991 20.4504 12.7874 19.748 12.2267C19.9088 11.49 19.9933 10.7387 20 9.98468C21.215 10.6861 22.2241 11.6947 22.9262 12.9093C23.6282 14.1239 23.9986 15.5018 24 16.9047ZM17.977 10.5557C18.0705 9.26731 17.8856 7.97392 17.4348 6.76337C16.9841 5.55282 16.278 4.4535 15.3646 3.54009C14.4512 2.62669 13.3518 1.92061 12.1413 1.46983C10.9308 1.01906 9.63736 0.834148 8.349 0.927674C6.06592 1.18841 3.95693 2.27485 2.41918 3.98242C0.881427 5.68998 0.0210272 7.90085 0 10.1987L0 15.2387C0 17.7707 1.507 18.9047 3 18.9047H8.7C10.9988 18.8849 13.211 18.0251 14.9198 16.4872C16.6286 14.9494 17.7159 12.8397 17.977 10.5557ZM13.95 4.95567C14.6599 5.66718 15.2088 6.52287 15.5593 7.46486C15.9099 8.40685 16.054 9.41315 15.982 10.4157C15.7686 12.1994 14.9105 13.8435 13.5693 15.0386C12.2282 16.2337 10.4964 16.8974 8.7 16.9047H3C2.072 16.9047 2 15.6297 2 15.2387V10.1987C2.00834 8.40305 2.67265 6.67238 3.86792 5.33235C5.06319 3.99233 6.70699 3.13534 8.49 2.92267C8.656 2.91067 8.822 2.90467 8.988 2.90467C9.90927 2.90382 10.8217 3.08451 11.6731 3.43643C12.5245 3.78835 13.2982 4.3046 13.95 4.95567Z"
        fill="#5C5858"
      />
    </Svg>
  );
};