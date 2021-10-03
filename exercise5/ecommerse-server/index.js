const express = require('express');
const app = express();
const port = 4000;
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const {Item, Items, Customer, ignoreCaseIncludes, imagePath} = require('./tools.js');
const rawData = require('./item-data.json');
const items = rawData.map(item => new Item(item));
const customers = [new Customer('Aapeli Avuton', 'Aallonmuurtajantie')];


app.use(cors());
app.use(bodyParser());


// Items
app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/image/uri/:id', (req, res) => {
  let item = items.find(i => i.id === req.params.id);
  let path = './' + imagePath;
  let image = 'missing.png';

  if (typeof item !== 'undefined') {
    if (fs.existsSync(path + item.image)) {
      image = item.image;
    }
  }

  res.json({'path': './' + imagePath + image});
});

app.get('/items/image/:id', (req, res) => {
  let item = items.find(i => i.id === req.params.id);
  let path = __dirname + '/' + imagePath;
  let image = 'missing.png';

  if (typeof item !== 'undefined') {
    if (fs.existsSync(path + item.image)) {
      image = item.image;
    }
  }

  res.sendFile(path + image);
});

app.get('/items/:search', (req, res) => {
  let results = items.filter(i => {
    if (ignoreCaseIncludes(i.manufacturer, req.params.search)) return true;
    else if (ignoreCaseIncludes(i.title, req.params.search)) return true;
    else return false;
  });

  res.json(results);
});

app.post('/items', (req, res) => {
  let newItem = new Item({...req.body});
  items.push(newItem);
  res.json(items);
});

app.delete('/items/:id', (req, res) => {
  let index = items.findIndex(i => i.id === req.params.id);

  if (index !== -1) {
    items.splice(index, 1);
    res.json(items);
    //res.send('item deleted');
  } else {
    res.send('item not found');
  }
});

// Customers
app.get('/customers', (req, res) => {
  res.json(customers.map(c => c.getCustomer()));
});

app.post('/customers', (req, res) => {
  req.body.map(c => customers.push(new Customer(c.name, c.address)))
  res.send('customer added');
});

// Cart
app.get('/cart/:id', (req, res) => {
  let customer = customers.find(c => c.id === req.params.id);
  res.json(customer.cart)
});

app.post('/cart', (req, res) => {
  let customer = customers.find(c => c.id === req.body.customerId);
  let item = items.find(i => i.id === req.body.itemId);

  customer.addToCart(item, req.body.qty);
  res.send('item added for customer')
});

app.delete('/cart/:id', (req, res) => {
  let customer = customers.find(c => c.id === req.params.id);
  customer.removeCart();
  res.send('cart empty')
})

app.delete('/cart/:customerId/:itemId', (req, res) => {
  let customer = customers.find(c => c.id === req.params.customerId);

  let successfull = customer.removeItemFromCart(req.params.itemId);
  if (successfull === true) {
    res.send('item removed');
  } else {
    res.send('could not remove item');
  }
});

// Invoice
app.post('/invoice', (req, res) => {
  let customer = customers.find(c => c.id === req.body.id);
  customer.buyCart();
  res.send('items bought')
});

app.get('/invoice/:id', (req, res) => {
  let customer = customers.find(c => c.id === req.params.id);

  if (typeof customer !== 'undefined') {
    res.json(customer.getInvoices());
  } else {
    res.json();
  }
});

app.get('/invoice/:customerId/:invoiceId', (req, res) => {
  let customer = customers.find(c => c.id === req.params.customerId);
  let invoice = customer.getInvoice(req.params.invoiceId);
  res.json(invoice);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
