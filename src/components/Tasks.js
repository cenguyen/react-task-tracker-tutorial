// const tasks = [
//   {
//     id: 1,
//     text: 'Doctors Appointment',
//     day: 'Feb 5th at 10:30AM',
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting at School',
//     day: 'Feb 6th at 1:30PM',
//     reminder: true,
//   },
//   {
//     id: 3,
//     text: 'Grocery shopping',
//     day: 'Feb 5th at 2:30PM',
//     reminder: false,
//   },
// ];

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
