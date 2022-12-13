import { useEffect, useState } from "react";
import { FormAddGift, Gift } from "./Gifts.type";
import GiftsList from "./GiftsList";
import AddGift from "./AddGift";
import "./styles.css";

const initialList: Gift[] = [
  { id: 0, title: "Yogurt", quantity: 1, url: "" },
  { id: 1, title: "Marciano", quantity: 1, url: "" },
  { id: 2, title: "Laptop", quantity: 1, url: "" }
];

let genId = 3;

export default function App() {
  const [listGifts, setListGifts] = useState<Gift[]>(initialList);

  useEffect(() => {
    console.log(listGifts);
  }, [listGifts]);

  function addGiftToList({ title, url, quantity }: FormAddGift) {
    if (title.trim() === "") return;
    setListGifts([
      ...listGifts,
      {
        id: genId++,
        title,
        url,
        quantity
      }
    ]);
  }

  function deleteGiftById(id: number) {
    const updatedList = listGifts.filter((gift) => gift.id !== id);
    setListGifts(updatedList);
  }

  function deleteAllGifts() {
    setListGifts([]);
  }

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Lista de regalos</h1>
        <AddGift onAddGift={addGiftToList} />
        <GiftsList
          gifts={listGifts}
          onDeleteGift={deleteGiftById}
          onDeleteList={deleteAllGifts}
        />
      </div>
    </div>
  );
}
