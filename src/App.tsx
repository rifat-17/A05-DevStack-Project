

import { useEffect, useState } from "react";
import HeroBanner from "./Components/HeroBanner"
import Nav from "./Components/Nav"
import TechnologyCard from "./Components/TechnologyCard";
import TechnologySection from "./Components/TechnologySection";
import type { ITechnology } from "./Components/types/technologies";
import YourStack from "./Components/YourStack";


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


  return (
    <>
      <Nav />
      <HeroBanner />
      <TechnologySection technologies={technologies} />
      
      <YourStack selectedTechnologies={[]} />
    </>
  )
}

export default App
