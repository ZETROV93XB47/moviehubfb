import React from 'react'
import img from '../images/Red-Moon-Ninja.jpg'
import Icons from '../images/Icons'



function GameCard(props) {

    //"transform-gpu hover:scale-110 duration-300 max-w-sm bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 rounded-lg border border-gray-500 shadow-md dark:bg-gray-800 dark:border-gray-700"
        //"transform-gpu hover:scale-110 duration-300 max-w-sm bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 rounded-lg border border-gray-500 shadow-md dark:bg-gray-800 dark:border-gray-700"

        console.log(props.results)

    return (
            <div className="transform-gpu hover:scale-110 duration-300  max-w-sm bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 rounded-lg border border-gray-500 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={"https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"} alt="" />
                    <div className="p-5">
                        <span className="flex justify-center items-center">
                            <img className="w-3 mx-1" src={Icons.WindowsIcon} alt="" />
                            <img className="w-3 mx-1" src={Icons.XboxIcon} alt="" />
                            <img className="w-3 mx-1" src={Icons.PlayStationIcon} alt="" />
                        </span>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
                    <p className="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </a>
                </div>
            </div>
        )
    }   

export default GameCard