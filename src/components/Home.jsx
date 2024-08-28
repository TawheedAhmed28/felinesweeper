import React from 'react'
import { redirect } from 'react-router-dom'

export default function Home() {

    function easy() {
        redirect("/easy")
    }

    return <div id='home'>

        <h1>Felinesweeper</h1>
        <div id='home-difficulty'>

            <div id='difficulty-buttons'>

                <button>Easy</button>
                <button>Normal</button>
                <button>Hard</button>

            </div>

        </div>

    </div>

}
