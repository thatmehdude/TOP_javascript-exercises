// const removeFromArray = function() {

// };
function removeFromArray(array, ...theArgs){
    let newArray = [];
    array.forEach((item) => {
        if(!theArgs.includes(item)){
            newArray.push(item);
        }
    });
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
