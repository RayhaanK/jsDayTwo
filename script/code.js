let subjects = ['Python', 'C++','VB.Net', 'Javascript', 'Assembly']

// What you supposed to use
// -1 shows the last element in the array
    console.log(subjects.at(-1));
    // this only works for odd numbers
    // let x = Math.floor(subjects.length/2)
    // console.log(subjects[x]);

    // for even numbers 
    // math.floor wont return the decimal, it will just return 2
    let x = Math.floor(subjects.length / 2);
    console.log(x);
    if (x % 2 == 0) {
        console.log(subjects[x]);
    } else {
        // slice is to say where you must half it
        console.log(subjects.slice(x - 1, x + 1));
    }

    function findElement(arr, index) {
        return arr[index-1]
    }
    console.log(findElement(subjects, 4));

// Wrong way
// console.log(lastValue);
// let lastValue = subjects.pop()
// subjects.pop();
// console.log(subjects.pop(2));
