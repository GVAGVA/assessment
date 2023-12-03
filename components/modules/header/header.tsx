import {View, StyleSheet, Text} from 'react-native';
import {Avatar} from '../../elements/avatar';
import {MessageBtn} from './message-btn';
import {BellBtn} from './notification-btn';
import {RefreshIcon} from '../../icons/refresh-icon';
import {CircleDot} from '../../icons/circle-dot';
import {LinearTextGradient} from 'react-native-text-gradient';
import {palette} from '../../../theme/theme';

const avatarUrl = '../../../assets/avatar-1.png';

export const Header = () => {
  return (
    <View style={styles.root}>
      <Avatar source={require(avatarUrl)} size={40} />
      <View style={{flexGrow: 1}}></View>

      <View
        style={{
          position: 'absolute',
          width: 36,
          height: 36,
          right: '50%',
          transform: [{translateY: 18}],
        }}>
        <CircleDot
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
          }}
        />
        <RefreshIcon
          style={{
            width: 25,
            height: 25,
            position: 'absolute',
            zIndex: 10,
            top: 5,
            right: 5,
          }}
        />
        <LinearTextGradient
          style={{
            fontWeight: 'bold',
            fontSize: 10,
            width: '100%',
            top: 11,
            position: 'absolute',
            textAlign: 'center',
          }}
          locations={[0, 1]}
          colors={palette.gradientPrimary}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text>24</Text>
        </LinearTextGradient>
      </View>

      <BellBtn badge />
      <MessageBtn count={4} />
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
