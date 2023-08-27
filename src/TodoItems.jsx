import React from 'react';

export function TodoItems({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className="list-item">
      <label className="list-label">
        <input
          type="checkbox"
          className="checkbox-input"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        <span className="checkmark"></span>
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-delete">
        Delete
      </button>
    </li>
  );
}
