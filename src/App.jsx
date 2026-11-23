import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList";

function App() {

  const [students, setStudents] = useState([
    {
      name: "Rahul Sharma",
      rollNumber: "101",
      department: "BCA",
      semester: 3,
      cgpa: 8.5,
      photo: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Priya Das",
      rollNumber: "102",
      department: "BCA",
      semester: 3,
      cgpa: 9.2,
      photo: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "Amit Roy",
      rollNumber: "103",
      department: "BCA",
      semester: 4,
      cgpa: 7.8,
      photo: "https://i.pravatar.cc/150?img=13"
    },
    {
      name: "Sneha Gupta",
      rollNumber: "104",
      department: "BCA",
      semester: 4,
      cgpa: 9.5,
      photo: "https://i.pravatar.cc/150?img=44"
    }
  ]);

  const sortStudents = () => {
    const sorted = [...students].sort(
      (a, b) => b.cgpa - a.cgpa
    );

    setStudents(sorted);
  };

  return (
    <div>
      <Header />

      <h2 className="page-title">Student Details</h2>

      <button className="sort-button" onClick={sortStudents}>
        Sort by CGPA
      </button>

      <StudentList students={students} />

      <Footer />
    </div>
  );
}

export default App;
