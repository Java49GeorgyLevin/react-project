export function getRandomNumber(min: number, max: number, 
    isMinInclusive: boolean=true, isMaxInclusive: boolean=false):
    number {
        if(!min || !max || min == max) {
            throw new Error("min may not be equaled to max");
        }
        else if(max < min) {
            [min, max] = [max, min];
        }
        const eps: number = 1;
        const kMin: number = isMinInclusive ? 0 : eps;
        const kMax: number = isMaxInclusive ? eps : 0;
    return Math.floor(Math.random()*(max - min - kMin + kMax)) + min + kMin;
    }

    
 export function getRandomMatrix(rows: number, columns: number, min: number, max: number): number[][] {
    let rndMatrix: number[][] = new Array([rows], [columns]);
    // console.log(rndMatrix);
    // return rndMatrix.map(getRandomNumber(min, max, true, true));
    // }
    // let rowsMatrix: number[] = [];
    for(let i = 0; i < rows; i ++) {
    //     rndMatrix[i] = getRandomNumber(min, max, true, true);
    // }
    // let columnsMatrix: number[] = [];
        for(let j = 0; j < columns; j ++) {
        // columnsMatrix.push(getRandomNumber(min, max, true, true));
        // rndMatrix[i][j] = getRandomNumber(min, max, true, true);
        //   rndMatrix[i[j] = getRandomNumber(min, max, true, true);
        //   console.log(rndMatrix);
    }
}
    // 5.2.1.Returns a random matrix containing “rows” rows and “columns” columns, 
    // where each element is a random number in the closed range [min, max] (min and max are inclusive)
    // console.log(rndMatrix);
    return [];
    }

export function getRandomArrayElement(array: any[]): any {
    console.log(array);
    console.log(array.length);
    const n: number = getRandomNumber(0, array.length, true, false);
    console.log("n", n)
    return array[n];

}
    
export function getRandomDate(minYear: number, maxYear: number): Date {

    const rndYear = getRandomNumber(minYear, maxYear, true, false);
    const rndMonth = getRandomNumber(1, 12, true, true);
    const rndDay = getRandomNumber(1, 31, true, true);
    const rndDate = new Date(rndYear, rndMonth, rndDay);
    // 5.4.1.Returns random date object (see documentation of class Date)
    // 5.4.1.1.Random year from the range [minYear, maxYear) minYear inclusive, maxYear -enclusive
    // 5.4.1.2.Random month.
    //     4.1.3.Randomday
    console.log(rndDate);
    return rndDate;


}
    // export default getRandomNumber;