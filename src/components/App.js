import React, { useState } from "react"
import CategoryFilter from "./CategoryFilter"
import NewTaskForm from "./NewTaskForm"
import TaskList from "./TaskList"

import { CATEGORIES, TASKS } from "../data"
console.log("Here's the data you're working with")
console.log({ CATEGORIES, TASKS })

function App() {
	const [tasks, setTasks] = useState(TASKS)
	const [category, setCategory] = useState("Code")
	const [newItemText, setNewItem] = useState("")
	const [filterCategory, setFilterCategory] = useState("All")

	function onTaskFormSubmit(newTask) {
		setTasks([...tasks, newTask])
	}

	function inputChange(e) {
		setNewItem(e.target.value)
	}

	function selectChange(e) {
		setCategory(e.target.value)
	}

	function toDeleteTask(e) {
		setTasks(e)
	}

	function filterTasks(e) {
		console.log(e)
	}

	const tasksToDisplay = tasks.filter((task) => {
		if (filterCategory === "All") return true
		return task.category === filterCategory
	})

	return (
		<div className="App">
			<h2>My tasks</h2>
			<CategoryFilter categories={CATEGORIES} filterTasks={filterTasks} />
			<NewTaskForm
				categories={CATEGORIES}
				onTaskFormSubmit={onTaskFormSubmit}
				onInputChange={inputChange}
				onSelectChange={selectChange}
				newItemText={newItemText}
				newCategory={category}
			/>
			{tasksToDisplay.map((task) =>
				task.category === { filterCategory } ? (
					<TaskList tasks={tasks} deleteTask={toDeleteTask} />
				) : (
					true
				)
			)}
		</div>
	)
}

export default App
