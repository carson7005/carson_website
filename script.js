
console.log("Javascript is connected!");
const buttons = document.querySelectorAll('button');
const output = document.getElementById('output');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (output.value === 'C') {
            output.value = '';
        } else if (output.value === '=') {
            try {
            output.value = eval(output.value);
          } catch {
            output.value = 'Error';
          }
        } else {
            output.value += value;
        }
    });
});


