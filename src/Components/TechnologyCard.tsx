
import { FaStar } from "react-icons/fa";
import type { ITechnology } from "./types/technologies";


interface TechnologyCardProps {
  technology: ITechnology;
  onAddToStack: (technology: ITechnology) => void;
  selectedTechnologies : ITechnology[];
}

const TechnologyCard = ({ technology, onAddToStack , selectedTechnologies }: TechnologyCardProps) => {

  const isAdded = selectedTechnologies.some((item)=> item.id === technology.id);

  return (

    

    <div className="group card bg-base-100 border border-base-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      
      <div className="card-body p-6">

        {/* Top Section */}
        <div className="flex items-start justify-between">

          {/* Technology Icon */}
          <div className="w-14 h-14 flex items-center justify-center rounded-xl  text-white shadow-md">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-9 h-9"
            />
          </div>

          {/* Badge */}
          <span className="badge badge-soft font-medium px-3 py-3">
            {technology.badge}
          </span>

        </div>

        {/* Technology Name */}
        <div className="mt-5">

          <h2 className="text-2xl font-bold tracking-tight">
            {technology.name}
          </h2>

          <p className="text-sm text-base-content/60 mt-2 leading-6">
            {technology.description}
          </p>

        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-3 mt-4">

          <span className="badge badge-neutral backdrop-grayscale-200">
            {technology.category}
          </span>

          <span className="badge badge-outline backdrop-grayscale-200">
            {technology.difficulty}
          </span>
          {/* Rating */}
        <div className="flex items-center gap-2 mt-4">

          <div className="flex items-center gap-1 text-warning">

            <FaStar />

            <span className="font-semibold text-base-content">
              {technology.rating}
            </span>

          </div>
        </div>

        </div>

        

        {/* Divider */}
        <div className="divider my-2"></div>

        {/* Button */}
        <button
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
          className="btn w-full border-0 text-white bg-black hover:bg-gray-800 transition-all duration-300"
        >
          {isAdded ? "Added to stack" : "Add to Stack"}
        </button>


      </div>

    </div>
  );
};

export default TechnologyCard;