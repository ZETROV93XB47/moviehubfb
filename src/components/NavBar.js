import React, {useState, useEffect} from 'react'
import GameGrid from './GameGrid';



function NavBar() {

    const [keyWord, setKeyWord] = useState("")
    var dataResult = {};
    var searchStatus = false;

    
/*    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.rawg.io/api/games?search="'+keyWord+'"&platforms=18,1,7&key=464ffc8cb61b4ef18c0e126e94f235c0')
            .then(response => response.json())
            .then(data => console.log(data));
        });
        */


    function handleChange(e){
        setKeyWord(e.target.value);
        if(e.target.value !== undefined){
            searchStatus = false;
        }
        //console.log(keyWord);
    }

    function handleSubmit(e){
        e.preventDefault();
        setKeyWord(e.target.value);
        searchStatus = true;
        fetch('https://api.rawg.io/api/games?search="'+keyWord+'"&platforms=18,1,7&key=464ffc8cb61b4ef18c0e126e94f235c0')
        .then(response => response.json())
        .then(data => {
            dataResult = data;
            console.log(data);
        });
    }

    function renderGameGrid(){
        if(dataResult.results.length !== 0){
            return(
                <GameGrid results={dataResult} />
            )
        }
    }




    return (
        <div className="border border-red-800">
            <nav className="bg-gray-900 border border-red-800 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="#" className="flex items-center">
                <img src="/docs/images/logo.svg" className="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <div className="flex md:order-2 max-w-sm rounded-xl shadow-lg justify-center items-center space-x-4 ">
                <div className="hidden relative mr-3 md:mr-0 md:block ">
                    <form onSubmit={handleSubmit}  className="">
                        <input onChange={handleChange} type="text"value={keyWord} className=" text-sm rounded-l-lg py-2.5" placeholder="Nom d'un jeu ..."/>
                        <input type="submit" value="Chercher" className="h-9.5 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-r-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
                    </form>
                </div>
            </div>
            <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        <div className="p-5 grid place-items-center">     
            {renderGameGrid()}
        </div>
        </div>
    )
}

export default NavBar