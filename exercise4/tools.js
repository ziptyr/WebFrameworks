const {v4: uuidv4} = require('uuid');

class User {
  constructor(name, address) {
    this.id = uuidv4();
    this.name = name;
    this.address = address;
    this.cart = this.getEmptyCart();
    this.invoices = [];
  }

  getEmptyCart() {
    return {"total": 0, "items": []};
  }

  getCart() {
    return this.cart;
  }

  addToCart(newItem, qty) {
    let sameItem = this.cart.items.find(c => c.item.id === newItem.id);

    this.cart.total += newItem.price * parseInt(qty);
    if (typeof sameItem === 'undefined') {
      this.cart.items.push({"item": newItem, "qty": parseInt(qty)});
    } else {
      sameItem.qty += parseInt(qty);
    }
  }

  removeCart(id) {
    this.cart = this.getEmptyCart();
  }

  buyCart() {
    this.invoices.push({"id": uuidv4(), "cart": this.cart})
    this.removeCart();
  }

  getInvoice(id) {
    let invoice = this.invoices.find(i => i.id === id);

    return {
      ...this.getCustomer(),
      "invoice": invoice
    };
  }

  getInvoices() {
    return {...this.getCustomer(), "invoices": this.invoices};
  }

  removeItemFromCart(id) {
    let index = this.cart.items.findIndex(c => c.item.id === id);

    if (index !== -1) {
      this.cart.items.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  removeInvoice(id) {
    let index = this.invoices.findIndex(i => i.id === id);

    if (index !== -1) {
      this.invoices.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  getCustomer() {
    return {
      "id": this.id,
      "name": this.name,
      "address": this.address
    }
  }
}


let ignoreCaseIncludes = (sentence, subString) => {
  let str = sentence.toLowerCase();
  let subStr = subString.toLowerCase();
  return str.includes(subStr);
}


module.exports = {
  User,
  ignoreCaseIncludes
}