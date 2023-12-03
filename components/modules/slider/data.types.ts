import {ImageProps} from 'react-native';

export type UserSlider = {
  avatar: ImageProps,
  username: string;
  background: ImageProps;
}

export const slidesData:UserSlider[] = [
  {
    avatar: require('../../../assets/avatar-1.png'),
    username: '@amelia',
    background: require('../../../assets/slide-1.png'),
  },
  {
    avatar: require('../../../assets/avatar-2.png'),
    username: '@jackson1',
    background: require('../../../assets/slide-2.png'),
  },
  {
    avatar: require('../../../assets/avatar-3.png'),
    username: '@susansmith',
    background: require('../../../assets/slide-3.png'),
  }
]