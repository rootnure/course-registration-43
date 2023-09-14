import PropTypes from 'prop-types';
const RegistrationSummary = ({creditHrRemaining, listCourse, totalCreditTaken, totalPrice}) => {
    return (
        <aside className="relative w-full">
            <div className="p-6 bg-white rounded-xl space-y-4 sticky top-6 w-full">
                <h3 className="text-xl font-extrabold text-blue-400 text-center">Credit Hour Remaining {creditHrRemaining} hr</h3>
                <hr />
                <h2 className="text-2xl font-bold">Course Name</h2>
                <ol className="text-lg text-gray-500 list-decimal list-inside">
                    {
                        listCourse.length ? listCourse.map((course, idx) => <li key={idx}>{course}</li>) : 'No course added'
                    }
                </ol>
                <hr />
                <h3 className="text-xl font-semibold">Total Credit Hour : {totalCreditTaken}</h3>
                <hr />
                <h3 className="text-xl font-bold">Total Price : {totalPrice} USD</h3>
            </div>
        </aside>
    );
};

RegistrationSummary.propTypes = {
    creditHrRemaining: PropTypes.number.isRequired,
    listCourse: PropTypes.array.isRequired,
    totalCreditTaken: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
}

export default RegistrationSummary;