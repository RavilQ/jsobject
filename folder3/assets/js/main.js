function films(film, addres,info,raiting) {
    this.name = film;
    this.url = addres;
    this.info = info;
    this.raiting = raiting;
}




let film = new films ("Avatar","https://m.media-amazon.com/images/M/MV5BMWFmYmRiYzMtMTQ4YS00NjA5LTliYTgtMmM3OTc4OGY3MTFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg","Avatar (also marketed as James Cameron's Avatar) is a 2009 American[7][8] epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver. It is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system",'96%');
let kino = new films ("Hulk","https://fictionmachine.files.wordpress.com/2021/02/inchulk_poster.jpg","The Incredible Hulk is a 2008 American superhero film based on the Marvel Comics character the Hulk. Produced by Marvel Studios and distributed by Universal Pictures, it is the second film in the Marvel Cinematic Universe (MCU). It was directed by Louis Leterrier from a screenplay by Zak Penn, and stars Edward Norton as Bruce Banner alongside Liv Tyler, Tim Roth, Tim Blake Nelson, Ty Burrell, and William Hurt.","99%");
let kinoo = new films("Joker","https://i.pinimg.com/originals/99/79/c8/9979c8a33cb063de103ba46b8b3660e2.jpg","Joker is a 2019 American psychological thriller film directed by Todd Phillips, who also co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters, stars Joaquin Phoenix as the Joker and provides a possible origin story for the character. Set in 1981, it follows Arthur Fleck, a failed clown and aspiring stand-up comedian whose descent into insanity and nihilism inspires a violent countercultural revolution against the wealthy in a decaying Gotham City.","90%")
let kinooo = new films("Real Steel","https://m.media-amazon.com/images/I/51HICKUyjdL._AC_SY580_.jpg","Real Steel is a 2011 American science fiction sports drama film starring Hugh Jackman and Dakota Goyo and co-produced and directed by Shawn Levy for DreamWorks Pictures. The film is based on the short story Steel, written by Richard Matheson, which was originally published in the May 1956 edition of The Magazine of Fantasy & Science Fiction")

let arr = [film,kino,kinoo];
let box = document.getElementById("box");
createfilms();
function createfilms(params) {
    box.innerHTML = "";
    for (const films of arr) {
        box.innerHTML+=
        `<div class="col-md-4 kalon">
            <img class="w-100 hegght " src="${films.url}">
            <div class="indiv2 teest">
            <div class="hover color teest">
            <p>${films.info}</p>
            </div>
            </div>
              <div class="color teest">
                <h1>${films.name}</h1>
                <h3><i class="las la-star starr-style"></i>${films.raiting}</h3>
              </div>
          
 
         </div>
        
    
        
       `
         
    }

}

function create(){
    arr.push(new films(inputname.value,inputurl.value,inputinfo.value,inputraiting.value));
    createfilms();
}


const button = document.getElementById("color1");

button.addEventListener("click", () =>{
    
    document.body.style.backgroundImage="none";
    document.body.style.backgroundColor="#97BC62FF";

    
for (let index = 0; index < 50; index++) {
  var test = document.getElementsByClassName('teest'),
  style = test[index].style;
  style.color="#2C5F2D";
  style.backgroundColor="#97BC62FF";
}

})

const button2 = document.getElementById("color2");

button2.addEventListener("click", () =>{
    
    document.body.style.backgroundImage="none";
    document.body.style.backgroundColor="#0063B2FF";


    for (let index = 0; index < 50; index++) {
      var test = document.getElementsByClassName('teest'),
      style = test[index].style;
      style.color="#9CC3D5FF";
      style.backgroundColor="#0063B2FF";
    }
})

const button3 = document.getElementById("color3");

button3.addEventListener("click", () =>{
    
    document.body.style.backgroundImage="none";
    document.body.style.backgroundColor="#101820FF";


    for (let index = 0; index < 50; index++) {
      var test = document.getElementsByClassName('teest'),
      style = test[index].style;
      style.color="#FEE715FF";
      style.backgroundColor="#101820FF";
    }
})

const button4 = document.getElementById("color4");

button4.addEventListener("click", () =>{
    
    document.body.style.backgroundImage="none";
    document.body.style.backgroundColor="#755139FF";


    for (let index = 0; index < 50; index++) {
      var test = document.getElementsByClassName('teest'),
      style = test[index].style;
      style.color="#F2EDD7FF";
      style.backgroundColor="#755139FF";
    }
})

const button5 = document.getElementById("color5");

button5.addEventListener("click", () =>{
    
    document.body.style.backgroundImage="none";
    document.body.style.backgroundColor="#A2A2A1FF";


    for (let index = 0; index < 50; index++) {
      var test = document.getElementsByClassName('teest'),
      style = test[index].style;
      style.color="#F65058FF";
      style.backgroundColor="#A2A2A1FF";
    }
})


const submot = document.getElementById("imagee1");

submot.addEventListener("click", () =>{

  document.body.style.backgroundImage="url(https://wallpapercave.com/wp/cuQVTdt.jpg)";
  

  for (let index = 0; index < 50; index++) {
    
    test = document.getElementsByClassName('teest'),
    style=test[index].style;
    style.backgroundColor="rgba(0,0,0,0)";
    
  }
})


const submot2 = document.getElementById("imagee2");

submot2.addEventListener("click", () =>{

  document.body.style.backgroundImage="url(https://i.pinimg.com/originals/74/ad/c3/74adc3199c3fef8247ea0e558538bdd8.jpg)";
  

  for (let index = 0; index < 50; index++) {
    
    test = document.getElementsByClassName('teest'),
    style=test[index].style;
    style.backgroundColor="rgba(0,0,0,0)";
    
  }
})



const submot3 = document.getElementById("imagee3");

submot3.addEventListener("click", () =>{

  document.body.style.backgroundImage="url(https://img.freepik.com/premium-photo/abstract-background-random-black-cube-block-wave-pattern-3d-illustration-rendering_35887-1546.jpg?w=2000)";
  

  for (let index = 0; index < 50; index++) {
    
    test = document.getElementsByClassName('teest'),
    style=test[index].style;
    style.backgroundColor="rgba(0,0,0,0)";
    
  }
})


const submot4 = document.getElementById("imagee4");

submot4.addEventListener("click", () =>{

  document.body.style.backgroundImage="url(https://wallpapercave.com/wp/wp5871043.jpg)";

  for (let index = 0; index < 50; index++) {
    
    test = document.getElementsByClassName('teest'),
    style=test[index].style;
    style.backgroundColor="rgba(0,0,0,0)";
    
  }

})


const submot5 = document.getElementById("imagee5");

submot5.addEventListener("click", () =>{

  document.body.style.backgroundImage="url(https://images.hdqwalls.com/wallpapers/triangle-solid-black-gold-4k-wk.jpg)";
  
  for (let index = 0; index < 50; index++) {
    
    test = document.getElementsByClassName('teest'),
    style=test[index].style;
    style.backgroundColor="rgba(0,0,0,0)";
    
  }
  
})

