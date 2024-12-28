
let count1=0;
let count2=0;

const a = prompt("Player 1 name:");
const b = prompt("player 2 name:");

c=a.toUpperCase();
d=b.toUpperCase();

document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
document.querySelector('.p2').innerHTML=`${d}: ${count2}`;





function changeColor(div){
    div.classList.toggle('clicked');
}

function resetColor(){
    document.querySelectorAll('.line2').forEach(div => {
        div.classList.remove('clicked');
    });
    document.querySelectorAll('.line1').forEach(div => {
        div.classList.remove('clicked');
    });
    document.querySelectorAll('.line2last').forEach(div => {
        div.classList.remove('clicked');
    });
    document.querySelector('.p1').innerHTML=`${c}: 0`;
    document.querySelector('.p2').innerHTML=`${d}: 0`;
    

};


let square1Clicked=0;
let square2Clicked=0;
let square3Clicked=0;
let square4Clicked=0;
let square5Clicked=0;
let square6Clicked=0;
let square7Clicked=0;
let square8Clicked=0;
let square9Clicked=0;
let square10Clicked=0;
let square11Clicked=0;
let square12Clicked=0;
let square13Clicked=0;
let square14Clicked=0;
let square15Clicked=0;
let square16Clicked=0;
let square17Clicked=0;
let square18Clicked=0;
let square19Clicked=0;
let square20Clicked=0;
let square21Clicked=0;
let square22Clicked=0;
let square23Clicked=0;
let square24Clicked=0;
let square25Clicked=0;
let square26Clicked=0;
let square27Clicked=0;
let square28Clicked=0;
let square29Clicked=0;
let square30Clicked=0;
let square31Clicked=0;
let square32Clicked=0;
let square33Clicked=0;
let square34Clicked=0;
let square35Clicked=0;
let square36Clicked=0;
let square37Clicked=0;
let square38Clicked=0;
let square39Clicked=0;
let square40Clicked=0;
let square41Clicked=0;
let square42Clicked=0;
let square43Clicked=0;
let square44Clicked=0;
let square45Clicked=0;
let square46Clicked=0;
let square47Clicked=0;
let square48Clicked=0;
let square49Clicked=0;
let square50Clicked=0;
let square51Clicked=0;
let square52Clicked=0;
let square53Clicked=0;
let square54Clicked=0;
let square55Clicked=0;
let square56Clicked=0;
let square57Clicked=0;
let square58Clicked=0;
let square59Clicked=0;
let square60Clicked=0;
let square61Clicked=0;
let square62Clicked=0;
let square63Clicked=0;
let square64Clicked=0;




let square1Completed=false;
let square2Completed=false;
let square3Completed=false;
let square4Completed=false;
let square5Completed=false;
let square6Completed=false;
let square7Completed=false;
let square8Completed=false;
let square9Completed=false;
let square10Completed=false;
let square11Completed=false;
let square12Completed=false;
let square13Completed=false;
let square14Completed=false;
let square15Completed=false;
let square16Completed=false;
let square17Completed=false;
let square18Completed=false;
let square19Completed=false;
let square20Completed=false;
let square21Completed=false;
let square22Completed=false;
let square23Completed=false;
let square24Completed=false;
let square25Completed=false;
let square26Completed=false;
let square27Completed=false;
let square28Completed=false;
let square29Completed=false;
let square30Completed=false;
let square31Completed=false;
let square32Completed=false;
let square33Completed=false;
let square34Completed=false;
let square35Completed=false;
let square36Completed=false;
let square37Completed=false;
let square38Completed=false;
let square39Completed=false;
let square40Completed=false;
let square41Completed=false;
let square42Completed=false;
let square43Completed=false;
let square44Completed=false;
let square45Completed=false;
let square46Completed=false;
let square47Completed=false;
let square48Completed=false;
let square49Completed=false;
let square50Completed=false;
let square51Completed=false;
let square52Completed=false;
let square53Completed=false;
let square54Completed=false;
let square55Completed=false;
let square56Completed=false;
let square57Completed=false;
let square58Completed=false;
let square59Completed=false;
let square60Completed=false;
let square61Completed=false;
let square62Completed=false;
let square63Completed=false;
let square64Completed=false;





