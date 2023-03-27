let portfolio = document.getElementById('portfolio');

// Projects array. 
let projects = [
    {
        name: "Project 1",
        detail: "Description",
        col: "col-md-7",
        delay: 1700
    },
    {
        name: "Project 2",
        detail: "Description",
        col: "col-md-5",
        delay: 1200
    },
    {
        name: "Project 3",
        detail: "Description",
        col: "col-md-5",
        delay: 1700
    },  
    {
        name: "Project 4",
        detail: "Description",
        col: "col-md-7",
        delay: 1200
    }
]

projects.forEach((project) => {

    let div = document.createElement('div');
    div.classList.add('card-container', 'col-12');
    div.classList.add(project.col);
    div.setAttribute('data-aos', 'fade-up');
    div.setAttribute('data-aos-duration', project.delay)
    div.innerHTML = `
    <a href="">
        <div class="card card-proyecto p1">
            <div class="titulo-proyecto">
                <h3>${project.name}</h3>
                <p>${project.detail}</p>
            </div>
            <div class="flecha"><i class="bi bi-arrow-up-right"></i></div>
        </div>
    </a>
    `
    portfolio.append(div)
})