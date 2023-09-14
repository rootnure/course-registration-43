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
        if(toastType === 'warn') {
            toast.warn(msg);
        }
        else if(toastType === "success") {
            toast.success(msg);
        }
        else if(toastType === "info") {
            toast.info(msg);
        }
    }

    const updateRegistrationSummary = (newCourse) => {
        const {credit, title, price} = newCourse;
        setCreditHrRemaining(creditHrRemaining - credit);
        setListCourse([...listCourse, title]);
        setTotalCreditTaken(totalCreditTaken + credit);
        setTotalPrice(totalPrice + price);
    }

    const handleSelectCourse = newCourse => {
        creditHrRemaining === newCourse.credit ? (setRegisteredCourses([...registeredCourses, newCourse]), updateRegistrationSummary(newCourse), showToast('Maximum Credit Taken!', 'info')) : creditHrRemaining < newCourse.credit ? showToast('Cannot take over 20 credit!', 'warn') : registeredCourses.map(course => course._id).includes(newCourse._id) ? showToast('Course already added', 'warn') : (setRegisteredCourses([...registeredCourses, newCourse]), updateRegistrationSummary(newCourse));
    }

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <main className="grid grid-cols-4 gap-6 container mx-auto">
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
                position= "top-right"
                autoClose= {5000}
                hideProgressBar= {false}
                closeOnClick= {true}
                pauseOnHover= {false}
                draggable= {false}
                theme= "colored"
            ></ToastContainer>
        </main>
    );
};

export default Main;