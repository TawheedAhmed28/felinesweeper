import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    function testLog() {
        console.log("hi")
    }

    return <div id='home'>

        <h1 onClick={testLog}>Felinesweeper</h1>
        <div id='home-difficulty'>

            <div id='difficulty-buttons'>

                <Link id='easy-button' to={"/easy"}>Easy</Link>
                <Link id='normal-button'>Normal</Link>
                <Link id='hard-button'>Hard</Link>

            </div>

        </div>

    </div>

}

// test