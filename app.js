import Biblioteca from "./Clases/Biblioteca.js";
import Usuario from "./Clases/Usuario.js";
import Libro from "./Clases/Libro.js";

const inputRegisterLibros = document.querySelector("#registroLibros")
const inputRegisterUsers = document.querySelector("#registroUsuarios")
const tituloLibro = document.querySelector("#tituloLibro")
const isbnLibro = document.querySelector("#isbnLibro")
const autorLibro = document.querySelector("#autorLibro")
const nombreUsuario = document.querySelector("#nombreUsuario")
const librosPrestados = document.querySelector("#librosPrestados")
const listadoLibros = document.querySelector(".listadoLibros")

const librosContainer = document.querySelector(".libros")
const usuariosContainer = document.querySelector(".usuarios")

const newBiblioteca = new Biblioteca()

const localstorage = JSON.parse(localStorage.getItem("libros")) || [];

inputRegisterLibros.addEventListener("submit", (e) => {
    e.preventDefault()
    let titulo = tituloLibro.value
    let isbn = isbnLibro.value
    let autor = autorLibro.value

    const newLibro = new Libro(titulo, autor, isbn)

    newBiblioteca.agregarLibros(newLibro)
    printLibros()
    //Revisar como guardar en el localStorage al crear el item  

})

const printLibros = () => {
    listadoLibros.innerHTML = ""

    let localstorage = JSON.parse(localStorage.getItem("libros"))

    localstorage.forEach(({ titulo, autor, isbn, prestado }) => {

        const libroHTML = `<article>
                <h4>Nombre de libro: ${titulo}</h4>
                <p>Autor: ${autor}</p>
                <p>isbn: ${isbn}</p>
                <p>Prestado: ${prestado ? "si" : "no"}</p>
                <br>
              </article>`


        listadoLibros.innerHTML += libroHTML
    })

}

printLibros()

// console.log(JSON.parse(localStorage.getItem("libros")));
/* 
const createNewBook = (titulo, isbn, autor) => {


}
 */

