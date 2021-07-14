par = [];
for (i = 0; i < 1; i++) {

    a = document.getElementsByTagName("p")[0].innerHTML;
    // a = a.toLowerCase();
    a = a.trim();
    par.push(a);


}


function search() {

    value = document.getElementById("input").value;
    // value = value.toLowerCase();
    value = value.trim();
    // alength = a.length;


    for (i = 0; i < 1; i++) {

        if (par[i].includes(value)) {

            // for(i=0;i<alength;i++)

            
           console.log( f_index = a.indexOf(value));
            length = value.length;
            l_index = f_index + length;
            newstring = a.substring(f_index,l_index)
            console.log(newstring)

            let re = new RegExp(`\\b${value}\\b`, 'gi');

          

            document.getElementsByTagName("p")[i].innerHTML = a.replace(re, `<span id="light">${value}</span>`);

            // lastindex = a.indedeOf(value) + value.length;

            // i = lastindex;

            scroll()
        }
    }
}


function scroll() {

    position = document.getElementById("light");

    position.scrollIntoView();
}