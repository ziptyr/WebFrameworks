## Exercise 4 API

> Replace <> parts with a corresponding value

### Items
#### All

**GET**
> http://localhost:3000/items

#### With ID

**GET**
> http://localhost:3000/items/<itemId>

#### Search

Allowed <key> values: name, category, manufacturer

**GET**
> http://localhost:3000/items/seach/<key>/<value>

#### Post New Item

```
{
"name": "Planck EZ",
"manufacturer": "ZSA Technology Labs",
"category": "Peripherials",
"description": "A keyboard that can change as your typing habits change.",
"price": 245,
"image": "planck-ez.png"
}
```

**POST**
> http://localhost:3000/items

#### Modify Item

Full modify:

```
{
"name": "Planck EZ",
"manufacturer": "ZSA Technology Labs",
"category": "Peripherials",
"description": "A keyboard that can change as your typing habits change.",
"price": 245,
"image": "planck-ez.png"
}
```

Partial Modify:

```
{
"price": 10
}
```

**PUT**
> http://localhost:3000/items/<itemId>


### Users

#### Get All Users

**GET**
> http://localhost:3000/users

#### Get User With ID

**GET**
> http://localhost:3000/users/id/<userId>

#### Create a New User

```
{
    "name": "Name Surname",
    "address": "Address 1",
    "cart": []
}
```

**POST**
> http://localhost:3000/users


### Purchase

#### Cart

##### Add to Users Cart

**POST**
> http://localhost:3000/users/cart/<userId>/<itemId>

##### Get Users Cart

**GET**
> http://localhost:3000/users/cart/<userId>

##### Remove Item From Users Cart

**DELETE**
> http://localhost:3000/users/cart/<userId>/<itemId>

##### Remove All Items From Users Cart

**DELETE**
> http://localhost:3000/users/cart/<userId>/<itemId>

##### Buy Users Cart

**GET**
> http://localhost:3000/users/cart/buy/<userId>


#### Invoice

##### Get Users Invoices

**GET**
> http://localhost:3000/users/invoices/<userId>

##### Get Users Invoice

**GET**
> http://localhost:3000/users/invoices/<userId>/<invoiceId>

##### Remove Invoice From User

**DELETE**
> http://localhost:3000/users/invoices/<userId>/<invoiceId>
