import {View} from 'react-native';
import {Header} from '../components/modules/header/header';
import {Slider} from '../components/modules/slider/slider';
import {Post} from '../components/modules/post/post';

export const Home = () => {
  return (
    <View>
      <Header />
      <Slider />
      <Post />
    </View>
  );
};
