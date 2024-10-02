document.addEventListener('DOMContentLoaded', function() {
  // 获取所有具有 "post-body" 类的元素的第1个, 也就是博文的正文
  const blogContent = document.getElementsByClassName("post-body")[0];
  // 获得markdown文本
  const markdownContent = blogContent.textContent;
  // 转换为html再放到博文正文内容
  blogContent.innerHTML = marked.parse(markdownContent);
});  
