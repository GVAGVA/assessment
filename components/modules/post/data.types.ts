import { ImageProps } from "react-native"

export type Poster = {
  avatar: ImageProps,
  name: string;
}

export type Post = {
  source: ImageProps,
  poster: Poster,
  content: string;
  fire: number;
  comments: number;
}

export const post: Post = {
  source: require('../../../assets/feed-1.png'),
  poster: {
    avatar: require('../../../assets/avatar-4.png'),
    name: '@chefcupid_dammyy'
  },
  content: 'Have you been around my restaurant lately?.....We have been experimenting on alot of recie We have been experimenting on alot of recie',
  fire: 5300,
  comments: 40
}
