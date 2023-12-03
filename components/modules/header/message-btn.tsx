import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {MessageIcon} from '../../icons/message-icon';
import {LinearGradient} from 'react-native-linear-gradient';
import {palette} from '../../../theme/theme';

type Props = {
  count: number;
};

export const MessageBtn = ({count}: Props) => {
  return (
    <TouchableOpacity style={{position: 'relative'}}>
      {count && (
        <LinearGradient
          colors={palette.gradientPrimary}
          style={styles.gradientBadge}>
          <Text style={styles.badgeText}>{count}</Text>
        </LinearGradient>
      )}
      <MessageIcon width={24} height={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradientBadge: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#CC141C',
    position: 'absolute',
    zIndex: 5,
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
  },
});
