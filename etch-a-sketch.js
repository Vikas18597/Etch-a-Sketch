// Creating an div element here.
let element = document.createElement("div") ;
element.setAttribute('id', "parent_div"); 
document.body.appendChild(element);

// changing properties of parent div element

document.getElementById('parent_div').style.display = 'flex';
document.getElementById('parent_div').style.minWidth = '100%' ;
document.getElementById('parent_div').style.minHeight = '100%' ;
document.getElementById('parent_div').style.justifyContent = 'space-between' ;

// creating multiple divs inside the parent div 
let div_number = 1;
for (i = 0; i < 6 ; i++){    
    let element = document.createElement("div") ;
    element.setAttribute('class', "1st_lvl_div" + div_number); 
    let text = document.createTextNode("Child div no. " + div_number);
    element.appendChild(text);
    document.getElementById('parent_div').appendChild(element);
    div_number ++ ; 
}
