import React from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Title from './components/Title';

/*function App() {
  const items = [
    { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
    { id: 1, value: 'Bananas', qty: 6, unit: 'pcs' },
    { id: 1, value: 'Bread', qty: 3, unit: 'x' },
    { id: 1, value: 'Eggs', qty: 16, unit: 'x' }
  ];

  const applicationName = "Shopping List";
  const applicationDescription =
    "The best shopping list, now with component title";

  return (
    <div className="shoppingList">
        <Title 
          applicationDescription={ applicationDescription }
          applicationName={ applicationName } />
        <ShoppingList items={ items } />
    </div>
  );
}*/


// Older class based react component
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

    /*setTimeout(() => {
      // Do not directly change state values
      //this.state.items = [];

      // Clears items
      //this.setState({items: []});

      // State cannot be directly modified
      //   Use spread operator to copy old array
      this.setState({
        items: [...this.state.items, {
          id: 5, value: 'Carrots', qty: 24, unit: 'x'}]
      })
    }, 2000);*/

    // Bind addSomeCarrots 'this'
    //this.addSomeCarrots = this.addSomeCarrots.bind(this);
  }

  appendItem = (name, qty, unit) => {
    this.setState({
      items: [...this.state.items, {
        id:this.state.items.length + 1,
        value: name, qty: qty, unit: unit
      }]
    })
  }

  addItem = (name, qty) => {
    this.setState({
      items: [...this.state.items].map((element) => {
        if (element.value === name) element.qty += qty;
        return element;
      })
    })
  }

  checkIfItemInList(value) {
    return this.state.items.map((element) => element.value).includes(value);

    // findIndex tyylillä
    /*return (
      this.state.items.findIndex(
        (element, index, array) => {
          if (element.value === value) return true;
          else return false;
        }
      ) !== -1 ? true : false
    );*/
  }

  addOrAppend(name, qty, unit) {
    if (this.checkIfItemInList(name)) this.addItem(name, qty);
    else this.appendItem(name, qty, unit);
  }

  /* depricated
  addSomeCarrots = () => {
    this.addOrAppend('Carrots', 5, 'pcs')
  }

  addStrawberries = () => {
    this.addOrAppend('Strawberries', 25, 'pcs')
  }

  addYogurt = () => {
    this.addOrAppend('Yogurt', 1, 'jar')
  }

  addBeer = () => {
    this.addOrAppend('Beer', 24, 'cans')
  }*/

  addItems (name, quantity) {
    return () => this.addOrAppend(name, quantity)
  }

  render() {
    const {applicationDescription, applicationName} = this.props;
    return (
      <div className="shoppingList">
          <Title 
            applicationDescription={ applicationDescription }
            applicationName={ applicationName } />
          <ShoppingList items={ this.state.items } />

          <button onClick={this.addItems('Carrots', 5)}>Add carrots</button>
          <button onClick={this.addItems('Strawberries', 25)}>
            Add strawberries
          </button>
          <button onClick={this.addItems('Yogurt', 1)}>Add yogurt</button>
          <button onClick={this.addItems('Beer', 24)}>Add beer</button>
      </div>
    )
  }
}


export default App;