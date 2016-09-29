// instantiate states when user requests the state

(function(window) {
  // namespacing App
  window.app = window.app || {};

  // map "routes" to "states"
  class Router {

    constructor(containerId){
      this.container = document.getElementById(containerId);
    }

    // takes in a "route" and renders to the container
    navigate(route){
      let state = null;

      switch(route){
        case 'people':
          state = new app.states.People();
          break;
        case 'places':
          state = new app.states.Places();
          break;
        case 'spaceships':
          state = new app.states.Spaceships();
          break;
      }

      // wait for state to be rendered
      // then, append the element to the view
      state.rendered( (element) => {
        this.container.innerHTML = '';
        this.container.appendChild( element );
      });
    }
  }

  window.app.Router = new Router('container');

}(window));
