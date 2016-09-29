(function(window) {
  // namespace our App
  window.app = window.app || {};

  // each state will prepare the data to be rendered
  // then have a function that returns the new state dom tree

  class People {
    // prepare the data
    constructor(){
      // initial state
      this.people = [];

      // callback function to run after data is ready
      this.ready = placeholder => true;

      // execute an xhr request to http://swapi.co/api/people endpoint
      App.utils.Get('http://swapi.co/api/people', (data) => {
        const parsedPeopleData = JSON.parse(data);
        this.people = parsedPeopleData.results;
        this.render(this.ready);
      });
    }

    // render the data, when data is ready
    // sets the "ready to rendor" callback
    rendered(callback){
      this.ready = callback;
    }

    // send the final rendered dom element to callback
    // readyFunc : function(element)
    render(readyFunc){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      const items = this.people.map( person => {
        let item = document.createElement('li');
        item.innerHTML = person.name;
        return item;
      });

      items.forEach( list.appendChild.bind(list) );

      view.appendChild(list);
      readyFunc(view);
    }

  }

  class Places {

    constructor(){
      this.places = [];
      this.ready = placeholder => true;

      App.utils.Get('http://swapi.co/api/planets', (data) => {
        this.places = JSON.parse(data).results;
        this.render(this.ready);
      });
    }

    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      const items = this.places.map( place => {
        let item = document.createElement('li');
        item.innerHTML = place.name;
        return item;
      });

      items.forEach( list.appendChild.bind(list) );

      view.appendChild(list);
      readyFunc(view);
    }

  }

  class Spaceships {

    constructor(){
      this.spaceships = [];
      this.ready = placeholder => true;

      App.utils.Get('http://swapi.co/api/starships', (data) => {
        this.spaceships = JSON.parse(data).results;
        this.render(this.ready);
      });
    }

    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      const items = this.spaceships.map( spaceship => {
        let item = document.createElement('li');
        item.innerHTML = spaceship.name;
        return item;
      });

      items.forEach( list.appendChild.bind(list) );

      view.appendChild(list);
      readyFunc(view);
    }

  }

  window.app.states = {
    People,
    Places,
    Spaceships
  };

}(window));
