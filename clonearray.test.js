const clonearray =require('./clonearray')

test('clones array',()=>{
    const array=[2,3,4]
    expect(clonearray(array)).toEqual(array)
    expect(clonearray(array)).not.toBe(array)
})