import React from 'react'

export default function Easy() {

    // 15x9 grid
    // normal will be 25x15, hard will be 40x24

    const catPicPath = "/cat-pics/taco"
    const [randomIndex] = React.useState(Math.ceil(Math.random() * 43))
    const [grid, setGrid] = React.useState([

        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    ])

    // * KEY:
    // * 0 is an unrevealed tile.
    // * 1 is a revealed tile.
    // * 2 is a mine.

    React.useEffect(() => { initialise() }, [])

    function initialise() {

        let mines = 0
        const gridCopy = structuredClone(grid)

        while (mines < 15) {

            const randomRow = Math.floor(Math.random() * grid.length)
            const randomColumn = Math.floor(Math.random() * grid[0].length)

            if (gridCopy[randomRow][randomColumn] === 2) {
                continue
            } else {
                gridCopy[randomRow][randomColumn] = 2
                mines++
            }

        }

        setGrid(gridCopy)
        console.log(grid)
    }

    function handleSquareClick(event) {

        const gridCopy = structuredClone(grid)
        const [x, y] = event.target.id.split("-").map(n => Number(n))

        if (gridCopy[x][y] === 1) {
            return
        }

        if (gridCopy[x][y] === 2) {

            console.log("MINE")
            return

        }

        function checkNearby(x, y) {

            const nearby = []

            // loop through up to 8 neighbouring tiles

            for (let r = x - 1; r < x + 2; r++) {

                for (let c = y - 1; c < y + 2; c++) {

                    if (r === x && c === y) {
                        continue
                        // skip selected square - it can't be a neighbour of itself!
                    }

                    // if on grid, add neighbour to the "nearby" array
                    if (r > -1 && r < grid.length && c > -1 && c < grid[0].length) {

                        nearby.push([r, c])

                    }

                }

            }

            return nearby

        }

        function reveal(row, col) {

            // return if revealed or mine
            if (gridCopy[row][col] === 1) {
                return
            }
            
            console.log(`Revealing tile: (${row}, ${col}) with value: ${gridCopy[row][col]}`);

    
            const nearby = checkNearby(row, col)
            let nearbyMines = 0
            
            for (const tile of nearby) {
                
                if (gridCopy[tile[0]][tile[1]] === 2) {
                    nearbyMines++
                }
                
            }

            console.log(`Mines: ${nearbyMines}`)

            gridCopy[row][col] = 1

            // if no mines nearby, check neighbouring tiles recursively
            if (nearbyMines === 0) {

                for (const tile of nearby) {

                    if (gridCopy[tile[0]][tile[1]] !== 0) {
                        continue
                    }

                    reveal(tile[0], tile[1])
                
                }

            }


        }
        
        reveal(x, y)
        setGrid(gridCopy)
        
    }
    
    function checkWinCondition() { }

    function debug(event) {

        console.log(event.target)

    }

    return <>

        <div id='easy-page'>

            <h1>Felinesweeper</h1>

            <div id='easy-grid'>

                <img src={`${catPicPath}${randomIndex}.jpg`} id='hidden-pic' />

                {grid.map((row, index) => {

                    return <div className='easy-row' key={index}>

                        {row.map((sq, i) => {
                            if (grid[index][i] === 0 || grid[index][i] === 2) {
                                return <div className='easy-square' id={`${index}-${i}`} key={`sq${index}${i}`} onClick={handleSquareClick}></div>
                            } else {
                                return <div className='easy-square-clear' id={`${index}-${i}`} key={`sq${index}${i}`} />
                            }
                        })}

                    </div>

                })}

            </div>

        </div>

    </>
}
