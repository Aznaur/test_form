export const rigger = () => {
    return app.plugins.gulp.src(app.path.src.rigger)
    .pipe(app.plugins.plumber())
    .pipe(app.plugins.rigger())
    .pipe(app.gulp.dest(app.path.src.base))
    .pipe(app.plugins.bs.stream())
}
