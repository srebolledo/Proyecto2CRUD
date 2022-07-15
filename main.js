
let arrayArticulos = []
let tabla1 = document.getElementById('tabla1')

function llenarTabla(){
    tabla1.innerHTML=''

    arrayArticulos.forEach((producto, index) => {
        tabla1.innerHTML+= `
        <tr>
            <td>${index +1}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio}</td>
            <td>${producto.stock}</td>
            <td>
                <span class="mx-3 float-end">
                    <i class="fa-solid editar fa-pen-to-square mx-2"></i>
                    <i class="fa-solid trash fa-trash-can mx-2"></i>
                </span>
                </td>
        </tr>
        `

    })
    accionBtn()

}
function accionBtn(){
    let btnEditar = Array.from(document.getElementsByClassName('editar'))
    let btnTrash = Array.from(document.getElementsByClassName('trash'))
    
console.log(btnEditar);
//falta los aggregar eventListener
}
const guardar = () => {
     localStorage.setItem('producto', JSON.stringify(arrayArticulos))
 }
 const verForm = () => {
     descripcion.innerHTML = '';
 }


 
llenarTabla()

let nombre = document.getElementById('descripcion')
let price = document.getElementById('precio')
let cantidad = document.getElementById('stock')
let boton = document.getElementById('btnCrear')

boton.addEventListener('click', agregarProducto)

function agregarProducto(){
    let producto = {
        descripcion: nombre.value,
        precio: price.value,
        stock: cantidad.value,

    }
    arrayArticulos.push(producto)
    llenarTabla()
    
}