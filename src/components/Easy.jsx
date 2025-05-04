import React from 'react'
import flag from '/src/other-pics/felinesweeper-flag.png'

export default function Easy() {

    // 15x9 grid
    // normal will be 25x15, hard will be 40x24

    const catPicPath = "src/cat-pics/taco"
    const [randomIndex] = React.useState(Math.ceil(Math.random() * 43))
    const [grid, setGrid] = React.useState([

        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],

    ])

    const [flagGrid, setFlagGrid] = React.useState([

        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

    ])

    const [flagCounter, setFlagCounter] = React.useState(0)

    // * KEY:
    // * -1 is an unrevealed tile.
    // * Any number above -1 is a revealed tile, with the number representing the amount of nearby mines.
    // * "MINE" is a mine.
    // * "FLAG" is a flagged tile.

    React.useEffect(() => { initialise() }, [])

    function initialise() {

        let mines = 0
        const gridCopy = structuredClone(grid)

        while (mines < 15) {

            const randomRow = Math.floor(Math.random() * grid.length)
            const randomColumn = Math.floor(Math.random() * grid[0].length)

            if (gridCopy[randomRow][randomColumn] === "MINE") {
                continue
            } else {
                gridCopy[randomRow][randomColumn] = "MINE"
                mines++
            }

        }

        setGrid(gridCopy)

    }

    function handleSquareLClick(event) {

        const gridCopy = structuredClone(grid)
        const flagGridCopy = structuredClone(flagGrid)
        const [x, y] = event.target.id.split("-").map(n => Number(n))

        if (gridCopy[x][y] > -1 || flagGridCopy[x][y]) {
            return
        }

        if (gridCopy[x][y] === "MINE") {

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
            if (gridCopy[row][col] > -1) {
                return
            }
            
            console.log(`Revealing tile: (${row}, ${col}) with value: ${gridCopy[row][col]}`);

    
            const nearby = checkNearby(row, col)
            let nearbyMines = 0
            
            for (const tile of nearby) {
                
                if (gridCopy[tile[0]][tile[1]] === "MINE") {
                    nearbyMines++
                }
                
            }

            console.log(`Mines: ${nearbyMines}`)

            gridCopy[row][col] = nearbyMines

            // if no mines nearby, check neighbouring tiles recursively
            if (nearbyMines === 0) {

                for (const tile of nearby) {

                    if (gridCopy[tile[0]][tile[1]] !== -1) {
                        continue
                    }

                    reveal(tile[0], tile[1])
                
                }

            }


        }
        
        reveal(x, y)
        setGrid(gridCopy)
        
    }

    function handleSquareRClick(event) {

        event.preventDefault()

        const flagGridCopy = structuredClone(flagGrid)
        const [x, y] = event.currentTarget.id.split("-").map(n => Number(n))
        // * 'currentTarget' was used instead of 'target', because 'target' would switch to the <img> of the flag, instead of the parent <div>. Using 'target' prevented the user from unflagging tiles, 'currentTarget' always stuck to the parent element.
        
        
        let flagCounterCopy = structuredClone(flagCounter)
        
        if ((flagCounterCopy < 15) || (flagCounterCopy === 15 && flagGridCopy[x][y])) {
            
            flagGridCopy[x][y] = !flagGridCopy[x][y]
            setFlagGrid(flagGridCopy)
            flagCounterCopy = flagGrid[x][y] ? flagCounterCopy - 1 : flagCounterCopy + 1
            setFlagCounter(flagCounterCopy)

        }

        return

    }
    
    function checkWinCondition() { }

    function debug(event) {

        console.log(event.target)

    }

    return <>

        <div id='easy-page'>

            <h1>Felinesweeper</h1>
            <div className='flag-counter'>

                <img src={flag} style={{objectFit: 'contain', width: '100%', height: '100%', background: 'transparent', margin: '0px 50px 0px 0px'}}/>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                
                    <p>{flagCounter}/15 flags placed</p>
                    <p>Right click to place or remove flags</p>
                
                </div>
                
            </div>

            <div id='easy-grid' onContextMenu={(e) => e.preventDefault() /* to stop the drop down menu appearing on right click of the grid */}>

                <img src={`${catPicPath}${randomIndex}.jpg`} id='hidden-pic' />

                {grid.map((row, index) => {

                    return <div className='easy-row' key={index}>

                        {row.map((sq, i) => {

                            if (flagGrid[index][i]) {
                                return <div className='easy-square' id={`${index}-${i}`} key={`sq${index}${i}`} onContextMenu={handleSquareRClick}>
                                    <img src={flag} alt='flag' className='easy-flag'/>
                                </div>
                            }

                            else if (grid[index][i] === -1 || grid[index][i] === "MINE") {
                                return <div className='easy-square' id={`${index}-${i}`} key={`sq${index}${i}`} onClick={handleSquareLClick} onContextMenu={handleSquareRClick}></div>
                            
                            } else if (grid[index][i] === 0){
                                return <div className='easy-square-clear' id={`${index}-${i}`} key={`sq${index}${i}`} />
                            
                            } else {
                                return <div className={`easy-square-${grid[index][i]}`} id={`${index}-${i}`} key={`sq${index}${i}`}>{grid[index][i]}</div>
                            }

                        })}

                    </div>

                })}

            </div>

        </div>

    </>
}
