import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { DinosaursData } from "../data/dinoData";

const DinoTimeline = () => {
  const [activePeriod, setactivePeriod] = useState("triassic");
  const [selectedDinosaur, setSelectedDinosaur] = useState(null);
  const periods = [
    {
      id: "triassic",
      name: "Triassic",
      years: "252 to 201 MYA",
      color: "",
    },
    {
      id: "jurassic ",
      name: "Jurassic ",
      years: "201 to 145 MYA",
      color: "",
    },
    {
      id: "cretaceous ",
      name: "Cretaceous ",
      years: "145 to 66 MYA",
      color: "",
    },
  ];

  const activeDinosaurs = DinosaursData.filter(
    (dino) => dino.period == activePeriod
  );
  return <div>Timeline</div>;
};

export default DinoTimeline;
