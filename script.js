
document.getElementById("fechaActual").textContent =
    new Date().toLocaleDateString();


const agregarBtn = document.getElementById("agregarLibro");
const tabla = document.getElementById("tablaLibros");
const contador = document.getElementById("contadorLibros");


agregarBtn.addEventListener("click", function() {

    const titulo = document.getElementById("tituloLibro").value;
    const autor = document.getElementById("autorLibro").value;
    const categoria = document.querySelector("#categoriaLibro").value;

    if(titulo === "" || autor === "" || categoria === ""){
        alert("Todos los campos son obligatorios ❌");
        return;
    }

    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${titulo}</td>
        <td>${autor}</td>
        <td class="categoria">${categoria}</td>
        <td><button class="eliminarBtn">Eliminar</button></td>
    `;

    tabla.appendChild(fila);
    actualizarContador();

    document.getElementById("tituloLibro").value = "";
    document.getElementById("autorLibro").value = "";
    document.getElementById("categoriaLibro").value = "";
});

tabla.addEventListener("click", function(e){
    if(e.target.classList.contains("eliminarBtn")){
        e.target.closest("tr").remove();
        actualizarContador();
    }
});

document.getElementById("filtrarNovela").onclick = function(){
    filtrar("Novela");
};

document.getElementById("filtrarTecnologia").onclick = function(){
    filtrar("Tecnología");
};

document.getElementById("mostrarTodos").onclick = function(){
    const filas = document.querySelectorAll("#tablaLibros tr");
    filas.forEach(f => f.style.display = "table-row");
};

function filtrar(tipo){
    const filas = document.querySelectorAll("#tablaLibros tr");
    filas.forEach(f => {
        const categoria = f.querySelector(".categoria").textContent;
        f.style.display = categoria === tipo ? "table-row" : "none";
    });
}


function actualizarContador(){
    const total = document.querySelectorAll("#tablaLibros tr").length;
    contador.textContent = total;
}


document.getElementById("modoOscuro").addEventListener("click", function(){
    document.body.classList.toggle("modoOscuro");
});