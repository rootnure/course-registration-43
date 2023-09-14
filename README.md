# Welcome to Basic React Assignment (Course Registration Project)

## Live Links:
- Netlify (Primary): [Click Here](https://course-registration-a5bc81.netlify.app/)
- Surge (Secondary): [Click Here](http://living-boys.surge.sh/)

## Question Answers

### 1. Project Features
- User can add new course to the course list
- Credit hour remaining set to <strong>20</strong>, Credit taken set to <strong>0</strong>, Total Cost set to <strong>0</strong>, <strong>No course added</strong> text added dynamically by default
- <strong>Remaining Credit</strong>, <strong>Course Name List</strong>, <strong>Total Credit</strong>and <strong> Total Price</strong> will change after a successful course added to registration
- If new course credit is less than or equal to remaining credit, course will be added to course list under "<strong>Course Name</strong>"
- If new course is added previously, a <strong>warning toast</strong> will appear and won't added again
- If new course credit is grater than remaining credit, an <strong>error toast</strong> will be shown
- If courses' total credit is equal to maximum credit (<strong>20</strong>), a <strong>success toast</strong> will appear
- Project is compatible (<em>responsive</em>) to all devices (i.e. <strong>Mobile</strong>, <strong>Tablet</strong>, <strong>Laptop</strong>, <strong>Desktop</strong>)

### 2. How I managed the state in this assignment project
- I've used a total of <strong>six</strong> states in this project.
- Each get updated and hold data after any side effect or a new course is added. Individually,
    - <strong><em>courses</em></strong> hold all course data from JSON
    - <strong><em>registeredCourses</em></strong> hold registered courses data after a new course is added
    - <strong><em>creditHrRemaining</em></strong> hold credit hour remaining after a new course is added
    - <strong><em>listCourse</em></strong> hold all registered course name as an array of strings after a new course is added
    - <strong><em>totalCreditTaken</em></strong> hold credit taken after a new course is added
    - <strong><em>totalPrice</em></strong> hold total price after a new course is added
- All this states are declared in both <strong>Courses</strong> and <strong>RegistrationSummary</strong>'s common parent <strong>Main.jsx</strong> so that the states can be shared and update accordingly.
- Event handler for <strong>Select</strong> button is clicked inside a <em>child</em> component of <strong>Courses</strong> that trigger in parent component <strong>Main</strong> as the event is shared from grandparent <em>(Main.jsx)</em> to child <em>(Course.jsx)</em> component as props and states are updated according to description using event handler function.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
