import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const RedoIcon: React.FC<SvgProps> = props => {
  return (
    <Svg viewBox="0 0 20 17" {...props}>
      <Path
        d="M0.625 15.5932V10.1245C0.627068 8.26029 1.36852 6.47307 2.68669 5.1549C4.00486 3.83674 5.79208 3.09529 7.65625 3.09322H11.4297V1.85416C11.4298 1.54517 11.5214 1.24314 11.6931 0.986254C11.8648 0.729364 12.1088 0.529146 12.3943 0.410912C12.6798 0.292678 12.9939 0.261736 13.2969 0.321998C13.6 0.382259 13.8784 0.531019 14.0969 0.749471L18.6906 5.34243C19.13 5.78195 19.3768 6.37799 19.3768 6.99946C19.3768 7.62094 19.13 8.21697 18.6906 8.65649L14.0969 13.2495C13.8784 13.4679 13.6 13.6167 13.2969 13.6769C12.9939 13.7372 12.6798 13.7062 12.3943 13.588C12.1088 13.4698 11.8648 13.2696 11.6931 13.0127C11.5214 12.7558 11.4298 12.4538 11.4297 12.1448V10.9057H6.875C5.63218 10.9069 4.44062 11.4012 3.56181 12.28C2.683 13.1588 2.18874 14.3504 2.1875 15.5932C2.1875 15.8004 2.10519 15.9991 1.95868 16.1456C1.81216 16.2921 1.61345 16.3744 1.40625 16.3744C1.19905 16.3744 1.00034 16.2921 0.853823 16.1456C0.70731 15.9991 0.625 15.8004 0.625 15.5932ZM12.9922 3.87447C12.9922 4.08167 12.9099 4.28038 12.7634 4.42689C12.6169 4.57341 12.4181 4.65572 12.2109 4.65572H7.65625C6.20636 4.65737 4.81632 5.23407 3.79109 6.2593C2.76586 7.28453 2.18915 8.67457 2.1875 10.1245V11.4635C2.7731 10.7971 3.49413 10.2632 4.30246 9.89757C5.11079 9.53194 5.98782 9.34294 6.875 9.34321H12.2109C12.4181 9.34321 12.6169 9.42552 12.7634 9.57203C12.9099 9.71854 12.9922 9.91726 12.9922 10.1245V12.1448L17.5852 7.55181C17.7316 7.4053 17.8139 7.20662 17.8139 6.99946C17.8139 6.7923 17.7316 6.59363 17.5852 6.44712L12.9922 1.85416V3.87447Z"
        fill="#030303"
      />
    </Svg>
  );
};
