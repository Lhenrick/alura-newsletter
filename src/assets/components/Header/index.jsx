
import ToggleTheme from '../ToggleTheme/ToggleTheme'

const Header = ({ user }) => {
    return(
        <div className="flex h-20 bg-fuchsia-700 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
            <span className="text-gray-100">Hello, {user?.name || "User"}</span>
            <h1 className="text-gray-100 text-xl sm:hover:text-2xl sm:cursor-pointer" >Reaper's Chronicle Newsletter</h1>
            <ToggleTheme/>
        </div>

    )
}

export default Header