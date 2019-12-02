'use strict'
// dsfsd//cdsdc//assd
var gProjs = [];
var gId = 1;

function createProject(name,title,description, imgUrl,projUrl) {
    return {
        name,
        title,
        description,
        imgUrl,
        projUrl,
        id: gId++
    }
}
createProjects();
function createProjects() {
debugger
gProjs.push(createProject('Minesweeper-game','Minesweeper-game Minesweeper-game Minesweeper-game Minesweeper-game', 'Minesweeper-game', 'img/minesweeper/Minesweeper.png','https://arkadiyz.github.io/Minesweeper-game1/'));
gProjs.push(createProject('Threads','Threads Threads Threads Threads Threads Threads Threads', 'Illustration', 'img/BOOK-SHOP/book-shop.jpg','https://arkadiyz.github.io/shop-books/'));


}

function getProjs() {
    debugger
    return gProjs;
}

function getProjectById(idProject) {

    return gProjs.find(function (proj) {
       return proj.id === idProject; 
    });
}