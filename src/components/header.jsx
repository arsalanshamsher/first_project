const Navigation = () => {
    return (
        <nav>
            <div className="logo">
                <img src="/images/brand_logo.png" alt="logo" />
            </div>
            <div className="nav-menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            {/* login */}
            <div className="login">
                <button>Login</button>
            </div>
        </nav>
    );
}
// Export the Navigation component
export default Navigation;