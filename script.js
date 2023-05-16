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