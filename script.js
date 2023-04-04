let portfolio = document.getElementById("portfolio");
let projectView = document.getElementById("project");

// Projects array.
let projects = [
  {
    name: "Smartech ecommerce",
    tools: "Javascript, HTML and CSS",
    image: "p1",
    col: "col-md-7",
    delay: 1700,
    desc: "The web development project is a comprehensive solution for creating a stunning online presence. It utilizes cutting-edge technologies to ensure fast load times and optimal user experience on any device. The website's design is both aesthetically pleasing and user-friendly, making it easy for visitors to navigate and find what they're looking for. Additionally, the website includes a powerful content management system that allows for easy updates and management of website content. Whether you're launching a new business or revamping an existing one, this web development project is a perfect fit.",
    demo: "",
    code: "",
  },
  {
    name: "Maria Brewing",
    tools: "HTML, CSS, Sass and Bootstrap",
    image: "p2",
    col: "col-md-5",
    delay: 1200,
    desc: "The web development project is a comprehensive solution for creating a stunning online presence. It utilizes cutting-edge technologies to ensure fast load times and optimal user experience on any device. The website's design is both aesthetically pleasing and user-friendly, making it easy for visitors to navigate and find what they're looking for. Additionally, the website includes a powerful content management system that allows for easy updates and management of website content. Whether you're launching a new business or revamping an existing one, this web development project is a perfect fit.",
    demo: "",
    code: "",
  },
  {
    name: "Club Atletico Huracán (SADA)",
    tools: "HTML, CSS, Sass and Bootstrap",
    image: "p3",
    col: "col-md-5",
    delay: 1700,
    desc: "The web development project is a comprehensive solution for creating a stunning online presence. It utilizes cutting-edge technologies to ensure fast load times and optimal user experience on any device. The website's design is both aesthetically pleasing and user-friendly, making it easy for visitors to navigate and find what they're looking for. Additionally, the website includes a powerful content management system that allows for easy updates and management of website content. Whether you're launching a new business or revamping an existing one, this web development project is a perfect fit.",
    demo: "",
    code: "",
  },
  {
    name: "Cooming soon",
    tools: "Description",
    image: "p4",
    col: "col-md-7",
    delay: 1200,
    desc: "The web development project is a comprehensive solution for creating a stunning online presence. It utilizes cutting-edge technologies to ensure fast load times and optimal user experience on any device. The website's design is both aesthetically pleasing and user-friendly, making it easy for visitors to navigate and find what they're looking for. Additionally, the website includes a powerful content management system that allows for easy updates and management of website content. Whether you're launching a new business or revamping an existing one, this web development project is a perfect fit.",
    demo: "",
    code: "",
  },
];

// Project cards.
projects.forEach((project) => {
  let div = document.createElement("div");
  div.classList.add("card-container", "col-12");
  div.classList.add(project.col);
  div.setAttribute("data-aos", "fade-up");
  div.setAttribute("data-aos-duration", project.delay);

  let a = document.createElement("a");
  a.href = "javascript:void(0)";
  a.addEventListener("click", () => {
    // Project view.
    projectView.style.display = 'flex';

    // Create modal window. 
    let modal = document.createElement("div");
    modal.className = 'modal';
    modal.setAttribute('data-aos', 'fade-down');

    // Create button to close the modal window. 
    let a = document.createElement("a");
    a.href = 'javascript:void(0)';
    a.innerHTML = `<img src="../img/exit.svg" width="18">`;
    a.addEventListener('click', () => {
      projectView.style.display = 'none';
      modal.remove();
    })
    
    // Create the modal content. 
    modal.innerHTML = `
      <div class="row">
        <div class="col-12 col-md-6" data-aos="fade-down" data-aos-duration="1900">
          <h2>${project.name.toUpperCase()}</h2>
          <p>${project.tools}</p>
          <p>${project.desc}</p>
          <div class="project-links">
            <a href="">DEMO</a>
            <a href="">CODE</a>
          </div>
        </div>
        <div class="col-12 col-md-6" data-aos="fade-down" data-aos-duration="1900">
          <img class="img-fluid" src="../img/${project.image}.jpg">
        </div>
      </div>  
    `;

    modal.append(a);
    projectView.append(modal);
  });

  // Create the card of the project. 
  a.innerHTML = `
    <div class="card card-project ${project.image}">
        <div class="title-project">
            <h3>${project.name}</h3>
            <p>${project.tools}</p>
        </div>
        <div class="flecha"><i class="bi bi-arrow-up-right"></i></div>
    </div>
  `;

  div.append(a);
  portfolio.append(div);
});
