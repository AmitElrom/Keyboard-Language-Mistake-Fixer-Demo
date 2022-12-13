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
