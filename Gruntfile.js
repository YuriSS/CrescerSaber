
module.exports = function (grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    sass: {
      dist: {
        options: {
          compass: true
        },
        files: {
          "public/css/master.css": "dev/styles/compile/master.scss"
        }
      }
    },

    watch: {
      css: {
        files: "dev/styles/**/*.scss",
        tasks: ["sass"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("style", ["sass"]);
  grunt.registerTask("default", ["watch"]);
};
