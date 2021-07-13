var ary = [];
for(i=0;i<8;i++){
   
    var li;
    li = document.getElementsByTagName("li")[i].textContent;
    li =  li.trim();
    
    console.log(li);
    ary.push(li);
    console.log(ary);
}


function search(){
  
 console.log(ary);
 var a = document.getElementById("input").value;
 a = a.trim();
 a = a.toLowerCase();
 console.log(a);
 ary_update = [];

for(i=0;i<8;i++)
{
    console.log(ary_update);
    console.log(ary[i]);
    console.log(a);
    var fs = ary[i].toLowerCase().search(a);
    console.log(fs);

     if(fs == 0){
     console.log(fs);
     console.log(ary[i]);
      update(ary[i]);

    }
    else 
    {  
        if(fs == -1){
            console.log("asdfghgfd");
                    
        }
        else{
            console.log("asd");
          update(ary[i]);
        }
    }
}
console.log("ary_update",ary_update);
display.apply(null,ary_update);


}


function update(ary1){
    console.log(ary1)
    console.log(ary_update);

    ary_update.push(ary1);
        console.log("ary_update",ary_update);
      
       

}

var in_li = "";

function display(){

    
    var in_li = "";
 
    console.log(ary_update);

    console.log(ary_update.length);
    
    for(i = 0;i < ary_update.length;i++)

    {

        console.log(ary_update[i]);
        

        in_li = in_li + `<li>${ary_update[i]}</li>` ;


}

console.log("asd");
console.log(in_li);

document.getElementById("ull").innerHTML = in_li;
console.log(document.getElementById("ull").innerHTML = in_li
)
    }
