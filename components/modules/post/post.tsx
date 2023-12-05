import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  Pressable,
} from 'react-native';
import {DotsIcon} from '../../icons/dots-icon';
import {post} from './data.types';
import {Avatar} from '../../elements/avatar';
import {MarkerIcon} from '../../icons/marker-icon';
import {PlusIcon} from '../../icons/plus-icon';
import {CommentIcon} from '../../icons/comment-icon';
import {RedoIcon} from '../../icons/redo-icon';

export const Post = () => {
  const {width} = Dimensions.get('window');

  return (
    <View style={{width: '100%'}}>
      <View style={styles.topbar}>
        <Pressable>
          <DotsIcon width={20} height={20} />
        </Pressable>
      </View>
      <Image source={post.source} style={{...styles.image, height: width}} />

      <View style={styles.content}>
        <View style={styles.info}>
          <Avatar source={require('../../../assets/avatar-4.png')} size={32} />
          <Text style={styles.username}>{post.poster.name}</Text>
          <Avatar source={require('../../../assets/avatar-5.png')} size={32} />
          <View style={{transform: [{translateX: -10}]}}>
            <Avatar
              source={require('../../../assets/avatar-6.png')}
              size={32}
            />
          </View>
          <View style={{transform: [{translateX: -20}]}}>
            <Avatar
              source={require('../../../assets/avatar-7.png')}
              size={32}
            />
          </View>
          <View
            style={{
              transform: [{translateX: -30}],
              backgroundColor: '#000',
              opacity: 0.5,
              width: 20,
              height: 20,
              borderRadius: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <PlusIcon style={{width: 14, height: 14}} />
          </View>

          <View
            style={{
              display: 'flex',
              gap: 10,
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}>
            <View>
              <Image
                source={require('../../../assets/fire.png')}
                style={{width: 25, height: 25}}
              />
              <Text style={{fontSize: 12, color: '#000'}}>5.3k</Text>
            </View>
            <View style={{marginTop: 3}}>
              <CommentIcon style={{width: 22, height: 22}} />
              <Text style={{fontSize: 12, color: '#000'}}>40</Text>
            </View>
            <RedoIcon style={{width: 20, height: 20, marginTop: 3}} />
          </View>
        </View>
        <Text
          numberOfLines={2}
          style={{fontSize: 12, color: '#000', lineHeight: 19}}>
          {post.content}
        </Text>
      </View>

      <View style={styles.footer}>
        <MarkerIcon width={15} height={18} />
        <Text
          style={{fontSize: 12, color: '#000', lineHeight: 19, flexGrow: 1}}>
          New York Times Square
        </Text>
        <DotsIcon width={20} height={20} />
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
    flexDirection: 'row',
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
    paddingVertical: 5,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  footer: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 20,
    paddingRight: 32,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  username: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 4,
    paddingRight: 12,
    color: 'black',
  },
});
