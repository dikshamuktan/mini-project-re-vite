export const validationTask= (task)=>{
let errors={}


  if(task.title.trim().length===0){
    errors.title="Please Provide the titile"
  } else if(task.title.length < 5 || task.title.length >50){
    errors.title="Title should be in a range of 5 to 50 charactors.";
  }


  if(task.description.trim().length===0){
   errors.description="Please Provide Valid description"
  } else if (task.description.length <5 || task.description.length >50){
    errors.description= "description should be in range of 5 to 50 charactors.";
  }


  if (!["pending", "completed"].includes(task.status)) {
    errors.status = "Invalid status value.";
  }


  return errors
}