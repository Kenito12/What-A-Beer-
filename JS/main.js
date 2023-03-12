//Pages
const homePage = document.getElementById("homePage");
const mainPage = document.getElementById("mainPage");
const OptionPage = document.getElementById("OptionPage");
const RandomPage = document.getElementById("RandomPage");
const WheelPage = document.getElementById("WheelPage");

// Buttons
const letgoBut = document.getElementById("letgoBut");
const gtrdm = document.getElementById("gtrdm");
const gtdg = document.getElementById("gtdg");


//Set display default for page 
mainPage.style.display = "none";
OptionPage.style.display = "none";
RandomPage.style.display = "block";
WheelPage.style.display = "none";


// Using JQUERY to handle page load with a delay because page is not heavy enough.
$(window).on("load",function(){
    // $(".loader-wrapper").delay(1200).fadeToggle(300);
    $(".loader-wrapper").hide();
});
//----------------------------------------


//bodymovin js to play Lottiefiles
const loadAnimation = document.getElementById("loadani")
const animItem = bodymovin.loadAnimation({
    wrapper: loadAnimation,
    animType: 'svg',
    loop: false,
    autoplay: true,
    path:'https://assets10.lottiefiles.com/packages/lf20_gB20zF.json'
});
//----------------------------------------

//Animejs animation Mainpage
var mainpageLoad = anime({
    targets: '.op', 
    delay: 1300,
    translateY : 300,
    autoplay: false
  });

var chooseLoad = anime({
    targets: '.op', 
    translateY : 120,
    autoplay: false
  });

// Set Delay on homepage element to change the index after 2 sec
setTimeout('homePage.style.zIndex = "1";', 2000);
//----------------------------------------


//onclick even for Lets Go button after release play new animation
letgoBut.onclick = function(){
    mainPage.style.display = "none";
    OptionPage.style.display = "block";
    console.log("working!!")
};
letgoBut.onmouseup = chooseLoad.play;
//----------------------------------------

//onclick event to go to Randomizer after button release play new animation
gtrdm.onclick = function(){
    OptionPage.style.display = "none";
    RandomPage.style.display = "block";
    console.log("working!!")
};
gtrdm.onmouseup = chooseLoad.play;
//----------------------------------------

//onclick event to go to Drinking game after button release play new animation
gtdg.onclick = function(){
    OptionPage.style.display = "none";
    WheelPage.style.display = "block";
    console.log("working!!")
};
gtdg.onmouseup = chooseLoad.play;
//----------------------------------------