
import {moleTimerFunc} from '../modules/moleTimerFunc.js'


    test('should return a function', ()=>{
        
        //arrange
        const score = 0;
        const scoreDisplay = document.querySelector("#score")  
        const expectedOutputType = 'function'

        //act
        const actualOutputType = typeof moleTimerFunc(score, scoreDisplay)

        //assertion
        expect(actualOutputType).toEqual(expectedOutputType)
    })


