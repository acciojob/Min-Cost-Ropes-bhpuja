function mincost(arr) {
    if (arr.length <= 1) return 0;

    // Min-heap using a sorted array
    arr.sort((a, b) => a - b);

    let cost = 0;

    while (arr.length > 1) {
        // Combine the two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        let newRope = first + second;
        cost += newRope;

        // Insert the new rope back and keep the heap sorted
        arr.push(newRope);
        arr.sort((a, b) => a - b);
    }

    return cost;
}

// Example Usage:
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33
