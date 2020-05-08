var taskcounter: number = 0;

window.addEventListener("load", function(): void {
    document.querySelector(".addButton").addEventListener("click", AddTaskText);
    document.querySelector(".items").addEventListener("click", AddTaskText);
});

function AddTaskText (): void {
    var newtask: string = (<HTMLInputElement>document.querySelector(".newtask")).value;
    console.log(newtask);
    addTaskToList(newtask);
    var element = document.querySelector(".Rahmen");
    var numberofChildren = element.children.length;
    taskcounter = numberofChildren;
    console.log("Die Anzahl der To-Dos lautet:" + numberofChildren);
    document.querySelector(".items").innerHTML = numberofChildren + " in total";
}

function addTaskToList (newTaskValue: string): void {
    var addElement = document.createElement("div");
    addElement.setAttribute("class", "Template");
    addElement.setAttribute("id", "TaskId" + taskcounter);
    var myHtmlTemplate: string =  "";
    myHtmlTemplate += "<input class=\"firsttask\" id=\"firsttask" + taskcounter + "\" value=\"" + newTaskValue + "\" ></input>";
    myHtmlTemplate += "<button onclick=\"DeleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" + taskcounter + "\"></button>";
    addElement.innerHTML = myHtmlTemplate;
    document.querySelector(".Rahmen").appendChild (addElement);
    console.log ("addTasktoList:" + newTaskValue);
}
function DeleteTaskText (ClickedTrash): void {
    console.log("This is deleating the task");
    ClickedTrash.parentElement.remove();
    taskcounter --;
    var element = document.querySelector(".Rahmen");
    var numberofChildren = element.children.length;
    document.querySelector(".items").innerHTML = numberofChildren + " in total";
}


