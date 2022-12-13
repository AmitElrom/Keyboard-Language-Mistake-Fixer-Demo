const keys = [
  {
    key: ["A", "a", "ש"],
    languages: {
      englishCpitalized: "A",
      english: "a",
      hebrew: "ש",
    },
  },
  {
    key: ["B", "b", "נ"],
    languages: {
      englishCpitalized: "B",
      english: "b",
      hebrew: "נ",
    },
  },
  {
    key: ["C", "c", "ב"],
    languages: {
      englishCpitalized: "C",
      english: "c",
      hebrew: "ב",
    },
  },
  {
    key: ["D", "d", "ג"],
    languages: {
      englishCpitalized: "D",
      english: "d",
      hebrew: "ג",
    },
  },
  {
    key: ["E", "e", "ק"],
    languages: {
      englishCpitalized: "E",
      english: "e",
      hebrew: "ק",
    },
  },
  {
    key: ["F", "f", "כ"],
    languages: {
      englishCpitalized: "F",
      english: "f",
      hebrew: "כ",
    },
  },
  {
    key: ["G", "g", "ע"],
    languages: {
      englishCpitalized: "G",
      english: "g",
      hebrew: "ע",
    },
  },
  {
    key: ["H", "h", "י"],
    languages: {
      englishCpitalized: "H",
      english: "h",
      hebrew: "י",
    },
  },
  {
    key: ["I", "i", "ן"],
    languages: {
      englishCpitalized: "I",
      english: "i",
      hebrew: "ן",
    },
  },
  {
    key: ["J", "j", "ח"],
    languages: {
      englishCpitalized: "J",
      english: "j",
      hebrew: "ח",
    },
  },
  {
    key: ["K", "k", "ל"],
    languages: {
      englishCpitalized: "K",
      english: "k",
      hebrew: "ל",
    },
  },
  {
    key: ["L", "l", "ך"],
    languages: {
      englishCpitalized: "L",
      english: "l",
      hebrew: "ך",
    },
  },
  {
    key: ["M", "m", "צ"],
    languages: {
      englishCpitalized: "M",
      english: "m",
      hebrew: "צ",
    },
  },
  {
    key: ["N", "n", "מ"],
    languages: {
      englishCpitalized: "N",
      english: "n",
      hebrew: "מ",
    },
  },
  {
    key: ["O", "o", "ם"],
    languages: {
      englishCpitalized: "O",
      english: "o",
      hebrew: "ם",
    },
  },
  {
    key: ["P", "p", "פ"],
    languages: {
      englishCpitalized: "P",
      english: "p",
      hebrew: "פ",
    },
  },
  {
    key: ["Q", "q", "/"],
    languages: {
      englishCpitalized: "Q",
      english: "q",
      hebrew: "/",
    },
  },
  {
    key: ["R", "r", "ר"],
    languages: {
      englishCpitalized: "R",
      english: "r",
      hebrew: "ר",
    },
  },
  {
    key: ["S", "s", "ד"],
    languages: {
      englishCpitalized: "S",
      english: "s",
      hebrew: "ד",
    },
  },
  {
    key: ["T", "t", "א"],
    languages: {
      englishCpitalized: "T",
      english: "t",
      hebrew: "א",
    },
  },
  {
    key: ["U", "u", "ו"],
    languages: {
      englishCpitalized: "U",
      english: "u",
      hebrew: "ו",
    },
  },
  {
    key: ["V", "v", "ה"],
    languages: {
      englishCpitalized: "V",
      english: "v",
      hebrew: "ה",
    },
  },
  {
    key: ["W", "w", "'"],
    languages: {
      englishCpitalized: "W",
      english: "w",
      hebrew: "'",
    },
  },
  {
    key: ["X", "x", "ס"],
    languages: {
      englishCpitalized: "X",
      english: "x",
      hebrew: "ס",
    },
  },
  {
    key: ["Y", "y", "ט"],
    languages: {
      englishCpitalized: "Y",
      english: "y",
      hebrew: "ט",
    },
  },
  {
    key: ["Z", "z", "ז"],
    languages: {
      englishCpitalized: "Z",
      english: "z",
      hebrew: "ז",
    },
  },
  {
    key: ["Z", "z", "ז"],
    languages: {
      englishCpitalized: "Z",
      english: "z",
      hebrew: "ז",
    },
  },
  {
    key: [";", ";", "ף"],
    languages: {
      englishCpitalized: ";",
      english: ";",
      hebrew: "ף",
    },
  },
  {
    key: [";", ";", "ף"],
    languages: {
      englishCpitalized: ";",
      english: ";",
      hebrew: "ף",
    },
  },
  {
    key: [",", ",", "ת"],
    languages: {
      englishCpitalized: ",",
      english: ",",
      hebrew: "ת",
    },
  },
  {
    key: [".", ".", "ץ"],
    languages: {
      englishCpitalized: ".",
      english: ".",
      hebrew: "ץ",
    },
  },
  {
    key: ["/", "/", "."],
    languages: {
      englishCpitalized: "/",
      english: "/",
      hebrew: ".",
    },
  },
  {
    key: ["'", "'", ","],
    languages: {
      englishCpitalized: "'",
      english: "'",
      hebrew: ",",
    },
  },
  {
    key: ["'", "'", ","],
    languages: {
      englishCpitalized: "'",
      english: "'",
      hebrew: ",",
    },
  },
];


let lng = "";
const selectLanguage = () => {
  lng = document.getElementById("select-language").value;
};

window.addEventListener("select", (event) => {
  let text = document.getElementById(event.target.id);
  let markedText = text.value.substr(
    text.selectionStart,
    text.selectionEnd - text.selectionStart
  );

  let transformedText = "";
  for (let i = 0; i < markedText.length; i++) {
    const existingKey = keys.find((key) => key.key.includes(markedText[i]));
    if (existingKey) {
      transformedText += existingKey.languages[lng];
    } else {
      transformedText += markedText[i];
    }
  }

  text.value =
    text.value.slice(0, text.selectionStart) +
    transformedText +
    text.value.slice(text.selectionEnd);
});
