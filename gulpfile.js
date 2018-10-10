// 1、创建一个webserver
// 2、编译sass
// 3、基于CommenJS的模块化(webpack-stream插件)
// 4、Mock数据是（假数据）

const gulp = require("gulp")
const server = require("gulp-webserver")
const sass = require("gulp-sass")
const webpack = require("webpack-stream")
const proxy = require("http-proxy-middleware")
// gulp-watch   插件所依赖的node-watch  不支持window


//CommonJS规范做JS模块化
gulp.task("packJs",() => {
    return gulp.src('./src/scripts/**/*.js')
        // 
        .pipe(webpack({
            mode: 'development',
            // 入口文件
            entry: {
                app: ['@babel/polyfill', './src/scripts/app.js'],
                // app: './src/scripts/app.js'
            },
            // 出口文件
            output: {
                filename: 'app.js'
            },
            // 模块化
            module: {
                rules: [
                    {
                        test: /\.html$/,
                        use: ['string-loader']
                    },
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                          loader: 'babel-loader',
                          options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-transform-runtime']
                          }
                        }
                    }
                ],
            }
        }))
        // 目标文件夹
        .pipe(gulp.dest('./dev/scripts'))
})


// 编译sass
gulp.task("packScss",() => {
    return gulp.src('./src/styles/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dev/styles'))
})

// 启动一个gulp-webserver
gulp.task('server', () => {
    return gulp.src('./dev')
        .pipe(server({
            host: 'localhost',
            port: 8080,
            // 热更新
            livereload: true,
            middleware: [
                proxy('/lagou', {
                    target: 'https://m.lagou.com',
                    changeOrigin: true,
                    pathRewrite: {
                      '^/lagou': ''
                    }
                }),
                proxy('/api',{
                    target: 'http://localhost:3000',
                    chageOrigin: true,
                }),

            ]
        }))
})

// copy index.html
gulp.task('copyHtml', () => {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dev/'))
})

// copy iconfonts
gulp.task('copyIconfonts', () => {
    return gulp.src('./src/iconfonts/**/*')
        .pipe(gulp.dest('./dev/iconfonts'))
})

// copy libs
gulp.task('copyLibs', () => {
    return gulp.src('./src/libs/**/*')
        .pipe(gulp.dest('./dev/libs'))
})

// copy images
gulp.task('copyImages', () => {
    return gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./dev/images'))
})

// 其实并不用copy,
gulp.task('copyMock', () => {
    return gulp.src('./src/mocks/**/*')
        .pipe(gulp.dest('./dev/mocks'))
})

// 文件修改监听(可以监听文件创建、删除的插件window不支持)
gulp.task('watch', () => {
    gulp.watch('./src/*.html', ['copyHtml'])
    gulp.watch('./src/styles/**/*', ['packScss'])
    gulp.watch('./src/libs/**/*',['copyLibs'])
    // mock暂时使用的假数据，不用部署，所以不用copy
    // gulp.watch('./src/mocks/**/*',['copyMock'])
    gulp.watch('./src/scripts/**/*', ['packJs'])
})

// default task
gulp.task('default', ['packScss', 'packJs', 'copyHtml', 'copyIconfonts', 'copyLibs','copyImages', 'server', 'watch'], () => {
    console.log("All Works!!")
})


