

import { useEffect, useState } from "react";
import HeroBanner from "./Components/HeroBanner"
import Nav from "./Components/Nav"
import TechnologyCard from "./Components/TechnologyCard";
import TechnologySection from "./Components/TechnologySection";
import type { ITechnology } from "./Components/types/technologies";
import YourStack from "./Components/YourStack";
import { toast } from "react-toastify";


const dataFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {

  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  useEffect(() => {
    dataFetch().then((data) => {
      setTechnologies(data);
    });
  }, []);

  const [selectedTechnologies, setselectedTechnologies] = useState<ITechnology[]>([]);

  const handleAddToStack = (technology: ITechnology) => {
    const alreadyAdded = selectedTechnologies.some((item) => item.id === technology.id);

    if(alreadyAdded) {
      toast.error("This technology is already in your stack!");
      return;
    }
    selectedTechnologies((prev) => [
      ...prev ,
      technology,
    ]);
  };

  return (
    <>
      <Nav />
      <HeroBanner />
      
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
        {/* cards */}
      <div className="lg:col-span-3">
        <TechnologySection technologies={technologies} />
      </div>
      
      <div className="lg:col-span-1">
        <YourStack selectedTechnologies={[]} />
      </div>
      </div>
      </div>
    </>
  )
}

export default App
