
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
      //Tests if repeated symbols should be added to results
      if((symbolCombinationLocation.length >= 3) && (repeatedSymbol != 0) && (repeatedSymbol < 10)){
        //Adds repeated symbol combination to results
        result.push([repeatedSymbol,symbolCombinationLocation]);
      }
      //If a symbol combination starts with wild symbols, this will make sure the are added to the combination
      symbolCombinationLocation = wilds;
      //Adds first symbol of the combination
      symbolCombinationLocation.push(symbolIndex);
    }
    //Keeps track of the wild symbols for the next combination
    if(lines[symbolIndex] === 0){
      wilds.push(symbolIndex)
    }
    else{
      wilds = [];
      //Saves the symbol that is being repeated
      repeatedSymbol = lines[symbolIndex];
    }
  }
  //Adds combination to the result if the line ends
  if(symbolCombinationLocation.length >= 3){
    result.push([repeatedSymbol,Object.assign([], symbolCombinationLocation)]);
  }
  return result;
}
export const WinningCombinations = { call };
