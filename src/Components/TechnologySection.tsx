
import type { ITechnology } from './types/technologies';
import TechnologyCard from './TechnologyCard';

interface TechnologySectionProps {
    technologies: ITechnology[];
    onAddToStack: (technology: ITechnology) => void;
    selectedTechnologies : ITechnology[];
}

const TechnologySection = ({ technologies, onAddToStack,selectedTechnologies }: TechnologySectionProps) => {
    return (
        <section className='max-w-7xl mx-auto px-6 py-12'>
            <div>
                <h1 className='text-5xl font-bold mb-6'>Explore the
                    <span className='font-bold bg-linear-to-r
            from-pink-500
             to-violet-500
             bg-clip-text
             text-transparent'>Technologies</span></h1>
                <p>Pick one technology per category to build your ideal stack.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {technologies.map((technology) => (
                        <TechnologyCard key={technology.id} 
                        technology={technology}
                        onAddToStack={onAddToStack}
                        selectedTechnologies={selectedTechnologies} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TechnologySection;