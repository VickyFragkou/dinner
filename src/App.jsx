import { useState } from "react"
import ValentineCard from "./components/ValentineCard"
import DateCard from "./components/DateCard"
import FoodCard from "./components/FoodCard"
import WineCard from "./components/WineCard"
import FinalCard from "./components/FinalCard"


export default function App() {
  const [step, setStep] = useState(0)
  const [choices, setChoices] = useState({
    date: "",
    food: [],
    wine: ""
    
  });

  const nextStep = () => setStep(step + 1);

  const setChoice = (type, value) => {
    setChoices(prev => ({ ...prev, [type]: value }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      {step === 0 && <ValentineCard next={nextStep} />}
      {step === 1 && <DateCard next={nextStep} setChoice={setChoice} />}
      {step === 2 && <FoodCard next={nextStep} setChoice={setChoice} />}
      {step === 3 && <WineCard next={nextStep} setChoice={setChoice} />}
      {step === 4 && (
        <FinalCard 
          foodChoice={choices.food}
          wineChoice={choices.wine}
          dateChoice={choices.date} />
          )}
    </div>
  );
}
