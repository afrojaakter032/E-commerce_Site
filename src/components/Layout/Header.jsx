function Header() {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <a>Collection</a>
                                <ul className="p-2">
                                    <li>
                                        <a>Women's Item</a>
                                    </li>
                                    <li>
                                        <a>Men's Item</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a>Fashion</a>
                            </li>
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                    <img src="./asstes/images/logo.jpg" alt="logo" height={150} width={150} />
                </div>
                <div className="navbar-center hidden lg:flex text-9xl">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <details>
                                <summary>Collection</summary>
                                <ul className="p-2">
                                    <li>
                                        <a>Women's Item</a>
                                    </li>
                                    <li>
                                        <a>Men's Item</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a>Blog</a>
                        </li>
                        <li>
                            <a>Fashion</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="btn btn-ghost btn-circle text-3xl indicator">
                        <i class="ph ph-shopping-cart"></i>
                        <span className="badge badge-sm indicator-item">0</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;