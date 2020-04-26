const Course = require("../models/course.js");

let courses = [
  new Course(1, "Programación", 3, 100000),
  new Course(2, "Matemáticas", 4, 1000000),
  new Course(3, "Inglés", 12, 50000),
  new Course(4, "Español", 8, 400000),
];

const showCoursesDelay = (seconds) => {
  const interval = seconds * 1000;
  console.log("Mostrando oferta de cursos");
  courses.forEach((course, i) => {
    setTimeout(() => {
      console.log(course);
    }, i * interval);
  });
};

const findCourseById = (id) => {
  let course = courses.find((x) => x.id === id);
  if (course) {
    console.log(course);
  } else {
    console.log("El curso no existe");
  }
  return course;
};

const registerToCourse = (idCourse, idUser, name) => {
  const fs = require("fs");
  let course = courses.find((x) => x.id === idCourse);
  let fileName = `media/${idCourse}-${idUser}.txt`;

  let texto = `El usuario identificado con ${idUser} con nombre ${name} se ha inscrito al curso \n ${JSON.stringify(
    course
  )}`;
  console.log(fileName);
  console.log(texto);
  fs.writeFile(fileName, texto, (err) => {
    if (err) throw err;
    console.log(
      `El estudiante ${idUser} se ha inscrito al curso de ${course.name}`
    );
  });
};

const registerCourse = (module.exports = {
  courses,
  showCoursesDelay,
  findCourseById,
  registerToCourse,
});
