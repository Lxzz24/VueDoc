---
title: 反射*
icon: "light"
sidebarDepth: 1
category: Java 教程
tag: Java
---

::: details 目录
[[toc]]
:::


## 🍀 什么是反射？

反射就是 `Reflection` ，Java 的反射是指程序在运行期可以拿到一个对象的所有信息。

正常情况下，如果我们要调用一个对象的方法，或者访问一个对象的字段，通常会传入对象实例：


```java
import com.itranswarp.learnjava.Person;

public class Main {
    String getFullName(Person p) {
        return p.getFirstName() + " " + p.getLastName();
    }
}
```

但是，如果不能获得 `Person` 类，只有一个 `Object` 实例，比如这样：

```java
String getFullName(Object obj) {
    return ???
}
```

怎么办？有童鞋会说：强制转型啊！

```java
String getFullName(Object obj) {
    Person p = (Person) obj;
    return p.getFirstName() + " " + p.getLastName();
}
```

强制转型的时候，你会发现一个问题：编译上面的代码，仍然需要引用 `Person` 类。不然，去掉 `import` 语句，你看能不能编译通过？

所以， ***反射是为了解决在运行期，对某个实例一无所知的情况下，如何调用其方法。***

![](assets/20220628100038.png)

