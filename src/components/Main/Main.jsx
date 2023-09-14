import { useState } from "react";
import Courses from "../Courses/Courses";
import RegistrationSummary from "../RegistrationSummary/RegistrationSummary";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    
    const [courses, setCourses] = useState([]);

    const [registeredCourseIds, setRegisteredCourseIds] = useState([]);

    const showToast = (msg, type) => {
        if(type === 'warn') {
            toast.warn(msg);
        }
        else if(type === "success") {
            toast.success(msg);
        }
    }

    const handleSelectCourse = newCourseId => {
        registeredCourseIds.includes(newCourseId) ? showToast('Course already added', 'warn') : setRegisteredCourseIds([...registeredCourseIds, newCourseId]);
    }

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <main className="grid grid-cols-4 gap-8 container mx-auto">
            <Courses
                courses={courses}
                handleSelectCourse={handleSelectCourse}
            ></Courses>
            <RegistrationSummary></RegistrationSummary>
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