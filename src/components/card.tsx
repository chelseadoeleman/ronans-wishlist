import { WishlistItem } from "models/wishlist";
// @ts-ignore
import { ReactComponent as BirthdayIcon } from "../assets/icons/gift.svg";
// @ts-ignore
import { ReactComponent as SantaIcon } from "../assets/icons/hat-santa.svg";

export type CardProps = Readonly<{
  present: WishlistItem;
}>;

const Card = ({ present }: CardProps) => {
  return (
    <a
      href={present.link}
      rel="noreferrer nonoopener"
      className="card"
      target="_blank"
    >
      {(present.favorite || present.birthday) && (
        <div className="icons-container">
          {present.favorite && (
            <div className="icon-container">
              <SantaIcon width={20} height={20} />
            </div>
          )}
          {present.birthday && (
            <div className="icon-container">
              <BirthdayIcon width={20} height={20} />
            </div>
          )}
        </div>
      )}
      <div className="card-content">
        <div className="image-container">
          <img src={present.imgUrl} alt={present.name} />
        </div>
        <div className="name-container">
          <p>{present.name}</p>
        </div>
      </div>
    </a>
  );
};
export default Card;
