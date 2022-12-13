import { Gift } from "./Gifts.type";
import GiftItem from "./GiftItem";

interface GiftsListProps {
  gifts: Gift[];
  onDeleteList: () => void;
  onDeleteGift: (id: Gift["id"]) => void;
}

export default function GiftsList({
  gifts,
  onDeleteGift,
  onDeleteList
}: GiftsListProps) {
  if (gifts.length === 0) {
    return <p>Gift EMpty please enter a gift</p>;
  }

  return (
    <div className="list">
      <ul className="list__items">
        {gifts.map((gift) => (
          <li key={gift.id}>
            <GiftItem gift={gift} onDeleteGift={onDeleteGift} />
          </li>
        ))}
      </ul>
      <button
        className="list__delete-all btn btn--delete"
        onClick={onDeleteList}
      >
        Eliminar todos
      </button>
    </div>
  );
}
