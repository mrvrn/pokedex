import "./Header.css";

function Header() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <header>
                <div className="flex justify-between p-3 mx-30">
                    <div className="flex gap-2 justify-center">
                        <img
                            src="pokeball.svg"
                            alt="logo"
                            className="w-10 h-10"
                        />
                        <h1 className="text-3xl font-bold text-white">
                            Pok&eacute;dex
                        </h1>
                    </div>
                    <div className="flex justify-center items-center gap-5 me-20">
                        <a href="/" className="nav-link">
                            Home
                        </a>
                        <a href="/favorites" className="nav-link">
                            Favorites
                        </a>
                        <a href="/compare" className="nav-link">
                            Compare
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
