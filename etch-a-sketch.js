// Creating an div element here.
let element = document.createElement("div") ;
element.setAttribute('id', "parent_div"); 
document.body.appendChild(element);

// changing properties of parent div element

document.getElementById('parent_div').style.display = 'flex';
document.getElementById('parent_div').style.width = '100%' ;
document.getElementById('parent_div').style.height = '100vh' ;
document.getElementById('parent_div').style.justifyContent = 'space-between' ;

// creating multiple divs inside the parent div 

for (i = 0; i < 6 ; i++){    
    let element = document.createElement("div") ;
    element.setAttribute('id', "1st_lvl_div" + i); 
    document.getElementById('parent_div').appendChild(element);
    document.getElementById('1st_lvl_div' + i).style.display = 'flex';
    document.getElementById('1st_lvl_div' + i).style.flexDirection = 'column';    
    document.getElementById('1st_lvl_div' + i).style.justifyContent = 'space-between' ;
    
    for(j = 0; j <6 ; j ++){
        let element = document.createElement("div") ;
        element.setAttribute('id', "2nd_lvl_div" + j + i); 
        let text = document.createTextNode("Child div no. ( " + j + ", " + i +" )");
        element.appendChild(text);
        document.getElementById('1st_lvl_div' + i).appendChild(element);
        document.getElementById('2nd_lvl_div' + j + i).style.border = 'solid' ;
        document.getElementById('2nd_lvl_div' + j + i).style.padding = '50px' ;
    }
    
}






