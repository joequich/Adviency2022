import { Gift } from "./Gifts.type";

interface GiftItemProps {
  gift: Gift;
  onDeleteGift: (id: Gift["id"]) => void;
}

export default function GiftItem({ gift, onDeleteGift }: GiftItemProps) {
  return (
    <div className="item">
      <label className="item__title">{gift.title}</label>
      <label className="item__quantity">{gift.quantity}</label>
      <button className="item__delete" onClick={() => onDeleteGift(gift.id)}>
        X
      </button>
    </div>
  );
}
