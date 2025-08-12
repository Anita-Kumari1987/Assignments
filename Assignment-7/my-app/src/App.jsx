import "./App.css";
import { StudentData } from "./Data/Context";
import { name, email, courses, grades } from "./Data/studentData";
import { Courses } from "./Pages/Courses";
import { Grades } from "./Pages/Grades";
import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";


function App() {
  return (
    <>
      <StudentData.Provider value={{ name, email, courses, grades }}>
        <Home/>
        <Profile/>
        <Grades/>
        <Courses/>
      </StudentData.Provider>
    </>
  );
}

export default App;
