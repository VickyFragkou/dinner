import { useState } from "react";

export default function FoodCard({ next, setChoice }) {
  const foodOptions = [
    { name: "Mushrooms", emoji: "🍄" },
    { name: "Bacon", emoji: "🥓" },
    { name: "Broccoli", emoji: "🥦" },
  ];

  const [selected, setSelected] = useState([]);

  const handleSelect = (food) => {
    let newSelected;
    if (selected.includes(food)) {
      // αν είναι ήδη επιλεγμένο, το αφαιρούμε
      newSelected = selected.filter((item) => item !== food);
    } else {
      // αν δεν είναι, το προσθέτουμε
      newSelected = [...selected, food];
    }
    setSelected(newSelected);
    setChoice("food", newSelected); // αποθηκεύεται στο parent
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl text-center w-[380px]">
      <h1 className="text-2xl font-bold mb-2 text-pink-600">🍽️ Menu:</h1>
      <h2 className="text-2xl font-bold mb-2 text-pink-600">Chicken à la Crème</h2>

      <p className="text-gray-500 mb-6">Choose the ingredients</p>

      {/* Ingredients */}
      <div className="flex flex-col gap-4 mb-8">
        {foodOptions.map((item) => (
          <div
            key={item.name}
            onClick={() => handleSelect(item.name)}
            className={`border rounded-2xl p-4 flex items-center justify-between cursor-pointer transition hover:bg-pink-50 hover:scale-[1.02] ${
              selected.includes(item.name) ? "bg-pink-100 border-pink-400" : ""
            }`}
          >
            <span className="text-lg">{item.emoji} {item.name}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={next}
        className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
        disabled={selected.length === 0} // NEXT disabled αν δεν έχει επιλεγεί τίποτα
      >
        NEXT
      </button>
    </div>
  );
}
