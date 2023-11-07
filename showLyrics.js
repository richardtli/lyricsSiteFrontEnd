let artist = "Taylor Swift"
let song = "You Belong With Me"

const backgroundColors = [
    "#FFCCCC",
    "#FFB6C1",
    "#FF69B4",
    "#FFC0CB",
    "#FFDAB9",
    "#FFA07A",
    "#FF6347",
    "#FF4500",
    "#FF8C00",
    "#FFD700",
    "#FFEB3B",
    "#FFC107",
    "#FF5722",
    "#FF9800",
    "#FF6F61",
    "#FFCC80",
    "#FFDAB9",
    "#FFCCBC",
    "#FFABAB",
    "#FF6F47",
    "#AED581",
    "#81C784",
    "#4DB6AC",
    "#4DD0E1",
    "#64B5F6",
    "#7986CB",
    "#9575CD",
    "#B39DDB",
    "#F06292",
    "#BA68C8",
    "#FF77A9"
  ];


let lyrics = [
  "You're on the phone with your girlfriend",
  "She's upset, she's going off about something that you said",
  "'Cause she doesn't get your humor like I do",
  "",
  "I'm in the room, it's a typical Tuesday night",
  "I'm listening to the kind of music she doesn't like",
  "And she'll never know your story like I do",
  "",
  "But she wears short skirts",
  "I wear T-shirts",
  "She's cheer captain",
  "And I'm on the bleachers",
  "Dreaming about the day when you wake up and find",
  "That what you're looking for has been here the whole time",
  "",
  "If you could see",
  "That I'm the one",
  "Who understands you",
  "Been here all along",
  "So, why can't you see",
  "You belong with me",
  "You belong with me",
  "",
  "Walk in the streets with you in your worn-out jeans",
  "I can't help thinking this is how it ought to be",
  "Laughing on a park bench thinking to myself",
  `"Hey, isn't this easy?"`,
  "",
  "And you've got a smile",
  "That could light up this whole town",
  "I haven't seen it in a while",
  "Since she brought you down",
  "",
  "You say you're fine I know you better than that",
  "Hey, what you doing with a girl like that?",
  "",
  "She wears high heels",
  "I wear sneakers",
  "She's cheer captain",
  "And I'm on the bleachers",
  "Dreaming about the day when you wake up and find",
  "That what you're looking for has been here the whole time",
  "",
  "If you could see",
  "That I'm the one",
  "Who understands you",
  "Been here all along",
  "So, why can't you see",
  "You belong with me",
  "",
  "Standing by and waiting at your backdoor",
  "All this time how could you not know, baby?",
  "You belong with me",
  "You belong with me",
  "",
  "Oh, I remember you driving to my house",
  "In the middle of the night",
  "I'm the one who makes you laugh",
  "When you know you're 'bout to cry",
  "I know your favorite songs",
  "And you tell me about your dreams",
  "Think I know where you belong",
  "Think I know it's with me",
  "",
  "Can't you see",
  "That I'm the one",
  "Who understands you?",
  "Been here all along",
  "So, why can't you see",
  "You belong with me",
  "",
  "Standing by and waiting at your backdoor",
  "All this time how could you not know, baby?",
  "You belong with me",
  "You belong with me",
  "",
  "You belong with me",
  "",
  "Have you ever thought just maybe",
  "You belong with me?",
  "You belong with me",
  "",
  "",
  "",
  " ",
  "Created by RL",
];

const lyricsContainer = document.querySelector(".lyrics-container");
const lyricsSlider = document.querySelector(".lyricsSlider");
let lyricsPointer = 0;

showlyric(getLyric());
changeBackgroundColor()

function changeBackgroundColor() {
    document.body.style.background = `linear-gradient(${Math.random()}turn, ${backgroundColors[Math.floor(Math.random() * backgroundColors.length)]}, ${backgroundColors[Math.floor(Math.random() * backgroundColors.length)]})`
}

function changeStanza() {
  changeBackgroundColor();
}

function getLyric() {
  return lyrics[lyricsPointer];
}
function showlyric(text) {
  lyricsSlider.innerHTML = text;
}

function checkStanza(direction) {
  let line = getLyric();
  if (line == "") {
    changeStanza();
    direction();
  } else {
    showlyric(line);
  }
}

function next() {
  if (lyricsPointer == lyrics.length - 1) {
    return;
  }
  lyricsPointer++;
  checkStanza(next);
}

function prev() {
  if (lyricsPointer == 0) {
    return;
  }
  lyricsPointer--;
  checkStanza(prev);
}

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      prev();
      break;
    case 39:
      next();
      break;
  }
};
