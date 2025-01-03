// Libs
import { ChevronRightIcon, Trash } from 'lucide-react';

const Tasks = ({ tasks, handleCompleteTask, handleDeleteTask }) => {
  return (
    <ul className="bg-slate-200 p-6 rounded-md space-y-4 shadow">
      {tasks.map(({ id, title, isCompleted }) => (
        <li className="flex gap-2" key={id}>
          <button
            onClick={() => handleCompleteTask(id)}
            className={`bg-slate-400 p-3 rounded-md w-full text-left text-white hover:bg-slate-500 ${
              isCompleted && 'line-through'
            }`}
          >
            {title}
          </button>

          <button className="bg-slate-400 p-3 rounded-md text-left text-white hover:bg-slate-500">
            <ChevronRightIcon />
          </button>

          <button
            onClick={() => handleDeleteTask(id)}
            className="bg-red-500 p-3 rounded-md text-white hover:bg-red-700"
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
