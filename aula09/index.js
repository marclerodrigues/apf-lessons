const handleFileChange = (element) => {
  const files = element.files;

  updateImage(files[0]);
};

const updateImage = (file) => {
  const reader = new FileReader();

  reader.addEventListener("load", (event) => {
    const container = document.querySelector(".signin");

    container.style.backgroundImage = `url(${event.target.result})`;
  });

  reader.readAsDataURL(file);
};

// const form = document.forms.login;

// form.addEventListener("formdata", (e) => {
//   for (let i of e.formData) {
//     console.log(i);
//   }
//   debugger;
// });

// form.addEventListener("submit", (e) => {
//   debugger;
// });

// form.addEventListener("reset", (e) => {
//   debugger;
// });
