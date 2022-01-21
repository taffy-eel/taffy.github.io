var f1="Did you know that shrimps have their heart in their head?";
var f2="A critter known for its slow nature, the snail, can sleep for three years.";
var f3="The fingerprints of an Australian marsupial, the koala, are so similar to humans that they have caused confusion at crime scenes.";
var f4="Elephants are the only animal that can't jump;";
var f5="If you wanted to for some reason, you could hypnotize a frog by placing it on its back and stroking its stomach.";


var i1="<img src='images/shrimp.jpg' alt='shrimp pic'>";
var i2="<img src='images/snail.jpg' alt='snail pic'>";
var i3="<img src='images/koala.jpg' alt='koala pic'>";
var i4="<img src='images/elephant.jpg' alt='elephant pic'>";
var i5="<img src='images/frog.jpg' alt='frog pic'>";


const facts = [f1, f2, f3, f4, f5];
const imagee = [i1, i2, i3, i4, i5]; 
const styleOptions = ["junglesoil.css", "elegant.css", "fun.css"]

document.querySelector('#menu').a.addEventListener("click", function(){replaceFact(0)});
document.querySelector('#menu').b.addEventListener("click", function(){replaceFact(1)});
document.querySelector('#menu').c.addEventListener("click", function(){replaceFact(2)});
document.querySelector('#menu').d.addEventListener("click", function(){replaceFact(3)});
document.querySelector('#menu').e.addEventListener("click", function(){replaceFact(4)});

document.querySelector('#themes').a.addEventListener("click", function(){switchStyle(0)});
document.querySelector('#themes').b.addEventListener("click", function(){switchStyle(1)});
document.querySelector('#themes').c.addEventListener("click", function(){switchStyle(2)});


document.querySelector('#display').innerHTML = "<p>Mind boggling facts will be shown HERE</p>";

function replaceFact(n){
	document.querySelector('#display').innerHTML = "<p>" + facts[n] + "</p>" + imagee[n];
}

function switchStyle(n){
	document.querySelector('#styles').setAttribute('href', styleOptions[n]);
}


