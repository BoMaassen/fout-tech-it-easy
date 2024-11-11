function sizes(array) {
    let availableSizes = ""
    for (let i = 0; i < array.length; i++) {
        availableSizes = availableSizes + `${array[i]} inch (${array[i] * 2.54} cm) | `
    }
    return availableSizes
}

export default sizes;