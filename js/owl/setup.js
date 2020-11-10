$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

document.getElementById("itemSerie1").addEventListener("click", abrirSinopse1);
document.getElementById("itemSerie2").addEventListener("click", abrirSinopse2);
document.getElementById("itemSerie3").addEventListener("click", abrirSinopse3);
document.getElementById("itemSerie4").addEventListener("click", abrirSinopse4);
document.getElementById("itemSerie5").addEventListener("click", abrirSinopse5);
document.getElementById("itemSerie6").addEventListener("click", abrirSinopse6);
document.getElementById("itemSerie7").addEventListener("click", abrirSinopse7);


function abrirSinopse1() {
    let x = document.getElementById('itemSerie1')
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function abrirSinopse2() {
    let x = document.getElementById('itemSerie2')
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function abrirSinopse3() {
    let x = document.getElementById('itemSerie3')
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function abrirSinopse4() {
    let x = document.getElementById('itemSerie4')
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function abrirSinopse5() {
    let x = document.getElementById('itemSerie5')
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function abrirSinopse6() {
    let x = document.getElementById('itemSerie6')
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function abrirSinopse7() {
    let x = document.getElementById('itemSerie7')
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}