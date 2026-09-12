

import { useEffect, useState } from "react";
import HeroBanner from "./Components/HeroBanner"
import Nav from "./Components/Nav"
import TechnologySection from "./Components/TechnologySection";
import type { ITechnology } from "./Components/types/technologies";
import YourStack from "./Components/YourStack";
import { toast } from "react-toastify";
import Footer from "./Components/Footer";


const dataFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {

  const [loading, setLoading] = useState(true);

  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  useEffect(() => {
    dataFetch().then((data) => {
      setTechnologies(data)
      setLoading(false);
        ;
    });
  }, []);

  const [selectedTechnologies, setselectedTechnologies] = useState<ITechnology[]>([]);

  const handleAddToStack = (technology: ITechnology) => {
    const alreadyAdded = selectedTechnologies.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.error("This technology is already in your stack!");
      return;
    }
    setselectedTechnologies((prev) => [
      ...prev,
      technology,
    ]);
  };

  const handleRemoveFromStack = (id: string) => {
    setselectedTechnologies((prev) => prev.filter((technology) => technology.id !== id))
  }

  const handleRemoveAll = () => {
    setselectedTechnologies([])
  };


  return (
    <>
      <Nav />
      <HeroBanner />
     
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
            {/* cards */}
            <div className="lg:col-span-3">
              <TechnologySection technologies={technologies}
                onAddToStack={handleAddToStack}
                selectedTechnologies={selectedTechnologies} />
            </div>
            {/* your stack */}
            <div className="lg:col-span-1">
              <YourStack
                selectedTechnologies={selectedTechnologies}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll} />
            </div>
          </div>
        </div>
      <Footer/>


    </>
  )
}

export default App
