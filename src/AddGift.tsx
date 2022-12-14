import { useState } from "react";
import Counter from "./components/Counter";
import { FormAddGift } from "./Gifts.type";

interface AddGiftProps {
  onAddGift: (title: FormAddGift) => void;
}

const initialFormAdd = {
  title: "",
  quantity: 1,
  url: ""
};

export default function AddGift({ onAddGift }: AddGiftProps) {
  const [form, setForm] = useState<FormAddGift>(initialFormAdd);

  function handleAddGift() {
    onAddGift(form);
    setForm(initialFormAdd);
  }

  return (
    <div className="form-add">
      <div className="col">
        <input
          className="form-add__input-title input-form"
          placeholder="Nombre regalo"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.currentTarget.value })}
        />
        <input
          className="form-add__input-url input-form"
          placeholder="Link de la imagen"
          value={form.url}
          onChange={(e) => setForm({ ...form, url: e.currentTarget.value })}
        />
      </div>
      <div className="col">
        <Counter
          initialCount={form.quantity}
          onChange={(newCount: number) =>
            setForm({ ...form, quantity: newCount })
          }
        />

        <button className="btn btn--add" onClick={handleAddGift}>
          Agregar
        </button>
      </div>
    </div>
  );
}
