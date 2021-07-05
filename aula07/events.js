function changeContent(element) {
  element.innerHTML = "hey";
}

const changeText = (element) => {
  element.innerHTML = "Hey";
};

const convertCase = (element) => {
  element.value = element.value.toUpperCase();
};

const regex = new RegExp("[0-9]", "g");

const removeNumbers = (element) => {
  debugger
  element.value = element.value
    .split("")
    .filter((digit) => !regex.test(digit))
    .join("");
};
