import { useState } from 'react';
import './App.css';
import GoalsList from './components/GoalsList/GoalsList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {
  const [myGoals, setMyGoals] = useState([
    {id: 1, des: "refresh skills"},
    {id: 2, des: "get back to the game"},
    {id: 3, des: "get back as a team lead"}
  ]);

  const AddNewGoalHandler = (newGoal) => {
    setMyGoals(prevGoals => {
      return [newGoal, ...prevGoals];
    });
    console.log(myGoals);
  }

  return (
    <div className="goals-container">
      <h2>Goals</h2>
      <NewGoal onAddGoal={AddNewGoalHandler}/>
      <GoalsList myGoals={myGoals} />
    </div>
  );
}

export default App;
