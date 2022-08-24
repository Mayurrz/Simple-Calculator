let total = 0
let input = 0

document.querySelector("#one").addEventListener('click', showOne);
document.querySelector("#two").addEventListener('click', showTwo);
document.querySelector("#three").addEventListener('click', showThree);
document.querySelector("#four").addEventListener('click', showFour);
document.querySelector("#five").addEventListener('click', showFive);
document.querySelector("#six").addEventListener('click', showSix);
document.querySelector("#seven").addEventListener('click', showSeven);
document.querySelector("#eight").addEventListener('click', showEight);
document.querySelector("#nine").addEventListener('click', showNine);
document.querySelector("#zero").addEventListener('click', showZero);
document.querySelector("#add").addEventListener('click', add);
document.querySelector("#sub").addEventListener('click', sub);
document.querySelector("#div").addEventListener('click', div);
document.querySelector("#multiply").addEventListener('click', multiply);
document.querySelector("#clear").addEventListener('click', clearAll);
document.querySelector("#del").addEventListener('click', del);
document.querySelector("#raise").addEventListener('click', showRaise);
document.querySelector("#result").addEventListener("click", equalTo);
document.querySelector("#light").addEventListener("click", light);
document.querySelector("#dark").addEventListener("click", dark);

function showOne() {
    input = 1
    if (document.querySelector("#equator").innerText == "") {
        document.querySelector("#question").innerText += input;
    } else {
        document.querySelector("#question2").innerText += input;
    }
    document.querySelector("#one").style.backgroundColor = "white";
    window.setTimeout(() => {
        document.querySelector('#one').style.backgroundColor = "rgba(27, 29, 46, 0.986)"
    }, 50);
}

function showTwo() {
    input = 2
    if (document.querySelector("#equator").innerText == "") {
        document.querySelector("#question").innerText += input;
    } else {
        document.querySelector("#question2").innerText += input;
    }
    document.querySelector("#two").style.backgroundColor = "white";
    window.setTimeout(() => {
        document.querySelector('#two').style.backgroundColor = "rgba(27, 29, 46, 0.986)"
    }, 50);
}

function showThree() {
    input = 3
    if (document.querySelector("#equator").innerText == "") {
        document.querySelector("#question").innerText += input;
    } else {
        document.querySelector("#question2").innerText += input;
    }
    document.querySelector("#three").style.backgroundColor = "white";
    window.setTimeout(() => {
        document.querySelector('#three').style.backgroundColor = "rgba(27, 29, 46, 0.986)"
    }, 50);
}

function showFour() {
    input = 4
    if (document.querySelector("#equator").innerText == "") {
        document.querySelector("#question").innerText += input;
    } else {
        document.querySelector("#question2").innerText += input;
    }
    document.querySelector("#four").style.backgroundColor = "white";
    window.setTimeout(() => {
        document.querySelector('#four').style.backgroundColor = "rgba(27, 29, 46, 0.986)"
    }, 50);
}

function showFive() {
    input = 5
    if (document.querySelector("#equator").innerText == "") {
        document.querySelector("#question").innerText += input;
    } else {
        document.querySelector("#question2").innerText += input;
    }
    document.querySelector("#five").style.backgroundColor = "white";
    window.setTimeout(() => {
        document.querySelector('#five').style.backgroundColor = "rgba(27, 29, 46, 0.986)"
    }, 50);
}

function showSix() {
    input = 6
    if (document.querySelector("#equator").innerText == "") {
        document.querySelector("#question").innerText += input;
    } else {
        document.querySelector("#question2").innerText += input;
    }
    document.querySelector("#six").style.backgroundColor = "white";
    window.setTimeout(() => {
        document.querySelector('#six').style.backgroundColor = "rgba(27, 29, 46, 0.986)"
    }, 50);
}

function showSeven() {
    input = 7
    if (document.querySelector("#equator").innerText == "") {
        document.querySelector("#question").innerText += input;
    } else {
        document.querySelector("#question2").innerText += input;
    }
    document.querySelector("#seven").style.backgroundColor = "white";
    window.setTimeout(() => {
        document.querySelector('#seven').style.backgroundColor = "rgba(27, 29, 46, 0.986)"
    }, 50);
}

function showEight() {
    input = 8
    if (document.querySelector("#equator").innerText == "") {
        document.querySelector("#question").innerText += input;
    } else {
        document.querySelector("#question2").innerText += input;
    }
    document.querySelector("#eight").style.backgroundColor = "white";
    window.setTimeout(() => {
        document.querySelector('#eight').style.backgroundColor = "rgba(27, 29, 46, 0.986)"
    }, 50);
}

