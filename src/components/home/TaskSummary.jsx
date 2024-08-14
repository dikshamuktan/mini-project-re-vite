import React from "react";

const TaskSummary= ({tasks})=> {

    const totalTask= tasks.length;
    const completedTask= tasks.filter(
        (task)=> task.status === "completed"
    ).length
    const pendingTask= totalTask-completedTask;

  return(
    <div>
        <h2>Task Summary</h2>
        <p>Tatal Task:{totalTask}</p>
        <p>Completed Task:{completedTask}</p>
        <p>Pending Task:{pendingTask}</p>
        <div>
            <p>you have completed{completedTask}out of {totalTask}tasks.</p>
        </div>
    </div>
  );
};


export default TaskSummary;