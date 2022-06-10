import React from "react"

function Task({ text, category, key, onClickDelete }) {

	return (
		<div className="task">
			<div className="label">{category}</div>
			<div className="text">{text}</div>
      <div key={key}/>
			<button className="delete" onClick={onClickDelete} value={text}>
				X
			</button>
		</div>
	)
}

export default Task
