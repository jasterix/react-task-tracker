import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
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
		console.log("delete", id);
	};

	return (
		<div className="container">
			<Header title="Task Tracker" />
			<Tasks tasks={tasks} />
		</div>
	);
};

export default App;
