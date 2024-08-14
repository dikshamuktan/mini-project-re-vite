import { useState,useEffect } from "react";
import WelcomeMeassage from "../components/home/WelcomeMessage";
import MotivationQuote from "../components/home/MotivationQuotes";
import TaskSummary from "../components/home/TaskSummary"
import {getTask} from "../utils/localTask";

const Home= ()=>{
    const [tasks, setTasks]= useState([])

    useEffect(()=> {

       const storedTask= getTask();
       setTasks(storedTask);
    },[]);


    return(
        <div>
        <WelcomeMeassage/>
        <MotivationQuote/>
        <TaskSummary tasks={tasks}/>
        </div>
    );
};



export default Home;