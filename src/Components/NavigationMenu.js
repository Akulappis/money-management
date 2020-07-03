import React from 'react'
import { Link } from "react-router-dom"

function NavigationMenu(props) {
    return (
        <div>
            <div className="font-bold py-3">
                Valikko

            </div>
            <ul>
                <li>
                    <Link
                        to="/"
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        Etusivu
                    </Link>
                </li>
                <li>
                    <Link
                        to="/history"
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Historia
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu;