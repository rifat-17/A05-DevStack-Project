
import { useEffect, useState } from "react";
import HeroBanner from "./Components/HeroBanner";
import Nav from "./Components/Nav";
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
  // Technologies loading state
  const [loading, setLoading] = useState(true);

  // Technologies data
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);

  // Selected technologies
  const [selectedTechnologies, setselectedTechnologies] = useState<
    ITechnology[]
  >([]);

  // Fetch technologies
  useEffect(() => {
    dataFetch().then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
  }, []);

  // Add technology to stack
  const handleAddToStack = (technology: ITechnology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    // Duplicate technology
    if (alreadyAdded) {
      toast.error("This technology is already in your stack!");
      return;
    }

    // Add technology
    setselectedTechnologies((prev) => [
      ...prev,
      technology,
    ]);

    // Success message
    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const handleRemoveFromStack = (id: string) => {
    // Find the technology before removing it
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    );

    // Remove technology
    setselectedTechnologies((prev) =>
      prev.filter((technology) => technology.id !== id)
    );

    // Success message
    if (technology) {
      toast.info(`${technology.name} removed from your stack!`);
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    // Remove all
    setselectedTechnologies([]);

    // Success message
    toast.success("All technologies removed from your stack!");
  };

  return (
    <>
      <Nav />

      <HeroBanner />

      <main className="max-w-7xl mx-auto px-6 py-12">

        {loading ? (
          // Loading State
          <div className="flex justify-center items-center min-h-64">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          // Main Content
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* Technology Cards */}
            <section className="lg:col-span-3">
              <TechnologySection
                technologies={technologies}
                onAddToStack={handleAddToStack}
                selectedTechnologies={selectedTechnologies}
              />
            </section>

            {/* Your Stack */}
            <aside className="lg:col-span-1">
              <YourStack
                selectedTechnologies={selectedTechnologies}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </aside>

          </div>
        )}

      </main>

      <Footer />
    </>
  );
}

export default App;
