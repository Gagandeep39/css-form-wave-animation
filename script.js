const labels = document.querySelectorAll('.form-control label');
labels.forEach((label) => {
  // Distibute in an array and add then in a span
  label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span>${letter}</span>`)
    .join('');
});
