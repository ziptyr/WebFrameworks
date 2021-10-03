const express = require('express')
const app = express()
const port = 3000
const {v4: uuidv4} = require('uuid');
const bodyParser = require('body-parser');

const {User, ignoreCaseIncludes} = require('./tools');

const allowedSearchs = ['name', 'manufacturer', 'category'];

const users = [
  new User("Antti Aaltonen", "Mäntymäentie"),
  new User("Tiina Toivonen", "Niemipurontie")
];

const items = [
  {
    "id": uuidv4(),
    "name": "Moonlander Mk. I",
    "manufacturer": "ZSA Technology Labs",
    "category": "Peripherials",
    "description": "A next-generation ergonomic keyboard",
    "price": 365,
    "image": "moonlander-mk-i.png"
  },
  {
    "id": uuidv4(),
    "name": "Zlant",
    "manufacturer": "Ziptyze",
    "category": "Peripherials",
    "description": "40% ortholinear mechanical keyboard",
    "price": 290,
    "image": "zlant.png"
  },
  {
    "id": uuidv4(),
    "name": "Seasonic Focus GX 650W",
    "manufacturer": "Seasonic",
    "category": "PSU",
    "description": 
      "The newly upgraded FOCUS PX and GX series are"
      + "the successors to the FOCUS PLUS Series",
    "price": 80,
    "image": "seasonic-focus-gx-650w.png"
  }
]


app.use(bodyParser.json());

// Users
app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/id/:id', (req, res) => {
  let user = users.find(u => u.id === req.params.id);
  res.json(user)
});

app.post('/users', (req, res) => {
  users.push(new User(req.body.name, req.body.address));
  res.send('user created!');
});

// Users - Cart
app.get('/users/cart/:id', (req, res) => {
  let user = users.find(u => u.id === req.params.id);
  res.json(user.getCart());
});

app.post('/users/cart/:id/:item/:qty', (req, res) => {
  let user = users.find(u => u.id === req.params.id);
  let item = items.find(i => i.id === req.params.item);

  user.addToCart(item, req.params.qty);
  res.send('item added to cart');
});

app.get('/users/cart/buy/:id', (req, res) => {
  let user = users.find(u => u.id === req.params.id);
  user.buyCart();
  res.send('items bought')
});

app.delete('/users/cart/:id', (req, res) => {
  let user = users.find(u => u.id === req.params.id);
  user.removeCart();
  res.send('cart removed');
});

app.delete('/users/cart/:id/:item', (req, res) => {
  let user = users.find(u => u.id === req.params.id);
  let item = items.find(i => i.id === req.params.item);

  if (user.removeItemFromCart(item.id)) res.send('item removed');
  else res.send('error');
});

// Users - Invoice
app.get('/users/invoices/:id', (req, res) => {
  if (typeof req.params.id !== 'undefined') {
    let user = users.find(u => u.id === req.params.id);
    res.json(user.getInvoices());
  } else {
    res.sendStatus(404);
  }
});

app.get('/users/invoices/:id/:invoice', (req, res) => {
  let user = users.find(u => u.id === req.params.id);
  res.json(user.getInvoice(req.params.invoice));
});

app.delete('/users/invoices/:id/:invoice', (req, res) => {
  let user = users.find(u => u.id === req.params.id);
  if (user.removeInvoice(req.params.invoice)) {
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

// Items
app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  let item = items.find(p => p.id === req.params.id);
  res.json(item);
});

app.post('/items', (req, res) => {
  items.push({"id": uuidv4(), ...req.body});
  res.send('product added');
});

app.put('/items/:id', (req, res) => {
  let item = items.find(p => p.id === req.params.id);
  Object.keys(item).map(key => {
    if (key in req.body) item[key] = req.body[key];
  })
  res.send('product modified')
});

// Items - Search
app.get('/items/search/:key/:value', (req, res) => {
  let key = req.params.key;
  let value = req.params.value;

  if (key in items[0] && allowedSearchs.includes(key)) {
    let item = items.filter(i => {
      if (ignoreCaseIncludes(i[key], value)) return true; 
    });
    res.json(item);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
