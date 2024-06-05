---
title: 集合
icon: "map"
sidebarDepth: 1
category: Java 教程
tag: Java
---

本节我们将介绍 Java 的集合类型。集合类型也是 Java 标准库中被使用最多的类型。

![](assets/20221121172632.png)

```
- java.util.Collection <<interface>>
        |---- List <<interface>>
        |       |---- ArrayList ✅
        |       |---- LinkedList 🌟
        |       └---- Vector
        |               └---- Stack // 栈
        |---- Set <<interface>>
        |       |---- HashSet ✅
        |       |       └---- LinkedHashSet
        |       └---- TreeSet ✅
        └---- Queue <<interface>>
                |---- Deque <<interface>> // 队列
                |       └---- ArrayDeque ✅
                |       └---- LinkedList 🌟
                |---- ProiorityQueue // 堆
                └---- LinkedList 🌟
- java.util.Map <<interface>>
        |---- HashMap ✅
        |       └---- LinkedHashMap
        |---- SortedMap
        |       └---- TreeMap ✅
        |---- EnumMap
        └---- Hashtable
                └---- Properties
```
