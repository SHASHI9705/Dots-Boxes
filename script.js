let countRed = 0;
let countBlue = 0;

const playerRed = prompt("Player red name:")?.toUpperCase() || "RED";
const playerBlue = prompt("player blue name:")?.toUpperCase() || "BLUE";

let currentTurn = "red";  // red always starts first

document.querySelector(".p1").innerHTML = `${playerRed}: ${countRed}`;
document.querySelector(".p2").innerHTML = `${playerBlue}: ${countBlue}`;

const squareClicked = Array(64).fill(0);
const squareCompleted = Array(64).fill(false);

function changeColor(div, winner) {
    if (!winner) {
        if (currentTurn === "red" && !div.classList.value.includes("red") && !div.classList.value.includes("blue")) {
            div.classList.add("red");
            currentTurn = "blue";
        } else if (currentTurn === "blue" && !div.classList.value.includes("red") && !div.classList.value.includes("blue")) {
            div.classList.add("blue");
            currentTurn = "red";
        }
    } else {
        console.log("Square completed");

        if (currentTurn === "red") {
            div.classList.add("red");
            countRed++;
            document.querySelector(".p1").innerHTML = `${playerRed}: ${countRed}`;
        } else {
            div.classList.add("blue");
            countBlue++;
            document.querySelector(".p2").innerHTML = `${playerBlue}: ${countBlue}`;
        }
    }
}

function checkSquareCompletion(div) {
    let winner = false;

    for (let i = 0; i < 64; i++) {
        console.log(squareClicked[i]);

        if (squareClicked[i] === 4 && !squareCompleted[i]) {
            squareCompleted[i] = true;
            winner = true;
            changeColor(div, winner);
        }
    }

    if (!winner) changeColor(div, winner);
}

