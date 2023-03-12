
// Using JQUERY to handle page load with a delay because page is not heavy enough.
$(window).on("load",function(){
    $(".loader-wrapper").delay(1200).fadeToggle(300);
    // $(".loader-wrapper").hide();
});

const homePage = document.getElementById("homePage");
const op = document.getElementById("opening");
const letgoBut = document.getElementById("letgoBut");


//bodymovin js to play Lottiefiles
const loadAnimation = document.getElementById("loadani")
const animItem = bodymovin.loadAnimation({
    wrapper: loadAnimation,
    animType: 'svg',
    loop: false,
    autoplay: true,
    path:'https://assets10.lottiefiles.com/packages/lf20_gB20zF.json'
});

//Animejs animation Mainpage

var animation = anime({
    targets: '.op', 
    delay: 1300,
    translateY : 300,
  });

var chooseAnime = anime({
    targets: '.op', 
    // delay: 100,
    translateY : 120,
    autoplay: false
  });

// Set Delay on homepage element to change the index after 3 sec
setTimeout('homePage.style.zIndex = "1";', 2000);

function Letgo (){



    var choose = `<h1 class="options">Choose your features!</h1>
    <div class="opWrapper">
        <div class="randomizer">
            <div class="wrapChild">
                <img class="iconImg" src="IMG/RandomizerIcon.png" alt="Radomizer_ICON">
                <h2 class="opTitle">Randomizer</h2>
            </div>
        </div>
        <div class="drinkingGame">
            <div class="wrapChild">
                <img class="iconImg" src="IMG/DrinkingGameIcon.png" alt="DrinkingGame_ICON">
                <h2 class="opTitle">Drinking Game</h2>
            </div>
        </div>
    </div>`
    op.innerHTML = ""//clean the element
    op.innerHTML += choose;
}


//onclick even for Lets Go button after release play new animation
letgoBut.onclick = function(){
    Letgo();
    console.log("working!!")
};

letgoBut.onmouseup = chooseAnime.play;
// ----------------------
