import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import MarkCompletedButton from "../components/MarkCompletedButton";

const StudentDashboard = () => {
  const courses = useSelector((store) => store.courses);

  const uniqueStudentNames = {};

  courses.forEach((course) => {
    const students = course.students || [];
    students.forEach((student) => {
      const studentName = student.name;

      if (!uniqueStudentNames.hasOwnProperty(studentName)) {
        uniqueStudentNames[studentName] = true;
      }
    });
  });

  const studentNames = Object.keys(uniqueStudentNames);

  let studentCourses = {};
  courses.forEach((course) => {
    const students = course.students;
    students.forEach((student) => {
      const studentName = student.name;
      const courseName = course.name;

      if (studentCourses[studentName] === undefined) {
        studentCourses[studentName] = new Set([courseName]);
      } else {
        studentCourses[studentName].add(courseName);
      }
    });
  });

  const tableWidth = useBreakpointValue({
    base: "100%",
    sm: "80%",
    md: "80%",
    lg: "100%",
  });

  return (
    <Flex overflowX="auto" margin={"auto"} justifyContent={"center"}>
      <table style={{ borderCollapse: "collapse", width: tableWidth }}>
        <thead>
          <tr>
            <th
              style={{
                border: "2px solid teal",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              Student Name
            </th>
            <th
              style={{
                border: "2px solid teal",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              Courses
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(studentCourses).map(([studentName, courses], i) => (
            <tr key={i}>
              <td
                style={{
                  border: "1px solid teal",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                <Text fontWeight="bold">{studentName}</Text>
              </td>
              <td
                style={{
                  border: "1px solid teal",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                {Array.from(courses).map((course, j) => (
                  <Flex
                    key={j}
                    gap={10}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                  >
                    <Text pb={5} margin={"auto"}>
                      {course}
                    </Text>
                    <MarkCompletedButton />
                  </Flex>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Flex>
  );
};

export default StudentDashboard;
