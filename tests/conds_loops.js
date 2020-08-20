//put a if else in for loop in while loop
var set = 1
var count = 0;
while(set > 0){
    for(count = 0; count <= 10; count++){
        console.log(count);
        if(count % 3 == 0){
            console.log("is divisable by 3");
        }
        if(count == 10){
            set--;
        }
    }
}