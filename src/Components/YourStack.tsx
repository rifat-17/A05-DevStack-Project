
import type { ITechnology } from "./types/technologies";
import StackItem from "./StackItem";

interface YourStackProps {
    selectedTechnologies: ITechnology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const YourStack = ({
    selectedTechnologies,
    onRemove,
    onRemoveAll,
}: YourStackProps) => {
    return (
        <div className="card bg-base-100 border border-base-200 shadow-md">
            <div className="card-body">

                {/* Header */}
                <div className="flex justify-between items-center gap-3">
                    <h2 className="text-2xl font-bold">
                        Your Stack
                    </h2>

                    <p className="text-sm text-base-content/60 whitespace-nowrap">
                        {selectedTechnologies.length}{" "}
                        {selectedTechnologies.length === 1
                            ? "Technology"
                            : "Technologies"}{" "}
                        Selected
                    </p>
                </div>

                {/* Empty State */}
                {selectedTechnologies.length === 0 && (
                    <div className="py-10 text-center">
                        <p className="text-base-content/50">
                            Your stack is empty.
                        </p>

                        <p className="text-sm text-base-content/40 mt-1">
                            Add technologies to build your stack.
                        </p>
                    </div>
                )}

                {/* Stack Items */}
                {selectedTechnologies.length > 0 && (
                    <div className="space-y-3 mt-4">
                        {selectedTechnologies.map((technology) => (
                            <StackItem
                                key={technology.id}
                                technology={technology}
                                onRemove={onRemove}
                            />
                        ))}
                    </div>
                )}

                {/* Remove All */}
                {selectedTechnologies.length > 0 && (
                    <button
                        onClick={onRemoveAll}
                        className="btn btn-sm btn-outline btn-error w-full mt-4"
                    >
                        Remove All
                    </button>
                )}

            </div>
        </div>
    );
};

export default YourStack;