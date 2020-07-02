async function onClick () {

    
    const firstSequence = document.getElementById('first').value
    const secondSequence = document.getElementById('second').value

    // first sequence is vertical
    // second sequence is horizontal
    var matrix = []
    const GAP_PENALTY = -1
    const MISMATCH_PENALTY = -1
    const MATCH_REWARD = 1

    // initialize first row
    let firstRow = []
    for (let i=0; i<secondSequence.length+1; i++) {
        firstRow[i] = i * GAP_PENALTY
    }
    matrix.push(firstRow)

    // initialize first column
    for (let i=1; i<firstSequence.length+1; i++){
        let row = Array(secondSequence.length+1).fill(null, 1, secondSequence.length+1)
        row[0] = i * GAP_PENALTY
        matrix.push(row)
    }

    // fill in the rest of the table
    for (let i=1; i<firstSequence.length+1; i++){
        for (let j=1; j<secondSequence.length+1; j++){
            // matrix[i][j] = `${firstSequence[i-1]}, ${secondSequence[j-1]}` 
            
            let cellMax
            if (firstSequence[i-1] === secondSequence[j-1]) {
                cellMax = matrix[i-1][j-1] + MATCH_REWARD
            }

            else {
                cellMax = matrix[i-1][j-1] + MISMATCH_PENALTY
            }

            if (matrix[i-1][j] + GAP_PENALTY > cellMax) {
                cellMax = matrix[i-1][j] + GAP_PENALTY
            }

            if (matrix[i][j-1] + GAP_PENALTY > cellMax) {
                cellMax = matrix[i][j-1] + GAP_PENALTY
            }

            matrix[i][j] = cellMax
    }
    console.log(matrix)
}
    this.makeTable(matrix, firstSequence)

}

async function makeTable (data, firstSequence) {
    let table = document.querySelector("table")
    for (let element of data) {
        let row = table.insertRow();
    for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        }
    }
    
    
}

// 0  -1 -2 -3 
// -1  n  n  n
// -2  n  n  n
// -3  n  n  n