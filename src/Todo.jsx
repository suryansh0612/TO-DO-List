import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todolist() {
  const [todos, settodos] = useState([{ task: "sample task", id: uuidv4(), done: false }]);
  const [newtodo, setnewtodo] = useState("");

  const addnewtask = () => {
    const newTask = { task: newtodo, id: uuidv4(), done: false };
    settodos((prevtodos) => [...prevtodos, newTask]);
    setnewtodo("");
  };

  const deletetodo = (id) => {
    settodos((prevtodos) => prevtodos.filter((todo) => todo.id !== id));
  };

  const markAsDone = (id) => {
    settodos((prevtodos) =>
      prevtodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const updatetodovalue = (event) => {
    setnewtodo(event.target.value);
  };

  const uppercaseall = () => {
    settodos((prevtodos) =>
      prevtodos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My To-Do List</h2>
      <input 
        style={styles.input}
        placeholder="Type a task" 
        value={newtodo} 
        onChange={updatetodovalue} 
      />
      <button style={styles.addButton} onClick={addnewtask}>Add Task</button>
      <h4 style={styles.subHeading}>Tasks to do</h4>
      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ ...styles.listItem, textDecoration: todo.done ? "line-through" : "none" }}>
            {todo.task}
            <button style={styles.doneButton} onClick={() => markAsDone(todo.id)}>
              {todo.done ? "Undo" : "Done"}
            </button>
            <button style={styles.deleteButton} onClick={() => deletetodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button style={styles.uppercaseButton} onClick={uppercaseall}>Upper case all!</button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f0f4f8",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  subHeading: {
    color: "#666",
  },
  input: {
    width: "calc(100% - 100px)",
    padding: "10px",
    marginRight: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
  addButton: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    margin: "10px 0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  doneButton: {
    marginRight: "10px",
    padding: "5px 10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#28a745",
    color: "#fff",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "5px 10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#dc3545",
    color: "#fff",
    cursor: "pointer",
  },
  uppercaseButton: {
    display: "block",
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#ffc107",
    color: "#333",
    cursor: "pointer",
    marginTop: "20px",
  },
};
