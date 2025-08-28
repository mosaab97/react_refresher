import React from "react";

const GoalsList = ({myGoals}) => {
    return (
        <ul className="goals">
            {
                myGoals.map(goal => <li key={goal.id}>{goal.des}</li>)
            }
        </ul>
    )
}

export default GoalsList;