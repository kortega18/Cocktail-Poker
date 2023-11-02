let button_name;
let color_choice;
let disableButton;



let kassie_button = document.getElementById('kassies-button');
kassie_button.onclick = function() {
  button_name = 'kassie';
}

let yessenia_button = document.getElementById('yessenias-button');
yessenia_button.onclick = function() {
  button_name = 'yessenia';
}

let almasa_button = document.getElementById('almasas-button');
almasa_button.onclick = function() {
  button_name = 'almasa';
}

let amanda_button = document.getElementById('amandas-button');
amanda_button.onclick = function() {
  button_name = 'amanda';
}

let kate_button = document.getElementById('kates-button');
kate_button.onclick = function() {
  button_name = 'kate';
}

let kimberly_button = document.getElementById('kimberlys-button');
kimberly_button.onclick = function() {
  button_name = 'kimberly';
}

// let mariana_button = document.getElementById('marianas-button');
// mariana_button.onclick = function() {
//   button_name = 'mariana';
// }

let yuri_button = document.getElementById('yuris-button');
yuri_button.onclick = function() {
  button_name = 'yuri';
}

let lily_button = document.getElementById('lilys-button');
lily_button.onclick = function() {
  button_name = 'lily';
}




let black_CT = document.getElementById("blackCT-button");
black_CT.onclick = function() {
  color_choice = 'Black Cocktail';
  disableButton = 'div1';
}

let white_CT = document.getElementById("whiteCT-button");
white_CT.onclick = function() {
  color_choice = 'White Cocktail';
  disableButton = 'div2';
}

let pink_CT = document.getElementById("pinkCT-button");
pink_CT.onclick = function() {
  color_choice = 'Pink Cocktail';
  disableButton = 'div3';
}

let red_CT = document.getElementById("redCT-button");
red_CT.onclick = function() {
  color_choice = 'Red Cocktail';
  disableButton = 'div4';
}

let orange_CT = document.getElementById("orangeCT-button");
orange_CT.onclick = function() {
  color_choice = 'Orange Cocktail';
  disableButton = 'div5';
}

let yellow_CT = document.getElementById("yellowCT-button");
yellow_CT.onclick = function() {
  color_choice = 'Yellow Cocktail';
  disableButton = 'div6';
}

let green_CT = document.getElementById("greenCT-button");
green_CT.onclick = function() {
  color_choice = 'Green Cocktail';
  disableButton = 'div7';
}

let blue_CT = document.getElementById("blueCT-button");
blue_CT.onclick = function() {
  color_choice = 'Blue Cocktail';
  disableButton = 'div8';
}

let purple_CT = document.getElementById("purpleCT-button");
purple_CT.onclick = function() {
  color_choice = 'Purple Cocktail';
  disableButton = 'div9';
}




let submit_button = document.getElementById('submit-button');
submit_button.onclick = function() {
    var drink_name = document.getElementById('text-area-drink').value;
    var thought = document.getElementById('text-area-thought').value;

    var img_location = "img/bartenders/" + button_name + ".jpg";
    var span_heading = drink_name + ' - ' + color_choice;

    var img_to_change = button_name + '-img';
    var name_to_change = button_name + '-name';
    var span_to_change = button_name + '-span';
    var p_to_change = button_name + '-p';

    console.log(drink_name);
    console.log(thought);
    console.log(span_heading);
    console.log(color_choice);
    console.log(button_name);

    localStorage.setItem(img_to_change, img_location);
    localStorage.setItem(name_to_change, button_name);
    localStorage.setItem(span_to_change, span_heading);
    localStorage.setItem(p_to_change, thought);

    window.location.href = "index.html";
}