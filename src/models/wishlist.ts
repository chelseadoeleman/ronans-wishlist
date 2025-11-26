export type WishlistItem = Readonly<{
  id: string;
  name: string;
  imgUrl: string;
  link: string;
  favorite?: boolean;
  birthday?: boolean;
}>;
