export default function FinalInviteCard({ dateChoice, foodChoice, wineChoice }) {
  return (
    
    <div className="bg-white p-12 rounded-3xl shadow-2xl text-center w-[420px] relative overflow-hidden">
      
      {/* Header */}
      <h1 className="text-3xl font-extrabold text-pink-600 mb-4">
        Can't Wait!  💕
      </h1>

      {/* Summary of choices */}
      <div className="text-gray-600 text-base mb-6 space-y-2">
        <p>
          <span className="font-semibold text-rose-600">Date:</span> {dateChoice} 💌
        </p>
        <p>
          <span className="font-semibold text-rose-600">Food:</span> {foodChoice.join(", ")} 🍴
        </p>
        <p>
          <span className="font-semibold text-rose-600">Wine:</span> {wineChoice} 🍷
        </p>
      
      </div>

      {/* Central celebration emoji */}
      <div className="text-4xl animate-bounce mb-6">🥂✨</div>

      {/* Formspree form */}
        <form
        action="https://formspree.io/f/mojnjegl"
        method="POST"
        className="flex flex-col gap-2 mt-4"
        >
        <input type="hidden" name="dateChoice" value={dateChoice} />
        <input type="hidden" name="foodChoice" value={foodChoice.join(", ")} />
        <input type="hidden" name="wineChoice" value={wineChoice} />
        
        <textarea
            name="message"
            placeholder="Something you wanna say to me... 💌"
            rows="3"
            className="border p-3 rounded-xl w-full resize-none focus:outline-none focus:ring-2 focus:ring-pink-300"
        />


        <button
            type="submit"
            className="mt-3 bg-rose-500 text-white py-2 rounded-full hover:scale-105 transition-all duration-300"
        >
            Let's get ready! 💘
        </button>
        </form>

    </div>
  )
}

