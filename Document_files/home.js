function ageInDays() {
    $(`.ageInDays`).on(`click`, function() {
        const message = prompt(`what year were you born?`);
        const days = message * 365;
        $(`#flex-box-result`).append(`you are ${days} days old`);
    })
    $(`.reset`).on(`click`, function() {
        $(`#flex-box-result`).remove();
    })
}

function catGenerator() {
    $(`.generateCat`).on(`click`, function() {
        // const imageSrc = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
        const div = $(`<div>`);
        const image = $(`<img>`);
        div.append(image).addClass(`imageBox`);
        image.attr(`src`,`http://thecatapi.com/api/images/get?format=src&type=gif&size=small`);
        $(`#flex-cat-gen`).append(div);
    })
}

// function generateCat() {
//     const div = document.createElement(`div`);
//     const image = document.createElement(`img`);
//     image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
//     div.className = `imageBox`;
//     document.getElementById(`flex-cat-gen`).appendChild(div).appendChild(image);
// }



$(function() {
    ageInDays();
    catGenerator();
});

















// function ageInDays() {
//     const birthYear = prompt(`what year were you born?`);
//     let ageInDayss = (2019 - birthYear) * 365;
//     let h1 = document.createElement(`h1`);
//     let days = document.createTextNode(`you are ${ageInDayss} years old`);
//     h1.appendChild(days);
//     document.getElementById(`flex-box-result`).appendChild(h1);
//     h1.setAttribute(`id`, `reset`);
// }
// function reset () {
//     document.getElementById(`reset`).remove();
// }

// //cat generator

// function generateCat() {
//     const div = document.createElement(`div`);
//     const image = document.createElement(`img`);
//     image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
//     div.className = `imageBox`;
//     document.getElementById(`flex-cat-gen`).appendChild(div).appendChild(image);
// }


// //rps

// function rpsGame(yourChoice, botChoice) {
//     const humanChoice = yourChoice.id;
//     const computerChoice = botPick(random());
//     const result = decideWinner(humanChoice, computerChoice);
//     console.log(result);
//     const message = finalMessage(result);
//     console.log(message);
//     rpsFrontend(humanChoice, computerChoice, message);
// }

// function random() {
//     return Math.floor(Math.random() * 3);
// }

// function botPick(num) {
//     return [`rock`, `paper`, `scissors`][num]
// }

// function decideWinner(yourChoice, botChoice) {
//     const rpsDatabase = {
//         rock: {
//             scissors: 2,
//             rock: 1,
//             paper: 0
//         },
//         paper: {
//             rock: 2,
//             paper: 1,
//             scissors: 0
//         },
//         scissors: {
//             paper: 2,
//             scissors: 1,
//             rock: 0
//         }
//     }

//     const yourScore = rpsDatabase[yourChoice][botChoice];
//     const botScore = rpsDatabase[botChoice][yourChoice];

//     return [yourScore, botScore];
// }

// function finalMessage([yourScore]) {
//     if(yourScore === 0) {
//         return {message:`you lost`, color:`red`}
//     } else if(yourScore === 1) {
//         return {message: `you tied`, color: `yellow`}
//     } else {
//         return {message: `you won`, color: `blue`}
//     }
// }

// function rpsFrontend(yourPick, botPick, finalMessage) {
//     let imageDatabase = {
//         rock: document.getElementById(`rock`).src,
//         paper: document.getElementById(`paper`).src,
//         scissors: document.getElementById(`scissors`).src
//     }

//     document.getElementById(`rock`).remove();
//     document.getElementById(`paper`).remove();
//     document.getElementById(`scissors`).remove();

//     const humanDiv = document.createElement(`div`);
//     const botDiv = document.createElement(`div`);
//     const messageDiv = document.createElement(`div`);

//     humanDiv.innerHTML = "<img src='" + imageDatabase[yourPick] + "' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)';>"
//     botDiv.innerHTML = "<img src='" + imageDatabase[botPick] + "' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)';>";
//     messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"

//     humanDiv.className = `imageBox`;
//     botDiv.className = `imageBox`;

//     document.getElementById(`flex-rps`).appendChild(humanDiv);
//     document.getElementById(`flex-rps`).appendChild(messageDiv);
//     document.getElementById(`flex-rps`).appendChild(botDiv);
// }