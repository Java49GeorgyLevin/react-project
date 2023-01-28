export function getRandomNumber(min: number, max: number, 
    isMinInclusive: boolean=true, isMaxInclusive: boolean=false):
    number {
        if((!isMinInclusive || !isMaxInclusive) && min == max) {
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
    let rndMatrix: number[][] = new Array<number[]>(rows);
    for(let i = 0; i < rows; i ++) {
        rndMatrix[i] = new Array<number>(columns);
        for(let j = 0; j < columns; j ++) {
        rndMatrix[i][j] = getRandomNumber(min, max, true, true);
            }
        }
    return rndMatrix;
}

export function getRandomArrayElement(array: any[]): any {
    const n: number = getRandomNumber(0, array.length, true, false);
    return array[n];
}
    
export function getRandomDate(minYear: number, maxYear: number): Date {
    const rndYear = getRandomNumber(minYear, maxYear, true, false);
    const rndMonth = getRandomNumber(0, 11, true, true);
    const rndDay = getRandomNumber(1, 31, true, true);
    const rndDate = new Date(rndYear, rndMonth, rndDay);
    return rndDate;
}