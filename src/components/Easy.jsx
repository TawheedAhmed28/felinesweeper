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
        const indices = event.target.id.split("-").map(n => Number(n))

        if (event.target.className === "easy-square-mine") {

            console.log(event.target.innerText)
            return

        }

        const adjacent = []
        
        for (let i = -1; i < 2; i++) {

            for (let n = -1; n < 2; n++) {

                if (!(n === 0 && i === 0) && (gridCopy[indices[0] + n][indices[1] + i] || gridCopy[indices[0] + n][indices[1] + i] === 0)) {

                    adjacent.push(gridCopy[indices[0] + n][indices[1] + i])

                }

            }

        }

        console.log(adjacent)

        gridCopy[indices[0]][indices[1]] = 1
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
                            if (grid[index][i] === 0) {
                                return <div className='easy-square' id={`${index}-${i}`} key={`sq${index}${i}`} onClick={handleSquareClick}></div>
                            } else if (grid[index][i] === 2) {
                                return <div className='easy-square-mine' id={`${index}-${i}`} key={`sq${index}${i}`} onClick={handleSquareClick}></div>
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
