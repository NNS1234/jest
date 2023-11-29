const mi_to_km = require('./mi_to_km');

test("500000 mile should be 560934",()=>{
    expect(mi_to_km(500000)).toEqual(804670);
})