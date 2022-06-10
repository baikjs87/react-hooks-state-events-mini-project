import React from "react"
import Task from "./Task"
import { v4 as uuid } from "uuid"


function TaskList({ tasks, deleteTask }) {

	function toDeleteTask(e) {
		const taskText = e.target.value
		const newTasksList = tasks.filter((task) => task.text !== taskText)
		deleteTask(newTasksList)
		}

	return (
		<div className="tasks">
			{tasks.map((task) => (
				<Task
					text={task.text}
					category={task.category}
					key={uuid()}
					onClickDelete={toDeleteTask}
				/>
			))}
		</div>
	)
}

export default TaskList
