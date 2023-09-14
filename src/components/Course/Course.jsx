import PropTypes from 'prop-types';
import { BiDollar } from 'react-icons/Bi';
import { FiBookOpen } from 'react-icons/Fi';

const Course = ({ course, handleSelectCourse }) => {
    const { img, title, description, price, credit } = course;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="px-4 pt-4">
                <img src={img} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <div className="flex flex-col p-6 space-y-2 text-justify">
                <h2 className="font-bold text-left text-xl">{title}</h2>
                <p className='text-gray-500 leading-snug max-h-[100px] overflow-auto border-b-2'>{description}</p>
                <div className="flex justify-between pt-2">
                    <p className='flex items-center'><span className='scale-150 mr-2'><BiDollar></BiDollar></span> Price : {price}</p>
                    <p className='flex items-center'><span className='scale-150 mr-2'><FiBookOpen></FiBookOpen></span> Credit : {credit}hr</p>
                </div>
                <div className="card-actions">
                    <button
                        onClick={() => handleSelectCourse(course)}
                        className="btn w-full text-white font-bold bg-blue-500 hover:bg-blue-400 normal-case text-xl">Select</button>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectCourse: PropTypes.func.isRequired
};

export default Course;