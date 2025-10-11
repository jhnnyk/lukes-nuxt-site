// --------------------------------------------------------------------------------
// bugs
//  --------------------------------------------------------------------------------

// ----------- bugOne ---------------------
export const bugOne = ref("");
function updateAnimationOne1() {
  bugOne.value = "\\()/";
}
function updateAnimationOne2() {
  bugOne.value = "/()\\";
}
function runAnimationOne() {
  setTimeout(updateAnimationOne1, 100);
  setTimeout(updateAnimationOne2, 500);
}
const timeOne = 750;

// ----------- bugTwo ---------------------
export const bugTwo = ref("");
function updateAnimationTwo1() {
  bugTwo.value = "(( ))";
}
function updateAnimationTwo2() {
  bugTwo.value = "(())";
}
function runAnimationTwo() {
  setTimeout(updateAnimationTwo1, 100);
  setTimeout(updateAnimationTwo2, 600);
}
const timeTwo = 800;

// ----------- bugThree ---------------------
export const bugThree = ref("");
function updateBugThree1() {
  bugThree.value = "~-~";
}
function updateBugThree2() {
  bugThree.value = "-~-";
}
function runBugThree() {
  setTimeout(updateBugThree1, 0);
  setTimeout(updateBugThree2, 300);
}
const timeThree = 600;

// ----------- bugFour ---------------------
export const bugFour = ref("");
function updateBugFour1() {
  bugFour.value = ",...,...";
}
function updateBugFour2() {
  bugFour.value = ".,...,..";
}
function updateBugFour3() {
  bugFour.value = "..,...,.";
}
function updateBugFour4() {
  bugFour.value = "...,...,";
}
function updateBugFour5() {
  bugFour.value = ",...,...";
}
function updateBugFour6() {
  bugFour.value = ".,...,..";
}
function updateBugFour7() {
  bugFour.value = "..,...,.";
}
function updateBugFour8() {
  bugFour.value = "...,...,";
}
function runBugFour() {
  setTimeout(updateBugFour1, 0);
  setTimeout(updateBugFour2, 150);
  setTimeout(updateBugFour3, 300);
  setTimeout(updateBugFour4, 450);
  setTimeout(updateBugFour5, 600);
  setTimeout(updateBugFour6, 750);
  setTimeout(updateBugFour7, 900);
  setTimeout(updateBugFour8, 1150);
}
const timeFour = 1300;

// ----------- bugFive ---------------------
export const bugFive = ref("");
function updateBugFive1() {
  bugFive.value = ",.,.,.,.";
};
function updateBugFive2() {
  bugFive.value = ".,.,.,.,";
};
function runBugFive() {
  setTimeout(updateBugFive1, 0);
  setTimeout(updateBugFive2, 300);
}
const timeFive = 600;

// ----------- bugSix ---------------------
export const bugSix = ref("");
function updateBugSix1() {
  bugSix.value = "°•°•°•°";
};
function updateBugSix2() {
  bugSix.value = "•°•°•°•";
};
function runBugSix() {
  setTimeout(updateBugSix1, 0);
  setTimeout(updateBugSix2, 250);
}
const timeSix = 500;

// --------------------------------------------------------------------------------
// run all animations
//  --------------------------------------------------------------------------------

export function useAnimations() {
    function runAnimations() {
        setInterval(runAnimationOne, timeOne);
        setInterval(runAnimationTwo, timeTwo);
        setInterval(runBugThree, timeThree);
        setInterval(runBugFour, timeFour);
        setInterval(runBugFive, timeFive);
        setInterval(runBugSix, timeSix);
    }

    return{
        runAnimations
    }
}

