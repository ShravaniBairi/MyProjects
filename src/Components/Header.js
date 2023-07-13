const Header = () =>
{
    return(
        <div id="Header">
        <img style ={{width : 200}}  alt= "Taste It Logo" src="https://cdn.dribbble.com/users/973570/screenshots/3221413/media/5aa404f7d6fdf72e7af2b28f14bb27c8.png"></img>

        <div className = "Nav-tags">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>cart</li>
        </ul>
        </div>
        </div>
    );
};

export default Header