import "./dashboard.css";

const Dashboard = () => {
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();

  return (
    <div className='dashboard'>
      <h2 className='date'>
        {today.toLocaleString("default", { weekday: "long" }).toUpperCase()}{" "}
        {time}
      </h2>
      <h1 className='title'>Welcome the starnet admin page</h1>
      <div className='cards'>
        <h2 className='element'>Users</h2>
        <h2 className='element'>Article</h2>
        <h2 className='element'>Packages</h2>
        <h2 className='element'>Categories</h2>
        <h2 className='element'>Comments</h2>
      </div>
    </div>
  );
};

export default Dashboard;