const totalSquare1Sides=4;
const totalSquare2Sides=4;
const totalSquare3Sides=4;
const totalSquare4Sides=4;
const totalSquare5Sides=4;
const totalSquare6Sides=4;
const totalSquare7Sides=4;
const totalSquare8Sides=4;
const totalSquare9Sides=4;
const totalSquare10Sides=4;
const totalSquare11Sides=4;
const totalSquare12Sides=4;
const totalSquare13Sides=4;
const totalSquare14Sides=4;
const totalSquare15Sides=4;
const totalSquare16Sides=4;
const totalSquare17Sides=4;
const totalSquare18Sides=4;
const totalSquare19Sides=4;
const totalSquare20Sides=4;
const totalSquare21Sides=4;
const totalSquare22Sides=4;
const totalSquare23Sides=4;
const totalSquare24Sides=4;
const totalSquare25Sides=4;
const totalSquare26Sides=4;
const totalSquare27Sides=4;
const totalSquare28Sides=4;
const totalSquare29Sides=4;
const totalSquare30Sides=4;
const totalSquare31Sides=4;
const totalSquare32Sides=4;
const totalSquare33Sides=4;
const totalSquare34Sides=4;
const totalSquare35Sides=4;
const totalSquare36Sides=4;
const totalSquare37Sides=4;
const totalSquare38Sides=4;
const totalSquare39Sides=4;
const totalSquare40Sides=4;
const totalSquare41Sides=4;
const totalSquare42Sides=4;
const totalSquare43Sides=4;
const totalSquare44Sides=4;
const totalSquare45Sides=4;
const totalSquare46Sides=4;
const totalSquare47Sides=4;
const totalSquare48Sides=4;
const totalSquare49Sides=4;
const totalSquare50Sides=4;
const totalSquare51Sides=4;
const totalSquare52Sides=4;
const totalSquare53Sides=4;
const totalSquare54Sides=4;
const totalSquare55Sides=4;
const totalSquare56Sides=4;
const totalSquare57Sides=4;
const totalSquare58Sides=4;
const totalSquare59Sides=4;
const totalSquare60Sides=4;
const totalSquare61Sides=4;
const totalSquare62Sides=4;
const totalSquare63Sides=4;
const totalSquare64Sides=4;


