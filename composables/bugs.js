export const bugOne = ref("");

export const bugTwo = ref("");

export const bugThree = ref("");

export const bugFour = ref("");

// bugOne
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

// bugTwo
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

// bugThree
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

// bugFour
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

// run all animations
export function useAnimations() {
    function runAnimations() {
        setInterval(runAnimationOne, timeOne);
        setInterval(runAnimationTwo, timeTwo);
        setInterval(runBugThree, timeThree);
        setInterval(runBugFour, timeFour);
    }

    return{
        runAnimations
    }
}