function showNine() {
    input = 9
    if (document.querySelector("#equator").innerText == "") {
        document.querySelector("#question").innerText += input;
    } else {
        document.querySelector("#question2").innerText += input;
    }
    document.querySelector("#nine").style.backgroundColor = "white";
    window.setTimeout(() => {
        document.querySelector('#nine').style.backgroundColor = "rgba(27, 29, 46, 0.986)"
    }, 50);
}

function showZero() {
    input = 0
    if (document.querySelector("#equator").innerText == "") {
        document.querySelector("#question").innerText += input;
    } else {
        document.querySelector("#question2").innerText += input;
    }
    document.querySelector("#zero").style.backgroundColor = "white";
    window.setTimeout(() => {
        document.querySelector('#zero').style.backgroundColor = "rgba(27, 29, 46, 0.986)"
    }, 50);
}

function add() {
  document.querySelector("#equator").innerText = '+';
    document.querySelector("#add").style.backgroundColor = "rgba(27, 29, 46, 0.986)";
    window.setTimeout(() => {
        document.querySelector('#add').style.backgroundColor = "rgb(0, 146, 214)"
    }, 50);
}

function sub() {
  document.querySelector("#equator").innerText = '-';
    document.querySelector("#sub").style.backgroundColor = "rgba(27, 29, 46, 0.986)";
    window.setTimeout(() => {
        document.querySelector('#sub').style.backgroundColor = "rgb(0, 146, 214)"
    }, 50);
}

function div() {
  document.querySelector("#equator").innerText = '/';
    document.querySelector("#div").style.backgroundColor = "rgba(27, 29, 46, 0.986)";
    window.setTimeout(() => {
        document.querySelector('#div').style.backgroundColor = "rgb(0, 146, 214)"
    }, 50);
}

function multiply() {
  document.querySelector("#equator").innerText = '*';
   document.querySelector("#multiply").style.backgroundColor = "rgba(27, 29, 46, 0.986)";
    window.setTimeout(() => {
        document.querySelector('#multiply').style.backgroundColor = "rgb(0, 146, 214)"
    }, 50);
}

function clearAll() {
    document.querySelector('#question').innerText = ""
    document.querySelector('#question2').innerText = ""
    document.querySelector('#answer').innerText = ""
    document.querySelector('#equator').innerText = ""
    document.querySelector("#clear").style.backgroundColor = "rgba(116, 26, 26, 0.884)";
    window.setTimeout(() => {
        document.querySelector('#clear').style.backgroundColor = "rgba(221, 58, 58, 0.884)"
    }, 50);
}
function del() {
    let text = (document.querySelector("#question").innerText).toString();
    let text2 = (document.querySelector("#question2").innerText).toString();
  if (document.querySelector("#equator").innerText == "") {
    document.querySelector("#question").innerText = text.substring(0, [text.length - 1])
  } else {
    document.querySelector("#question2").innerText = text2.substring(0, [text2.length - 1]);
    }
    document.querySelector("#del").style.backgroundColor = "rgba(27, 29, 46, 0.986)";
    window.setTimeout(() => {
        document.querySelector('#del').style.backgroundColor = "rgb(0, 146, 214)"
    }, 50);
}

function showRaise() {
    document.querySelector("#equator").innerText = '^'
    document.querySelector("#raise").style.backgroundColor = "rgba(27, 29, 46, 0.986)";
    window.setTimeout(() => {
        document.querySelector('#raise').style.backgroundColor = "rgb(0, 146, 214)"
    }, 50);
}

function equalTo() {
    const input1 = Number.parseInt(document.querySelector("#question").innerText, 10)
    const input2 = Number.parseInt(document.querySelector("#question2").innerText, 10)
    if (document.querySelector("#equator").innerText == "*") {
      total = input1 * input2;
      document.querySelector("#answer").innerText = total;
    } else if (document.querySelector("#equator").innerText == "+") {
      total = input1 + input2;
      document.querySelector("#answer").innerText = total;
    } else if (document.querySelector("#equator").innerText == "-") {
      total = input1 - input2;
      document.querySelector("#answer").innerText = total;
    } else if (document.querySelector("#equator").innerText == "/") {
      total = input1 / input2;
      document.querySelector("#answer").innerText = total;
    } else if (document.querySelector("#equator").innerText == "^") {
      total = input1 ** input2;
      document.querySelector("#answer").innerText = total;
    }
    document.querySelector("#result").style.backgroundColor = "rgba(27, 29, 46, 0.986)";
    window.setTimeout(() => {
        document.querySelector('#result').style.backgroundColor = "rgb(0, 146, 214)"
    }, 50);
}

// function light() {
//     document.body.classList.toggle("light")
// }

