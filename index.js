const courseController = require("./src/controllers/courseController");

const courseOptions = {
  interval: {
    default: 2,
    alias: "i",
    describe: "Tiempo en segundos",
  },
};

const InscriptionOptions = {
  idcurso: {
    default: 0,
    alias: "i",
    describe: "Identificador del curso",
  },
  cedula: {
    default: 0,
    alias: "c",
    describe: "Cédula de ciudadanía",
  },
  nombre: {
    default: 0,
    alias: "n",
    describe: "Nombre del interesado",
  },
};

const argv = require("yargs")
  .command("cursos", "Mostrar los cursos disponibles", courseOptions, function (
    argv
  ) {
    courseController.showCoursesDelay(argv.interval);
  })
  .command("inscribir", "Inscripción a un curso", InscriptionOptions, function (
    argv
  ) {
    if (courseController.findCourseById(argv.idcurso)) {
      console.log("Realizando inscripción");
      courseController.registerToCourse(argv.idcurso, argv.cedula, argv.nombre);
      console.log("Inscripción inscripción");
    }
  }).argv;
