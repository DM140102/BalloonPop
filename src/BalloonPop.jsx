import { useState } from "react";
import { motion } from "framer-motion";

const compliments = [
  "Your laugh brightens my day.",
  "You're incredibly thoughtful.",
  "I love how passionate you are.",
  "You're beautiful inside and out.",
  "You make me feel at home.",
  "Your strength inspires me.",
  "You make everything more fun.",
  "I admire your creativity.",
  "You're my favorite person to talk to.",
  "I love the way you look at the world.",
  "You always support my dreams.",
  "You're such a good listener.",
  "I admire your kindness.",
  "You light up every room.",
  "I love how you care for others.",
  "You're incredibly smart.",
  "You're my biggest cheerleader.",
  "You make me want to be better.",
  "You’re full of surprises.",
  "You’re the best part of my day.",
  "You understand me like no one else.",
  "You make everything in life feel worth it."
];

export default function BalloonPop() {
  const [popped, setPopped] = useState(Array(compliments.length).fill(false));
  const [revealed, setRevealed] = useState(Array(compliments.length).fill(""));

  const popBalloon = (index) => {
    if (!popped[index]) {
      const newPopped = [...popped];
      const newRevealed = [...revealed];
      newPopped[index] = true;
      newRevealed[index] = compliments[index];
      setPopped(newPopped);
      setRevealed(newRevealed);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Pop the Balloons 🎈
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {compliments.map((_, index) => (
          <div key={index} className="relative w-32 h-48 flex items-center justify-center">
            {!popped[index] ? (
              <motion.div
                className="w-24 h-32 rounded-full shadow-lg cursor-pointer"
                style={{ backgroundColor: "#4DA1A9" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => popBalloon(index)}
              />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-4 rounded-lg shadow-md text-center text-sm text-gray-800"
              >
                {revealed[index]}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
