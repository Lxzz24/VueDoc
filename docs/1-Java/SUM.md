---
title: ✅ 归纳
sidebarDepth: 1
category: Java 教程
tag: Java
---

:::: tabs

@tab 1

## 🍀 Java 基础

```md
# Java 程序基础
- JDK（开发工具包） > JRE（开发环境） > JVM（虚拟机）
- Java 程序基本结构（关键字、标识符（命名规则、**规范**）、注释）
- 变量和数据类型
- 基本数据类型之间的运算（自动类型提升、强制类型转换、进制）
    - **浮点数在计算机中常常无法精确表示**，常利用差值小于某个临界值来判断
      eg：`Math.abs(x - 0.1) < 0.00001`
- 运算符（算术、赋值、比较、逻辑、位、三元运算符）
- 字符和字符串（字符串连接）
- 数组类型

# 流程控制
- 输入（scanner）输出（print）
- if 判断（if-else/else if）
- switch 多重选择（不要忘记 break、default）
- 循环（for、while、do-while）
- 区分 break（跳出当前所在的一层循环） 和 continue（提前结束本次循环，直接继续执行下次循环）

# 数组操作
- 数组的声明、初始化（静态/动态），调用数组的指定位置的元素，获取数组的长度，遍历数组，数组元素的默认初始化值，数组的内存解析
- 数组元素的赋值
- 数组元素的最大/最小/平均值/总和
- 数组元素的复制/反转/查找
- 数组元素的排序
    - **快速排序**（选定基准，大于基准的放右边，小于放左边，递归）
    - **冒泡排序**（两两依次比较，直到将最大的数放在最右边，循环）

```

@tab 2_1

## 🍀 面向对象基础

```md
# Java 基本元素
类和对象

# 对象的创建和使用
1. 创建类、设计类的成员（`Person()`，`name`、`age`、`eat()`...）
2. 创建类的对象（`new Person()`）
3. 通过 “对象.属性” 或 “对象.方法” 调用对象的结构（`person.name`，`person.eat()`）
4. 内存解析

# 类的成员
- 属性（对比属性和局部变量）
- 方法（私有化属性，通过方法查询/修改属性值；**方法参数的值传递机制**）
- 构造器（初始化实例）
> JavaBean：
    类是公共的；有一个无参的构造器；有属性且有对应的 get、set 方法；
> UML 类图：
    `+` 表示 public 类型，`-` 表示 private 类型，
    `#` 表示 protected 类型，下划线表示构造器

# 方法的重载
“两同一不同”：同一个类、方法名相同；参数列表不同

# 方法的重写（覆写）
子类存在方法与父类方法名相同，参数列表相同，返回值也相同

# 面向对象三大特征
## 1 封装性
1. 属性私有化；
2. 不对外暴露私有方法；
3. 单例模式（构造器私有化）；
4. 不希望类在包外被调用，可以将类设置为缺省的。
_高内聚、低耦合；隐藏对象内部的复杂性，只对外公开简单的接口，便于外界调用。_
## 2 继承性
- 一个类有且仅有一个父类，子类自动获得了父类的所有字段；
- 子类无法访问父类的 `private` 字段或者 `private` 方法，
  用 `protected` 修饰的字段可以被子类访问；
- 子类不会继承任何父类的构造方法，如果父类没有默认的构造方法，
  子类就必须显式调用 `super()` 并给出参数以便让编译器定位到父类的一个合适的构造方法
- 向上转型（抽象子类） / 向下转型（instanceof）
- 区分继承和组合：继承是 is 关系，组合是 has 关系
- 继承性的好处：
  _① 减少了代码的冗余，提高了代码的复用性 ② 便于功能的扩展_
  _③ 为之后多态性的使用，提供了前提_
## 3 多态性
- 针对某个类型的方法调用，其真正执行的方法取决于运行时期实际类型的方法
- 运行期才能动态决定调用的子类方法
- 允许添加更多类型的子类实现功能扩展，却不需要修改基于父类的代码

# 抽象类
- 如果父类的方法本身不需要实现任何功能，仅仅是为了定义方法签名，
  目的是让子类去重写它，那么，可以把父类的方法声明为抽象方法；这个类也必须申明为抽象类
- 抽象类本身被设计成只能用于被继承，抽象方法定义了子类必须实现的接口规范

