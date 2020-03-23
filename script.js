var word1Doc = document.getElementById("word-1");
var word2Doc = document.getElementById("word-2");

function fun(){
    if(confirm("Are you sure Michael? This doesn't seem like you.")){
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }
    
}
function gen(){
    var ticks = 20;
    var it = setInterval(()=>{
        if(ticks <= 0){
            clearInterval(it);
  
        }

        ticks--;
        setRandom();
        
    }, 100)
}

function setRandom(){
    var maxIdx1 = taser.length - 1;
    var word1 = taser[getRandomInt(maxIdx1)];
    

    var maxIdx2 = words.length - 1;
    var word2 = words[getRandomInt(maxIdx2)];

    word1Doc.innerText = word1;
    word2Doc.innerText = word2;

    
}



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  