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


    return <>

        <div id='easy-page'>

            <h1>Felinesweeper</h1>

            <div id='easy-grid'>

                {grid.map((sq, index) => {

                    return <div className='easy-row' key={`[${index}]`}>

                    {/* add keys to squares */}

                    <div className='easy-square'/>
                    <div className='easy-square'/>
                    <div className='easy-square'/>
                    <div className='easy-square'/>
                    <div className='easy-square'/>
                    <div className='easy-square'/>
                    <div className='easy-square'/>
                    <div className='easy-square'/>
                    <div className='easy-square'/>
                    <div className='easy-square'/>
                    <div className='easy-square'/>
                    <div className='easy-square'/>
                    <div className='easy-square'/>
                    <div className='easy-square'/>
                    <div className='easy-square'/>

                </div>

                })}

            </div>

        </div>

    </>
}
