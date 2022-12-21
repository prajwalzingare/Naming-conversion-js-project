// input and button element

const input = document.querySelector("#text");
const convert = document.querySelector("#convert-btn");

//All elements
const camelCaseElement = document.querySelector("#camel-case");
const pascalCaseElement = document.querySelector("#pascal-case");
const snakeCaseElement = document.querySelector("#snake-case");
const screamingSnakeCaseElement = document.querySelector(
  "#screaming-snake-case"
);
const kebabCaseElement = document.querySelector("#kebab-case");
const screamingKebabCaseElement = document.querySelector(
  "#screaming-kebab-case"
);

// function for camelCase
const convertCamelCase = (text) => {
  const words = text.split(" ");
  const arrayFunction = words.map((word, i) => {
    if (i === 0) {
      return (word = word.toLowerCase());
    } else {
      const firstLetter = word.slice(0, 1);
      const remainingLetter = word.slice(1);
      return firstLetter.toUpperCase() + remainingLetter.toLowerCase();
    }
  });
  return arrayFunction.join("");
};

// function for PascalCase
const convertPascalCase = (text) => {
  const words = text.split(" ");
  const arrayFunction = words.map((word, i) => {
    const firstLetter = word.slice(0, 1);
    const remainingLetter = word.slice(1);
    return firstLetter.toUpperCase() + remainingLetter.toLowerCase();
  });

  return arrayFunction.join("");
};

//function for snake_case
const convertSnakeCase = (text) => {
  const words = text.split(" ");
  const arrayFunction = words.map((word, i) => {
    const firstLetter = word.slice(0, 1);
    const remainingLetter = word.slice(1);
    return firstLetter.toLowerCase() + remainingLetter;
  });

  return arrayFunction.join("_");
};

// function for Screaming Snake Case:
const convertScreamingSnakeCase = (text) => {
  const words = text.split(" ");
  const arrayFunction = words.map((word, i, arr) => {
    // const allLetter = word.slice(0);
    // return allLetter.toUpperCase();
    return word.toUpperCase();
  });
  return arrayFunction.join("_");
};

//function for Kebab Case
const convertKebabCase = (text) => {
  const words = text.split(" ");
  const arrayFunction = words.map((word, i, arr) => {
    const firstLetter = word.slice(0, 1);
    const remainingLetter = word.slice(1);
    return firstLetter.toLowerCase() + remainingLetter;
  });

  return arrayFunction.join("-");
};

//function for Screaming  Kebab Case
const convertScreamingKebabCase = (text) => {
  const words = text.split(" ");
  const arrayFunction = words.map((word, i, arr) => {
    return word.toUpperCase();
  });

  return arrayFunction.join("-");
};

//EventListner function.We can add iput function also chnages will apear as you type.
convert.addEventListener("click", () => {
  let text = input.value;
  console.log("first");
  //to camelCase
  const camelCase = convertCamelCase(text);
  camelCaseElement.innerText = camelCase;

  //to PascalCase
  const PascalCase = convertPascalCase(text);
  pascalCaseElement.innerText = PascalCase;
  //to SnakeCase
  const SnakeCase = convertSnakeCase(text);
  snakeCaseElement.innerText = SnakeCase;

  //to Screaming Snake Case
  const screamingSnakeCase = convertScreamingSnakeCase(text);
  screamingSnakeCaseElement.innerText = screamingSnakeCase;

  //to kebabCase
  const kebabCase = convertKebabCase(text);
  kebabCaseElement.innerText = kebabCase;

  // to Screaming Kebab Case
  const ScreamingkebabCase = convertScreamingKebabCase(text);
  screamingKebabCaseElement.innerText = ScreamingkebabCase;
});
