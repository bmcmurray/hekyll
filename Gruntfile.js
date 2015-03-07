module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                dot: true,
                src: ["!css/**", "css/*", "!*/syntax.css", "js/*", "img/*"]
            }
        },
        compass: {                  // Task
            dist: {                   // Target
              options: {              // Target options
                config: 'config.rb',
                cssDir: 'css',
                sassDir: '_sass',
                environment: 'production'
              }
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '_img',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'img'
                }]
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass']
            }
        },
        uglify: {
            dist: {
              files: {
                'js/impress.min.js': ['bower_components/impress.js/js/impress.js']
              }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['clean:dist', 'compass', 'uglify', 'imagemin']);
    grunt.registerTask('update', ['newer:compass', 'newer:uglify', 'newer:imagemin']);
};
