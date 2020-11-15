const subtract =require('./subtract')

test('subtracts two number',()=>{
    expect(subtract(1,2)).toBe(-1)
})