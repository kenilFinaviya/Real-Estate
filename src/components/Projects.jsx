import React, { useEffect, useState } from 'react';
import Left from '../assets/left-arrow.png';
import Right from '../assets/right-arrow.png';
import { projectData } from '../assets/assets';
// import { motion } from 'framer-motion'


const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(projectData.length);
            } else {
                setCardsToShow(1);
            }
        };
        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectData.length - 1 : prevIndex - 1));
    };

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div
            // initial={{ opacity: 0, x: -200 }}
            // transition={{ duration: 1 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
                Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span>
            </h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
                Crafting Spaces, Building Legacies—Explore Our Portfolio
            </p>

            {/* Slider Buttons */}
            <div className='flex justify-end items-center mb-8 overflow-hidden'>
                <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2 overflow-hidden' aria-label='Previous Project' title='Previous Project'>
                    <img className='w-4' src={Left} alt='Previous' />
                </button>
                <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2 overflow-hidden' aria-label='Next Project' title='Next Project'>
                    <img className='w-4' src={Right} alt='Next' />
                </button>
            </div>

            {/* Project Slider */}
            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}>
                    {projectData.map((project, index) => (
                        <div
                            key={index}
                            className='relative flex-shrink-0 w-full sm:w-1/4 group'
                        >
                            <img className='w-full h-[50vh] mb-14' src={project.image} alt={project.title} />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>                                     <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                                    <p className='text-gray-500 text-sm'>{project.price} <span>|</span> {project.location}</p>                                 </div>                             </div>
                            {/* Hover Effect */}
                            <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <button
                                    onClick={() => openModal(project)}
                                    className='px-6 py-2 bg-blue-400 text-white font-semibold rounded shadow hover:bg-blue-700'
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-white w-11/12 md:w-3/5 lg:w-2/5 rounded-lg p-6 relative'>
                        <button
                            onClick={closeModal}
                            className='absolute top-4 right-4 text-gray-400 hover:text-gray-600'
                        >
                            ✕
                        </button>
                        <img className='w-[35vw] h-64 object-cover rounded mb-4' src={selectedProject.image} alt={selectedProject.title} />
                        <h2 className='text-2xl font-semibold text-gray-800'>{selectedProject.title}</h2>
                        <p className='text-gray-500 mb-2'>
                            {selectedProject.price} <span className='px-1'>|</span> {selectedProject.location}
                        </p>
                        <p className='text-gray-600'>{selectedProject.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;

// import React, { useEffect, useState } from 'react'
// import Left from '../assets/left-arrow.png'
// import Right from '../assets/right-arrow.png'
// import { projectData } from '../assets/assets'

// const Projects = () => {

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [cardsToShow, setCardsToShow] = useState(1);

//     useEffect(() => {
//         const updateCradsToShow = () => {
//             if (window.innerWidth >= 1024) {
//                 setCardsToShow(projectData.length);
//             } else {
//                 setCardsToShow(1)
//             }
//         };
//         updateCradsToShow();

//         window.addEventListener('resize', updateCradsToShow);
//         return () => window.removeEventListener('resize', updateCradsToShow);

//     }, [])

//     const nextProject = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length)
//     }
//     const prevProject = () => {
//         setCurrentIndex((prevIndex) => prevIndex === 0 ? projectData.length - 1 : prevIndex - 1)
//     }

//     return (
//         <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
//             <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
//             <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies—Explore Our Portfolio</p>


//             {/* slider Buttons  */}
//             <div className=' flex justify-end items-center mb-8 overflow-hidden'>
//                 <button onClick={prevProject} className=' p-3 bg-gray-200 rounded mr-2 overflow-hidden' aria-label='Previous Project' title='Previous Project'>
//                     <img className='w-4' src={Left} alt="Previous" />
//                 </button>
//                 <button onClick={nextProject} className=' p-3 bg-gray-200 rounded mr-2 overflow-hidden' aria-label='Next Project' title='Next Project'>
//                     <img className='w-4' src={Right} alt="Next" />
//                 </button>
//             </div>
//             {/* Project Slider  */}
//             <div className='overflow-hidden'>
//                 <div className='flex gap-8 transition-transform duration-500 ease-in-out'
//                     style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
//                 >
//                     {projectData.map((project, index) => (
//                         <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
//                             <img className=' w-full h-[50vh] mb-14' src={project.image} alt={project.title} />
//                             <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
//                                 <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
//                                     <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
//                                     <p className='text-gray-500 text-sm'>{project.price} <span>|</span> {project.location}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div >
//     )
// }

// export default Projects