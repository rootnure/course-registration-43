import PropTypes from 'prop-types';
import Course from '../Course/Course';
const Courses = ({ courses, handleSelectCourse }) => {
    return (
        <section className='col-span-3 mb-8'>
            <div className="grid grid-cols-3 gap-6">
                {
                    courses.map(course => <Course
                        key={course._id}
                        course={course}
                        handleSelectCourse={handleSelectCourse}
                    ></Course>)
                }
            </div>
        </section>
    );
};

Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    handleSelectCourse: PropTypes.func.isRequired
}

export default Courses;