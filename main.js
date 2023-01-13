/*

    In this exercise, you will be defining some functions that perform the individual tasks
    involved in making pottery. Pottery minions that will do all the little things needed to make 
    beautiful pieces of dirt art.

    Time to deconstruct the process of making pottery.

    1. Buy a big lump of clay
    2. Use a pottery wheel to turn the clay into a bowl
    3. Put the bowl into a kiln for a bisque firing
    4. Apply glaze to bowl
    5. Put glazed bowl in kiln for final firing
    6. 💰💰💰 (haha, yeah right)

*/ 

/* 

    Purchasing Clay

    Define a function named buyClay. 
    The function needs no parameters. 
    It should return an object with no properties on it yet.

*/ 

/* 

    Throw a Bowl

    Define a function named makePottery. 
    You need to pass it the empty object that buyClay produced, 
    so it needs a single parameter to capture that value and use it.

    The function should perform the task of adding a new property 
    named shape, and its value should be "Bowl". 
    
    The function should then return the object after the new property was added.

    Reminder: When a function returns a value, you should store that value in a variable

*/ 

/*

    Bisque Firing

    Define a function named bisqueFire. 
    You need to give it the object that makePottery produced, 
    so it needs a single parameter to capture that value and use it.

    The function should perform the task of adding a new property named readyForGlazing, 
    and its value should be true. 
    
    The function should then return the object after the new property was added.

*/ 

/* 

    Glaze the Bowl

    Define a function named glazePottery. 
    You need to give it the object that bisqueFire produced, 
    so it needs a single parameter to capture that value and use it.

    The function should check if the pottery has been bisque fired already and is ready for glazing. 

    If it has not, you should log the following message to the console.
    Make sure you bisque fire the pottery before you glaze it.

    If the pottery has been bisque fired, the function should perform the task of 
    adding a new property named glazing, and its value should be "Midnight Blue". 

    The function should then return the object after the new property was added.

*/ 

/* 

    Fire the Bowl

    Define a function named finalFiring. 
    You need to give it the object that glazePottery produced, 
    so it needs a parameter to capture that value and use it. 
    It also needs to capture the temperature of the kiln, 
    so it needs two parameters.

    The function should perform the task of adding a new property named cracked, 
    and its value depend on the value of the temperature parameter. 
    
    If that value is higher than 1200, then the value of the cracked property must be true. 
    If the value is 1200, or less, the value should be false.

    The function should then return the object after the new property was added.

    To test the function, make sure you invoke it and pass two arguments. 
    First test if a high temperate cracks the pottery.

    const firedPottery1400 = finalFiring(glazedPottery, 1400)
    console.log(firedPottery1400)

    Also test if the temperature is correct, check that the pottery is not cracked.

    const firedPottery1200 = finalFiring(glazedPottery, 1200)
    console.log(firedPottery1200)

*/ 

/*

    Optional Challenge 

    Reminder: When a function returns a value, you should store that value in a variable

    Start with purchasing some clay, and then pass the object to each function, in order, 
    so that the final console.log() should have an object with all properties on it.

    {
    shape: 'Bowl',
    readyForGlazing: true,
    glazing: 'Midnight Blue',
    cracked: false
    }

*/ 

// Purchasing Clay 

const buyClay = () => {
    const clayObject = {}
    return clayObject
}

const clay = buyClay() 
console.log(clay) // logs an empty object, {}

// Throw a Bowl 

const makePottery = (clay) => {
    clay.shape = "Bowl"
    return clay 
}

const clayBowl = makePottery(clay)
console.log(clayBowl) // logs {shape: 'Bowl'}

// Bisque Firing 

const bisqueFire = (clayBowl) => {
    clayBowl.readyForGlazing = true  
    return clayBowl
}

const bisquedBowl = bisqueFire(clayBowl)
console.log(bisquedBowl) // logs {shape: 'Bowl', readyForGlazing: true}

// Glaze the Bowl

/* 

In line 119 of the if..else statement, "bisquedBowl" is assumed to be a truthy value. 
So the bisquedBowl variable just needs to exist, which it does here, for the function to keep running.

*/ 

const glazePottery = (bisquedBowl) => {
    if (bisquedBowl && bisquedBowl.readyForGlazing === true) {
        bisquedBowl.glazing = "Midnight Blue"
    } else {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
    return bisquedBowl
}

const glazedBowl = glazePottery(bisquedBowl)
console.log(glazedBowl) // logs {shape: 'Bowl', readyForGlazing: true, glazing: 'Midnight Blue'} 

// Fire the Bowl

const finalFiring = (glazedBowl,kilnTemp) => {
    if (kilnTemp > 1200) {
        glazedBowl.cracked = true 
    } else if (kilnTemp <= 1200) {
        glazedBowl.cracked = false
    }
    return glazedBowl

}

const finalBowlCracked = finalFiring(glazedBowl,1400)
console.log(finalBowlCracked) 

/* 

logs 

    {
    shape: 'Bowl', 
    readyForGlazing: true,
    glazing: 'Midnight Blue',
    cracked: true 
    }

*/ 

const finalBowlNotCracked = finalFiring(glazedBowl,1200)
console.log(finalBowlNotCracked)

/* 

logs 

    {
    shape: 'Bowl', 
    readyForGlazing: true,
    glazing: 'Midnight Blue',
    cracked: false
    }

*/ 

// Optional Challenge 

// With how the instructions are written, all the properties are part of the final object anyway.
// So it seems like I completed the optional challenge within the "Fire the Bowl" step. See above. 
// So I'm not sure if the "Fire the Bowl" step and "Optinal Challenge" step have different answers.