'use strict'

const gNames = ['Sokoban', 'Space invaders', 'Ball Board', 'Calculator', 'Touch Nums', 'MineSweeper']
const gRfers = ['Sokoban', 'Space-Invaders', 'Ball-board', 'Calculator', 'Touch-nums', 'Mine-sweeper']

const gTiles = ['Push boxes', 'Kill aliens', 'Eliminate balls',
    'Simple calculator', 'Find out numbers', 'Mine sweeper']

const gProjects = createProject(gNames, gTiles, gRfers);

function createProject(names, tiles, refers) {
    var projects = []
    for (var i = 0; i < names.length; i++) {
        projects[i] = {}
        projects[i].name = names[i]
        projects[i].title = tiles[i]
        projects[i].href = refers[i]
    }
    return projects
}

renderPortfolio(gProjects)

function renderPortfolio(projects) {
    var strHTML = ''
    for (var i = 0; i < projects.length; i++) {
        strHTML += `<div class="col-md-4 col-sm-6 portfolio-item">
    \n<a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
    \n<div class="portfolio-hover" onclick="renderModal(${i})">
    \n<div class="portfolio-hover-content">
    \n<i class="fa fa-plus fa-3x"></i>
    \n</div>
    \n</div>
    \n<img class="img-fluid" src="img/portfolio/${i + 1}.png" alt="">
    \n</a>
    \n<div class="portfolio-caption">
    \n<h4>${projects[i].name}</h4>
    \n<p class="text-muted">${projects[i].title}</p>
    \n</div>
    \n</div>`
    }
    document.querySelector('.projects').innerHTML = strHTML
}

function renderModal(idx) {
    var strHtml =
        `<div class="modal-dialog">
    \n<div class="modal-content">
    \n<div class="close-modal" data-dismiss="modal">
    \n<div class="lr">
    \n<div class="rl"></div>
    \n</div>
    \n</div>
    \n<div class="container">
    \n<div class="row">
    \n<div class="col-lg-8 mx-auto">
    \n<div class="modal-body">
    \n<h2>${gProjects[idx].name}</h2>
    \n<p class="item-intro text-muted">${gProjects[idx].title}.</p>
    \n<a href="https://israel-weiss.github.io/${gProjects[idx].href}/"><img class="img-fluid d-block mx-auto" src="img/portfolio/${idx + 1}.png" alt=""></a>
    \n<p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
    \nblanditiis
    \ndolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
    \ncupiditate,
    \nmaiores repudiandae, nostrum, reiciendis facere nemo!</p>
    \n<ul class="list-inline">
    \n<li>Date: January 2017</li>
    \n<li>Client: Threads</li>
    \n<li>Category: Illustration</li>
    \n</ul>
    \n<button class="btn btn-primary" data-dismiss="modal" type="button">
    \n<i class="fa fa-times"></i>
    \nClose Project</button>
    \n</div>
    \n</div>
    \n</div>
    \n</div>
    \n</div>
    \n</div>`
    document.querySelector('.portfolio-modal').innerHTML = strHtml
}