# 接口
- 没有字段，只有抽象方法 --> 声明为接口
- 一个类可以实现多个接口
- default 方法
    - 实现类可以不必重写 `default` 方法。
    - `default` 方法的目的是，当我们需要给接口新增一个方法时，会涉及到修改全部子类。
      如果新增的是 `default` 方法，那么子类就不必全部修改，只需要在需要重写的地方去重写新增方法。

# static
- 静态字段/方法属于类而不属于实例，通过 `类名.静态字段/方法` 调用

# 包
- 一个类总是属于某个包，真正的完整类名是 `包名.类名`，只要包名不同，类就不同。
- 使用 `import` 可以导入其他包的类、接口
- 为了避免名字冲突，我们需要确定唯一的包名，推荐的做法是使用倒置的域名来确保唯一性
- 包，属于标识符，遵循标识符的命名规则、规范（xxxyyyzzz）、“见名知意”
- MVC 设计模式
    - 视图模型层 View 显示数据
    - 控制器层 Controller 处理业务逻辑
    - 数据模型层 Model 主要处理数据）

# 作用域
- `public` 、 `protected` 、 `private` 、 `package`
- 局部变量的作用域从变量声明开始，到一个块结束
- final 修饰符
    - 修饰 class 可以阻止被继承
    - 修饰 method 可以阻止被子类覆写
    - 修饰 field 可以阻止被重新赋值
    - 修饰局部变量可以阻止被重新赋值
- 如果不确定是否需要 public ，就不声明为 public ，即尽可能少地暴露对外的字段和方法。

# 内部类
- Inner Class 隐含地持有一个 Outer Class 实例，可以用 `Outer.this` 访问这个实例
- Inner Class 可以访问 Outer Class 的 `private` 字段/方法
- 匿名类的写法 `Runnable r = new Runnable() {// 实现必要的抽象方法...};`
- 静态内部类：独立于 Outer Class，无法引用 `Outer.this` ，但它可以访问 Outer 的 private 静态字段和静态方法

# classpath 和 jar**
- classpath：环境变量
    - 不推荐设置系统环境变量 classpath，始终建议通过 `-cp` 命令传入；
- jar 包：实际上就是一个 zip 格式的压缩文件，而 jar 包相当于目录，
  可以包含很多 `.class` 文件，方便下载和使用；
    - 如何创建一个 jar 包？直接在资源管理器中，找到正确的目录，点击右键，
      在弹出的快捷菜单中选择 “发送到”，“压缩(zipped) 文件夹”，就制作了一个 zip 文件。
      然后，把后缀从 `.zip` 改为 `.jar` ，一个 jar 包就创建成功。
    - 推荐使用 Maven 创建 jar 包

# class 版本
- 高版本代码向下兼容（Java 8 编译的代码可以在 Java 17 中运行）

# 模块
- Java 9 引入的模块目的是为了管理依赖；
- 使用模块可以按需打包 JRE；
- 使用模块对类的访问权限有了进一步限制。

```

@tab 2_2

## 🍀 Java 核心类

```md
# 字符串和编码
- 字符串 `String` 是不可变对象；
- 字符串操作
    - 字符串比较，总是使用 `equals()` 方法（忽略大小写使用 `equalsIgnoreCase()` 方法）
    - 搜索（`indexOf()`、`lastIndexOf()`、`startsWith()`、`endsWith()`）、提取子串（`substring()`）
    - 去除首尾空白字符（`trim()`、`strip()`）
    - 替换子串（`replace()`）
    - 分割字符串（`split()`）
    - 拼接字符串（`join()`）
    - 格式化字符串（`formatted()`、`format()`；占位符 ` %s``%d``%x``%f `）
    - 类型转换（其他类型转字符串：`valueOf()`；字符串转 int：`Integer.parseInt()`...）
    - 转换为 `char[]`（`"".toCharArray()`，`new String(char[])`）
    - 转换为 `byte[]` 时，始终优先考虑 `UTF-8` 编码

# StringBuilder
- 高效拼接字符串、支持链式操作
- `StringBuffer` 是 `StringBuilder` 的线程安全版本，现在很少使用

# StringJoiner
- 用指定分隔符拼接字符串数组时，使用 `StringJoiner` 或者 `String.join()` 更方便
- 用 `StringJoiner` 拼接字符串时，还可以额外附加一个 “开头” 和“结尾”

