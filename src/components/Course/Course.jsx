import PropTypes from 'prop-types';
import { BiDollar } from 'react-icons/Bi';
import { FiBookOpen } from 'react-icons/Fi';

const Course = ({ course }) => {
    const {img, title, description, price, credit} = course;
    return (
        <div className="card card-compact bg-base-100 shadow-xl relative min-h-[516px]">
            <figure className="px-4 pt-4">
                <img src={img} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <div className="flex flex-col p-6 space-y-2 text-justify">
                <h2 className="font-bold text-left text-xl">{title}</h2>
                <p className='text-gray-500 leading-snug'>{description}</p>
                <hr />
                <div className="flex justify-between absolute bottom-[72px] left-6 right-6">
                    <p className='flex items-center'><span className='scale-150 mr-2'><BiDollar></BiDollar></span> Price : {price}</p>
                    <p className='flex items-center'><span className='scale-150 mr-2'><FiBookOpen></FiBookOpen></span> Credit : {credit}hr</p>
                </div>
                <div className="card-actions absolute bottom-4">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
};

export default Course;