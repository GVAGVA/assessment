import {TouchableOpacity, View} from 'react-native';
import {MessageIcon} from '../../icons/message-icon';

export const MessageBtn = () => {
  return (
    <TouchableOpacity style={{position: 'relative'}}>
      <View
        style={{
          width: 14,
          height: 14,
          borderRadius: 7,
          backgroundColor: '#CC141C',
          position: 'absolute',
          zIndex: 5,
          top: 0,
          right: 0,
        }}></View>
      <MessageIcon width={24} height={24} />
    </TouchableOpacity>
  );
};
