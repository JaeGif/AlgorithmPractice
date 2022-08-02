// fizzbuzz, find the sums of products of 3 and 5
function fizzBuzzJae(){
    // pass for now
}

// given a list of people's ages and handicap, determine whether they fit in the senior or open golfing category.
// Senior == age >= 55 AND handicap > 7
function openOrSeniorJae(data){
    let strArray = [];
    data.forEach(element => {
        if ((element[0] >= 55) && (element[1] > 7)){
            strArray.push('Senior');
        } else {
            strArray.push('Open');
        }
    })
    return strArray;
}
// Best practices use map method to map arrays of equivalent lengths.
function openOrSeniorClever(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
  

