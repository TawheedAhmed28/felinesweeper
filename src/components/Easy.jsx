import React from 'react'

export default function Easy() {

    // 15x9 grid
    // normal will be 25x15, hard will be 40x24

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

    const catPicPath = "/cat-pics/taco"
    const randomIndex = Math.ceil(Math.random() * 43)

    function handleSquareClick(event) {

        const gridCopy = structuredClone(grid)
        const indices = event.target.id.split("-")
        
        gridCopy[indices[0]][indices[1]] = 1
        console.log(event.target)
        setGrid(gridCopy)

    }

    function debug(event) {

        console.log(event.target)

    }

    return <>

        <div id='easy-page'>

            <h1>Felinesweeper</h1>

            <div id='easy-grid'>

                <img src={`${catPicPath}${randomIndex}.jpg`} id='hidden-pic' onClick={debug}/>

                {grid.map((row, index) => {

                    return <div className='easy-row' key={index}>

                        {row.map((sq, i) => grid[index][i] === 0 ? (
                            <div className='easy-square' id={`${index}-${i}`} key={`sq${index}${i}`} onClick={handleSquareClick}/>
                        ) : (
                            <div className='easy-square-clear' id={`${index}-${i}`} key={`sq${index}${i}`} />
                        ))}

                    </div>

                })}

            </div>

        </div>

    </>
}