# 包装类型
- Integer、Double...
- 自动装箱、自动拆箱（在编译期完成，影响代码效率，且拆箱时可能发生 `NullPointerException`）
- 包装类型的比较必须使用 `equals()`
- 静态工厂方法（能创建“新”对象的静态方法，如 `Integer.valueOf()`，会尽可能地返回缓存的实例以节省内存）
- `parseInt()` 可以把字符串解析成一个整数（可以按进制解析）
- 程序设计的一个重要原则： 数据的存储和显示要分离

# JavaBean
- 私有化属性，对外提供 get、set 方法
- 使用 `Introspector.getBeanInfo()` 可以获取属性列表

# 枚举类
- 通过 `name()` 获取常量定义的字符串 ，注意不要使用 `toString()`；
- `enum` 的构造方法要声明为 `private` ，字段强烈建议声明为 `final` ；
- `enum` 适合用在 `switch` 语句中

# 记录类
- 不变类，有 x、y 两个变量

# BigInteger
- 不可变类，可表示任意大小的整数，运算速度比较慢
- 将 BigInteger 转换成基本类型时可使用 `longValueExact()` 等方法保证结果准确（在转换时如果超出范围，将直接抛出 `ArithmeticException` 异常）

# BigDecimal
- 可以表示一个任意大小且精度完全准确的浮点数
- 使用 `equals()` 方法不但要求两个 BigDecimal 的值相等，还要求它们的 `scale()` 相等
- 必须使用 `compareTo()` 方法来比较，它根据两个值的大小分别返回负数、正数和 0 ，分别表示小于、大于和等于。
- 实际上一个 `BigDecimal` 是通过一个 `BigInteger` 和一个 `scale` 来表示的，即 `BigInteger` 表示一个完整的整数，而 `scale` 表示小数位数

# 常用工具类
- Math、Random、SecureRandom
```

@tab 3

## 🍀 异常处理

```md
Object
   └--- Throwable
            |--- Error // 无需捕获的严重错误
            |      │--- OutOfMemoryError // 内存耗尽
            |      │--- NoClassDefFoundError // 无法加载某个 Class
            |      │--- StackOverflowError // 栈溢出
            |      └--- ...
            └--- Exception // 应该捕获的可处理的错误
                   │--- RuntimeException // 无需强制捕获
                   |        |--- NullPointerException // 空指针异常
                   |        |--- IllegalArgumentException // 参数检查不合法
                   |        |--- IndexOutOfBoundsException // 数组索引越界
                   |        └--- ...
                   └--- IOException ... // 需强制捕获

~~不推荐捕获了异常但不进行任何处理。~~

# 捕获异常
`try { ... } catch (Exception e) { e.printStackTrace(); // 打印异常栈}`
`finally { ... } // 有无异常都会执行,可选,总是最后执行`

多 catch 语句
- 只有一个能被执行
- 匹配顺序非常重要，子类必须写在前面
一个 catch 语句也可以匹配多个非继承关系的异常

# 抛出异常
- 调用 `printStackTrace()` 可以打印异常的传播栈，对于调试非常有用!
- 捕获到异常并再次抛出时，**一定要留住原始异常**，否则很难定位第一案发现场！
- 在 `catch` 中抛出异常，不会影响 `finally` 的执行。JVM 会先执行 `finally`，然后抛出异常
- 通常不要在 `finally` 中抛出异常

# 自定义异常
- 自定义一个 `BaseException` 作为 “根异常”，然后，派生出各种业务类型的异常（通常建议从 `RuntimeException` 派生）
- 自定义的 `BaseException` 应该提供多个构造方法

# NullPointerException
- 即空指针异常，如果一个对象为 `null`，调用其方法或访问其字段
  就会产生 `NullPointerException`
- `NullPointerException` 是一种代码逻辑错误，早暴露，早修复
- 好的编码习惯可以极大地降低 NullPointerException 的产生，例如：
- 成员变量在定义时初始化，使用空字符串 `""` 而不是默认的 null
- 返回空字符串 `""`、空数组而不是 `null`

# 使用断言*
- 使用 `assert` 关键字来实现
- 断言失败时会抛出 `AssertionError` ，导致程序结束退出
- 断言不能用于可恢复的程序错误
- 更好的方法是编写单元测试

