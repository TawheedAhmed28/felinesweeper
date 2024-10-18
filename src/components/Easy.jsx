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

    return <>

        <div id='easy-page'>

            <h1>Felinesweeper</h1>

            <img src={`${catPicPath}${randomIndex}.jpg`} id='hidden-pic'/>
            <div id='easy-grid'>
            


                {grid.map((sq, index) => {

                    return <div className='easy-row' key={index}>

                        {/* add keys to squares */}

                        <div className='easy-square' id={`[${index}][0]`} />
                        <div className='easy-square' id={`[${index}][1]`} />
                        <div className='easy-square' id={`[${index}][2]`} />
                        <div className='easy-square' id={`[${index}][3]`} />
                        <div className='easy-square' id={`[${index}][4]`} />
                        <div className='easy-square' id={`[${index}][5]`} />
                        <div className='easy-square' id={`[${index}][6]`} />
                        <div className='easy-square' id={`[${index}][7]`} />
                        <div className='easy-square' id={`[${index}][8]`} />
                        <div className='easy-square' id={`[${index}][9]`} />
                        <div className='easy-square' id={`[${index}][10]`} />
                        <div className='easy-square' id={`[${index}][11]`} />
                        <div className='easy-square' id={`[${index}][12]`} />
                        <div className='easy-square' id={`[${index}][13]`} />
                        <div className='easy-square' id={`[${index}][14]`} />

                    </div>

                })}

            </div>

        </div>

    </>
}
