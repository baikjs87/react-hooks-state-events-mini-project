import React, { useState } from "react"

function CategoryFilter({ categories, filterTasks }) {

	function handleClick(e) {
    categories.map((category) => category===e.target.value ? e.target.className = "selected" : null )
    filterTasks(e.target.value)
	}

	return (
		<div className="categories">
			{categories.map((category) => (
				<button key={category} onClick={handleClick} value={category} >
					{category}
				</button>
			))}
		</div>
	)
}

export default CategoryFilter
 