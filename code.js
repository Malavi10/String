function lengthFunc(){
    let text = "HELLOWORLD"; 
    let part = text.length;
    document.getElementById('len').innerHTML = part;    
}


function slicebtnFunc(){
    let text = "Apple, Banana, Kiwi";
    let part = text.slice(7, 13);
    document.getElementById('slicebtn').innerHTML = part;    
}

function substringFunc(){
    let str = "Apple, Banana, Kiwi";
    let part = str.substring(7, 13);
    document.getElementById('substringbtn').innerHTML = part;    
}

function substrFunc(){
    let str = "Apple, Banana, Kiwi";
    let part = str.substr(7, 6);
    document.getElementById('substrbtn').innerHTML = part;    
}

function repFunc(){
    let str = "Apple, Banana, Kiwi";
    let part = str.replace("Banana","Orange");
    document.getElementById('repbtn').innerHTML = part;    
}

function repallFunc(){
    let str = "Apple, Banana, Kiwi, Banana";
    let part = str.replaceAll("Banana","Orange");
    document.getElementById('repallbtn').innerHTML = part;    
}

function ucFunc(){
    let str = "Apple, Banana, Kiwi";
    let part = str.toUpperCase();
    document.getElementById('ucbtn').innerHTML = part;
}

function lcFunc(){
    let str = "Apple, Banana, Kiwi";
    let part = str.toLowerCase();
    document.getElementById('lcbtn').innerHTML = part;
}