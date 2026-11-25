---
title: HTML5 语义标签
---

开发工具：
- [TRAE编辑器](https://www.trae.cn/)
- [Chrome浏览器](https://www.google.cn/chrome/)

学习视频：[2025版pink老师最新AI+前端入门教程](https://www.bilibili.com/video/BV1MvaVzUEuz)

## 创建网页模板 
快捷键：英文感叹号`!`

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

## 标签
| 标签            | 说明                    |
| --------------- | ----------------------- |
| `<h1>` - `<h6>` | 标题标签，建议在3级以内 |
| `<p>`           | 段落标签                |
| `<hr>`          | 水平分割线              |
| `<br>`          | 换行标签                |
| `<strong>`      | <strong>加粗</strong>   |
| `<em>`          | <em>倾斜</em>           |
| `<ins>`         | <ins>下划线</ins>       |
| `<del>`         | <del>删除线</del>       |

### 注释标签
语法： `<!-- 注释内容 -->`

快捷键： `Ctrl + /`

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
语法： `<img src="" alt="">`，是单标签

属性： src, alt, width, height, title

:::tip
图片懒加载： 可以用 `loading="lazy"`，同时设置  `width` 和 `height`
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
语法： `<video src=""></video>`

属性： src, controls, width, height, autoplay, loop, muted, poster

:::note
视频标签想要自动播放，需要先静音；音频标签浏览器不让自动播放
:::

兼容性写法：
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <p>您的浏览器不支持 HTML 5 Video 标签，请升级浏览器。</p>
</video>
```

### 音频
语法： `<audio src=""></audio>`

兼容性写法：
```html
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  <p>您的浏览器不支持 HTML 5 Audio 标签，请升级浏览器。</p>
</audio>
```

## 链接标签
语法： `<a href=""></a>`

属性： href, target, title

- 新窗口打开： `target="_blank"`
- 空链接： `href="#"`
- 下载链接： `href="./download.zip"`
- 邮件链接： `href="mailto:123@qq.com"`

锚点链接：
1. 创建锚点目标： `id="1"`
2. 标记锚点目标： `href="#1"`

:::tip
页面滑动效果： `scroll-behavior: smooth;`
:::

## 网页结构标签和无语义标签
### 网页结构标签
| 标签        | 说明     |
| ----------- | -------- |
| `<header>`  | 网页页眉 |
| `<main>`    | 网页内容 |
| `<nav>`     | 导航栏   |
| `<article>` | 文章相关 |
| `<section>` | 分类     |
| `<aside>`   | 侧边栏   |
| `<footer>`  | 页面页脚 |

### 无语义标签
`<div>`： 区块元素

`<span>`： 行内元素

## 列表
**有序列表：**
```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

**描述列表：**
```html
<dl>
  <dt>术语</dt>
  <dd>描述</dd>
</dl>
```

无序列表：
```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

## 表格
```html
<table>
  <tr>
    <th>表头内容 1</th>
    <th>表头内容 2</th>
  </tr>
  <tr>
    <td>表格主体内容 1</td>
    <td>表格主体内容 2</td>
  </tr>
</table>
```

表格结构标签： `<thead>`, `<tbody>`, `<tfoot>`

## 表单
表单容器： `<form action=""></form>`

### input表单
语法： `<input type="">`

| type     | 说明           | 其他属性                                                       |
| -------- | -------------- | -------------------------------------------------------------- |
| text     | **单行**文本框 | placeholder, name, maxlength, `autocomplete="off"`关闭自动填充 |
| password | 密码框         | ……                                                             |
| radio    | 单选框         | name, value, checked                                           |
| checkbox | 复选框         | ……                                                             |
| file     | 文件域         | multiple，accept                                               |

### textarea表单
**多行**文本框

语法： `<textarea></textarea>`
  
属性： name, placeholder, rows, cols

### select下拉表单
语法：
```html
<select name="" id="">
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
</select>
```

option属性： `selected`默认选中

### button按钮
语法： `<button>搜索</button>`

属性： `disabled`禁用按钮

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
- 空格： `&nbsp;`
- 大于号： `&gt;`
- 小于号： `&lt;`
