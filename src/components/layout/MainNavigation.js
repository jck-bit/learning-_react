import { Link } from 'react-router-dom'

import classes from "./MainNavigation.module.css"

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to ='/'>Old meetups</Link>
                    </li>
                    <li>
                        <Link to ='/new-meetups'>Add Meetups</Link>
                    </li>
                    <li>
                        <Link to ='/Favorites'> my Favorites</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default MainNavigation
