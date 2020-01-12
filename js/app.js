/**
 * Todolist
 */

var app = {
  counter: 0,
  init: function () {
    // je veux pouvoir acceder dans toute mon app à la div todo, donc je la stock dans une proprieté
    app.todo = document.getElementById('todo');
    // creer le formulaire pour creer une todo
    app.createForm();
    // creer le compteur
    app.createCount();
    // creer la liste des todos
    app.createList();
  },

  createForm: function () {
    // creer le formulaire
    var form = document.createElement('form');
    form.id = 'todo-form';
    form.addEventListener('submit', app.addTodo);
    //  creer un input
    var input = document.createElement('input');
    input.type = 'text';
    input.id = 'todo-input';
    input.placeholder = 'Add task';
    // je rends dispo mon input dans toute l'app
    app.input = input;
    // ajouter mon input dans le formulaire
    form.appendChild(input);
    // ajouter mon formulaire dans la zone #todo
    app.todo.appendChild(form);
  },

  createCount: function () {
    // je crée une div
    var counter = document.createElement('div');
    // je mets un id à cette div
    counter.id = 'todo-counter';
    app.todo.appendChild(counter);
    // je prends  la div et je la rends accessible dans app.counterDOM
    app.counterDOM = counter;
    app.updateCount();
    app.todo.appendChild(counter);
  },
  updateCount: function () {
    app.counterDOM.textContent = `${app.counter} taches(s) en cours`;
  },

  createList: function () {
    var list = document.createElement('ul');
    list.id = 'todo-list';
    //  je rends dispo la liste pour d'autres methodes
    app.list = list;
    // je prends ma zone todo de mon app et je lui ajoute un enfant list
    app.todo.appendChild(list);
  },

  addTodo: function (evt) {
    evt.preventDefault();
    // j'ai besoin de recuper le texte saisi dans l'input
    var value = app.input.value;
    // je verifie ce texte (pas vide)
    if (value) {
      // je veux generer une nouvelle todo dans le DOM
      app.generateItem(value);
      // j'augmente la valeur du compteur
      app.counter++;
      //  je mets à jour le DOM
      app.updateCount();
      // Je vide l'input
      app.input.value = '';
    }
  },

  generateItem: function (text) {
    // je crée le li representant une todo
    var item = document.createElement('li');
    item.className = 'todo';
    // je crée la checkbox
    var checkbox = document.createElement('input');
    checkbox.className = 'todo-check';
    checkbox.type = 'checkbox';
    // j'ajoute la checkbox dans la todo
    item.appendChild(checkbox);
    // je crée le texte de la todo
    var paragrah = document.createElement('span');
    // le tetxte sera égal au texte reçu en parametre de la fonction
    paragrah.textContent = text;
    // je mets le texte dans la todo
    item.appendChild(paragrah);
    // Je mets la todo dans LES todos
    app.list.appendChild(item);
  }

};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);