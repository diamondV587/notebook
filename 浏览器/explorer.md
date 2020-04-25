## 浏览器的运行机制
1. 构建DOM树（parse） : 渲染引擎解析HTML文档，首先将标签装换成DOM树中的DOM node（包括js生成的标签），生成内容树（Content Tree/DOM Tree）
2. 构建渲染树（construce）: 解析对应的css样式文件信息（包括js生成的样式和外部css文件），而这些文件信息以及HTML中可见的指令，构建渲染树（Rendering Tree/Frame Tree）,render tree 中的每个node都有自己的style，而且render tree不包含隐藏的节点 即display：noned的节点，还有head节点，因为这些节点不会用于呈现
3. 布局渲染树（reflow/layout）从根节点递归调用，计算每一个元素的大小，位置等，给出每个节点所应该在屏幕上出现的精确坐标。
4. 绘制渲染树（paint/repaint）：遍历渲染树，使用ui层来绘制每个节点。

## 出发重排的条件：任何页面布局和几何属性的改变都会触发重排
1. 页面渲染初始化
2. 添加或者删除可见的DOM元素
3. 元素位置的改变，或者使用动画
4. 元素的尺寸的改变--大小、外边距、边框
5. 浏览器窗口尺寸的变化（resize事件发生时）
6. 填充内容的改变，比如文本的改变或者图片大小改变而引起的计算值宽度和高度的改变
7. 读取某些元素属性（offsetLeft/Height/Width,clientTop/Left/Width/Height,scrollTop/Left/Width/Height.width/height,getComputedStyle()）