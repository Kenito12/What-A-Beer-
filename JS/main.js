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
const randomBut = document.getElementById("randomBut");
const openMenu = document.getElementById("open-menu");


//Set display default for page 
// mainPage.style.display = "none";
OptionPage.style.display = "none";
RandomPage.style.display = "none";
WheelPage.style.display = "none";
openMenu.style.display = "none";


// Using JQUERY to handle page load with a delay because page is not heavy enough.
$(window).on("load",function(){
    $(".loader-wrapper").delay(1200).fadeToggle(300);
    // $(".loader-wrapper").hide();
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
    targets: '#mainPage', 
    delay: 1300,
    translateY : 300,
    // autoplay: false
  });

var chooseLoad = anime({
    targets: '#OptionPage', 
    translateY : 120,
    autoplay: false
  });

var rdmLoad = anime({
    targets: '.randomrap', 
    translateY : 100,
    autoplay: false
})




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

function Randomizer(){
    var xhttp = new XMLHttpRequest();//using AJAX to send a request to retrieve data from moves.json
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){  //check the state of moves.json
            var myObj = JSON.parse(this.responseText);//convert moves.json data into myObj Arrays
            var randomed = myObj[Math.floor(Math.random()*myObj.length)]; //radom one array out of Myobj
            

            var bImg = `<img src="${randomed.img}" alt="${randomed.title}" class="bimg">`

            var bDes = `<h1 class="beerTitle">${randomed.title}</h1>
            <h3 class="desCont"><span class="desHead">Brand:</span> ${randomed.brand}</h3>
            <h3 class="desCont"><span class="desHead">Type:</span> ${randomed.type}</h3>
            <h3 class="desCont"><span class="desHead">Alcohol:</span> ${randomed.alc}%</h3>
            <h3 class="desCont"><span class="desHead">Flavor:</span> ${randomed.flv}</h3>`

            var imgCanvas = document.getElementById("imgCanvas");//prepare to manipulate the dom
            var desCanvas = document.getElementById("desCanvas");//prepare to manipulate the dom
            imgCanvas.innerHTML = "";//clean the element 
            imgCanvas.innerHTML += bImg;//manipulate

            desCanvas.innerHTML = "";//clean the element 
            desCanvas.innerHTML += bDes;//manipulate
        }
    }
    xhttp.open("GET", "beer.json", true);
    xhttp.send();
}

randomBut.onclick = function(){
    Randomizer()
    console.log("working!!")
};
randomBut.onmouseup =rdmLoad.restart;

gtrdm.onclick = function(){
    OptionPage.style.display = "none";
    RandomPage.style.display = "block";
    openMenu.style.display = "block";
    Randomizer()
    console.log("working!!")
};
gtrdm.onmouseup =rdmLoad.play;


//----------------------------------------

//onclick event to go to Drinking game after button release play new animation
gtdg.onclick = function(){
    OptionPage.style.display = "none";
    WheelPage.style.display = "block";
    console.log("working!!")
};
gtdg.onmouseup = chooseLoad.play;
//----------------------------------------

// Checkbox filter fucntion

//checkbox label
const filterLight = document.getElementById("filterLight");
const filterStrong = document.getElementById("filterStrong");
const filterLowc = document.getElementById("filterLowc");

//checkbox
const lightCb = document.getElementById("lightCb");
const strongCb = document.getElementById("strongCb");
const lowcCb = document.getElementById("lowcCb")

//click on the label and check the custom checkbox
filterLight.onclick = function(){ 
    if(lightCb.checked){
        lightCb.checked = false;
    }
    else{
    lightCb.checked = true;
    strongCb.checked = false;
    lowcCb.checked = false;
    }
}

filterStrong.onclick = function(){   
    if(strongCb.checked){
        strongCb.checked = false;
    }
    else{
    lightCb.checked = false;
    strongCb.checked = true;
    lowcCb.checked = false;
    }
}

filterLowc.onclick = function(){
    if(lowcCb.checked){
        lowcCb.checked = false;
    }
    else{
    lightCb.checked = false;
    strongCb.checked = false;
    lowcCb.checked = true;
    }
}
//----------------------------------------

//Hamburger menu function
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("close-menu");


openMenu.onclick = function(){
    overlay.classList.add("show-menu");
}

closeMenu.onclick = function(){
    overlay.classList.remove("show-menu");
}
//----------------------------------------