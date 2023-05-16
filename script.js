let buttonBg = document.querySelector('#buttonBg');
// let mwahHollowOption = 'url(./images/mwah\(hollow_bold\).png)';
let nextMwahOption = 'hollow';
// let mwahBoldOption = 'url(./images/mwah\(combined\)\ bold.png)'

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

let playButton = document.querySelector("#buttonCircle");
let buttonScreen = document.querySelector("#buttonScreen");
let catScreen = document.querySelector("#catScreen");
let transitionScreen = document.querySelector("#transitionScreen");
let transitionBg = document.querySelector("#transitionBg");

function fadeAnimationTransition()
{
    transitionBg.style.backgroundColor = "rgba(255, 255, 255, 0)";
    console.log("helo");
}

function showWhiteTransition()
{
    setTimeout(fadeAnimationTransition, 3000);
}

playButton.addEventListener("click", () => {
    clearInterval(mwahInterval);
    buttonScreen.style.display = "none";
    catScreen.style.display = "flex";
    showWhiteTransition();
});