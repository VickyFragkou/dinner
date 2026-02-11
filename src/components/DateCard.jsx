import { useState } from "react";

export default function DateCard({ next, setChoice }) {
  const [selected, setSelected] = useState("");

  const handleSelect = (date) => {
    setSelected(date);
    setChoice("date", date);
  };

  return (
    <div className="bg-white p-10 rounded-3xl shadow-2xl text-center w-[400px]">
      <h2 className="text-2xl font-bold mb-6 text-pink-600">
        Pick a Date 📅
      </h2>

      <div className="flex flex-col gap-3 mb-6">
        {[
          "Saturday (at your place)",
          "Sunday (at my place)",
          "Some other day",
        ].map((dateOption) => (
          <button
            key={dateOption}
            onClick={() => handleSelect(dateOption)}
            className={`border rounded-xl py-2 transition hover:bg-pink-100 ${
              selected === dateOption ? "bg-pink-100 border-pink-400" : ""
            }`}
          >
            {dateOption}
          </button>
        ))}
      </div>

      <button
        onClick={next}
        className="bg-pink-500 text-white px-6 py-3 rounded-full hover:scale-105 transition"
        disabled={!selected} // NEXT disabled μέχρι να επιλεγεί κάτι
      >
        NEXT
      </button>
    </div>
  );
}
