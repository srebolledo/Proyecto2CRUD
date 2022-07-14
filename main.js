//definición de variables
const contenedor = document.querySelector('tbody')
const formArticulo = document.querySelector('#form')
const descripcion = document.getElementById('descripcion')
const precio =document.getElementById('precio')
const stock =document.getElementById('stock')
const categoria =document.getElementById('categoria')
let arrayArticuloNuevo = []

   //Funciones

btnCrear.addEventListener('click', ()=>{
 })

const crearItem = (productoN) => {
    let item = {
        descripcion: productoN,
        estado: true

    }
}

const guardar = () => {
    localStorage.setItem('producto', JSON.stringify(arrayArticuloNuevo))
}
const verForm = () => {
    descripcion.innerHTML = '';

}

//addEvent

formArticulo.addEventListener('submit', (e)=>{
    e.preventDefault()
    let agregarProducto = document.querySelector('descripcion').value;

    crearItem(descripcion)
    guardar()

    formularioUI.reset()  


  
})
document.addEventListener('DOMContentLoaded', verForm)