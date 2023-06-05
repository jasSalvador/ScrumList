/* usar sets para almacenar los datos relacionados con las casillas de verificación que se marcaron, y también para las actividades que 
deben realizarse. Éstos deben servir como parámetros para un elemento Map. Al seleccionar un elemento, se mostrará en consola dónde se almacenó 
y el número de casilla del checkbox en el Map. */

//const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//const tasks = document.querySelectorAll('input[type="text"]');

const listItems = document.querySelectorAll('.list-group li');
const set = new Set();
const map = new Map();

listItems.forEach(li => {
    const checkbox = li.querySelector('input[type="checkbox"]');
    const textInput = li.querySelector('input[type="text"]');

    checkbox.addEventListener('click', function (event) {
        //event.preventDefault();

        let check = event.target.id;
        let task = textInput.value;
        if (task) {
            let map = new Map(); 
            let maper = map.set(check, task);
            console.log(maper);
            //console.log(check);
        }
    });
});







