const createWoodBlock = () => {
    return {
        type: 'wood block',
        length: 10,
        material: 'pine',
        purpose: 'flute',
    }

}

const createBeautifulCarving = (woodObject) => {
    // Return a string representation of the object

}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving()  // <-- Missing an argument. Fix it.

console.log(carvingString)
