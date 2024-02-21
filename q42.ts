// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


function show_magicians(magicians:string[]):void{
    for(let magician of magicians){
        console.log(magician)
    }
}
function make_great(magicians:string[]):string[]{
    for (let i = 0;i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`
    }
    return magicians;
}
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
magicians = make_great(magicians);
show_magicians(magicians);
