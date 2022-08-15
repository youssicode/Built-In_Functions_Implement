const { default : TestRunner } = require("jest-runner")
const [ForEach, myMap,myFilter, myReduce, mySome] = require (`./implementToTest`)

test('forEach:', () => {
    const testedArray = [2,4,6]
    const cbConditionF = jest.fn()
    ForEach(testedArray, cbConditionF)
    expect(cbConditionF).toHaveBeenCalledWith(2,0,testedArray)
    expect(cbConditionF).toHaveBeenCalledWith(4,1,testedArray)
    expect(cbConditionF).toHaveBeenCalledWith(6,2,testedArray)
    expect(cbConditionF).toHaveBeenCalledTimes(3)
})
test ("map:", () => {
    const testedArray = [2,4,6]
    const cbConditionF = jest.fn((el, index, array)=> el + index + array.length)
    const result = myMap(testedArray, cbConditionF)
    expect(cbConditionF).toHaveBeenCalledWith(2,0,testedArray)
    expect(cbConditionF).toHaveBeenCalledWith(4,1,testedArray)
    expect(cbConditionF).toHaveBeenCalledWith(6,2,testedArray)
    expect(result).toEqual([5, 8, 11])
    expect(result.length).toEqual(3) // The same result as : expect(cbConditionF).toHaveBeenCalledTimes(3)
    // expect(myMap(testedArray, cbConditionF)).toStrictEqual([5, 8, 11])
})
test("filter:", () => {
    const testedArray = [2,4,6]
    const cbConditionF = jest.fn(el => el < 5)
    const result = myFilter(testedArray, cbConditionF) // [2,4]
    expect(cbConditionF).toHaveBeenCalledWith(2,0,testedArray)
    expect(cbConditionF).toHaveBeenCalledWith(4,1,testedArray)
    expect(cbConditionF).toHaveBeenCalledWith(6,2,testedArray)
    expect(cbConditionF).toHaveBeenCalledTimes(3)
    expect(result).toEqual([2, 4])
})
describe("reduce:", () => { //describe() is "Jest" function to group multi-tests
    const testedArray = [2,4,6]
    const cbConditionF = jest.fn((accum, el) => accum + el)
    it("with initial value = 1 :", () => {
        const resultWithInitVal = myReduce(testedArray, cbConditionF, 1)
        expect(resultWithInitVal).toBe(13)
        expect(cbConditionF).toHaveBeenCalledWith(1,2,0,testedArray)
        expect(cbConditionF).toHaveBeenCalledWith(3,4,1,testedArray)
        expect(cbConditionF).toHaveBeenCalledWith(7,6,2,testedArray)
    })
    it("without initial value :", () => {
        const resultWithoutInitVal = myReduce(testedArray, cbConditionF)
        expect(resultWithoutInitVal).toBe(12)
        expect(cbConditionF).toHaveBeenCalledWith(2,4,1,testedArray)
        expect(cbConditionF).toHaveBeenCalledWith(6,6,2,testedArray)
    })
})

test("some :", () => {
    const testedArray = [2,4,6]
    const cbConditionF = jest.fn((el, argm) => el > argm)
    const trueResult = mySome(testedArray, 5, cbConditionF)
    const falseResult = mySome(testedArray, 7, cbConditionF)
    expect(trueResult).toBe(true)
    expect(falseResult).toBe(false)
    expect(cbConditionF).toHaveBeenCalledWith(2,5)
    expect(cbConditionF).toHaveBeenCalledWith(4,5)
    expect(cbConditionF).toHaveBeenCalledWith(6,5)
    expect(cbConditionF).toHaveBeenCalledWith(2,7)
    expect(cbConditionF).toHaveBeenCalledWith(4,7)
    expect(cbConditionF).toHaveBeenCalledWith(6,7)
})