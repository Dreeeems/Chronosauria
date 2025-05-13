import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DinoTimeline from "./components/dinoTimeline";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Chronosauria
        </h1>
        <p className="text-lg max-w-2xl text-center mx-auto mb-12 text-slate-300">
          Journey through time and interact with 3D dinosaurs from different
          periods of the Mesozoic Era
        </p>
        <DinoTimeline />
      </div>
    </main>
  );
}

export default App;
