import {TouchableOpacity, View} from 'react-native';
import {BellIcon} from '../../icons/bell-icon';

export const BellBtn = () => {
  return (
    <TouchableOpacity style={{position: 'relative'}}>
      <View
        style={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: '#CC141C',
          position: 'absolute',
          zIndex: 5,
          top: 2,
          right: 2,
        }}></View>
      <BellIcon width={24} height={24} />
    </TouchableOpacity>
  );
};
