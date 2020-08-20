var x = 'my';
var y
function concat(x, y) {
    x = 'hello ';
    y = 'koby';
    var z = x + y;
    console.log(z)
}
/*
this is multiline
*/

function loop() {
    var count = 0
    //10iterative while loop
    var size = 10
    while (count < 10) {
        for (x = 0; x < size; x++) {
            console.log(x);
                if(x%5==0){
                    console.log('this is by 5')
                }
        }
        size--;
        count++;
    }
}

function mod(x,y){
    var modulus = x % y;
    console.log(`remainder of ${x} and ${y} is ${modulus}`);
}


concat(x, y)
loop()
mod(11,3)