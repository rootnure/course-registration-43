import { useState } from "react";
import Courses from "../Courses/Courses";
import RegistrationSummary from "../RegistrationSummary/RegistrationSummary";
import { useEffect } from "react";

const Main = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 container mx-auto">
            <Courses
                courses={courses}
            ></Courses>
            <RegistrationSummary></RegistrationSummary>
        </main>
    );
};

export default Main;