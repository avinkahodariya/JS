
show();

function add(index){

    let lc = localStorage.getItem("todolist")
    let todolist = JSON.parse(lc);
    console.log(lc)
    
   
    if(index+1){

        
   

    console.log(index);

   document.getElementById("input1").value= todolist[index];

   console.log(todolist[index]);

   document.getElementById("addbutton").onclick = function(){ 

  todolist[index] = document.getElementById("input1").value;

  console.log(todolist[index]);

  localStorage.setItem("todolist",JSON.stringify(todolist));

  console.log(todolist);

  show();
}
}
else{



    let input_value = document.getElementById("input1").value;
    let lc = localStorage.getItem("todolist")
    let todolist = JSON.parse(lc);

    if(todolist == null) {
      todolist = [];
    }
   

    todolist.push(input_value);
    console.log(input_value);
    localStorage.setItem("todolist",JSON.stringify(todolist));
    input_value="";
    show();
    

}
}

function show(){
    let new_list = "";

    let todolist = JSON.parse(localStorage.getItem("todolist"));
    todolist.forEach((element,index) => {

  

        new_list = new_list + `<li id="new_list${index}" class="a">"your task <b>${index+1}</b> is <b>${element}.  </b>" </li><button id="index${index}" class="dlbutton" onclick="dlist(${index})">Delete</button><button class="e" onclick="add(${index})">Edit</button>`;
    });
    let ullist = document.getElementById("ul_list");
    ullist.innerHTML = new_list;

}

function dlist(index){
    console.log(index);

    let local_storage = localStorage.getItem("todolist");
    let todolist = JSON.parse(local_storage);
    
    console.log(todolist);

    
    todolist.splice(index,1);
    console.log(todolist);
    localStorage.setItem("todolist",JSON.stringify(todolist));
  
    show();


}




