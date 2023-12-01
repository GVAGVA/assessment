import {ImageProps} from 'react-native';

export type UserSlider = {
  avatar: ImageProps,
  username: string;
  background: ImageProps;
  is_me: boolean;
}

export const slidesData:UserSlider[] = [
  {
    avatar: require('../../../assets/avatar-1.png'),
    username: 'your_name',
    background: require('../../../assets/slide-1.png'),
    is_me: true
  },
  {
    avatar: require('../../../assets/avatar-2.png'),
    username: 'your_name',
    background: require('../../../assets/slide-2.png'),
    is_me: true
  },
  {
    avatar: require('../../../assets/avatar-3.png'),
    username: 'your_name',
    background: require('../../../assets/slide-3.png'),
    is_me: true
  }
]