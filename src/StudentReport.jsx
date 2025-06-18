import React from "react";
import Card from "./StudentCard";

function StudentReport(){
    const StudentList = [
    {
        imgUrl: "https://randomuser.me/api/portraits/men/11.jpg",
        StudentName: "Aryan Mehta",
        StudentClass: "10A",
        StudentPercentage: 92,
        StudentSchool: "St. Xavier's High School"
    },
    {
        imgUrl: "https://randomuser.me/api/portraits/women/25.jpg",
        StudentName: "Sneha Sharma",
        StudentClass: "10B",
        StudentPercentage: 76,
        StudentSchool: "Greenwood Public School"
    },
    {
        imgUrl: "https://randomuser.me/api/portraits/men/34.jpg",
        StudentName: "Rohan Patel",
        StudentClass: "10A",
        StudentPercentage: 85,
        StudentSchool: "Delhi International School"
    },
    {
        imgUrl: "https://randomuser.me/api/portraits/women/45.jpg",
        StudentName: "Isha Verma",
        StudentClass: "10C",
        StudentPercentage: 91,
        StudentSchool: "Springdale High"
    },
    {
        imgUrl: "https://randomuser.me/api/portraits/men/56.jpg",
        StudentName: "Aditya Kumar",
        StudentClass: "10B",
        StudentPercentage: 68,
        StudentSchool: "Modern Public School"
    },
    {
        imgUrl: "https://randomuser.me/api/portraits/women/62.jpg",
        StudentName: "Nidhi Joshi",
        StudentClass: "10A",
        StudentPercentage: 88,
        StudentSchool: "St. Xavier's High School"
    },
    {
        imgUrl: "https://randomuser.me/api/portraits/men/77.jpg",
        StudentName: "Kunal Singh",
        StudentClass: "10C",
        StudentPercentage: 80,
        StudentSchool: "Ryan International"
    }];

    return(

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 p-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-8 max-w-full w-full text-white">
                <div className="text-center text-2xl font-bold mb-6">
                    <h1>Student Profile</h1> 
                </div>
                <div className="flex flex-wrap gap-6">
                    {StudentList.map((student, index) => (
                        <Card
                        key={index}
                        imgUrl={student.imgUrl}
                        StudentName={student.StudentName}
                        StudentClass={student.StudentClass}
                        StudentPercentage={student.StudentPercentage}
                        StudentSchool={student.StudentSchool}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default StudentReport;
