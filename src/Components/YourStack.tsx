import React from 'react';
import type { ITechnology } from './types/technologies';

interface YourStackProps {
    selectedTechnologies: ITechnology[];
}

const YourStack = ({ selectedTechnologies }: YourStackProps) => {



    return (
        <div className="card bg-base-100 shadow-md border border-base-200">

            <div className="card-body">

                {/* Heading */}
                <div className="flex justify-between items-center">

                    <h2 className="text-2xl font-bold">
                        Your Stack
                    </h2>

                    <p className="text-sm text-base-content/60">
                        {selectedTechnologies.length}{" "}
                        {selectedTechnologies.length===1 ? "Technology" : "Technologies"}{" "} 
                        Selected
                    </p>

                </div>

                {/* Empty Message */}
                {selectedTechnologies.length === 0 && (
                    <p className="text-base-content/50 text-center py-10">
                        Your stack is empty.
                    </p>
                )}

            </div>

        </div>
    );
};

export default YourStack;