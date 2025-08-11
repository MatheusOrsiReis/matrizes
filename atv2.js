let mat = []
let soma = 0


for(let i=0;i<5;i++){
    mat[i] = []
    for(let j=0;j<5;j++){
        if(i %2 === 0){
            mat[i][j] = 7
            
        }else{
            mat[i][j] = 3

        }
    }
}

function somar(){
    for(let i=0; i<5;i++){
        for(let j=0;j<5;j++)
            soma += mat[i][j]
            console.log(soma)
    }
    
}
somar()
console.table(mat)
console.log(`------------------`)
console.log(soma)