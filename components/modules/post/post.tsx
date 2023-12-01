import {View, Image, StyleSheet, Dimensions, Text} from 'react-native';
import {DotsIcon} from '../../icons/dots-icon';
import {post} from './data.types';
import {Avatar} from '../../elements/avatar';
import {MarkerIcon} from '../../icons/marker-icon';

export const Post = () => {
  const {width} = Dimensions.get('window');

  return (
    <View style={{width: '100%'}}>
      <View style={styles.topbar}>
        <DotsIcon width={20} height={20} />
      </View>
      <Image source={post.source} style={{...styles.image, height: width}} />

      <View style={styles.content}>
        <View style={styles.info}>
          <Avatar source={require('../../../assets/avatar-4.png')} size={32} />
          <Text style={styles.username}>{post.poster.name}</Text>
          <Avatar source={require('../../../assets/avatar-5.png')} size={32} />
          <Avatar source={require('../../../assets/avatar-6.png')} size={32} />
          <Avatar source={require('../../../assets/avatar-7.png')} size={32} />
        </View>
        <Text>{post.content}</Text>
      </View>

      <View style={styles.footer}>
        <MarkerIcon width={18} height={18} />
        <Text>New York Times Square</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    paddingTop: 12,
    paddingHorizontal: 32,
    paddingBottom: 8,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    objectFit: 'cover',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  footer: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  username: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 4,
    paddingRight: 12,
    color: 'black',
  },
});
