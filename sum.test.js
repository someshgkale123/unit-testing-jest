const { TestScheduler } = require('jest')
const sum =require('./sum')

test('adds two number',()=>{
    expect(sum(1,2)).toBe(3)
})