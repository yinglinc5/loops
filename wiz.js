function Wiz(N, Start, Battle){
    let owner = Start;
    let time = 1;
    for(let i = 0; i < N; i++){
        if(owner === Battle[i][1]){
            owner === Battle[i][0];
            time++;
        
        }
    }
}
console.log(Wiz(3, "A", ["BA", "CB", "DA"]));