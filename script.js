let portfolio = document.getElementById('portfolio');

// Projects array. 
let projects = [
    {
        name: "Smartech ecommerce",
        detail: "Description",
        image: "p1",
        col: "col-md-7",
        delay: 1700
    },
    {
        name: "Maria brewing",
        detail: "Description",
        image: "p2",
        col: "col-md-5",
        delay: 1200
    },
    {
        name: "Club Atletico Huracán (SADA)",
        detail: "Description",
        image: "p3",
        col: "col-md-5",
        delay: 1700
    },  
    {
        name: "Cooming soon",
        detail: "Description",
        image: "p4",
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
        <div class="card card-project ${project.image}">
            <div class="title-project">
                <h3>${project.name}</h3>
                <p>${project.detail}</p>
            </div>
            <div class="flecha"><i class="bi bi-arrow-up-right"></i></div>
        </div>
    </a>
    `
    portfolio.append(div)
})