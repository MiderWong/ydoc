## 简介

[![npm version](https://badge.fury.io/js/ydoc.svg)](http://badge.fury.io/js/ydoc)

![](https://nodei.co/npm/ydoc.png?downloads=true&downloadRank=true&stars=true)

## 安装

```bash
npm install ydoc [-g]
```

## 使用方式

### 使用命令的方式

```bash
cd /path/to/project/  # 进入项目目录
ydoc init  # 初始化配置文件 编写配置文件ydoc.config或者ydocfile.js
ydoc build # 构建文档
```
详细请查看[命令使用方式说明](./usage.md), 配置及配置文件请查看 [配置说明](./config.md);

### 使用脚本的方式

```javascript
var ydoc = require("ydoc");

ydoc.build('/path/to/project', options);
```

### 使用Gulp的方式

```javascript
var ydoc = require("ydoc");

gulp.task('ydoc', function() {
    return gulp.src('./')
        .pipe(ydoc({
            // 配置
        }));
});
```

### 使用Grunt的方式

```javascript
grunt.initConfig({
    ydoc: {
        // 配置
    }
});

grunt.loadNpmTasks('ydoc');
```

## 开发者

* 林洋 <adwon.lin@qunar.com> | <edwon.lim@gmail.com>
* 王丽丽 <leila.wang@qunar.com>
* 董文博 <wenbo.dong@qunar.com>
