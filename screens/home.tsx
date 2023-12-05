import {View, ScrollView, StyleSheet} from 'react-native';
import {Header} from '../components/modules/header/header';
import {Footer} from '../components/modules/footer/footer';
import {Slider} from '../components/modules/slider/slider';
import {Post} from '../components/modules/post/post';

export const Home = () => {
  return (
    <View style={style.root}>
      <View style={style.content}>
        <ScrollView>
          <Header />
          <View style={{marginTop: 20, marginBottom: 5}}>
            <Slider />
          </View>
          <Post />
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
});