function checkSquareCompletion() {
    if (!square1Completed && square1Clicked === totalSquare1Sides) {
        square1Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square2Completed && square2Clicked === totalSquare2Sides) {
        square2Completed = true;
        const a2 = prompt("Who completed the BOX?")
        if (a2.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a2.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square3Completed && square3Clicked === totalSquare3Sides) {
        square3Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square4Completed && square4Clicked === totalSquare4Sides) {
        square4Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square5Completed && square5Clicked === totalSquare5Sides) {
        square5Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square6Completed && square6Clicked === totalSquare6Sides) {
        square6Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square7Completed && square7Clicked === totalSquare7Sides) {
        square7Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square8Completed && square8Clicked === totalSquare8Sides) {
        square8Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square9Completed && square9Clicked === totalSquare9Sides) {
        square9Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square10Completed && square10Clicked === totalSquare10Sides) {
        square10Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square11Completed && square11Clicked === totalSquare11Sides) {
        square11Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square12Completed && square12Clicked === totalSquare12Sides) {
        square12Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square13Completed && square13Clicked === totalSquare13Sides) {
        square13Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square14Completed && square14Clicked === totalSquare14Sides) {
        square14Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square15Completed && square15Clicked === totalSquare15Sides) {
        square15Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square16Completed && square16Clicked === totalSquare16Sides) {
        square16Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square17Completed && square17Clicked === totalSquare17Sides) {
        square17Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square18Completed && square18Clicked === totalSquare18Sides) {
        square18Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square19Completed && square19Clicked === totalSquare19Sides) {
        square19Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square20Completed && square20Clicked === totalSquare20Sides) {
        square20Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square21Completed && square21Clicked === totalSquare21Sides) {
        square21Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square22Completed && square22Clicked === totalSquare22Sides) {
        square22Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square23Completed && square23Clicked === totalSquare23Sides) {
        square23Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square24Completed && square24Clicked === totalSquare24Sides) {
        square24Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square25Completed && square25Clicked === totalSquare25Sides) {
        square25Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square26Completed && square26Clicked === totalSquare26Sides) {
        square26Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square27Completed && square27Clicked === totalSquare27Sides) {
        square27Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square28Completed && square28Clicked === totalSquare28Sides) {
        square28Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square29Completed && square29Clicked === totalSquare29Sides) {
        square29Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square30Completed && square30Clicked === totalSquare30Sides) {
        square30Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square31Completed && square31Clicked === totalSquare31Sides) {
        square31Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square32Completed && square32Clicked === totalSquare32Sides) {
        square32Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square33Completed && square33Clicked === totalSquare33Sides) {
        square33Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square34Completed && square34Clicked === totalSquare34Sides) {
        square34Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square35Completed && square35Clicked === totalSquare35Sides) {
        square35Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square36Completed && square36Clicked === totalSquare36Sides) {
        square36Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square37Completed && square37Clicked === totalSquare37Sides) {
        square37Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square38Completed && square38Clicked === totalSquare38Sides) {
        square38Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square39Completed && square39Clicked === totalSquare39Sides) {
        square39Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square40Completed && square40Clicked === totalSquare40Sides) {
        square40Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square41Completed && square41Clicked === totalSquare41Sides) {
        square41Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square42Completed && square42Clicked === totalSquare42Sides) {
        square42Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square43Completed && square43Clicked === totalSquare43Sides) {
        square43Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square44Completed && square44Clicked === totalSquare44Sides) {
        square44Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square45Completed && square45Clicked === totalSquare45Sides) {
        square45Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square46Completed && square46Clicked === totalSquare46Sides) {
        square46Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square47Completed && square47Clicked === totalSquare47Sides) {
        square47Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square48Completed && square48Clicked === totalSquare48Sides) {
        square48Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square49Completed && square49Clicked === totalSquare49Sides) {
        square49Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square50Completed && square50Clicked === totalSquare50Sides) {
        square50Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square51Completed && square52Clicked === totalSquare52Sides) {
        square52Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square53Completed && square53Clicked === totalSquare53Sides) {
        square53Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square54Completed && square54Clicked === totalSquare54Sides) {
        square54Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square55Completed && square55Clicked === totalSquare55Sides) {
        square55Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square56Completed && square56Clicked === totalSquare56Sides) {
        square56Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square57Completed && square57Clicked === totalSquare57Sides) {
        square57Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square58Completed && square58Clicked === totalSquare58Sides) {
        square58Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square59Completed && square59Clicked === totalSquare59Sides) {
        square59Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square60Completed && square60Clicked === totalSquare60Sides) {
        square60Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square61Completed && square61Clicked === totalSquare61Sides) {
        square61Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square62Completed && square62Clicked === totalSquare62Sides) {
        square62Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };
    if (!square63Completed && square63Clicked === totalSquare63Sides) {
        square63Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };
    };
    if (!square64Completed && square64Clicked === totalSquare64Sides) {
        square64Completed = true;
        const a1 = prompt("Who completed the BOX?")
        if (a1.toUpperCase() === c){
            count1++;
            document.querySelector('.p1').innerHTML=`${c}: ${count1}`;
        }
        if (a1.toUpperCase() === d){
            count2++;
            document.querySelector('.p2').innerHTML=`${d}: ${count2}`;
        };

    };

};



