// Elementos del DOM
const mostrarFormularioBtn = document.getElementById('mostrarFormulario');
const formularioTarea = document.getElementById('formularioTarea');
const nuevaTareaInput = document.getElementById('nuevaTarea');
const agregarTareaBtn = document.getElementById('agregarTarea');
const listaTareas = document.getElementById('listaTareas').getElementsByTagName('tbody')[0];


let tareas = [];


mostrarFormularioBtn.addEventListener('click', () => {
    if (formularioTarea.style.display === 'none' || formularioTarea.style.display === '') {
        formularioTarea.style.display = 'block';
    } else {
        formularioTarea.style.display = 'none';
    }
});


agregarTareaBtn.addEventListener('click', () => {
    const tareaDescripcion = nuevaTareaInput.value.trim();
    if (tareaDescripcion !== '') {
        tareas.push(tareaDescripcion);
        actualizarListaTareas();
        nuevaTareaInput.value = ''; 
        formularioTarea.style.display = 'none'; 
    } else {
        alert('Por favor, ingresa una descripción para la tarea.');
    }
});


function actualizarListaTareas() {
    listaTareas.innerHTML = ''; 
    tareas.forEach((tarea, index) => {
        const fila = document.createElement('tr');

        const celdaTarea = document.createElement('td');
        celdaTarea.textContent = tarea;
        fila.appendChild(celdaTarea);

        const celdaAccion = document.createElement('td');
        const finalizarBtn = document.createElement('button');
        finalizarBtn.textContent = 'Finalizar';
        finalizarBtn.className = 'btn btn-danger';
        finalizarBtn.addEventListener('click', () => {
            eliminarTarea(index);
        });
        celdaAccion.appendChild(finalizarBtn);
        fila.appendChild(celdaAccion);

        listaTareas.appendChild(fila);
    });
}


function eliminarTarea(index) {
    tareas.splice(index, 1);
    actualizarListaTareas();
}
