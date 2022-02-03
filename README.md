# SportCulture

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Details

This is a WIP shop app.

The user can browse the products, click the products for more details, choose a size and add to the basket.

On the product details the user can see recently viewed products, they can click on the product and it will take them to that item.

The user can view the basket by clicking on the bag on the right of the nav bar.

If the uset tries to add an item to the bag without selecting a size an error will appear.

## How

The project was built starting with the nav bar, then building the shop, shop card and then creating the shop service to get the products using httpClient.

Once the products were displaying I added some basic styling so it looks similar to an online store.

The product cards are displayed by looping through the products and the data is passed from parent (shop) to child component using the @Input decorator.

A product details component was created to display more information. The product id was taken from the route so it could be found in the products - using lodash.

The basket service was created with methods to add to the basket. This utilised localStorage, with more time I will update this to use rsjx.

After this, the basket was created and styled, product info is taken from the data in localStorage.

Finally, recently viewed items has been created which uses the same card from the shop, it also needs some work (see To Do list).

## To Do

- [ ] Change to use rsjx Observable/BehaviourSubject for adding/updating the basket and basket total on nav
- [ ] Mobile styling on basket
- [ ] Overall design to be improved
- [ ] Better handling of size selection
- [ ] Handle recently viewed - when they are looking at a product this same product shouldn't be displayed here
- [ ] Style recently viewed card without price and make smaller
- [ ] Add hero section
- [x] Nav bar bag to be changed to better icon
