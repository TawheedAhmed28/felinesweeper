import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    return <div id='home'>

        <h1>Felinesweeper</h1>
        <div id='home-difficulty'>

            <div id='difficulty-buttons'>

                <Link id='easy-button' to={"/easy"}>Easy</Link>
                <Link id='normal-button'>Normal</Link>
                <Link id='hard-button'>Hard</Link>

            </div>

        </div>

    </div>

}
