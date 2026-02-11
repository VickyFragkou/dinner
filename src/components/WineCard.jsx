import { useState } from "react";

export default function WineCard({ next, setChoice }) {
  const [selected, setSelected] = useState("");
  const [whiteScale, setWhiteScale] = useState(1);

  const wineOptions = [
    { name: "Red Wine", emoji: "🍷" },
    { name: "Rosé Wine", emoji: "🍷" },
    { name: "Semi-Sweet White Wine", emoji: "🥂" },
    { name: "Dry White Wine", emoji: "🍾" },
  ];

  const handleSelect = (wine) => {
    setSelected(wine);
    setChoice("wine", wine); // αποθηκεύεται στο parent
  };

  return (
    <div className="bg-white p-10 rounded-3xl shadow-2xl text-center w-[400px] relative">
      <h2 className="text-2xl font-bold mb-6 text-rose-600">Wine Options 🍷</h2>

      <div className="flex flex-col gap-4 mb-6 relative">
        {wineOptions.map((wine) => {
          const isWhite = wine.name === "Semi-Sweet White Wine";
          const isSelected = selected === wine.name;

          return (
            <div
              key={wine.name}
              onClick={() => handleSelect(wine.name)}
              onMouseEnter={() =>
                isWhite ? setWhiteScale(1.1) : setWhiteScale(1.15)
              }
              onMouseLeave={() => setWhiteScale(1)}
              className={`
                border rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-all duration-300
                ${isWhite ? "bg-rose-50 shadow-lg" : "hover:scale-[1.02] hover:bg-rose-50"}
                ${isSelected ? "bg-rose-200 border-rose-400" : ""}
              `}
              style={
                isWhite
                    ? { transform: `scale(${whiteScale})`, transformOrigin: "center" }
                    : {}
                }
                >
              <span className="text-lg">
                {wine.emoji} {wine.name}
              </span>
            </div>
          );
        })}
      </div>

      <button
        onClick={next}
        className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
        disabled={!selected} 
      >
        NEXT
      </button>
    </div>
  );
}
