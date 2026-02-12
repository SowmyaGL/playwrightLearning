const { test } = require('@playwright/test');
import { addToCart, Abcd, Abcd2, Abcd3 } from './pageobjects/addToCart';


test('add  items to cart ', async({page}) =>{

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
    const addToCartItems =["Brocolli - 1 Kg", "Cauliflower - 1 Kg", "Cucumber - 1 Kg"];

        for (const item of addToCartItems){
        await addToCart(page, item);
    }    
})