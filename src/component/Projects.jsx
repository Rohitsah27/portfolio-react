import React from 'react'

const Projects = () => {
    return (
        <div className="p-6">
            <div>
                <h1 className="text-2xl font-bold mb-4 ani1">Projects</h1>
                <p className="mb-6 text-gray-600 ani1">Simple Static Website</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="ani2 project-item border border-gray-200 p-4 text-center hover:scale-105 transform transition duration-200 shadow-sm hover:shadow-md">
                        <img src="./projects-img/p1.jpg" alt="project-1" className=" w-full h-90 object-cover mb-3" />
                        <p className="font-semibold ani1">Italian food template</p>
                    </div>
                    <div className="ani2 project-item border border-gray-200 p-4 text-center hover:scale-105 transform transition duration-200 shadow-sm hover:shadow-md">
                        <img src="./projects-img/p2.jpg" alt="project-2" className="w-full h-90 object-cover mb-3" />
                        <p className="font-semibold ani1">American food website and app template</p>
                    </div>
                    <div className="ani2 project-item border border-gray-200 p-4 text-center hover:scale-105 transform transition duration-200 shadow-sm hover:shadow-md">
                        <img src="./projects-img/p3.jpg" alt="project-3" className="w-full h-90 object-cover mb-3" />
                        <p className="font-semibold ani1">Italian food concept web template</p>
                    </div>
                </div>
            </div>

            <div className='break-line'></div>


            <div>
                <div className='my-10 flex gap-6 items-baseline'>
                    <h1 className="text-2xl font-bold mb-4 ani1">Dynamic Website</h1>
                    <img className='h-10 w-28 ani2' src="./assets/MERN-logo.png" alt="" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="ani2 project-item border border-gray-200 p-4 text-center hover:scale-105 transform transition duration-200 shadow-sm hover:shadow-md">
                        <img src="./projects-img/dweb1.png" alt="project-1" className="rounded ani2 w-full h-90 object-cover mb-3" />
                        <p className="font-semibold ani1">Home-Page</p>
                    </div>
                    <div className="ani2 project-item border border-gray-200 p-4 text-center hover:scale-105 transform transition duration-200 shadow-sm hover:shadow-md">
                        <img src="./projects-img/dweb2.png" alt="project-2" className="rounded w-full h-90 object-cover mb-3" />
                        <p className="font-semibold ani1">Next Page (Project Details Page)</p>
                    </div>
                </div>
            </div>

            <div className='break-line'></div>
            
        </div>
    )
}

export default Projects
