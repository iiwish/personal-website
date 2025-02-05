# 一个简单的个人网站项目

这是一个使用HTML、Tailwind CSS和JavaScript构建的响应式单页面个人网站项目。网站包含主页、关于、技能、作品集、经验和联系等多个部分。

## 项目预览

该网站包含以下主要功能:

- 响应式设计,适配各种屏幕尺寸
- 模块化的组件结构
- 流畅的页面切换和滚动效果
- 作品集展示
- 联系表单
- 个人简历下载

## 项目结构

```
personal-website/
├── index.html              # 主页面
├── assets/                 # 静态资源
│   ├── img/               # 图片资源
│   ├── pdf/              # PDF文件
│   └── favicon.ico        # 网站图标
├── components/            # HTML组件
│   ├── about.html        # 关于页面
│   ├── contact.html      # 联系页面
│   ├── experience.html   # 经验页面
│   ├── footer.html       # 页脚组件
│   ├── header.html       # 头部导航
│   ├── home.html         # 首页组件
│   ├── portfolio.html    # 作品集页面
│   └── skills.html       # 技能页面
├── css/                  # 样式文件
│   └── style.css        # 自定义样式
└── js/                  # JavaScript文件
    └── main.js         # 主要脚本文件
```

## 技术栈

- HTML5
- Tailwind CSS - 用于构建响应式界面
- JavaScript - 用于交互功能
- 现代CSS特性(Flexbox/Grid)

## 使用说明

1. 克隆项目到本地:
```bash
git clone https://github.com/iiwish/personal-website.git
cd personal-website
```

2. 使用本地服务器打开项目:
- 可以使用Visual Studio Code的Live Server插件
- 或者使用其他HTTP服务器(如Python的SimpleHTTPServer)

```bash
# 使用Python启动简单HTTP服务器
python -m http.server 8000
```

3. 在浏览器中访问 `http://localhost:8000`

## 自定义

你可以通过修改以下文件来自定义网站:

- `index.html` - 修改页面结构
- `components/*.html` - 修改各个组件内容
- `css/style.css` - 自定义样式
- `js/main.js` - 修改交互功能
- `assets/` - 替换图片和其他资源

## 许可证

MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
