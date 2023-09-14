import Courses from "../Courses/Courses";
import RegistrationSummary from "../RegistrationSummary/RegistrationSummary";

const Main = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
            <Courses></Courses>
            <RegistrationSummary></RegistrationSummary>
        </main>
    );
};

export default Main;