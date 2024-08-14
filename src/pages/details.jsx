import {useState, useEffect} from "react";
import{addTask, getTask} from "../utils/localTask";


const Details= ()=> {
    const [tasks,setTasks]= useState([]);

    useEffect(()=> {
      const storedTasks= JSON.parse(localStorage.getItem("tasks")) ||[];
      setTasks(storedTasks);
    },[]);
    
    const handleDelete= (id)=> {
        const updateTasks= tasks.filter((task) => task.id !== id);
        localStorage.setItem("tasks",JSON.stringify(updateTasks));
        setTasks(updateTasks);

    };

    const handleStatusChange=  (id,status)=> {
        const updatedTasks= tasks.map((task)=> 
            task.id === id ? {...task,status}: task
        );
        setTasks(updatedTasks);
        localStorage.setItem("tasks",JSON.stringify(updatedTasks));

    };
    return(
        <div className="flex flex-col h-screen  items-center w-full">
            <p className="text-3xl font-bold p-3">Task List</p>
            <div className=" flex w-full items-center justify-center ">
                <ul>{tasks.map((task)=>
                <li key={task.id}
                className=" p-6 mb-4 rounded-lg shadow-md "
                >
                    <div className="flex justify-between gap-48 p-2 mb-4 ">
                        <div className="flex-col ">
                        <p className="text-xl font-semibold text-green-600 ">{task.title}</p> 
                        <p className="text-gray-600">{task.description}</p>
                        </div>
                    <div className="gap-4 flex">
                        <select value={task.status}
                        onChange={(e)=> handleStatusChange(task.id,e.target.value)}
                           >
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                        <button className="text-lime-400 bg-green-600 rounded p-2" onClick={()=> handleDelete(task.id)}>Delete</button>
                    </div>
                    </div>
                </li>)}
                </ul>
            </div>
        </div>
    );
};

export default Details;