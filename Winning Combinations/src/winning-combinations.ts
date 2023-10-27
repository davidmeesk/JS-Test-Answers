
type WinningCombinationsResult = [number, number[]][];


function call(lines: number[]): WinningCombinationsResult {
  let result: WinningCombinationsResult = [];
  let repeatedSymbol:number = 0;
  let symbolCombinationLocation:number[] = [];
  let wilds:number[] = [];
  //iterates over the symbols in the line
  for(let symbolIndex=0; symbolIndex<lines.length; symbolIndex++){
    if((lines[symbolIndex] === repeatedSymbol) || (lines[symbolIndex] === 0)){
      //adds symbol to combination if it is repeated or is wild
      symbolCombinationLocation.push(symbolIndex);
    }
    else{
      if((symbolCombinationLocation.length >= 3) && (repeatedSymbol != 0) && (repeatedSymbol < 10)){
        result.push([repeatedSymbol,symbolCombinationLocation]);
      }
      symbolCombinationLocation = wilds;
      symbolCombinationLocation.push(symbolIndex);
    }
    if(lines[symbolIndex] === 0){
      wilds.push(symbolIndex)
    }
    else{
      wilds = [];
      repeatedSymbol = lines[symbolIndex] ;
    }
  }
  if(symbolCombinationLocation.length >= 3){
    result.push([repeatedSymbol,Object.assign([], symbolCombinationLocation)]);
  }
  return result;
}
export const WinningCombinations = { call };
