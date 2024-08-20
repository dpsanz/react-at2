function Footer() {
    return ( 
        <>
            <div className="pl-5 pr-5 pt-7 pb-7 flex justify-between bg-black text-white border-t-2">
                <div>
                    <h1>
                        Copyright © | Pedreca | Dpsanz | Lecrudo | 2024
                    </h1>
                </div>
                <div className="flex">
                    <a className="hover:text-rose-600 transition-all font-bold" href="https://instagram.com/realmadrid/">
                        INSTAGRAM
                    </a>
                    <a className="ml-2 hover:text-rose-600 transition-all font-bold" href="https://github.com/dpsanz">
                        GITHUB
                    </a>
                </div>
            </div>
        </>
     );
}
export default Footer;