(function(window) {
  // namespace our App
  window.App = window.App || {};

  // each state will prepare the data to be rendered
  // then have a function that returns the new state dom tree

  class People {
    // prepare the data
    constructor(){
      this.people = ['jon', 'joe', 'ray'];
    }

    // return a single dom element to be added to the view
    render(){
      const view = document.createElement('div');
      view.innerHTML = 'it is working';

      return view;
    }

  }

  window.App.states = {
    People
  };

}(window));
