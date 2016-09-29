(function(window) {
  // namespace our App
  window.App = window.App || {};

  // each state will prepare the data to be rendered
  // then have a function that returns the new state dom tree

  class People {
    // prepare the data
    constructor(){
      // execute an xhr request to http://swapi.co/api/people endpoint
      this.people = [];
      App.utils.Get('http://swapi.co/api/people', (data) => {
        console.log("data", data);
        // this.people = data.results;
      });
    }

    // return a single dom element to be added to the view
    render(){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      const items = this.people.map( person => {
        let item = document.createElement('li');
        item.innerHTML = person;
        return item;
      });

      items.forEach( list.appendChild.bind(list) );

      view.appendChild(list);
      return view;
    }

  }

  class Places {
    // prepare the data
    constructor(){
      this.places = ['HI', 'CA', 'NY'];
    }

    // return a single dom element to be added to the view
    render(){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      const items = this.places.map( place => {
        let item = document.createElement('li');
        item.innerHTML = place;
        return item;
      });

      items.forEach( list.appendChild.bind(list) );

      view.appendChild(list);
      return view;
    }

  }

  class Spaceships {
    // prepare the data
    constructor(){
      this.spaceships = ['Serenity', 'Enterprise', 'Millenium Falcon'];
    }

    // return a single dom element to be added to the view
    render(){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      const items = this.spaceships.map( spaceship => {
        let item = document.createElement('li');
        item.innerHTML = spaceship;
        return item;
      });

      items.forEach( list.appendChild.bind(list) );

      view.appendChild(list);
      return view;
    }

  }

  window.App.states = {
    People,
    Places,
    Spaceships
  };

}(window));
