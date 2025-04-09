// App
const App = () => {
    return (
        <div>
            {/* header */}
            <nav>
                <div className="logo">
                    <img src="/images/brand_logo.png" alt="logo" />
                </div>
                <div className="nav">
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
        </div>
    );
}
// Export the App component
export default App;