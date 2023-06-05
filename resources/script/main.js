const projectsSection = document.querySelector(".projects");
const interestsSection = document.querySelector(".interests");

const backendDiv = projectsSection.querySelector(".backend");
const frontendDiv = projectsSection.querySelector(".frontend");

const headers = document.getElementsByTagName("header");

for (let i = 0; i < headers.length; i++) {
    const header = headers[i];

    const tags = header.getElementsByClassName("tag");
    const projectTag = tags[0];
    const interestsTag = tags[1];

    projectsSection.addEventListener("mouseenter", e => {
        projectTag.setAttribute("style", "display : block");
    });
    projectsSection.addEventListener("mouseleave", e => {
        projectTag.setAttribute("style", "display : none");
    });

    interestsSection.addEventListener("mouseenter", e => {
        interestsTag.setAttribute("style", "display : block");
    });
    interestsSection.addEventListener("mouseleave", e => {
        interestsTag.setAttribute("style", "display : none");
    });
}

function Project(link, imageUrl, title, description, skills, period) {
    this.link = link;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.skills = skills;
    this.period = period;
}

function addProject(project, targetContainer, imageSize, imagePosition) {
    let container;
    if (targetContainer === "backend") {
        container = backendDiv;
    }
    else {
        container = frontendDiv;
    }

    const article = document.createElement("article");
    const a = document.createElement("a");
    const projectImg = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("h6");
    const skills = document.createElement("div");
    const period = document.createElement("span");
    
    article.setAttribute("class", project.title);
    a.setAttribute("href", project.link);
    a.setAttribute("target", "_blank");
    projectImg.setAttribute("class", "project-img");
    projectImg.setAttribute("style", `background: no-repeat ${imagePosition} url('${project.imageUrl}'); background-size: ${imageSize}`);
    title.setAttribute("class", "title");
    title.innerText = project.title;
    description.className = "description";
    description.innerText = project.description;
    skills.setAttribute("class", "skills");
    period.className = "period";
    period.innerText = `${project.period[0]} ~ ${project.period[1]}`;

    a.append(projectImg);
    article.append(a);
    article.append(title);
    article.append(description);
    project.skills.forEach(str => {
        const skill = document.createElement("span");
        skill.innerText = str;
        skills.append(skill);
    });
    article.append(skills);
    article.append(period);

    container.append(article);
}

const bookSearch = new Project(
    "/booksearch",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_PwgPp-mHql29Pz4lPfFk9TYexkRE_Jmr5g&usqp=CAU",
    "Book Search",
    "Book Search and Inquiry Service",
    ['VanilaJS', 'jQeury', 'Kakao Search API'],
    ['2023.03.10', "2023.03.13"]
);

addProject(bookSearch, "frontend", "contain", "center");

const omok = new Project(
    "/omok",
    "https://png.pngtree.com/png-clipart/20220109/big/pngtree-gobang-go-board-scratch-free-material-png-image_7029706.png",
    "Omok",
    "Omok game",
    ['VanilaJS'],
    ['2023.03.14', "2023.03.16"]
);

addProject(omok, "frontend", "contain", "center");

const intranet = new Project(
    "http://intranet-service.store",
    "https://www.kindpng.com/picc/m/21-211349_transparent-education-icon-png-college-and-career-icon.png",
    "Intranet",
    "Intranet Service",
    ['Java', 'VanilaJS' , 'Kakao Postcode API'],
    ['2023.04.10', "2023.04.21"]
);

addProject(intranet, "frontend", "contain", "center");

const campSite = new Project(
    "http://iluvcamping.site",
    "https://cdn-icons-png.flaticon.com/512/3365/3365326.png",
    "I Luv Camping",
    "Camping Reservation Site",
    ['Spring Boot', 'VanilaJS' , 'Kakao Map API'],
    ['2023.04.27', "2023.05.15"]
);

addProject(campSite, "frontend", "contain", "center");