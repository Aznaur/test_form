
export const minifyEntryJs = () => {
    return app.gulp.src(app.path.src.js)
        .pipe(app.plugins.gulpTerser())
        .pipe(app.plugins.rename({ suffix: '.min' }))
        .pipe(app.gulp.dest(app.path.dist.js));
}
