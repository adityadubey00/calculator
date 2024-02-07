let input = document.getElementById('inputBox')
let button = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML)

            string += e.target.innerHTML;
        input.value = string;
    })
})