# 使用 JDK Logging
- 取代 `System.out.println()`
- 内置日志包 `java.util.logging`
- **自动打印了** 时间、调用类、调用方法 等很多有用的信息
- 日志的输出可以设定级别。
    - SEVERE > WARNING > INFO（默认）

# 使用 Commons Logging
- 定义了 6 个日志级别：
    - FATAL > ERROR > WARNING > INFO（默认）
- 使用最广泛，API 非常简单，可以自动检测并使用其他日志模块

# 使用 Log4j
- 通过 Commons Logging 实现日志，不需要修改代码即可使用 Log4j；
- 使用 Log4j 只需要把 `log4j2.xml` 和相关 jar 放入 classpath；
- 如果要更换 Log4j，只需要移除 `log4j2.xml` 和相关 jar；
- 只有扩展 Log4j 时，才需要引用 Log4j 的接口

# 使用 SLF4J 和 Logback
- SLF4J 和 Logback 可以取代 Commons Logging 和 Log4j；
- 始终使用 SLF4J 的接口写入日志，使用 Logback 只需要配置，不需要修改代码。

```

@tab 4

## 🍀 反射

```md
# 反射
1. JVM 为每个加载的 class 及 interface 创建了对应的 Class 实例
   来保存 class 及 interface 的所有信息
2. 通过 Class 实例获取 class 信息的方法称为反射（ Reflection ）

# 如何获取一个 class 的 Class 实例
1. 直接通过一个 class 的静态变量 class 获取
   `Class cls = String.class;`
2. 如果有一个实例变量，可以通过该实例变量提供的 getClass() 方法获取
   `Class cls = s.getClass();`
3. 如果知道一个 class 的完整类名，可以通过静态方法 Class.forName() 获取
   `Class cls = Class.forName("java.lang.String");`

# 访问字段
1. 获取 Field 实例
   `getField()，getFields()，getDeclaredField()，getDeclaredFields()`
2. 获取字段信息
   `getName()，getType()，getModifiers()`
3. 设置某个对象的字段
   `Field.set(Object, Object)`
_通过反射读写字段是一种非常规方法，它会**破坏对象的封装**。_

# 调用方法
1. 通过 Class 实例的方法可以获取 Method 实例： 
   `getMethod()，getMethods()，getDeclaredMethod()，getDeclaredMethods()`
2. 通过 Method 实例可以获取方法信息：
   `getName()，getReturnType()，getParameterTypes()，getModifiers()`
3. 通过 Method 实例可以调用某个对象的方法： 
   `Object invoke(Object instance, Object... parameters)`

# 调用构造方法
1. 通过 Class 实例的方法可以获取 Constructor 实例：
   `getConstructor()，getConstructors()`
   `getDeclaredConstructor()，getDeclaredConstructors()`
2. 通过 Constructor 实例可以创建一个实例对象：
   `newInstance(Object... parameters)`

> 如果存在访问限制，要首先调用 setAccessible(true) 
  来访问非 public 字段、方法、构造方法

# 获取继承关系
1. 获取父类类型
   `Class getSuperclass()`
2. 获取当前类实现的所有接口
   `Class[] getInterfaces()`
3. 判断一个向上转型是否可以实现
   `isAssignableFrom()`

# 动态代理（Dynamic Proxy）
> 可以在运行期动态创建某个 interface 的实例
通过 Proxy 创建代理对象，然后将接口方法 “代理” 给 InvocationHandler
1. 定义一个 InvocationHandler 实例，它负责实现接口的方法调用；
2. 通过 Proxy.newProxyInstance() 创建 interface 实例，它需要 3 个参数：
- 使用的 ClassLoader，通常就是接口类的 ClassLoader ；
- 需要实现的接口数组，至少需要传入一个接口进去；
- 用来处理接口方法调用的 InvocationHandler 实例。
3. 将返回的 Object 强制转型为接口。
```

@tab 5

## 🍀 注解

```md
# @Xxxx(xxx)
注解（Annotation）是 Java 语言用于工具处理的标注：

# 分类
1. 由编译器使用的注解：@Override ...（不会被编译进 .class 文件）
2. 由工具处理 .class 文件使用的注解（会被编译进入 .class 文件，
   但加载结束后并不会存在于内存中）
3. 在程序运行期能够读取的注解（在加载后一直存在于 JVM 中，最常用）

