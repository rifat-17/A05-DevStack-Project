
import type { ITechnology } from './types/technologies';
import TechnologyCard from './TechnologyCard';

interface TechnologySectionProps {
    technologies: ITechnology[];
    onAddToStack: (technology: ITechnology) => void;
    selectedTechnologies : ITechnology[];
}

const TechnologySection = ({ technologies, onAddToStack,selectedTechnologies }: TechnologySectionProps) => {
    return (
        
        <section >
            <div className = 'mb-6'>
                

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