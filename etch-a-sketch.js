// final part of assignment
let button_div = document.createElement("div") ;
button_div.setAttribute('id', 'button-div');

document.body.appendChild(button_div);
document.getElementById('button-div').style.height = '100px';

button_div.style.textAlign = 'center' ;
button_div.style.paddingTop = '20px' ;

let button = document.createElement("button");
button.innerHTML = "Click to enter no of squares" ; 
button_div.appendChild(button);

// making button click a pop up 

function squares(){
    let size = prompt("Enter no of squares you want.") ; 
    
    // Creating an div element here.
    let element = document.createElement("div") ;
    element.setAttribute('id', "parent_div"); 
    document.body.appendChild(element);
    
    // changing properties of parent div element

    document.getElementById('parent_div').style.display = 'flex';
    document.getElementById('parent_div').style.width = '100vw' ;
    document.getElementById('parent_div').style.height = '100vh' ;
    document.getElementById('parent_div').style.justifyContent = 'space-between' ;

    // creating multiple divs inside the parent div 

    for (i = 0; i < size ; i++){    
        let element = document.createElement("div") ;
        element.setAttribute('id', "1st_lvl_div" + i); 
        document.getElementById('parent_div').appendChild(element);
        document.getElementById('1st_lvl_div' + i).style.display = 'flex';
        document.getElementById('1st_lvl_div' + i).style.flexDirection = 'column';    
        document.getElementById('1st_lvl_div' + i).style.justifyContent = 'space-between' ;
        
        for(j = 0; j < size ; j ++){
            let element = document.createElement("div") ;
            element.setAttribute('id', "2nd_lvl_div_" + j + "_"+ i); 
            // let text = document.createTextNode("( " + j + ", " + i +" )");
            // element.appendChild(text);
            document.getElementById('1st_lvl_div' + i).appendChild(element);
            document.getElementById("2nd_lvl_div_" + j + "_"+ i).style.border = 'solid' ;
            document.getElementById("2nd_lvl_div_" + j + "_"+ i).style.padding = '20px' ;

            // for changing color while hovering
            let child_element = document.getElementById("2nd_lvl_div_" + j + "_"+ i);
            child_element.addEventListener("mouseover", function(){
                child_element.style.backgroundColor = 'Red';
            }) ;
            child_element.addEventListener("mouseout", function(){
                child_element.style.backgroundColor = 'White';
            }) ;

        } 
        
    }

}


button.addEventListener("click", function(){
    document.getElementById('parent_div').innerHTML = "";
}) ;
button.addEventListener("click", squares) ;

