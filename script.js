const labels = document.querySelectorAll('.form-control label');
labels.forEach((label) => {
  // Distibute in an array and add then in a span
  label.innerHTML = label.innerText
    .split('')
    .map(
      // Addes a randpm trnsition delay
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join('');
});
