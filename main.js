//Declaración Variables
let formulario1 = document.getElementById('formulario')
let nombre = document.getElementById('descripcion')
let price = document.getElementById('precio')
let cantidad = document.getElementById('stock')
let boton = document.getElementById('btnCrear')
let arrayArticulos = []
let tabla1 = document.getElementById('tabla1')

//Funciones
const agregarProducto = () =>{
    let producto = {
        descripcion: nombre.value,
        precio: price.value,
        stock: cantidad.value,
        
    }
    arrayArticulos.push(producto)
    guardarLS();
    
}
const guardarLS = () => {
    localStorage.setItem('products', JSON.stringify(arrayArticulos))
    
    llenarTabla()
}

const llenarTabla = () =>{
    
    tabla1.innerHTML=''
    
    arrayArticulos = JSON.parse(localStorage.getItem('products'))
    
    if (arrayArticulos === null){
        arrayArticulos = []
    }else {
        arrayArticulos.forEach((producto, index) => {
            tabla1.innerHTML+= `
            <tr>
                <td>${index +1}</td>
                <td>${producto.descripcion}</td>
                <td>${producto.precio}</td>
                <td>${producto.stock}</td>
                <td>
                    <span class="mx-3 float-end">
                        <i class="fa-solid editar fa-pen-to-square mx-3"></i>
                        <i class="fa-solid trash fa-trash-can mx-3"></i>
                    </span>
                </td>
            </tr>
            `
        })
    }
}


// Why here?
accionBtn()

function accionBtn(){
    let btnEditar = Array.from(document.getElementsByClassName('editar'))
    let btnTrash = Array.from(document.getElementsByClassName('trash'))
    
    
}

//console.log(btnEditar);
//falta los agregar eventListener

boton.addEventListener('click', agregarProducto)

const verForm = () => {
    descripcion.innerHTML = '';
}


llenarTabla()
