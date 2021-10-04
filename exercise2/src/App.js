import React from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Title from './components/Title';


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
  }

  addOrAppend(name, qty, unit) {
    if (this.checkIfItemInList(name)) this.addItem(name, qty);
    else this.appendItem(name, qty, unit);
  }

  addItems (name, quantity) {
    return () => this.addOrAppend(name, quantity)
  }

  render() {
    const {applicationDescription, applicationName} = this.props;
    return (
      <div className='shoppingList'>
        <Title 
          applicationDescription={ applicationDescription }
          applicationName={ applicationName } />
        <ShoppingList items={ this.state.items } />

        <button onClick={
          this.addItems('Carrots', Math.floor(Math.random() * 100))
        }>
          Add carrots
        </button>
        <button onClick={
          this.addItems('Strawberries', Math.floor(Math.random() * 100))
        }>
          Add strawberries
        </button>
        <button onClick={
          this.addItems('Yogurt', Math.floor(Math.random() * 100))
        }>
          Add yogurt
        </button>
        <button onClick={
          this.addItems('Beer', Math.floor(Math.random() * 100))
        }>
          Add beer
        </button>
      </div>
    )
  }
}


export default App;
