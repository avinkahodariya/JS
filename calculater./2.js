display = '';
first ='';
second = '';
sign = '';
wait = false;
res = '';
var num = '';
var opr = '';
var r;


function btn(num){ 

    num = num;
    document.getElementById("input").value=document.getElementById("input").value + num;
   

    
    console.log(num)
    if(wait == false){
        set_first(num);
    }
    else{
        set_second(num);
    
    
}
// document.getElementById("input").value=document.getElementById("input").value + num;
}


function set_first(num)  {

    first = first + num;
    display = first;
    console.log(first);
    console.log(display)
    // dis();

}

function set_second(num) {
    second = second + num;
    // display = first + sign + second;
    console.log(second);
    console.log(display)
    // dis();


}

function op(s) {

    // document.getElementById("input").value=document.getElementById("input").value + num;

   opr = s;
     
    
    if(first!==''){

        


        if(first!=='' && second!==''){

            if(sign=="+"){add();}
            else if(sign=="-"){sub();}
            else if(sign=="*"){mul();}
            else{div();}
            

            res = r;
            sign = s;
            console.log(sign)
            first = res;
           
            console.log(display,first)
            display = first + sign;
            console.log(display)
            second = '';
            wait = true;
            // dis();
        }
        else {

            
      
        
        // console.log(display.charAt(0))
        // if(display.charAt(0) == '-')
        // {
        //      display = display;
        // }
        // else{
        // display = display.replace(/[+*\/-]/g,'');}
        first = display;
        wait = true;
        sign = s;
        console.log(first)
        display = first + sign;
        console.log(display)
        // dis();
        }
        
    }
    // else{

        

       

    // wait = true;
    // sign = s;
    // display = display + sign;
    // dis();
    
    // }

    ds = document.getElementById("input").value;
    console.log(ds)
    console.log(ds.length)

    if(ds.charAt(ds.length-1)=="+"||ds.charAt(ds.length-1)=="-"||ds.charAt(ds.length-1)=="*"||ds.charAt(ds.length-1)=="/")
    {
        sign = s;
        ds = ds.substr(0,ds.length-1)
        console.log(ds)
        document.getElementById("input").value=ds + s;
        console.log( document.getElementById("input").value)
    }
    else{

    document.getElementById("input").value=document.getElementById("input").value + s;
    console.log( document.getElementById("input").value)}

}


function equal() {

     str = document.getElementById("input").value;
    if(str!==""){
        e1();
    }
    console.log
    if(sign=="+"){
        //  r = parseFloat(first) + parseFloat(second);
        add();
    }
    else if (sign=="-"){
        // r = parseFloat(first) - parseFloat(second);
        sub();
    }
    else if(sign=="*"){
        // r = parseFloat(first) * parseFloat(second);
        mul();
    }
    else if(sign=="/"){
        // r = parseFloat(first) / parseFloat(second);
        div();
    }
    else{
        document.getElementById("input").value = "";
    }
    display = r;
//  dis();
    res = r;

    document.getElementById("input").value = res;

// display = '';
first =res;
second = '';
sign = '';
wait = false;
res = '';

      
}


function add(){
    r = parseFloat(first) + parseFloat(second);
}
function sub(){
    r = parseFloat(first) - parseFloat(second);

}
function mul(){
    r = parseFloat(first) * parseFloat(second);

}
function div(){
    r = parseFloat(first) / parseFloat(second);

}

function clr(){

display = '';
first ='';
second = '';
sign = '';
wait = false;
res = '';

dis();
}

function dis(){

   
    document.getElementById("input").value = display;
    
}





if(first!==''&&second!==''){
    console.log(num)
    console.log(sign)
    document.getElementById("input").value = document.getElementById("input").value + num + sign;
    if(opr=='/'){pre=1}
    else if(opr=='*'){pre=2}
    else if(opr=="+"){pre=3}
    else {pre=4}
    

}

function e1(){
    var patt = new RegExp("/[+\−]*(\.\d+|\d+(\.\d+)?)/g");
    var tes = patt.test(str);
   
    if(str){

       

    }
    else{
        document.getElementById("input").value = "invalid";
    }
}
