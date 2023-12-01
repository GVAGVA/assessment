import {View, StyleSheet} from 'react-native';
import {Avatar} from '../../elements/avatar';
import {MessageBtn} from './message-btn';
import {BellBtn} from './notification-btn';

const avatarUrl = '../../../assets/avatar-1.png';

export const Header = () => {
  return (
    <View style={styles.root}>
      <Avatar source={require(avatarUrl)} size={40} />
      <View style={{flexGrow: 1}}></View>
      <BellBtn />
      <MessageBtn />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
