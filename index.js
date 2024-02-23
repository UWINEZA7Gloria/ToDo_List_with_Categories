const task=[];
const categories={
    morningworks:[],
    afternoonworks:[]
};
function addTask(name,dueTime,complete = false){
    let add={
       name:name,
        dueTime:dueTime,
        complete:complete
    }
    task.push(add);
}
addTask('bathing','morning');
addTask('mopping','morning');
addTask('cooking','morning');
addTask('eating','afternoon');
addTask('sleeping','afternoon');
addTask('studying','afternoon');
//categorising task
for(let i=0;i<task.length;i++){
    if(task[i].dueTime==='morning'){
        categories.morningworks.push(task[i].name);
    }
    else{
        categories.afternoonworks.push(task[i].name);
    }
    console.log(task[i]);
}
//function to display task accorging to categories
    function displaycategories(){
//task categorie according to duetime(afternoon)
console.log("afternoon tasks categories");
for(let i=0;i<categories.afternoonworks.length;i++){
    console.log(categories.afternoonworks[i]);
}
//task category according to  duetime(morning)
console.log("morning tasks categories");
for(let i=0;i<categories.morningworks.length;i++){
    console.log(categories.morningworks[i]);
}}
displaycategories();
//function for marking task completed
function markingTask(name){
    for(let i=0;i<task.length;i++){
        if(task[i].name===name){
            task[i].complete=true;
        }
    }
}
markingTask('cooking');
markingTask('bathing');
markingTask('eating');
//removing a task
let removeTask=task.splice(1,1);
//my tasks after removing a task
for(let i=0;i<task.length;i++){
    console.log(task[i]);
}






















