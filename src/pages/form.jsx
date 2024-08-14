import {useState} from "react";
import { validationTask } from "../utils/validation";


const Form= ()=> {
    const [task, setTask]= useState({
        title:"",
        description:"",
        status:"pending",

    });

    const [btnContent, setBtnContent]= useState("Add Task");
    const [errors, setErrors]= useState({})

    const handleChange= (e)=> {
        const {name, value}= e.target;
        setTask({...task,[name]:value});

    };

     const handleSubmit =(e)=> {
        e.preventDefault();
        setBtnContent("Addingt Task");
       const validationError= validationTask(task)
       setErrors(validationError)

       if(Object.keys(validationError).length>0){
        return;
       }

        const tasks= JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push({ ...task, id: Math.random().toString(36).substring(2, 9) });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        setTask({ title: "", description: "", status: "pending" });

        setBtnContent("Add task");
     }


    return(
        <div className="flex justify-center items-center h-screen bg-slate-50 ">
            <form className="h-96 w-2/5 bg-white p-5 rounded-lg shadow-lg"onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-5">Create a New Task</h2>

              
               <input className={`block w-full p-3 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
                name="title" type="text"
                 placeholder="Title"
                 onChange={handleChange}
                 value={task.title}

                 />
                  {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}


               <textarea className={`block w-full p-3 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500 ${
                 errors.description ? "border-red-500" : "border-gray-300"
                }`} 
               name="description" 
               placeholder="Description"
               onChange={handleChange}
               value={task.description}
               ></textarea>

              {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}      
           
               <select className={`block w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-500 ${
              errors.status ? "border-red-500" : "border-gray-300"
            }`}
               name="status"
               onChange={handleChange}
               value={task.status}
               >
                <option value="pending">pending</option>
                <option value="completed">completed</option>
               </select>
               {errors.status && (
              <p className="text-red-500 text-sm mt-1">{errors.status}</p>
             )}
              
               <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
        >
          {btnContent}
        </button>
               
            </form>
        </div>
    );
};


export default Form;