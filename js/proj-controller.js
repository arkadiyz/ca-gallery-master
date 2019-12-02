'use strict'
function initPage() {
    debugger
    renderPorjs()

}

function renderPorjs() {
    var projs = getProjs();
    var strHtml = ``;
    var elDivProjs = $('.proj-container');
    strHtml = projs.map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" onclick="getModal(${project.id})" href="#portfolioModal4"> 
        <div class="portfolio-hover"> 
        <div class="portfolio-hover-content"> 
        </div>     
        </div> 
        <img class="img-fluid" src="${project.imgUrl}" > 
        </a> 
        <div class="portfolio-caption"
        <h4>${project.name}</h4>
        <p class="text-muted">${project.description}</p>
        </div> 
        </div>`
    });
    elDivProjs.html(strHtml.join(''));
}

function submitEmail() {
    var subject = $('.subject-of-email').val();
    var text = $('.massage-of-email').val();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=me@example.com&su=${subject}&body=${text}&bcc=someone.else@example.com`)
}

function getModal(projId) {
    debugger
    var proj = getProjectById(projId)
    var elModal = $('.modal-body');
    var strHtml = ``;
    strHtml = `
      <h2>${proj.name}</h2>
      <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
      <img class="img-fluid d-block mx-auto" src="${proj.imgUrl}" alt="">
      <p>${proj.title}</p>
      <a href="${proj.projUrl}" target="_blank">
      <button type="button" class="btn btn-primary">${proj.name}</button></a>
      
      <button class="btn btn-primary" data-dismiss="modal" type="button">   
          <i class="fa fa-times"></i>
          Close Project</button>`
    elModal.html(strHtml);

}   



