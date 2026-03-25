---
title: HTML5 语义标签
---

## 准备
### 开发工具
- [TRAE AI编辑器](https://www.trae.cn/)
- [谷歌浏览器](https://www.google.cn/chrome/)

### 快捷键
**开发者工具：** 浏览器右击"检查"或`F12`

**创建网页模板：** 英文感叹号`!`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

`<head>`： 文档元数据（头部）元素，包含文档的元数据，字符集、移动端页面适配、页面的标题等

`<body>`： 文档主体元素，包含文本、图片、视频、音频等

## 标题与段落标签
`<h1>`-`<h6>`： 标题标签，建议在3级以内

`<p>`： 段落标签

## 有语义强调与重要性标签
`<strong>`： **加粗**

`<em>`： *倾斜*

`<ins>`： <ins>下划线</ins>

`<del>`： ~~删除线~~

## 注释标签
**语法：** `<!-- 注释内容 -->`

**快捷键：** `Ctrl + /`

## 区块元素和行内元素
###  区块元素
- 独占一行
- 可以嵌套其他元素
- p, h, div等

:::note
p标签不能嵌套区块元素
:::

### 行内元素
- 可以一行放多个
- 不能嵌套区块元素，可以嵌套其他行内元素
- strong, em, a等

## 图像标签
**语法：** `<img src="" alt="">`，是单标签

**属性：** src, alt, width, height, title

:::tip
图片懒加载：可以用 `loading="lazy"`，同时设置  `width` 和 `height` 以防止布局偏移

[loading属性说明](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/img#loading)
:::

## 路径
### 相对路径
- 同一级路径： `pig.png` 或 `./pig.png`
- **下一级路径：** `img/pig.png` 或 `./img/pig.png`
- 上一级路径： `../pig.png`

### 绝对路径
- 盘符路径
- 网络路径

:::note
以斜杠开头是从根目录开始： `/img/pig.png`
:::

## 视频和音频
### 视频
**语法：** `<video src=""></video>`

**属性：** src, controls, width, height, autoplay, loop, muted, poster

:::note
想要自动播放，需要先静音
:::

**兼容性写法：**
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <p>您的浏览器不支持 HTML 5 Video 标签，请升级浏览器。</p>
</video>
```

### 音频
**语法：** `<audio src=""></audio>`

**属性：** src, controls, width, height

**兼容性写法：**
```html
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  <p>您的浏览器不支持 HTML 5 Audio 标签，请升级浏览器。</p>
</audio>
```

## 链接标签
**语法：** `<a href=""></a>`

**属性：** href, target, title

- 新窗口打开： `target="_blank"`
- 空链接： `href="#"`
- 下载链接： `href="./download.zip"`
- 邮件链接： `href="mailto:123@qq.com"`

### 锚点链接
1. 创建锚点目标： `id="1"`
2. 标记锚点目标： `href="#1"`

`<br>`： 换行标签

:::tip
页面滑动效果： `scroll-behavior: smooth;`
:::

## 网页结构标签和无语义标签
### 网页结构标签
`<header>`： 网页页眉

`<main>`： 网页内容

`<nav>`： 导航栏

`<article>`： 文章相关

`<section>`： 分类

`<aside>`： 侧边栏

`<footer>`： 页面页脚

### 无语义标签
`<div>`： 区块，布局结构

`<span>`： 行内，文本或行内元素

## 列表标签
**有序列表：** `<ol>` 包含 `<li>`

**描述列表：** `<dl>` 包含术语 `<dt>` 和描述 `<dd>`

无序列表： `<ul>` 包含 `<li>`

## 表格
`<table>`： 表格容器

`<tr>`： 表格行

`<td>`： 单元格

`<th>`： 表头单元格

表格结构标签： `<thead>`, `<tbody>`, `<tfoot>`

## 表单
表单的作用是**收集用户信息**

表单的三部分：
- 表单容器
- 表单控件
- 辅助标签

### 表单容器
**语法：** `<form action=""></form>`

**属性：** `action` 指定处理表单提交的URL

### input表单
**语法：** `<input type="">`

**属性：** `type` 定义输入框的类型

- 单行文本框（text），密码框（password），`autocomplete="off"` 关闭自动填充

- 单选框（radio），复选框（checkbox），`checked` 属性默认选中

- 文件域（file），`multiple` 属性多选，`accept` 属性规定类型

### textarea表单
**语法：** `<textarea></textarea>`
  
**属性：** name, placeholder, rows, cols

### select下拉表单
`<select>`： 下拉表单容器

`<option>`： 选项标签，`selected` 属性默认选中

### button按钮
**语法：** `<button>搜索</button>`

**属性：** `disabled` 禁用按钮

### label辅助标签
方式一：
```html
<label for="nan">男</label>
<input type="radio" id="nan" name="sex">
```

方式二：
```html
<label>男
  <input type="radio" name="sex">
</label>
```

## 特殊字符
空格： `&nbsp;`

大于号： `&gt;`

小于号： `&lt;`

## 学习视频
[2025版pink老师最新AI+前端入门教程](https://www.bilibili.com/video/BV1MvaVzUEuz)
