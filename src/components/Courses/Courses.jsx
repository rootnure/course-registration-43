import PropTypes from 'prop-types';
const Courses = ({courses}) => {
    return (
        <section className='lg:col-span-3'>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {
                    courses.map(course => console.log(course))
                }
            </div>
        </section>
    );
};

Courses.propTypes = {
    courses: PropTypes.array.isRequired
}

export default Courses;