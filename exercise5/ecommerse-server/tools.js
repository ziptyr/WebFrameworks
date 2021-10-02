const fs = require('fs');
const {v4: uuidv4} = require('uuid');
const imagePath = 'images/';
var to = require('to-case');


class Item {
  constructor({title, manufacturer, rating, ratings, price}) {
    this.id = uuidv4();
    this.title = title;
    this.manufacturer = manufacturer;
    this.rating = rating;
    this.ratings = ratings;
    this.price = price;
    this.image = this.getImage();
  }

  getImage() {
    let slug = to.slug(this.title) + '.jpeg';
    if (fs.existsSync(__dirname + '/' + imagePath + slug)) {
      return slug;
    } else {
      return 'missing.png';
    }
  }
}


class Customer {
  #id;
  #name;
  #address;
  #cart;
  #invoice;
  #invoices;

  constructor(name, address) {
    this.#id = uuidv4();
    this.#name = name;
    this.#address = address;
    this.#cart = this.getEmptyCart();
    //this.#invoice = {};
    this.#invoices = [];
  }

  getEmptyCart() {
    return {'total': 0, 'items': []};
  }

  addToCart(item, qty) {
    let index = this.cart.items.findIndex(c => c.item.id === item.id);

    this.cart.total += item.price * qty;
    if (index === -1) {
      this.cart.items.push({'item': item, 'qty': qty});
    } else {
      this.cart.items[index].qty += qty;
    }
  }

  removeCart() {
    this.#cart = this.getEmptyCart();
  }

  removeItemFromCart(id) {
    let index = this.cart.items.findIndex(c => c.item.id === id);

    if (index !== -1) {
      this.#cart.items.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  buyCart() {
    this.#invoices.push({'id': uuidv4(), 'cart': this.cart});
    this.removeCart();
  }

  getInvoice(invoiceId) {
    let invoice = this.#invoices.find(i => i.id === invoiceId);

    return {
      ...this.getCustomer(),
      //'total': total,
      'invoice': invoice
    };
  }

  getInvoices() {
    return {...this.getCustomer(), 'invoices': this.#invoices};
  }

  getCustomer() {
    return {
      'id': this.id,
      'name': this.name,
      'address': this.address
    }
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get address() {
    return this.#address;
  }

  get cart() {
    return this.#cart;
  }
}


const ignoreCaseIncludes = (sentence, subString) => {
  let str = sentence.toLowerCase();
  let subStr = subString.toLowerCase();
  return str.includes(subStr);
}


module.exports = {
  Item,
  Customer,
  ignoreCaseIncludes,
  imagePath
};
