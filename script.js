let portfolio = document.getElementById('portfolio');

let projects = [
    {
        name: "Ecommerce",
        detail: "Javascript project",
        col: "col-md-7"
    },
    {
        name: "Huracan",
        detail: "HTML CSS project",
        col: "col-md-5"
    },
    {
        name: "Ecommerce",
        detail: "Javascript project",
        col: "col-md-5"
    },  
    {
        name: "Huracan",
        detail: "HTML CSS project",
        col: "col-md-7"
    }
]

projects.forEach((projecto) => {

    let div = document.createElement('div');
    div.classList.add('card-container', 'col-12');
    div.classList.add(projecto.col);
    div.innerHTML = `
    <a href="">
        <div class="card card-proyecto p1">
            <div class="titulo-proyecto">
                <h3>${projecto.name}</h3>
                <p>${projecto.detail}</p>
            </div>
            <div class="flecha"><i class="bi bi-arrow-up-right"></i></div>
        </div>
    </a>
    `
    portfolio.append(div)
})