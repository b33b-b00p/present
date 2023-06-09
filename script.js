/* ********changing mwah! Bg animation******** */
let buttonBg = document.querySelector('#buttonBg');
let nextMwahOption = 'hollow';

function buttonBgChange()
{
    switch(nextMwahOption)
    {
        case 'hollow':
            buttonBg.style.backgroundImage = "url('./images/mwah\(hollow_bold\).png')";
            nextMwahOption = 'bold';
            break;
        case 'bold':
            buttonBg.style.backgroundImage = "url('./images/mwah\(combined\)\ bold.png')";
            nextMwahOption = 'hollow';
            break;
        default:
            alert("didn't work... T-T");
    }
}
let mwahInterval = setInterval(buttonBgChange, 800);

/* ********transition animations******** */
let playButton = document.querySelector("#buttonCircle");
let buttonScreen = document.querySelector("#buttonScreen");
let catScreen = document.querySelector("#catScreen");
let transitionScreen = document.querySelector("#transitionScreen");
let transitionBg = document.querySelector("#transitionBg");
let screenFilledWithHearts = document.querySelector("#screenFilledWithHearts");
let screenFilledWithHearts1 = document.querySelector("#screenFilledWithHearts1");
let screenFilledWithHearts2 = document.querySelector("#screenFilledWithHearts2");
let whiteBgForHearts = document.querySelector("#whiteBgForHearts");
let heartContainer = document.querySelector("#container");

function fadeAnimationTransitionFromHeartScreen()
{
    whiteBgForHearts.style.display = "block";
    whiteBgForHearts.style.animationName = "whiteTransitionFromHearts";
}

function playHeartAnimation()
{
    heartContainer.style.display = "block";
    setTimeout(fadeAnimationTransitionFromHeartScreen, 3000);
}

function fadeAnimationTransitionToCatScreen()
{
    transitionBg.style.backgroundColor = "rgba(255, 255, 255, 0)";
    console.log("helo");
}

function showWhiteTransition()
{
    setTimeout(fadeAnimationTransitionToCatScreen, 3000);
}

function showCatScreen()
{
    buttonScreen.style.display = "none";
    screenFilledWithHearts.style.display = "none"
    catScreen.style.display = "flex";
    showWhiteTransition();
}

function showHeartTransition()
{
    screenFilledWithHearts.style.display = "block";
    setTimeout(playHeartAnimation, 500);
}
function hideHeartTransition()
{
    screenFilledWithHearts.style.display = "none";
}

/* ********main function, execution******** */
playButton.addEventListener("click", () => {
    clearInterval(mwahInterval);
    showHeartTransition();
    setTimeout(showCatScreen, 5000);
});