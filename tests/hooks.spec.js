
import { test, expect } from '@playwright/test';

test.beforeEach(() =>{
    console.log("before each test");
})

test.afterEach(() =>{
    console.log("after each test");
})
test.beforeAll(() =>{
    console.log("before all test");
})

test.afterAll(() =>{
    console.log("after all test");
})

test.describe("group1", () => {
    test("test1",async ()=>{
    console.log("test1")
})


test.skip("test2",async ()=>{
    console.log("test2")
})

})





test.describe("group2",() =>{
    test.skip("test3",async ()=>{
    console.log("test3")
})

test.only("test4",async ()=>{
    console.log("test4")
})
})


