// --------------------------------------------------------------------------------
// bugs
//  --------------------------------------------------------------------------------

// set up bug list
export let bugs = [];

// ----------- bugOne ---------------------
export const bugOne = ref("\\()/");
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
bugs.push(
  {
    id: 1,
    name: "Flapper",
    date: "16/sep/25",
    finder: "Luke",
    blurb:
      "This species is called the flapper, and is a very simple bug creature.",
    species: bugOne,
  }
);

// ----------- bugTwo ---------------------
export const bugTwo = ref("(( ))");
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
bugs.push(
  {
    id: 2,
    name: "Parenthepillar",
    date: "16/sep/25",
    finder: "Luke",
    blurb: "This next guy is a pre cool one.",
    species: bugTwo,
  }
);

// ----------- bugThree ---------------------
export const bugThree = ref("~-~");
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
bugs.push(
  {
    id: 3,
    name: "Tilda Worm",
    date: "16/sep/25",
    finder: "(donation)",
    blurb:
      "A curious sample that appeared at my doorstep. Seeing it's subtle elegance and complexity, I simply had to show you. (Note: formerly called the 'Title Worm', but I think 'Tilda' is a better name.)",
    species: bugThree,
  }
);

// ----------- bugFour ---------------------
export const bugFour = ref(",...,...");
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
bugs.push(
  {
    id: 4,
    name: "Rope Bug",
    date: "17/sep/25",
    finder: "(donation)",
    blurb:
      "Another gift left at my doorstep. I find the formation of this lil' wriggler kind of rope-like, so I named it a rope.",
    species: bugFour,
  }
);

// ----------- bugFive ---------------------
export const bugFive = ref(",.,.,.,.");
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
bugs.push(
  {
    id: 5,
    name: "Punc Worm",
    date: "11/oct/25",
    finder: "(donation)",
    blurb:
      "Believed to be a near relative of the 'rope bug', this specimen features a consistently punctuated body.",
    species: bugFive,
  }
);

// ----------- bugSix ---------------------
export const bugSix = ref("°•°•°•°");
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
bugs.push(
  {
    id: 6,
    name: "Bubble Bug",
    date: "11/oct/25",
    finder: "(donation)",
    blurb:
      "Composed of consecutive kissing circular body segments, the Bubble Bug exhibits unique oscillating movements.",
    species: bugSix,
  }
);

// ----------- bugSeven ---------------------
export const bugSeven = ref("  €€€  ");
function updateBugSeven1() {
  bugSeven.value = "  €€€  ";
};
function updateBugSeven2() {
  bugSeven.value = "  €€=€";
};
function updateBugSeven3() {
  bugSeven.value = "  €=€=€";
};
function updateBugSeven4() {
  bugSeven.value = "  €=€€";
};
function updateBugSeven5() {
  bugSeven.value = "  €€€";
};
function updateBugSeven6() {
  bugSeven.value = " €=€€";
};
function updateBugSeven7() {
  bugSeven.value = "€=€=€";
};
function updateBugSeven8() {
  bugSeven.value = " €€=€";
}
function runBugSeven() {
  setTimeout(updateBugSeven1, 0);
  setTimeout(updateBugSeven2, 275);
  setTimeout(updateBugSeven3, 550);
  setTimeout(updateBugSeven4, 1100);
  setTimeout(updateBugSeven5, 1375);
  setTimeout(updateBugSeven6, 1650);
  setTimeout(updateBugSeven7, 1925);
  setTimeout(updateBugSeven8, 2200);
};
const timeSeven = 2475;
bugs.push(
  {
    id: 7,
    name: "Currency Critter",
    date: "12/oct/25",
    finder: "(donation)",
    blurb:
      "A rare caterpillar, the Currency Critter can be seen crawling its way along currency exchange websites.",
    species: bugSeven,
  }
);

// ----------- bugEight ---------------------
export const bugEight = ref("^0^");
function updateBugEight1() {
  bugEight.value = "^0^";
};
function updateBugEight2() {
  bugEight.value = "-0-";
};
function runBugEight() {
  setTimeout(updateBugEight1, 0);
  setTimeout(updateBugEight2, 375);
};
const timeEight = 750;
bugs.push(
  {
    id: 8,
    name: "Bat",
    date: "12/oct/15",
    finder: "ASCII.co.uk",
    cite: "https://ascii.co.uk/oneline/bat",
    blurb: "A bat found on the web.",
    species: bugEight,
  }
);

// ----------- bugNine ---------------------
export const bugNine = ref(">/•\\•/c");
function updateBugNine1() {
  bugNine.value = ">/•\\•/c";
};
function updateBugNine2() {
  bugNine.value = ">|•|•|c";
};
function updateBugNine3() {
  bugNine.value = ">\\•/•\\c";
};
function updateBugNine4() {
  bugNine.value = ">|•|•|c";
}
function runBugNine() {
  setTimeout(updateBugNine1, 0);
  setTimeout(updateBugNine2, 250);
  setTimeout(updateBugNine3, 500);
  setTimeout(updateBugNine4, 750)
};
const timeNine = 1000;
bugs.push(
  {
    id: 9,
    name: "Slash Stack",
    date: "13/oct/25",
    finder: "Aris Fryer",
    blurb: "Named for its corrugated body shape, this specimen keeps accidentally executing commands on my Minecraft server. It's really annoying.",
    species: bugNine,
  }
);

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
        setInterval(runBugSeven, timeSeven);
        setInterval(runBugEight, timeEight);
        setInterval(runBugNine, timeNine);
    }

    return{
        runAnimations
    }
}

