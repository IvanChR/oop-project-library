class Biblioteca {
    constructor(libros, usuarios) {
        this.libros = JSON.parse(localStorage.getItem("libros")) || [],
            this.usuarios = [];
    }
    agregarLibros(libro) {
        this.libros.push(libro)

        console.log(this.libros)

        JSON.parse(localStorage.getItem("libros"))
        localStorage.setItem("libros", JSON.stringify(this.libros))
        JSON.parse(localStorage.getItem("libros"))

        return console.log(this.libros)
    }
    registrarUsuario(usuario) {
        usuarios.push(usuario)
    }
    prestarLibro(isbn, idUsuario) { }

    getLibros() {
        return this.libros
    }
}

export default Biblioteca;