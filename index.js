
function distanceFromHqInBlocks(block){
    if(block<42){
        return 42-block;
    }else if(block>42){
        return block-42;
    }else{
        return 0;
    }
}
function distanceFromHqInFeet(block){
    if(block<42){
        return (42-block)*264
    }else if(block>42){
        return (block-42)*264
    }else{
        return 0
    }
}
function distanceTravelledInFeet(start, end){
    if(start>end){
        return (start-end)*264
    }else if(start<end){
        return (end-start)*264
    }
}
function calculatesFarePrice(start, end){
    let distance=0;
    if(start>end){
        distance=(start-end)*264
    }else if(start<end){
        distance=(end-start)*264
    }
    if(distance<=400){
        return 0
    }else if(distance>400&&distance<=2000){
        return ((distance*2)-800)/100
    }else if(distance>2000&&distance<=2500){
        return 25
    }else{
        return "cannot travel that far"
    }

}

