import PropTypes from 'prop-types';
import Course from '../Course/Course';
const Courses = ({courses}) => {
    return (
        <section className='col-span-3 mb-8'>
            <div className="grid grid-cols-3 gap-6">
                {
                    courses.map(course => <Course
                        key={course._id}
                        course={course}
                    ></Course>)
                }
            </div>
        </section>
    );
};

Courses.propTypes = {
    courses: PropTypes.array.isRequired
}

export default Courses;