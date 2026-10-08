function dataLeft(x, n, data){
    let bytes = x
    let left = 0
    for(let i = 0; i < n; i++){
        bytes = bytes - data[i]
        bytes + x;
        left === bytes
    }
    console.log(bytes);
}
console.log(dataLeft(10, 3, ["4", "6", "2"]));
