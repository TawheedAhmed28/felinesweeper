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
                <Link id='normal-button' to={"/normal"}>Normal</Link>
                <Link id='hard-button' to={"/hard"}>Hard</Link>

            </div>

        </div>

        <div id='welcome'>

            <h2 id='welcome-message'>Hey - let's play Felinesweeper! It's just the classic game Minesweeper, but with cat pics, and who doesn't love cat pics? :)</h2>

        </div>

    </div>

}

// test