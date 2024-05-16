---
title: 
sidebarDepth: 0 
category: Tools 
tag: Linux
---
# 认识系统服务（daemons）

在 Unix-Like 系统中，daemons 是什么？怎么管理它？怎么查询它？他们开启了多少个 ports？这些 ports 如何关闭？各种 port 代表什么服务？这些问题都是最基础需要注意的，尤其是在架设网站之前，这里的知识就显得更重要了

从 CentOS 7.x 开始，传统的 init 已经被舍弃，取而代之的是 systemd 这个程序，他们之间有什么差异？优缺点有哪些？如何管理不同种类的服务类型？以及如何取代原本的执行等级等等，这个是很重要的改变