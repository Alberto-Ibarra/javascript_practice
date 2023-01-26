////////////////////////////////
// Easy Going
////////////////////////////////

for(let i = 0; i <= 20; i++){
    console.log(i);
}




////////////////////////////////
// Get Even
////////////////////////////////

for(let i = 0; i <= 200; i = i + 2){
    console.log(i);
}




////////////////////////////////
// Fizz Buzz
////////////////////////////////

for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else if(i % 3 === 0){
        console.log("Fizz");
    }else{
        console.log(i);
    }
}




////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//1.
plantee[2] = plantee[2] + 1;
console.log(plantee);

//3.
dart.push("Hawkins");
console.log(dart);

//2.
wolfy[3] = "Gotham City"
console.log(wolfy);

//4.
//.splice(starting first index,  removing 1 index,  replacing "Wolfy" with "Gameboy")
wolfy.splice(0,1,"Gameboy");
console.log(wolfy);




////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for(let i of ninjaTurtles){
    let upperCase = i.toUpperCase();
    console.log(upperCase);
}




////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8]);

//1.Use the .sort method - What did this do to the array? Did it permanently alter it?
//yes, original array was altered
console.log(favMovies.sort());
console.log(favMovies);

//2. Use the method pop
favMovies.pop();

//3. push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy");

//4. Reverse the array
favMovies.reverse();
console.log(favMovies);

//5. Use the shift method
favMovies.shift();
console.log(favMovies);

//6. unshift - What does it return?
favMovies.unshift();
console.log(favMovies);

//7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself). Did this permanently alter our array?
//yes, array was altered.
favMovies.splice(3, 1, "Avatar")

//8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Did this permanently alter our array?
favMovies.slice(0, favMovies.length / 2)
//9. Store the value of your slice in a variable, console.log it - What is going on here?
let arrSlice = favMovies.slice(0, favMovies.length / 2)
console.log(arrSlice);
//10.console.log your final results
console.log(favMovies);




//////////////////////////////
// Where is Waldo
//////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

//1. Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1,1);

//2.Change "Neff" to "No One"
whereIsWaldo[1][2] = "No One";

//3.Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1]);

console.log(whereIsWaldo);




////////////////////////////////
//  Excited Kitten
////////////////////////////////

const arr = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
const randomLog = Math.floor(Math.random() * arr.length)


for(let i = 0; i <= 20; i++){
    console.log("Love me, pet me! HSSSSSS!");
    if(i % 2 === 0){
        console.log(arr[randomLog]);
    }
}




////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
const sortedNums = nums.sort();

let median = Math.floor(sortedNums.length / 2);
console.log(nums[median]);