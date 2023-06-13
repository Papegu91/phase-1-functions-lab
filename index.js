let MyFirstBlock=42

function distanceFromHqInBlocks(destinaton){
    let response=destinaton -MyFirstBlock;
    if(response< 0){
        return response* -1;
    }
return response;
}
let perBlock = 264;
function distanceFromHqInFeet(inFeet){
    return distanceFromHqInBlocks(inFeet)*perBlock;
}
console.log(distanceFromHqInFeet(34));
function distanceTravelledInFeet(start,destinaton){
    if(start>destinaton){
        return (start-destinaton)*perBlock;
    }
    return (destinaton-start)* perBlock;
}


function calculatesFarePrice(start, destination){
    let distanceTravelled = distanceTravelledInFeet(start, destination);

    if(distanceTravelled <= 400) {
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000){
          return ( distanceTravelled - 400) *0.02;

    }else if ( distanceTravelled > 2000 && distanceTravelled <= 2500){
        return 25;
    }else if (distanceTravelled > 2500){
        return 'cannot travel that far';
    }
    
    
}