//variables locales
//este va con gatito # xq esta llamanda desde el id
//si uso query selector puedo llamar a un id o class
const formularioUI = document.querySelector('#formulario');
//este no va con gatito xq lo llama desde un class
//si ueso getelementbyid
const listaActividadesUI = document.getElementById('listaActividades')
//haremos el array que luego llenaremos
let arrayActividades = [];


//constantes
//las variables podemos ponerle mayuscula desde el inicio para diferenciarla de la funcion
const CrearItem = (actividad) =>{
    let item = {
        actividad: actividad,
        estado: false
    }
    //al item creado lo metemos dentro del array actividades
    arrayActividades.push(item);
    return item;
}

const GuardarDB = () => {
    localStorage.setItem('rutina', JSON.stringify(arrayActividades));
}

const PintarDB = () => {
    listaActividadesUI.innerHTML = '';
    arrayActividades = JSON.parse(localStorage.getItem('rutina'));

    if (arrayActividades === null) {
        arrayActividades = [];
    } else {
        arrayActividades.forEach(element => {
            arrayActividades.innerHTML += `
            <div class="alert alert-danger" role="alert">
                    <span class="material-symbols-outlined mr-2">
                    sprint
                    </span>
                    <b>Texto de la actividad</b> - Estado
                    <span class="float-right">
                        <span class="material-symbols-outlined">
                            done
                            </span>
                    </span>
                    <span>
                        <span class="material-symbols-outlined">
                        delete
                        </span>
                    </span>
                </div>
            `
        });
    }
}

//eventlistener

formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let actividadUI = document.querySelector('#actividad').value;

    CrearItem(actividadUI);
    GuardarDB();

    formularioUI.reset(); 

} )

//funciones




//evento del dom

document.addEventListener('DOMContentLoaded', PintarDB);