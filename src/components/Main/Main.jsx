import { useState } from "react";
import Courses from "../Courses/Courses";
import RegistrationSummary from "../RegistrationSummary/RegistrationSummary";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    const [courses, setCourses] = useState([]);
    const [registeredCourses, setRegisteredCourses] = useState([]);
    const [creditHrRemaining, setCreditHrRemaining] = useState(20);
    const [listCourse, setListCourse] = useState([]);
    const [totalCreditTaken, setTotalCreditTaken] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const showToast = (msg, toastType) => {
        switch (toastType) {
            case 'warn':
                toast.warn(msg);
                return;
            case 'success':
                toast.success(msg);
                return;
            case 'error':
                toast.error(msg);
                return;
            default:
                toast.info(msg);
        }
    }

    const updateRegistrationSummary = (newCourse) => {
        const { credit, title, price } = newCourse;
        setCreditHrRemaining(creditHrRemaining - credit);
        setListCourse([...listCourse, title]);
        setTotalCreditTaken(totalCreditTaken + credit);
        setTotalPrice(totalPrice + price);
    }

    const handleSelectCourse = newCourse => {
        const registeredCourseIds = registeredCourses.map(course => course._id);

        registeredCourseIds.includes(newCourse._id) ? showToast('Course already added', 'warn') : creditHrRemaining > newCourse.credit ? (updateRegistrationSummary(newCourse), setRegisteredCourses([...registeredCourses, newCourse])) : creditHrRemaining === newCourse.credit ? (updateRegistrationSummary(newCourse), setRegisteredCourses([...registeredCourses, newCourse]), showToast('Congratulation!!! Maximum Credit Taken!', 'success')) : showToast('Cannot take over 20 credit!', 'error');
    }

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
            <Courses
                courses={courses}
                handleSelectCourse={handleSelectCourse}
            ></Courses>
            <RegistrationSummary
                creditHrRemaining={creditHrRemaining}
                listCourse={listCourse}
                totalCreditTaken={totalCreditTaken}
                totalPrice={totalPrice}
            ></RegistrationSummary>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={false}
                draggable={false}
                theme="colored"
            ></ToastContainer>
        </main>
    );
};

export default Main;