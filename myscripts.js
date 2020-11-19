document.getElementById("show").innerHTML = ("LEARN ALPHABETS");

var button = document.querySelectorAll(".myButton");
var len = button.length;

for (var i = 0; i < len; i++) {
  button[i].addEventListener("click",function(){
    var text = this.innerHTML;


      audioPlay(text);

    mationE(text);


  });

  document.addEventListener("keypress",function(event){
    var text= event.key;
    audioPlay(text);
    mationE(text);

  });

  function audioPlay(text){
    switch (text) {
      case "A":
            var audio = new Audio("sounds/a.mp3");
            audio.play();
            break;
      case "B":
            var audio = new Audio("sounds/b.mp3");
            audio.play();
            break;
      case "C":
            var audio = new Audio("sounds/c.mp3");
            audio.play();

            break;
      case "D":
            var audio = new Audio("sounds/d.mp3");
            audio.play();
            break;
      case "E":
            var audio = new Audio("sounds/e.mp3");
            audio.play();
            break;

      case "F":
            var audio = new Audio("sounds/f.mp3");
            audio.play();

            break;

      case "G":
            var audio = new Audio("sounds/g.mp3");
            audio.play();
            break;

      case "H":
            var audio = new Audio("sounds/h.mp3");
            audio.play();
            break;

      case "I":
            var audio = new Audio("sounds/i.mp3");
            audio.play();
            break;

      case "J":
            var audio = new Audio("sounds/j.mp3");
            audio.play();
            break;

      case "K":
            var audio = new Audio("sounds/k.mp3");
            audio.play();
            break;

      case "L":
            var audio = new Audio("sounds/l.mp3");
            audio.play();
            break;

      case "M":
            var audio = new Audio("sounds/m.mp3");
            audio.play();
            break;

      case "N":
            var audio = new Audio("sounds/n.mp3");
            audio.play();
            break;

      case "O":
            var audio = new Audio("sounds/o.mp3");
            audio.play();
            break;

      case "P":
            var audio = new Audio("sounds/p.mp3");
            audio.play();
            break;

      case "Q":
            var audio = new Audio("sounds/q.mp3");
            audio.play();
            break;

      case "R":
            var audio = new Audio("sounds/r.mp3");
            audio.play();
            break;

        case "S":
            var audio = new Audio("sounds/s.mp3");
            audio.play();
            break;


      case "T":
            var audio = new Audio("sounds/t.mp3");
            audio.play();
            break;

      case "U":
            var audio = new Audio("sounds/u.mp3");
            audio.play();
            break;

      case "V":
            var audio = new Audio("sounds/v.mp3");
            audio.play();
            break;

      case "W":
            var audio = new Audio("sounds/w.mp3");
            audio.play();
            break;
      case "X":
            var audio = new Audio("sounds/x.mp3");
            audio.play();
            break;
      case "Y":
            var audio = new Audio("sounds/y.mp3");
            audio.play();
            break;

      case "Z":
            var audio = new Audio("sounds/z.mp3");
            audio.play();
            break;


    }
  }

  function mationE(text){
      var z =  document.querySelector("."+text);
      z.classList.add("anim");

      setTimeout(function(){
          z.classList.remove("anim");
      },300);
  }

}
