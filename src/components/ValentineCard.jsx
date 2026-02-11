import { useState } from "react"

export default function ValentineCard({ next }) {
  const [noStyle, setNoStyle] = useState({})
  const [yesScale, setYesScale] = useState(1)

  const moveButton = () => {
    const randomX = Math.floor(Math.random() * 300) - 150
    const randomY = Math.floor(Math.random() * 200) - 100


    setNoStyle({
      position: "absolute",
      transform: `translate(${randomX}px, ${randomY}px)`
    })

    setYesScale((prev) => prev + 0.2 )
  }

  return (
    <div className="bg-white p-12 rounded-3xl shadow-[0_20px_50px_rgba(255,105,180,0.3)] text-center w-[420px] relative">
      
    <h2 className="text-4xl font-extrabold mb-2 text-pink-600">
        Dinner Date? 💕
    </h2>
      <p className="text-gray-600 mb-10">
        Just you and me 🍷✨
      </p>


      <div className="relative flex justify-start items-center gap-6 h-24">
        
        {/* YES BUTTON */}
        <button
          onClick={next}
          style={{ transform: `scale(${yesScale})` }}
          className="origin-left bg-gradient-to-r from-pink-500 to-rose-500 text-white px-10 py-4 rounded-full shadow-lg transition-transform duration-300"
        >
          YES 💘
        </button>

        {/* NO BUTTON */}
        <button
          onMouseEnter={moveButton}
          style={noStyle}
          className="bg-gray-200 text-gray-600 px-8 py-3 rounded-full transition-all duration-300"
        >
          NO 🙃
        </button>

      </div>
    </div>
  )
}
