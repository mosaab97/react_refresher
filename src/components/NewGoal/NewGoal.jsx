import React, { useState } from "react";
import './NewGoal.css';

const NewGoal = ({onAddGoal}) => {

    const [newGoal, setNewGoal] = useState("");

    const addGoalHandler = event => {
        event.preventDefault();
        
        const n= {
            id: Math.random().toString(),
            des: newGoal
        }
        onAddGoal(n);
    };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" value={newGoal} onChange={(e) => setNewGoal(e.target.value)}/>
        <button type="submit">Add Goal</button>
    </form>
  );
}

export default NewGoal;