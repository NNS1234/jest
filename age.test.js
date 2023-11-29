const age =require("./age")

test("age should be 23",()=>{
    expect(age(2000)).toBe(23);
})