function handleClick(event) {
    const div = event.target;
    if (div.id.includes('t1') || div.id.includes('r1') || div.id.includes('b1') || div.id.includes('l1')) {
        square1Clicked++;
    }
    if (div.id.includes('t2') || div.id.includes('r2') || div.id.includes('b2') || div.id.includes('r1') ) {
        square2Clicked++;
    }
    if (div.id.includes('t3') || div.id.includes('r3') || div.id.includes('b3') || div.id.includes('r2')) {
        square3Clicked++;
    }
    if (div.id.includes('t4') || div.id.includes('r4') || div.id.includes('b4') || div.id.includes('r3') ) {
        square4Clicked++;
    }
    if (div.id.includes('t5') || div.id.includes('r5') || div.id.includes('b5') || div.id.includes('r4')) {
        square5Clicked++;
    }
    if (div.id.includes('t6') || div.id.includes('r6') || div.id.includes('b6') || div.id.includes('r5') ) {
        square6Clicked++;
    }
    if (div.id.includes('t7') || div.id.includes('r7') || div.id.includes('b7') || div.id.includes('r6')) {
        square7Clicked++;
    }
    if (div.id.includes('t8') || div.id.includes('r8') || div.id.includes('b8') || div.id.includes('r7') ) {
        square8Clicked++;
    }
    if (div.id.includes('b1') || div.id.includes('c9') || div.id.includes('d9') || div.id.includes('l9')) {
        square9Clicked++;
    }
    if (div.id.includes('b2') || div.id.includes('c10') || div.id.includes('d10') || div.id.includes('c9')) {
        square10Clicked++;
    }
    if (div.id.includes('b3') || div.id.includes('c11') || div.id.includes('d11') || div.id.includes('c10')) {
        square11Clicked++;
    }
    if (div.id.includes('b4') || div.id.includes('c12') || div.id.includes('d12') || div.id.includes('c11') ) {
        square12Clicked++;
    }
    if (div.id.includes('b5') || div.id.includes('c13') || div.id.includes('d13') || div.id.includes('c12')) {
        square13Clicked++;
    }
    if (div.id.includes('b6') || div.id.includes('c14') || div.id.includes('d14') || div.id.includes('c13') ) {
        square14Clicked++;
    }
    if (div.id.includes('b7') || div.id.includes('c15') || div.id.includes('d15') || div.id.includes('c14')) {
        square15Clicked++;
    }
    if (div.id.includes('b8') || div.id.includes('c16') || div.id.includes('d16') || div.id.includes('c15') ) {
        square16Clicked++;
    }
    if (div.id.includes('d9') || div.id.includes('e17') || div.id.includes('f17') || div.id.includes('l17')) {
        square17Clicked++;
    }
    if (div.id.includes('d10') || div.id.includes('e18') || div.id.includes('f18') || div.id.includes('e17') ) {
        square18Clicked++;
    }
    if (div.id.includes('d11') || div.id.includes('e19') || div.id.includes('f19') || div.id.includes('e18')) {
        square19Clicked++;
    }
    if (div.id.includes('d12') || div.id.includes('e20') || div.id.includes('f20') || div.id.includes('e19') ) {
        square20Clicked++;
    }
    if (div.id.includes('d13') || div.id.includes('e21') || div.id.includes('f21') || div.id.includes('e20')) {
        square21Clicked++;
    }
    if (div.id.includes('d14') || div.id.includes('e22') || div.id.includes('f22') || div.id.includes('e21') ) {
        square22Clicked++;
    }
    if (div.id.includes('d15') || div.id.includes('e23') || div.id.includes('f23') || div.id.includes('e22')) {
        square23Clicked++;
    }
    if (div.id.includes('d16') || div.id.includes('e24') || div.id.includes('f24') || div.id.includes('e23') ) {
        square24Clicked++;
    }
    if (div.id.includes('f17') || div.id.includes('g25') || div.id.includes('h25') || div.id.includes('l25')) {
        square25Clicked++;
    }
    if (div.id.includes('f18') || div.id.includes('g26') || div.id.includes('h26') || div.id.includes('g25') ) {
        square26Clicked++;
    }
    if (div.id.includes('f19') || div.id.includes('g27') || div.id.includes('h27') || div.id.includes('g26')) {
        square27Clicked++;
    }
    if (div.id.includes('f20') || div.id.includes('g28') || div.id.includes('h28') || div.id.includes('g27') ) {
        square28Clicked++;
    }
    if (div.id.includes('f21') || div.id.includes('g29') || div.id.includes('h29') || div.id.includes('g28')) {
        square29Clicked++;
    }
    if (div.id.includes('f22') || div.id.includes('g30') || div.id.includes('h30') || div.id.includes('g29') ) {
        square30Clicked++;
    }
    if (div.id.includes('f23') || div.id.includes('g31') || div.id.includes('h31') || div.id.includes('g30')) {
        square31Clicked++;
    }
    if (div.id.includes('f24') || div.id.includes('g32') || div.id.includes('h32') || div.id.includes('g31') ) {
        square32Clicked++;
    }
    if (div.id.includes('h25') || div.id.includes('i33') || div.id.includes('j33') || div.id.includes('l33')) {
        square33Clicked++;
    }
    if (div.id.includes('h26') || div.id.includes('i34') || div.id.includes('j34') || div.id.includes('i33') ) {
        square34Clicked++;
    }
    if (div.id.includes('h27') || div.id.includes('i35') || div.id.includes('j35') || div.id.includes('i34')) {
        square35Clicked++;
    }
    if (div.id.includes('h28') || div.id.includes('i36') || div.id.includes('j36') || div.id.includes('i35') ) {
        square36Clicked++;
    }
    if (div.id.includes('h29') || div.id.includes('i37') || div.id.includes('j37') || div.id.includes('i36')) {
        square37Clicked++;
    }
    if (div.id.includes('h30') || div.id.includes('i38') || div.id.includes('j38') || div.id.includes('i37') ) {
        square38Clicked++;
    }
    if (div.id.includes('h31') || div.id.includes('i39') || div.id.includes('j39') || div.id.includes('i38')) {
        square39Clicked++;
    }
    if (div.id.includes('h32') || div.id.includes('i40') || div.id.includes('j40') || div.id.includes('i39') ) {
        square40Clicked++;
    }
    if (div.id.includes('j33') || div.id.includes('k41') || div.id.includes('m41') || div.id.includes('l41')) {
        square41Clicked++;
    }
    if (div.id.includes('j34') || div.id.includes('k42') || div.id.includes('m42') || div.id.includes('k41') ) {
        square42Clicked++;
    }
    if (div.id.includes('j35') || div.id.includes('k43') || div.id.includes('m43') || div.id.includes('k42')) {
        square43Clicked++;
    }
    if (div.id.includes('j36') || div.id.includes('k44') || div.id.includes('m44') || div.id.includes('k43') ) {
        square44Clicked++;
    }
    if (div.id.includes('j37') || div.id.includes('k45') || div.id.includes('m45') || div.id.includes('k44')) {
        square45Clicked++;
    }
    if (div.id.includes('j38') || div.id.includes('k46') || div.id.includes('m46') || div.id.includes('k45') ) {
        square46Clicked++;
    }
    if (div.id.includes('j39') || div.id.includes('k47') || div.id.includes('m47') || div.id.includes('k46')) {
        square47Clicked++;
    }
    if (div.id.includes('j40') || div.id.includes('k48') || div.id.includes('m48') || div.id.includes('k47') ) {
        square48Clicked++;
    }
    if (div.id.includes('m41') || div.id.includes('n49') || div.id.includes('o49') || div.id.includes('l49')) {
        square49Clicked++;
    }
    if (div.id.includes('m42') || div.id.includes('n50') || div.id.includes('o50') || div.id.includes('n49') ) {
        square50Clicked++;
    }
    if (div.id.includes('m43') || div.id.includes('n51') || div.id.includes('o51') || div.id.includes('n50')) {
        square51Clicked++;
    }
    if (div.id.includes('m44') || div.id.includes('n52') || div.id.includes('o52') || div.id.includes('n51') ) {
        square52Clicked++;
    }
    if (div.id.includes('m45') || div.id.includes('n53') || div.id.includes('o53') || div.id.includes('n52')) {
        square53Clicked++;
    }
    if (div.id.includes('m46') || div.id.includes('n54') || div.id.includes('o54') || div.id.includes('n53') ) {
        square54Clicked++;
    }
    if (div.id.includes('m47') || div.id.includes('n55') || div.id.includes('o55') || div.id.includes('n54')) {
        square55Clicked++;
    }
    if (div.id.includes('m48') || div.id.includes('n56') || div.id.includes('o56') || div.id.includes('n55') ) {
        square56Clicked++;
    }
    if (div.id.includes('o49') || div.id.includes('p57') || div.id.includes('q57') || div.id.includes('l57')) {
        square57Clicked++;
    }
    if (div.id.includes('o50') || div.id.includes('p58') || div.id.includes('q58') || div.id.includes('p57') ) {
        square58Clicked++;
    }
    if (div.id.includes('o51') || div.id.includes('p59') || div.id.includes('q59') || div.id.includes('p58')) {
        square59Clicked++;
    }
    if (div.id.includes('o52') || div.id.includes('p60') || div.id.includes('q60') || div.id.includes('p59') ) {
        square60Clicked++;
    }
    if (div.id.includes('o53') || div.id.includes('p61') || div.id.includes('q61') || div.id.includes('p60')) {
        square61Clicked++;
    }
    if (div.id.includes('o54') || div.id.includes('p62') || div.id.includes('q62') || div.id.includes('p61') ) {
        square62Clicked++;
    }
    if (div.id.includes('o55') || div.id.includes('p63') || div.id.includes('q63') || div.id.includes('p62')) {
        square63Clicked++;
    }
    if (div.id.includes('o56') || div.id.includes('p64') || div.id.includes('q64') || div.id.includes('p63') ) {
        square64Clicked++;
    }



    checkSquareCompletion();
};


document.querySelectorAll('.line1').forEach(div => {
    div.addEventListener('click', handleClick);
});
document.querySelectorAll('.line2').forEach(div => {
    div.addEventListener('click', handleClick);
});
document.querySelectorAll('.line2last').forEach(div => {
    div.addEventListener('click', handleClick);
});
document.querySelectorAll('.line2last').forEach(div => {
    div.addEventListener('click', handleClick);
});









