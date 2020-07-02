async function onClick () {

    
    const firstSequence = document.getElementById('first').value
    const secondSequence = document.getElementById('second').value

    // first sequence is vertical
    // second sequence is horizontal
    var matrix = []
    const GAP_PENALTY = -1
    const MISMATCH_PENALTY = -1
    const MATCH_REWARD = 1


    let firstRow = []
    for (let i=0; i<secondSequence.length; i++) {
        firstRow[i] = i * GAP_PENALTY
    }
    matrix.push(firstRow)

    for (let i=0; i<firstSequence.length; i++){
        let row = Array(secondSequence.length).fill(null, 1, secondSequence.length)
        row[0] = i * GAP_PENALTY
        matrix.push(row)
    }
   console.log(matrix) 
}



// 0  -1 -2 -3 
// -1  n  n  n
// -2  n  n  n
// -3  n  n  n

