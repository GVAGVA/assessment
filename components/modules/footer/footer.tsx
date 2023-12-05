import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {HomeIcon} from '../../icons/home-icon';
import {SearchIcon} from '../../icons/search-icon';
import {GiftIcon} from '../../icons/gift-icon';
import {ShopIcon} from '../../icons/shop-icon';
import {PlusIcon} from '../../icons/plus-icon';
import {palette} from '../../../theme/theme';
import {LinearGradient} from 'react-native-linear-gradient';

export const Footer = () => {
  return (
    <View style={styles.root}>
      <HomeIcon width={20} height={20} />
      <SearchIcon width={20} height={20} />
      <TouchableOpacity>
        <LinearGradient
          colors={palette.gradientPrimary}
          style={styles.addButton}>
          <PlusIcon width={16} height={16} />
        </LinearGradient>
      </TouchableOpacity>
      <GiftIcon width={20} height={20} />
      <ShopIcon width={20} height={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 42,
  },
  addButton: {
    borderRadius: 19,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
});
