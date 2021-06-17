# mock-demo
vue项目中的mock解决方案的一个简单 demo

# 额外的依赖说明
- cross-env : 用来设置环境变量
- @babel/register : 用来配置mock中的 babel
- axios 示例请求

# 原理说明
通过环境变量判断mock环境, 拦截请求, 读取文件数据返回给接口
