import React from "react"

function NewTaskForm({
	categories,
	onTaskFormSubmit,
	onInputChange,
	onSelectChange,
	newCategory,
	newItemText,
}) {
	function onSubmitForm(e) {
		e.preventDefault()
		const newItem = {
			text: newItemText,
			category: newCategory,
			key: newItemText,
		}
		onTaskFormSubmit(newItem)
	}

	return (
		<form className="new-task-form" onSubmit={onSubmitForm}>
			<label>
				Details
				<input
					type="text"
					name="name"
					value={newItemText}
					onChange={onInputChange}
				/>
			</label>
			<label>
				Category
				<select name="category" onChange={onSelectChange}>
					{categories.map((category) =>
						category !== "All" ? (
							<option value={category} key={category.index}>
								{category}
							</option>
						) : null
					)}
				</select>
			</label>
			<input type="submit" value="Add task" />
		</form>
	)
}

export default NewTaskForm
