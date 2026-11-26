---
title: Tailwind CSS
description: Tailwind CSS快速入门
---
## 快速开始
[Tailwind CSS文档](https://tailwindcss.com/docs)

通过CDN引入Tailwind CSS：
```html {6} {9-11}
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
</html>
```

CDN仅用于开发环境，生产环境请使用构建工具打包。

编辑器插件推荐：[IntelliSense for VS Code](https://·tailwindcss.com/docs/editor-setup)

## 核心概念
### 工具类
Tailwind CSS可以用工具类来设置样式，工具类直接写到HTML元素的class属性中即可，常用格式为`属性-值`

| 工具类      | 说明             |
| ----------- | ---------------- |
| flex        | flex布局         |
| p-6         | 内边距，6个单位  |
| mx-auto     | 外边距，水平居中 |
| max-w-sm    | 最大宽度         |
| rounded-xl  | 圆角大小         |
| shadow-lg   | 阴影大小         |
| size-12     | 宽与高           |
| gap-x-4     | 水平间距         |
| text-xl     | 文字大小         |
| text-black  | 文字颜色         |
| bg-white    | 背景颜色         |
| font-medium | 文字粗细         |

1个单位是 0.25rem _(4px)_

鼠标经过时变色：`hover:bg-sky-700`

用中括号表示一次性的值：`bg-[#316ff6]`

### 颜色
[颜色文档](https://tailwindcss.com/docs/colors)

颜色数值从50到950，50最浅，950最深

示例：
- bg-white 背景颜色
- text-gray-950 文字颜色
- border-pink-300 边框颜色

### 响应式设计
先确保添加了viewport meta标签：
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

宽度默认是16，在中等屏幕上是32，在大屏幕上是48：
```html
<img class="w-16 md:w-32 lg:w-48" src="..." />
```

| 断点 | 最小宽度         |
| ---- | ---------------- |
| sm   | 40rem _(640px)_  |
| md   | 48rem _(768px)_  |
| lg   | 64rem _(1024px)_ |
| xl   | 80rem _(1280px)_ |
| 2xl  | 96rem _(1536px)_ |

## 常用工具类
### Layout
display:
- `block`
- `flex`
- `grid`
- `hidden`

overflow: `overflow-auto`, `overflow-hidden`, `overflow-scroll`

position:
- `static`
- `fixed`
- `absolute`
- `relative`
- `sticky`

top / right / bottom / left:
- `top-*`
- `right-*`
- `bottom-*`
- `left-*`

z-index: `z-*`

### Flexbox & Grid
flex-direction: `flex-row`, `flex-col`

flex-wrap: `flex-nowrap`, `flex-wrap`

flex: `flex-*`, `flex-none`

grid-template-columns: `grid-cols-*`

gap: `gap-*`, `gap-x-*`, `gap-y-*`

justify-content: `justify-center`, `justify-between`

align-items: `items-center`

### Spacing
padding: `p-*`, `px-2`, `py-1`

margin: `m-*`, `mx-auto`

方向缩写：
| 缩写 | 含义       |
| ---- | ---------- |
| x    | 水平方向   |
| y    | 垂直方向   |
| t    | top，上    |
| r    | right，右  |
| b    | bottom，下 |
| l    | left，左   |

### Sizing
width: `w-*`, `w-full`, `w-screen`

min-width: `min-w-*`

max-width: `max-w-*`

height: `h-*`

### Typography
font-size: `text-*`
| 工具类    | 文字大小 |
| --------- | -------- |
| text-sm   | 14px     |
| text-base | 16px     |
| text-lg   | 18px     |
| text-xl   | 20px     |
| text-2xl  | 24px     |

font-weight: `font-semibold`, `font-bold`

text-align: `text-center`, `text-justify`

文字溢出：
- 单行 text-overflow: `truncate`
- 多行 line-clamp: `line-clamp-2`

### Borders
border-radius: `rounded`, `rounded-*`, `rounded-full`

border-width: `border`, `border-*`, `divide-x`
