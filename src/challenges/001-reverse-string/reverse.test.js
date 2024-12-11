const reverse = require("./index");

test("Reverse function exists", ()=>{
    expect(reverse).toBeDefined();
});

test("Reverse function exists", ()=>{
    expect(reverse("abcd")).toEqual("dcba");
});

test("Reverse function exists", ()=>{
    expect(reverse("abcd")).toEqual("dcba");
});