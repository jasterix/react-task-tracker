import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
	//state
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Appointment",
			day: "Feb 2 at 4pm",
			reminder: true,
		},
		{
			id: 2,
			text: "Visit",
			day: "Feb 9th at 6pm",
			reminder: false,
		},
	]);

	//Delete task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	//render
	return (
		<div className="container">
			<Header title="Task Tracker" />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} />
			) : (
				"No Tasks to Show"
			)}
		</div>
	);
};

export default App;
