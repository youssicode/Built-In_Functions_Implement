const { default : TestRunner } = require("jest-runner");
const [yForEach] = require (`./implementToTest`);
test('forEach', () => {
    const cbF = jest.fn()
    const testedArray = [2,4,6]
    yForEach(testedArray, cbF)
    expect(cbF).toHaveBeenCalledWith(2,0,testedArray)
    expect(cbF).toHaveBeenCalledWith(4,1,testedArray)
    expect(cbF).toHaveBeenCalledWith(6,2,testedArray)
    expect(cbF).toHaveBeenCalledTimes(3)
})