# 使用 @interface 定义注解：
1. 可定义多个参数和默认值，核心参数使用 value 名称；
2. 必须设置 @Target 来指定 Annotation 可以应用的范围；
3. 应当设置 @Retention(RetentionPolicy.RUNTIME) 便于运行期读取该注解。
```

@tab 6

## 🍀 泛型

```md
# <T>
> 泛型就是编写模板代码来适应任意类型；
> 泛型的**好处**是使用时不必对类型进行强制转换，它通过编译器对类型进行检查；
> 静态方法不能引用泛型类型 <T>，必须定义其他类型（例如 <K> ）来实现静态泛型方法；
> 使用类似 <T extends Number> 或 <T super Number> 限定 <T> 类型

# PECS 原则 Producer Extends Consumer Super
如果需要返回 T，它是生产者（Producer），要使用 extends 通配符；
如果需要写入 T，它是消费者（Consumer），要使用 super 通配符
```

@tab 7

## 🍀 集合

```md
- java.util.Collection <<interface>>
        |---- List <<interface>>
        |       |---- ArrayList ✅ // 数组
        |       |---- LinkedList 🌟 // 链表
        |       └---- Vector
        |               └---- Stack // 栈
        |---- Set <<interface>> // 存储不重复的元素集合
        |       |---- HashSet ✅
        |       |       └---- LinkedHashSet
        |       └---- TreeSet ✅
        └---- Queue <<interface>> // 队列
                |---- Deque <<interface>> // 双向队列
                |       └---- ArrayDeque ✅
                |       └---- LinkedList 🌟
                |---- PriorityQueue // 优先队列：堆
                └---- LinkedList 🌟
- java.util.Map <<interface>>
        |---- HashMap ✅
        |       └---- LinkedHashMap
        |---- SortedMap
        |       └---- TreeMap ✅
        |---- EnumMap
        └---- Hashtable
                └---- Properties

1. 要正确使用 List 的 contains()、indexOf() 这些方法，
   放入的实例必须正确覆写 equals() 方法
2. 要正确使用 HashMap，作为 key 的类必须正确覆写
   equals() 和 hashCode() 方法
3. 作为 SortedMap 的 Key / PriorityQueue 必须实现 Comparable 接口
4. 使用迭代器的好处在于，调用方总是以统一的方式遍历各种集合类型，
   而不必关心它们内部的存储结构，**集合类需实现 Iterable 接口**
```

@tab 8

## 🍀 IO


```md
# 分类-从传输方式上
## 字节流
InputStream / OutputStream
## 字符流
Reader / Writer
## 区别：字节是给计算机看的，字符才是给人看的

# 分类-从数据操作上
## 文件(file) 
FileInputStream、FileOutputStream、FileReader、FileWriter
## 数组([])
字节数组(byte[]): ByteArrayInputStream、ByteArrayOutputStream
字符数组(char[]): CharArrayReader、CharArrayWriter
## 管道操作*
PipedInputStream、PipedOutputStream、PipedReader、PipedWriter
## 基本数据类型
DataInputStream、DataOutputStream
## 缓冲操作
BufferedInputStream、BufferedOutputStream、BufferedReader、BufferedWriter
## 打印
PrintStream、PrintWriter
## 对象序列化反序列化
ObjectInputStream、ObjectOutputStream
## 转换
InputStreamReader、OutputStreamWriter

# 设计模式-装饰器模式(Decorator)
装饰者(Decorator)和具体组件(ConcreteComponent)都继承自组件(Component)，
具体组件的方法实现**不需要**依赖于其它对象，而装饰者组合了一个组件，
这样它可以装饰其它装饰者或者具体组件

```


@tab 9

## 🍀 日期与时间

```md
```

@tab 10

## 🍀 单元测试

```md
```

::::




:::: tabs

@tab 11

## 🍀 正则表达式

@tab 12

## 🍀 加密与安全

@tab 13

## 🍀 多线程

@tab 14

## 🍀 Maven

@tab 15

## 🍀 网络编程

@tab 16

## 🍀 XML 与 JSON

@tab 17

## 🍀 JDBC

@tab 18

## 🍀 函数式编程

@tab 19

## 🍀 设计模式

@tab 20

## 🍀 WEB 开发

@tab 21

## 🍀 Spring 开发

::::