function handleClick(event) {
    const div = event;

    if (div.classList.value.includes("red") || div.classList.value.includes("blue")) {
        return;
    }

    if (
        div.id.includes("t1") ||
        div.id.includes("r1") ||
        div.id.includes("b1") ||
        div.id.includes("l1")
    ) {
        squareClicked[0]++;
    }
    if (
        div.id.includes("t2") ||
        div.id.includes("r2") ||
        div.id.includes("b2") ||
        div.id.includes("r1")
    ) {
        squareClicked[1]++;
    }
    if (
        div.id.includes("t3") ||
        div.id.includes("r3") ||
        div.id.includes("b3") ||
        div.id.includes("r2")
    ) {
        squareClicked[2]++;
    }
    if (
        div.id.includes("t4") ||
        div.id.includes("r4") ||
        div.id.includes("b4") ||
        div.id.includes("r3")
    ) {
        squareClicked[3]++;
    }
    if (
        div.id.includes("t5") ||
        div.id.includes("r5") ||
        div.id.includes("b5") ||
        div.id.includes("r4")
    ) {
        squareClicked[4]++;
    }
    if (
        div.id.includes("t6") ||
        div.id.includes("r6") ||
        div.id.includes("b6") ||
        div.id.includes("r5")
    ) {
        squareClicked[5]++;
    }
    if (
        div.id.includes("t7") ||
        div.id.includes("r7") ||
        div.id.includes("b7") ||
        div.id.includes("r6")
    ) {
        squareClicked[6]++;
    }
    if (
        div.id.includes("t8") ||
        div.id.includes("r8") ||
        div.id.includes("b8") ||
        div.id.includes("r7")
    ) {
        squareClicked[7]++;
    }
    if (
        div.id.includes("b1") ||
        div.id.includes("c9") ||
        div.id.includes("d9") ||
        div.id.includes("l9")
    ) {
        squareClicked[8]++;
    }
    if (
        div.id.includes("b2") ||
        div.id.includes("c10") ||
        div.id.includes("d10") ||
        div.id.includes("c9")
    ) {
        squareClicked[9]++;
    }
    if (
        div.id.includes("b3") ||
        div.id.includes("c11") ||
        div.id.includes("d11") ||
        div.id.includes("c10")
    ) {
        squareClicked[10]++;
    }
    if (
        div.id.includes("b4") ||
        div.id.includes("c12") ||
        div.id.includes("d12") ||
        div.id.includes("c11")
    ) {
        squareClicked[11]++;
    }
    if (
        div.id.includes("b5") ||
        div.id.includes("c13") ||
        div.id.includes("d13") ||
        div.id.includes("c12")
    ) {
        squareClicked[12]++;
    }
    if (
        div.id.includes("b6") ||
        div.id.includes("c14") ||
        div.id.includes("d14") ||
        div.id.includes("c13")
    ) {
        squareClicked[13]++;
    }
    if (
        div.id.includes("b7") ||
        div.id.includes("c15") ||
        div.id.includes("d15") ||
        div.id.includes("c14")
    ) {
        squareClicked[14]++;
    }
    if (
        div.id.includes("b8") ||
        div.id.includes("c16") ||
        div.id.includes("d16") ||
        div.id.includes("c15")
    ) {
        squareClicked[15]++;
    }
    if (
        div.id.includes("d9") ||
        div.id.includes("e17") ||
        div.id.includes("f17") ||
        div.id.includes("l17")
    ) {
        squareClicked[16]++;
    }
    if (
        div.id.includes("d10") ||
        div.id.includes("e18") ||
        div.id.includes("f18") ||
        div.id.includes("e17")
    ) {
        squareClicked[17]++;
    }
    if (
        div.id.includes("d11") ||
        div.id.includes("e19") ||
        div.id.includes("f19") ||
        div.id.includes("e18")
    ) {
        squareClicked[18]++;
    }
    if (
        div.id.includes("d12") ||
        div.id.includes("e20") ||
        div.id.includes("f20") ||
        div.id.includes("e19")
    ) {
        squareClicked[19]++;
    }
    if (
        div.id.includes("d13") ||
        div.id.includes("e21") ||
        div.id.includes("f21") ||
        div.id.includes("e20")
    ) {
        squareClicked[20]++;
    }
    if (
        div.id.includes("d14") ||
        div.id.includes("e22") ||
        div.id.includes("f22") ||
        div.id.includes("e21")
    ) {
        squareClicked[21]++;
    }
    if (
        div.id.includes("d15") ||
        div.id.includes("e23") ||
        div.id.includes("f23") ||
        div.id.includes("e22")
    ) {
        squareClicked[22]++;
    }
    if (
        div.id.includes("d16") ||
        div.id.includes("e24") ||
        div.id.includes("f24") ||
        div.id.includes("e23")
    ) {
        squareClicked[23]++;
    }
    if (
        div.id.includes("f17") ||
        div.id.includes("g25") ||
        div.id.includes("h25") ||
        div.id.includes("l25")
    ) {
        squareClicked[24]++;
    }
    if (
        div.id.includes("f18") ||
        div.id.includes("g26") ||
        div.id.includes("h26") ||
        div.id.includes("g25")
    ) {
        squareClicked[25]++;
    }
    if (
        div.id.includes("f19") ||
        div.id.includes("g27") ||
        div.id.includes("h27") ||
        div.id.includes("g26")
    ) {
        squareClicked[26]++;
    }
    if (
        div.id.includes("f20") ||
        div.id.includes("g28") ||
        div.id.includes("h28") ||
        div.id.includes("g27")
    ) {
        squareClicked[27]++;
    }
    if (
        div.id.includes("f21") ||
        div.id.includes("g29") ||
        div.id.includes("h29") ||
        div.id.includes("g28")
    ) {
        squareClicked[28]++;
    }
    if (
        div.id.includes("f22") ||
        div.id.includes("g30") ||
        div.id.includes("h30") ||
        div.id.includes("g29")
    ) {
        squareClicked[29]++;
    }
    if (
        div.id.includes("f23") ||
        div.id.includes("g31") ||
        div.id.includes("h31") ||
        div.id.includes("g30")
    ) {
        squareClicked[30]++;
    }
    if (
        div.id.includes("f24") ||
        div.id.includes("g32") ||
        div.id.includes("h32") ||
        div.id.includes("g31")
    ) {
        squareClicked[31]++;
    }
    if (
        div.id.includes("h25") ||
        div.id.includes("i33") ||
        div.id.includes("j33") ||
        div.id.includes("l33")
    ) {
        squareClicked[32]++;
    }
    if (
        div.id.includes("h26") ||
        div.id.includes("i34") ||
        div.id.includes("j34") ||
        div.id.includes("i33")
    ) {
        squareClicked[33]++;
    }
    if (
        div.id.includes("h27") ||
        div.id.includes("i35") ||
        div.id.includes("j35") ||
        div.id.includes("i34")
    ) {
        squareClicked[34]++;
    }
    if (
        div.id.includes("h28") ||
        div.id.includes("i36") ||
        div.id.includes("j36") ||
        div.id.includes("i35")
    ) {
        squareClicked[35]++;
    }
    if (
        div.id.includes("h29") ||
        div.id.includes("i37") ||
        div.id.includes("j37") ||
        div.id.includes("i36")
    ) {
        squareClicked[36]++;
    }
    if (
        div.id.includes("h30") ||
        div.id.includes("i38") ||
        div.id.includes("j38") ||
        div.id.includes("i37")
    ) {
        squareClicked[37]++;
    }
    if (
        div.id.includes("h31") ||
        div.id.includes("i39") ||
        div.id.includes("j39") ||
        div.id.includes("i38")
    ) {
        squareClicked[38]++;
    }
    if (
        div.id.includes("h32") ||
        div.id.includes("i40") ||
        div.id.includes("j40") ||
        div.id.includes("i39")
    ) {
        squareClicked[39]++;
    }
    if (
        div.id.includes("j33") ||
        div.id.includes("k41") ||
        div.id.includes("m41") ||
        div.id.includes("l41")
    ) {
        squareClicked[40]++;
    }
    if (
        div.id.includes("j34") ||
        div.id.includes("k42") ||
        div.id.includes("m42") ||
        div.id.includes("k41")
    ) {
        squareClicked[41]++;
    }
    if (
        div.id.includes("j35") ||
        div.id.includes("k43") ||
        div.id.includes("m43") ||
        div.id.includes("k42")
    ) {
        squareClicked[42]++;
    }
    if (
        div.id.includes("j36") ||
        div.id.includes("k44") ||
        div.id.includes("m44") ||
        div.id.includes("k43")
    ) {
        squareClicked[43]++;
    }
    if (
        div.id.includes("j37") ||
        div.id.includes("k45") ||
        div.id.includes("m45") ||
        div.id.includes("k44")
    ) {
        squareClicked[44]++;
    }
    if (
        div.id.includes("j38") ||
        div.id.includes("k46") ||
        div.id.includes("m46") ||
        div.id.includes("k45")
    ) {
        squareClicked[45]++;
    }
    if (
        div.id.includes("j39") ||
        div.id.includes("k47") ||
        div.id.includes("m47") ||
        div.id.includes("k46")
    ) {
        squareClicked[46]++;
    }
    if (
        div.id.includes("j40") ||
        div.id.includes("k48") ||
        div.id.includes("m48") ||
        div.id.includes("k47")
    ) {
        squareClicked[47]++;
    }
    if (
        div.id.includes("m41") ||
        div.id.includes("n49") ||
        div.id.includes("o49") ||
        div.id.includes("l49")
    ) {
        squareClicked[48]++;
    }
    if (
        div.id.includes("m42") ||
        div.id.includes("n50") ||
        div.id.includes("o50") ||
        div.id.includes("n49")
    ) {
        squareClicked[49]++;
    }
    if (
        div.id.includes("m43") ||
        div.id.includes("n51") ||
        div.id.includes("o51") ||
        div.id.includes("n50")
    ) {
        squareClicked[50]++;
    }
    if (
        div.id.includes("m44") ||
        div.id.includes("n52") ||
        div.id.includes("o52") ||
        div.id.includes("n51")
    ) {
        squareClicked[51]++;
    }
    if (
        div.id.includes("m45") ||
        div.id.includes("n53") ||
        div.id.includes("o53") ||
        div.id.includes("n52")
    ) {
        squareClicked[52]++;
    }
    if (
        div.id.includes("m46") ||
        div.id.includes("n54") ||
        div.id.includes("o54") ||
        div.id.includes("n53")
    ) {
        squareClicked[53]++;
    }
    if (
        div.id.includes("m47") ||
        div.id.includes("n55") ||
        div.id.includes("o55") ||
        div.id.includes("n54")
    ) {
        squareClicked[54]++;
    }
    if (
        div.id.includes("m48") ||
        div.id.includes("n56") ||
        div.id.includes("o56") ||
        div.id.includes("n55")
    ) {
        squareClicked[55]++;
    }
    if (
        div.id.includes("o49") ||
        div.id.includes("p57") ||
        div.id.includes("q57") ||
        div.id.includes("l57")
    ) {
        squareClicked[56]++;
    }
    if (
        div.id.includes("o50") ||
        div.id.includes("p58") ||
        div.id.includes("q58") ||
        div.id.includes("p57")
    ) {
        squareClicked[57]++;
    }
    if (
        div.id.includes("o51") ||
        div.id.includes("p59") ||
        div.id.includes("q59") ||
        div.id.includes("p58")
    ) {
        squareClicked[58]++;
    }
    if (
        div.id.includes("o52") ||
        div.id.includes("p60") ||
        div.id.includes("q60") ||
        div.id.includes("p59")
    ) {
        squareClicked[59]++;
    }
    if (
        div.id.includes("o53") ||
        div.id.includes("p61") ||
        div.id.includes("q61") ||
        div.id.includes("p60")
    ) {
        squareClicked[60]++;
    }
    if (
        div.id.includes("o54") ||
        div.id.includes("p62") ||
        div.id.includes("q62") ||
        div.id.includes("p61")
    ) {
        squareClicked[61]++;
    }
    if (
        div.id.includes("o55") ||
        div.id.includes("p63") ||
        div.id.includes("q63") ||
        div.id.includes("p62")
    ) {
        squareClicked[62]++;
    }
    if (
        div.id.includes("o56") ||
        div.id.includes("p64") ||
        div.id.includes("q64") ||
        div.id.includes("p63")
    ) {
        squareClicked[63]++;
    }

    checkSquareCompletion(div);
    // changeColor(div);
}

function resetColor() {
    document.querySelectorAll(".line2").forEach((div) => {
        div.classList.remove("red");
        div.classList.remove("blue");
    });
    document.querySelectorAll(".line1").forEach((div) => {
        div.classList.remove("red");
        div.classList.remove("blue");
    });
    document.querySelectorAll(".line2last").forEach((div) => {
        div.classList.remove("red");
        div.classList.remove("blue");
    });

    currentTurn = "red";
    squareClicked.fill(0);
    squareCompleted.fill(false);
    countRed = 0;
    countBlue = 0;

    document.querySelector(".p1").innerHTML = `${playerRed}: ${countRed}`;
    document.querySelector(".p2").innerHTML = `${playerBlue}: ${countBlue}`;
}

