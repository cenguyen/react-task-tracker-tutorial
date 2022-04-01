import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 10:30AM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30PM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery shopping',
      day: 'Feb 5th at 2:30PM',
      reminder: false,
    },
  ]);
  
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
