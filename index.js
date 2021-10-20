function findMatching(drivers, str){
    let foundMatch = drivers.filter(driver => {
        // without adding the return here, the iteration will not add the matching objects to the foundMatch array
        return driver.toLowerCase() === str.toLowerCase()
    })
    return foundMatch
}

//  In this function, each element of the drivers array is a JavaScript object that has a property of name. 
//The function should return each element whose name property matches the provided string argument.
function fuzzyMatch(drivers, str){
    let foundMatch = drivers.filter( driver =>
        // lowercase current iterated driver. call indexOf on that lowercased version of the driver name

        // filter needs true/false so here i'm checking that the index of 'str' is 0 which would be the beginning of 
        // the string. 
        // 'amSa'.toLowerCase().indexOf('Sa'.toLowerCase())
        //     2
        // here, we see that its finding the index of 'sa' at 2 for the provided string
        driver.toLowerCase().indexOf(str.toLowerCase()) === 0
    )
    return foundMatch
}

// In this function, each element of the drivers array is a JavaScript object that has a property of name. 
// The function should return each element whose name property matches the provided string argument.
function matchName(drivers, str){
    let foundMatch = drivers.filter( driver =>
        {return driver.name === str}
    )
    return foundMatch
}


  