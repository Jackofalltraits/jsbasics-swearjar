//output: number of swears and everytime they swear, returnm on the screen 'watch your profanity'
var words = {1: 'fuck', 2 : 'shit', 3: 'bitch', 4: 'nigger', 5: 'bastard'}
var counter = 0;
//console.log(words[1])
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Say something. say 'exit' to exit the program\n", talk => {
    while(true){
        readline.question("talk again\n")
        if(talk==words[1] || talk==words[2] || talk==words[3] || talk==words[4] || talk==words[5] ){
            console.log("watch your profanity");
            counter++;
            //console.log("talk again");
        }
        else{
            console.log(`ok`);
            console.log("talk again")
        }
        
        if(talk == 'exit'){
            readline.close();  
        }
    }

    console.log(`you've cussed ${counter} times`)

})