// Components
import { useState } from 'react';

const AddTasks = ({ handleAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="bg-slate-200 p-6 rounded-md space-y-4 shadow flex flex-col">
      <input
        className="py-2 px-3 rounded-md border border-slate-300 outline-slate-400"
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="py-2 px-3 rounded-md border border-slate-300 outline-slate-400"
        type="text"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert('Preencha todos os campos!');
            return;
          }

          handleAddTask(title, description);
          setTitle('');
          setDescription('');
        }}
        className="bg-slate-500 text-white font-medium p-2 rounded-md hover:bg-slate-600"
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddTasks;
