顺序：
    1）定位属性：position  display  float  left  top  right  bottom   overflow  clear   z-index
    2）自身属性：width  height  padding  border  margin   background
    3）文字样式：font-family   font-size   font-style   font-weight   font-varient   color 
    4）文本属性：text-align  vertical-align  text-wrap  text-transform  text-indent  text-decoration  letter-spacing  word-spacing  white-space  text-overflow
    5）css3中新增属性：content   box-shadow   border-radius  transform ...
目的：
    减少浏览器reflow回流，提升浏览器渲染dom的性能
原理：
    浏览器的渲染过程，1.解析html构建dom树，解析css构建css树。2.构建render树，DOM树和CSS树合并后形成render树。3.布局render，浏览器根据render树中有哪些节点以及各个节点css的定义及从属关系，计算出节点在屏幕中的位置。4.绘制出render树
参考文档：https://www.cnblogs.com/xuepei/p/8961809.html