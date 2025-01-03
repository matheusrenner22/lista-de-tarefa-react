// Hooks
import { useState } from 'react';

// Components
import Tasks from './components/Tasks';
import AddTasks from './components/AddTasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar Programação',
      description: 'Estudar programação utilizando a documentação do React',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Ler Livro',
      description: 'Ler o livro "O guia do mochileiro das galáxias"',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Assistir Série',
      description: 'Assistir a série "Breaking Bad"',
      isCompleted: false,
    },
  ]);

  // Function
  function handleCompleteTask(taskid) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskid) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function handleDeleteTask(taskid) {
    const newTasks = tasks.filter((task) => task.id !== taskid);

    setTasks(newTasks);
  }

  function handleAddTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-[500px] space-y-4">
      <h1 className="text-center font-bold text-white text-3xl">
        Gerenciador de Tarefas
      </h1>
      <AddTasks handleAddTask={handleAddTask} />
      <Tasks
        tasks={tasks}
        handleCompleteTask={handleCompleteTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;
