/*let A = new Audio("white_keys/A.mp3");
let S = new Audio("white_keys/S.mp3");
let D = new Audio("white_keys/D.mp3");
let F = new Audio("white_keys/F.mp3");
let G = new Audio("white_keys/G.mp3");
let H = new Audio("white_keys/H.mp3");
let J = new Audio("white_keys/J.mp3");*/
let A = [];
let S = [];
let D = [];
let F = [];
let G = [];
let H = [];
let J = [];
let W = [];
let E = [];
let T = [];
let Y = [];
let U = [];

document.addEventListener("keydown", function(e) {
    if(e.code == "KeyA") {
        let A = new Audio("white_keys/A.mp3");
        A.play();
    } else if (e.code == "KeyS") {
        let S = new Audio("white_keys/S.mp3");
        S.play();
    } else if (e.code == "KeyD") {
        let D = new Audio("white_keys/D.mp3");
        D.play();
    } else if (e.code == "KeyF") {
        let F = new Audio("white_keys/F.mp3");
        F.play();
    } else if (e.code == "KeyG") {
        let G = new Audio("white_keys/G.mp3");
        G.play();
    } else if (e.code == "KeyH") {
        let H = new Audio("white_keys/H.mp3");
        H.play();
    } else if (e.code == "KeyJ") {
        let J = new Audio("white_keys/J.mp3");
        J.play();
    } else if (e.code == "KeyW") {
        let W = new Audio("black_keys/W.mp3");
        W.play();
    } else if (e.code == "KeyE") {
        let E = new Audio("black_keys/E.mp3");
        E.play();
    } else if (e.code == "KeyT") {
        let T = new Audio("black_keys/T.mp3");
        T.play();
    } else if (e.code == "KeyY") {
        let Y = new Audio("black_keys/Y.mp3");
        Y.play();
    } else if (e.code == "KeyU") {
        let U = new Audio("black_keys/U.mp3");
        U.play();
    } else {
        console.log("Warning: Key not recognized.");
    }
});

/*
document.addEventListener("keyup", function(e) {
    if(e.code == "KeyA") {
        console.log("The 'A' key is released.");
        A.pause();
    } else if (e.code == "KeyS") {
        console.log("The 'S' key is released.");
        S.pause();
    } else if (e.code == "KeyD") {
        console.log("The 'D' key is released.");
        D.pause();
    } else if (e.code == "KeyF") {
        console.log("The 'F' key is released.");
        F.pause();
    } else if (e.code == "KeyG") {
        console.log("The 'G' key is released.");
        G.pause();
    } else if (e.code == "KeyH") {
        console.log("The 'H' key is released.");
        H.pause();
    } else if (e.code == "KeyJ") {
        console.log("The 'J' key is released.");
        J.pause();
    } else {
        console.log("Unrecognized key released.");
    }
});*/
