import {Image, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {palette} from '../../../theme/theme';
import {PlusIcon} from '../../icons/plus-icon';
import {UserSlider} from './data.types';

type Props = UserSlider & {
  withAddButton: boolean;
};

export const SlideItem = (props: Props) => {
  return (
    <LinearGradient colors={palette.gradientPrimary} style={styles.slideItem}>
      <View style={styles.avatarContainer}>
        <Image source={props.avatar} style={styles.avatar} />
      </View>
      <Text style={styles.usernameText}>{props.username}</Text>
      <View style={styles.opacityCover}></View>
      <Image source={props.background} style={styles.background} />

      {props.withAddButton && (
        <TouchableOpacity style={styles.plusButton}>
          <PlusIcon style={styles.plusIcon} />
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  slideItem: {
    width: 152,
    height: 73,
    borderRadius: 17,
    padding: 1,
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: 1,
    right: 1,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 17,
  },
  opacityCover: {
    backgroundColor: '#000',
    opacity: 0.2,
    width: '100%',
    height: '100%',
    borderRadius: 17,
    zIndex: 5,
  },
  avatarContainer: {
    position: 'absolute',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 14,
    top: 8.5,
    left: 12.5,
    zIndex: 10,
    // overflow: 'hidden',
    padding: 0.5,
  },
  usernameText: {
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: 12,
    zIndex: 10,
    fontSize: 10,
  },
  avatar: {
    width: 23,
    height: 23,
    margin: 0.5,
    borderRadius: 12,
  },
  plusButton: {
    zIndex: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 0.5,
    backgroundColor: palette.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -3,
    bottom: -2,
  },
  plusIcon: {
    width: 7,
    height: 7,
    color: 'white',
  },
});
