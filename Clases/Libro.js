class Libro {
    constructor(titulo, autor, isbn, prestado = false) {
        this.titulo = titulo,
            this.autor = autor,
            this.isbn = isbn,
            this.prestado = prestado;
    }

    prestar() { }
    devolver() { }
    getTitulo() {
        return this.titulo
    }
    getAutor() {
        return this.autor
    }
    getIsbn() {
        return this.isbn
    }

}
export default Libro