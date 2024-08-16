document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const provinciaSeleccionada = params.get("provincia");

    if (provinciaSeleccionada) {
        document.querySelector("#provincia").value = provinciaSeleccionada;
        procesaSeleccionProvincia(municArray, provinciaSeleccionada);
    }
});

function procesaSeleccionProvincia(municArray, provincia) {
    if (!provincia) {
        document.querySelector("#municipio-container").classList.add("invisible");
        return;
    }
    document.querySelector("#municipio-container").classList.remove("invisible");
    let arrayMunic = filtraMunicipios(provincia, municArray);
    cargarMunicipios(arrayMunic);
}

function filtraMunicipios(provincia, municArray) {
    let array = [];
    for (let elem of municArray) {
        if (elem.provincia === provincia) {
            array.push(elem);
        }
    }
    return array;
}

/*
function cargarMunicipios(arrayMunic) {
    let municipios = document.querySelector("#municipios");
    let clonado = municipios.cloneNode(false);
    clonado.disabled = false;

    for (let elem of arrayMunic) {
        let opt = document.createElement("option");
        opt.value = elem.municipio;
        opt.innerText = elem.municipio;
        clonado.appendChild(opt);
    }
    municipios.replaceWith(clonado);
}

function muestraCodigoPostal(municArray) {
    let municipio = document.querySelector("#municipios").value;
    let codMunicTxt = document.querySelector("#codMunicTxt");

    for (let elem of municArray) {
        if (elem.municipio === municipio) {
            codMunicTxt.innerText = `Nombre: ${municipio} (${elem.provincia}) 
            Código Municipio: ${elem.cod_postal}`;
            return;
        }
    }
}

document.querySelector("#codMunicBtn").addEventListener("click", function() {
    muestraCodigoPostal(municArray);
});
*/

function cargarMunicipios(arrayMunic){
    let tabla = document.querySelector("#municipios-table tbody")
    tabla.innerHTML = ''

    for(let elem of arrayMunic) {
        let fila = document.createElement("tr")
        
        let celdaMunicipio = document.createElement("td")
        celdaMunicipio.innerText = elem.municipio
        fila.appendChild(celdaMunicipio)

        let celdaCodigoPostal = document.createElement("td")
        celdaCodigoPostal.innerText = elem.cod_postal
        fila.appendChild(celdaCodigoPostal)

        tabla.appendChild(fila)
    }
}