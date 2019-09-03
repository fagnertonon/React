import React from "react";
import './Main.css'
import logo from '../assets/tindev.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

export default function Main(match) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/16415868?v=4" alt=""></img>
                    <footer>
                        <strong>Fagner</strong>
                        <p>teste    </p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={like} alt="Like" className="like" />
                        </button>
                        <button type="button">
                            <img src={dislike} alt="Dislike" className="dislike" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/16415868?v=4" alt=""></img>
                    <footer>
                        <strong>Fagner</strong>
                        <p>teste    </p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={like} alt="Like" className="like" />
                        </button>
                        <button type="button">
                            <img src={dislike} alt="Dislike" className="dislike" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/16415868?v=4" alt=""></img>
                    <footer>
                        <strong>Fagner</strong>
                        <p>teste    </p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={like} alt="Like" className="like" />
                        </button>
                        <button type="button">
                            <img src={dislike} alt="Dislike" className="dislike" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>

    )
}