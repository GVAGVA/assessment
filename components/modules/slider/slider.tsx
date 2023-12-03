import {View, StyleSheet} from 'react-native';
import {slidesData} from './data.types';
import {SlideItem} from './slide-item';
// import Carousel from 'react-native-reanimated-carousel';

export const Slider = () => {
  return (
    <View style={styles.root}>
      {/* <Carousel
        loop
        width={350}
        data={slidesData}
        renderItem={item => <SlideItem {...item.item} withAddButton />}
      /> */}
      {slidesData.map((slide, key) => (
        <SlideItem key={key} {...slide} withAddButton={key === 0} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    gap: 13,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
});
