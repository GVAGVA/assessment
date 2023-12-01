import {Image, View, StyleSheet} from 'react-native';
import {slidesData} from './data.types';

export const Slider = () => {
  return (
    <View style={styles.root}>
      {slidesData.map((slide, key) => (
        <View key={key} style={styles.slideItem}>
          <Image source={slide.avatar} style={styles.avatar} />
          <Image source={slide.background} style={styles.background} />
        </View>
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
  },
  slideItem: {
    width: 152,
    height: 73,
    borderRadius: 17,
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  avatar: {
    position: 'absolute',
    borderRadius: 12,
    width: 23,
    height: 23,
    top: 8.5,
    left: 12.5,
    zIndex: 10,
  },
});
