'use strict'

const gNames = ['Sokoban', 'MineSweeper', 'Space invaders', 'Calculator', 'Touch Nums', 'Ball Board']
const gTiles = ['Push boxes', 'Mine sweeper', 'Kill aliens',
    'Simple calculator', 'Find out numbers', 'Eliminate balls']

const gProjects = createProject(gNames, gTiles);

function createProject(names, tiles) {
    var projects = []
    for (var i = 0; i < names.length; i++) {
        projects[i] = {}
        projects[i].name = names[i]
        projects[i].title = tiles[i]
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
    <div class="modal-content">
    <div class="close-modal" data-dismiss="modal">
    <div class="lr">
    <div class="rl"></div>
    </div>
    </div>
    <div class="container">
    <div class="row">
    <div class="col-lg-8 mx-auto">
    <div class="modal-body">
    <h2>${gProjects[idx].name}</h2>
    <p class="item-intro text-muted">${gProjects[idx].title}.</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${idx + 1}.png" alt="">
    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
    blanditiis
    dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
    cupiditate,
    maiores repudiandae, nostrum, reiciendis facere nemo!</p>
    <ul class="list-inline">
    <li>Date: January 2017</li>
    <li>Client: Threads</li>
    <li>Category: Illustration</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>`
        document.querySelector('.portfolio-modal').innerHTML = strHtml              
}














