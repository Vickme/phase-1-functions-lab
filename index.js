//DISTANCE IN BLOCKS 
function distanceFromHqInBlock(scuberHq, pickupLocation) {
    const scuberHq= 100;
    const distance= (scuberHq - pickupLocation);
    return distance 
}

//DISTANCE IN FEET 
function distanceFromHqInFeet(scuberHq, pickupLocation) {
    const distance=(scuberHq - pickupLocation);
    const feet = distance(scuberHq - pickupLocation);
    return feet 
    
}

//DISTANCE TRAVELLED IN FEET
function distanceTravelledInFeet(startBlock, finishBlock) {
    const blockLengthfeet= 264;
    const blocksTraveled= (finishBlock-startBlock);
    const feetTraveled = (blocksTraveled*blockLengthfeet);
    return feetTraveled
}
        
//FARE PRICE 
function calculatesFarePrice(distanceInFeet) {
    const freeDistance=400;
    const rateUnder2000feet=0.02;
    const flatOver2000Feet=40;
    const maximumFeetAllowed=2500;
    if (distanceInFeet <= freeDistance){
        return 0;
    } else if (distanceInFeet<= 2000) {
        return (distanceInFeet-freeDistance)* rateUnder2000feet;
    } else if (distanceInFeet<= maximumFeetAllowed){
        return flatOver2000Feet;
    } else {
        return "cannot travel that far";
    }

}