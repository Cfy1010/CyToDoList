/**
 * Todolist
 */
var app = {
  init: function () {
    // je veux pouvoir acceder dans toute mon app à la div todo, donc je la stock dans une proprieté
    app.todo = document.getElementById('todo');
    // creer le formulaire pour creer une todo
    app.createForm();
    // creer le compteur
    // app.createCount();
    // // creer la liste des todos
    // app.createList();
  },

  createForm: function () {
    // creer le formulaire
    var form = document.createElement('form');
    form.id = 'todo-form';
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    //  creer un input
    var input = document.createElement('input');
    input.type = 'text';
    input.id = 'todo-input';
    input.placeholder = 'Add task';
    // ajouter mon input dans le formulaire
    form.appendChild(input);
    // ajouter mon formulaire dans la zone #todo
    app.todo.appendChild(form);
  },
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);