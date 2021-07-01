

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text:'Clean yard',
        completed: false,
    },{
        text: 'Film course',
        completed:false
    }],
    getTasksTodo(){
        const unCompletedTask = this.tasks.filter((task)=>{
            return task.completed == false;
        });
        return unCompletedTask;
    }
}

console.log(tasks.getTasksTodo());