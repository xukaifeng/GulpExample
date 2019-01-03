# Gulp
前端的自动化构建工具

### 使用前全局安装gulp的命令行工具
```
$ cnpm install gulp -g
or
$ npm install gulp -g
```

### 本地安装
项目根目录执行
```
$ npm init -y
$ cnpm i gulp --save-dev
```

#### 相关API
官方API文档：https://www.gulpjs.com.cn/docs/api/
```
$ gulp.task(name[, deps], fn)
$ gulp.src(globs[, options])  //源文件路径 globs:String 或 Array 
$ gulp.dest(path[, options])  //目标路径   path：String or Function
$ gulp.pipe()                 //管道、路径 下一步
```

