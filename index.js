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
        driver.toLowerCase().indexOf(str.toLowerCase(), 0) 
    )
    return foundMatch
}


  