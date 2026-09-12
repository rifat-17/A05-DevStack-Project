
import type { ITechnology } from './types/technologies';
import { RxCross2 } from 'react-icons/rx';

interface StackItemProps{
    technology : ITechnology;
    onRemove: (id:string)=> void;
}

const StackItem = ({technology, onRemove}: StackItemProps) => {
    return (
        <div>
            <img src={technology.icon} alt="" className='w-10 h-10' />
            <div className='flex-1'>
                <h3 className='font-semibold'>{technology.name}</h3>
                <p className='text-sm text-base-content'>{technology.category} </p>
            </div>
                    <button
        onClick={() => onRemove(technology.id)}
        className="btn btn-sm btn-circle btn-ghost"
      >
        <RxCross2 />

      </button>
        </div>
    );
};

export default StackItem;