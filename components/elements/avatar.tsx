import {Image, ImageProps, StyleSheet} from 'react-native';

type Props = {
  source: ImageProps;
  size: number;
};

export const Avatar = (props: Props) => {
  return (
    <Image
      source={props.source}
      style={{
        ...styles.avatar,
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
      }}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
