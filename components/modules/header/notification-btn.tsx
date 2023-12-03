import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {BellIcon} from '../../icons/bell-icon';
import {palette} from '../../../theme/theme';

type Props = {
  badge: boolean;
};

export const BellBtn = ({badge}: Props) => {
  return (
    <TouchableOpacity style={{position: 'relative'}}>
      {badge && <View style={styles.badge}></View>}
      <BellIcon width={24} height={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  badge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: palette.secondary,
    position: 'absolute',
    zIndex: 5,
    top: 2,
    right: 2,
  },
});
