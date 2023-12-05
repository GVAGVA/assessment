import React from 'react';
import Svg, {Path, SvgProps, G, Defs, Rect, ClipPath} from 'react-native-svg';

export const MarkerIcon: React.FC<SvgProps> = props => {
  return (
    <Svg viewBox="0 0 18 18" {...props}>
      <G clipPath="url(#clip0_1_343)">
        <Path
          d="M9.00006 4.5C8.40672 4.5 7.8267 4.67595 7.33335 5.00559C6.84 5.33524 6.45549 5.80377 6.22842 6.35195C6.00136 6.90013 5.94195 7.50333 6.05771 8.08527C6.17346 8.66721 6.45918 9.20176 6.87874 9.62132C7.2983 10.0409 7.83285 10.3266 8.41479 10.4424C8.99674 10.5581 9.59994 10.4987 10.1481 10.2716C10.6963 10.0446 11.1648 9.66006 11.4945 9.16671C11.8241 8.67336 12.0001 8.09334 12.0001 7.5C12.0001 6.70435 11.684 5.94129 11.1214 5.37868C10.5588 4.81607 9.79571 4.5 9.00006 4.5ZM9.00006 9C8.70339 9 8.41338 8.91203 8.16671 8.7472C7.92003 8.58238 7.72777 8.34811 7.61424 8.07403C7.50071 7.79994 7.47101 7.49834 7.52888 7.20736C7.58676 6.91639 7.72962 6.64912 7.9394 6.43934C8.14918 6.22956 8.41646 6.0867 8.70743 6.02882C8.9984 5.97094 9.3 6.00065 9.57409 6.11418C9.84818 6.22771 10.0824 6.41997 10.2473 6.66665C10.4121 6.91332 10.5001 7.20333 10.5001 7.5C10.5001 7.89783 10.342 8.27936 10.0607 8.56066C9.77942 8.84196 9.39789 9 9.00006 9Z"
          fill="#030303"
        />
        <Path
          d="M8.99993 18.0002C8.36839 18.0035 7.74526 17.8553 7.18273 17.5683C6.62019 17.2812 6.13463 16.8635 5.76668 16.3502C2.90843 12.4075 1.45868 9.44347 1.45868 7.53997C1.45868 5.5399 2.2532 3.62176 3.66746 2.2075C5.08172 0.793241 6.99987 -0.00128174 8.99993 -0.00128174C11 -0.00128174 12.9181 0.793241 14.3324 2.2075C15.7467 3.62176 16.5412 5.5399 16.5412 7.53997C16.5412 9.44347 15.0914 12.4075 12.2332 16.3502C11.8652 16.8635 11.3797 17.2812 10.8171 17.5683C10.2546 17.8553 9.63147 18.0035 8.99993 18.0002ZM8.99993 1.63597C7.43424 1.63775 5.93319 2.26051 4.82608 3.36762C3.71897 4.47473 3.09622 5.97578 3.09443 7.54147C3.09443 9.04897 4.51418 11.8367 7.09118 15.391C7.30995 15.6923 7.59696 15.9376 7.92871 16.1067C8.26047 16.2758 8.62756 16.3639 8.99993 16.3639C9.3723 16.3639 9.73939 16.2758 10.0711 16.1067C10.4029 15.9376 10.6899 15.6923 10.9087 15.391C13.4857 11.8367 14.9054 9.04897 14.9054 7.54147C14.9036 5.97578 14.2809 4.47473 13.1738 3.36762C12.0667 2.26051 10.5656 1.63775 8.99993 1.63597Z"
          fill="#030303"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_343">
          <Rect width="18" height="18" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
