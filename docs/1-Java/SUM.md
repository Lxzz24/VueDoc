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
- 数组的声明、初始化（静态/动态），调用数组的指定位置的元素，获取数组的长度，
  遍历数组，数组元素的默认初始化值，数组的内存解析
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
      如果新增的是 `default` 方法，那么子类就不必全部修改，
      只需要在需要重写的地方去重写新增方法。

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
- 静态内部类：独立于 Outer Class，无法引用 `Outer.this` ，
  但它可以访问 Outer 的 private 静态字段和静态方法

# classpath 和 jar
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
    - 搜索（`indexOf()`、`lastIndexOf()`、`startsWith()`、`endsWith()`）、
      提取子串（`substring()`）
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
- 静态工厂方法（能创建“新”对象的静态方法，如 `Integer.valueOf()`，
  会尽可能地返回缓存的实例以节省内存）
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
- 将 BigInteger 转换成基本类型时可使用 `longValueExact()` 等方法保证结果准确
  （在转换时如果超出范围，将直接抛出 `ArithmeticException` 异常）

# BigDecimal
- 可以表示一个任意大小且精度完全准确的浮点数
- 使用 `equals()` 方法不但要求两个 BigDecimal 的值相等，还要求它们的 `scale()` 相等
- 必须使用 `compareTo()` 方法来比较，它根据两个值的大小分别返回负数、正数和 0，
  分别表示小于、大于和等于。
- 实际上一个 `BigDecimal` 是通过一个 `BigInteger` 和一个 `scale` 来表示的，
  即 `BigInteger` 表示一个完整的整数，而 `scale` 表示小数位数

# 常用工具类
- Math、Random、SecureRandom
```

@tab 3

## 🍀 异常处理

```md
Object
   └── Throwable
        ├── Error // 无需捕获的严重错误
        │     ├── OutOfMemoryError // 内存耗尽
        │     ├── NoClassDefFoundError // 无法加载某个 Class
        │     ├── StackOverflowError // 栈溢出
        │     └── ...
        └── Exception // 应该捕获的可处理的错误
              ├── RuntimeException // 无需强制捕获
              │     ├── NullPointerException // 空指针异常
              │     ├── IllegalArgumentException // 参数检查不合法
              │     ├── IndexOutOfBoundsException // 数组索引越界
              │     └── ...
              └── IOException ... // 需强制捕获

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
- 自定义一个 `BaseException` 作为 “根异常”，然后，派生出各种业务类型的异常
  （通常建议从 `RuntimeException` 派生）
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
        ├── List <<interface>>
        │       ├── ArrayList ✅ // 数组
        │       ├── LinkedList 🌟 // 链表
        │       └── Vector
        │               └── Stack // 栈
        ├── Set <<interface>> // 存储不重复的元素集合
        │       ├── HashSet ✅
        │       │       └── LinkedHashSet
        │       └── TreeSet ✅
        └── Queue <<interface>> // 队列
                ├── Deque <<interface>> // 双向队列
                │       └── ArrayDeque ✅
                │       └── LinkedList 🌟
                ├── PriorityQueue // 优先队列：堆
                └── LinkedList 🌟
- java.util.Map <<interface>>
        ├── HashMap ✅
        │       └── LinkedHashMap
        ├── SortedMap
        │       └── TreeMap ✅
        ├── EnumMap
        └── Hashtable
                └── Properties

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
# 基础
- 带日期的时间能唯一确定某个时刻
- 不同的时区，在同一时刻，本地时间是不同的
- 在计算机中，只需要存储一个整数 `Epoch Time`（时间戳） 表示某一时刻。
  当需要显示为某一地区的当地时间时，我们就把它格式化为一个字符串。
> `Epoch Time` 是计算从 1970 年 1 月 1 日零点（格林威治时区／GMT+00:00）到现在所经历的秒数
- 获取当前时间戳： `System.currentTimeMillis()`

# 旧 API - java.util
## Date
### 获取当前时间
`Date date = new Date();`
`date.getYear() + 1900;` // 年，必须加上 1900
`date.getMonth() + 1;` // 月，0～11，必须加上 1
`date.getDate();` // 日，1～31，不能加 1
### 转换为 String
`date.toString();`
### 转换为 GMT 时区
`date.toGMTString();`
### 转换为本地时区
`date.toLocaleString();`
### 格式化
`Date date = new Date();`
`var sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");`
`sdf.format(date);`
_Date 不能转换时区_

## Calendar
- 可以用于获取并设置年、月、日、时、分、秒
_可以做简单的日期和时间运算_
_提供了时区转换功能_
### 获取
`Calendar.getInstance()` 只能获取当前时间
### 设置特定时间
`c.clear();` // 清除所有字段
`c.set(2019, 10 /*11月*/, 20, 8, 15, 0);` // 设置年月日时分秒
### 格式化
`Calendar.getTime()` 可以将一个 Calendar 对象转换成 Date 对象，
然后就可以用 SimpleDateFormat 进行格式化
### 时区转换
`Calendar.setTimeZone(TimeZone.getTimeZone("Asia/Shanghai"));` // 设定指定时区

# 新 API java.time
- 本地日期和时间： `LocalDateTime`，`LocalDate`，`LocalTime` ；
- 带时区的日期和时间： `ZonedDateTime` ；
- 时刻： `Instant` ；
- 时区： `ZoneId`，`ZoneOffset` ；
- 时间间隔： `Duration` 。

## LocalDateTime
`LocalDate d = LocalDate.now();` // 当前日期
`LocalTime t = LocalTime.now();` // 当前时间
`LocalDateTime dt = LocalDateTime.now();` // 当前日期和时间
一般使用以下方式避免代码运行消耗时间：
`LocalDateTime dt = LocalDateTime.now();` // 当前日期和时间
`LocalDate d = dt.toLocalDate();` // 转换到当前日期
`LocalTime t = dt.toLocalTime();` // 转换到当前时间
### 格式化
`DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");`
// 自定义格式化:
`dtf.format(LocalDateTime.now());`
// 用自定义格式解析:
`LocalDateTime dt2 = LocalDateTime.parse("2019/11/30 15:16:17", dtf);`
### 对日期和时间进行调整则使用 withXxx() 方法
调整年： `withYear()`
调整月： `withMonth()`
调整日： `withDayOfMonth()`
调整时： `withHour()`
调整分： `withMinute()`
调整秒： `withSecond()`
_LocalDateTime 无法与时间戳进行转换_
_使用 `isBefore()` 和 `isAfter()` 可以判断日期和时间的先后_

## Duration 和 Period
- Duration 表示两个时刻之间的时间间隔
- Period 表示两个日期之间的天数

## ZonedDateTime
_表示一个带时区的日期和时间_
- 可以简单地把 `ZonedDateTime` 理解成 `LocalDateTime` 加 `ZoneId`
### 创建
1. 使用 `now()` 方法
    - 默认时区
    `ZonedDateTime zbj = ZonedDateTime.now();`
    - 用指定时区获取当前时间
    `ZonedDateTime zny = ZonedDateTime.now(ZoneId.of("America/New_York"));`
2. 给一个 LocalDateTime 附加一个 ZoneId
  （可以理解为 LocalDateTime 转换成 ZonedDateTime）
    `LocalDateTime ldt = LocalDateTime.of(2019, 9, 15, 15, 16, 17);`
    `ZonedDateTime zbj = ldt.atZone(ZoneId.systemDefault());`
    `ZonedDateTime zny = ldt.atZone(ZoneId.of("America/New_York"));`
### 时区转换
- 以中国时区获取当前时间:
`ZonedDateTime zbj = ZonedDateTime.now(ZoneId.of("Asia/Shanghai"));`
- 转换为纽约时间:
`ZonedDateTime zny = zbj.withZoneSameInstant(ZoneId.of("America/New_York"));`
### ZonedDateTime 转换为 LocalDateTime
`ZonedDateTime.toLocalDateTime();`

## DateTimeFormatter
1. `DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");`
2. `DateTimeFormatter.ofPattern("E, yyyy-MMMM-dd HH:mm", Locale.US);`

## Instant 时间戳
`Instant now = Instant.now();`
    - `now.getEpochSecond();` // 秒
    - `now.toEpochMilli();` // 毫秒
对于某一个时间戳，给它关联上指定的 ZoneId，就得到了 ZonedDateTime，
继而可以获得了对应时区的 LocalDateTime

# 最佳实践
## 旧 API 转新 API
1. Date -> Instant:
`Instant ins1 = new Date().toInstant();`
2. Calendar -> Instant -> ZonedDateTime:
`Calendar calendar = Calendar.getInstance();`
`Instant ins2 = calendar.toInstant();`
`ZonedDateTime zdt = ins2.atZone(calendar.getTimeZone().toZoneId());`
## 新 API 转旧 API
1. ZonedDateTime -> long:
`ZonedDateTime zdt = ZonedDateTime.now();`
`long ts = zdt.toEpochSecond() * 1000;`
2. long -> Date:
`Date date = new Date(ts);`
3. long -> Calendar:
`Calendar calendar = Calendar.getInstance();`
`calendar.clear();`
`calendar.setTimeZone(TimeZone.getTimeZone(zdt.getZone().getId()));`
`calendar.setTimeInMillis(zdt.toEpochSecond() * 1000);`
## 总结
- 处理日期和时间时，尽量使用新的 `java.time` 包
- 在数据库中存储时间戳时，尽量使用 long 型时间戳，
  它具有 _省空间，效率高，不依赖数据库_ 的优点
```

@tab 10

## 🍀 单元测试

```md
单元测试就是针对最小的功能单元编写测试代码

# JUnit
## 测试方法
- `assertEquals(expected, actual)` 
- `assertTrue()` 期待结果为 true
- `assertFalse()` 期待结果为 false
- `assertNotNull()` 期待结果为非 null
- `assertArrayEquals()` 期待结果为数组并与期望数组每个元素的值均相等
## 注意
使用浮点数时，由于浮点数无法精确地进行比较，
因此，`assertEquals()` 需要指定一个误差值 delta
`assertEquals(0.1, Math.abs(1 - 9 / 10.0), 0.0000001);`
## 编写单元测试的规范
1. 单元测试代码本身必须非常简单，能一下看明白，决不能再为测试代码编写测试；
2. 每个单元测试应当互相独立，不依赖运行的顺序；
3. 测试时不但要覆盖常用测试用例，还要特别注意测试边界条件，
   例如输入为 `0`，`null`，空字符串 `""` 等情况。

# 常用注解 - JUnit4
## @Test
在 junit3 中，是通过对测试类和测试方法的命名来确定是否是测试，且所有的测试类必须继承 junit 的测试基类。在 junit4 中，定义一个测试方法变得简单很多，只需要在方法前加上 @Test 就行了。
> 注意：测试方法必须是 public void，即公共、无返回数据。可以抛出异常。
## @Ignore 
有时候我们想暂时不运行某些测试方法 \ 测试类，可以在方法前加上这个注解。在运行结果中，junit 会统计忽略的用例数，来提醒你。但是不建议经常这么做，因为这样的坏处时，容易忘记去更新这些测试方法，导致代码不够干净，用例遗漏。使用此标注的时候不能与其它标注一起使用，如：和 @Test 标注一起使用，那就没用了 
## @BeforeClass
当我们运行几个有关联的用例时，可能会在数据准备或其它前期准备中执行一些相同的命令，这个时候为了让代码更清晰，更少冗余，可以将公用的部分提取出来，放在一个方法里，并为这个方法注解 @BeforeClass。意思是在测试类里所有用例运行之前，运行一次这个方法。例如创建数据库连接、读取文件等。
注意：方法名可以任意，但必须是 public static void，即公开、静态、无返回。这个方法只会运行一次。
## @AfterClass
跟 @BeforeClass 对应，在测试类里所有用例运行之后，运行一次。用于处理一些测试后续工作，例如清理数据，恢复现场。
注意：同样必须是 public static void，即公开、静态、无返回。这个方法只会运行一次。
## @Before
与 @BeforeClass 的区别在于，@Before 不止运行一次，它会在每个用例运行之前都运行一次。主要用于一些独立于用例之间的准备工作。比如两个用例都需要读取数据库里的用户 A 信息，但第一个用例会删除这个用户 A，而第二个用例需要修改用户 A。那么可以用 @BeforeClass 创建数据库连接。用 @Before 来插入一条用户 A 信息。
注意：必须是 public void，不能为 static。不止运行一次，根据用例数而定。
## @After
与 @Before 对应。
## @Runwith
首先要分清几个概念：测试方法、测试类、测试集、测试运行器。
- 其中测试方法就是用 @Test 注解的一些函数。
- 测试类是包含一个或多个测试方法的一个 Test.java 文件。
- 测试集是一个 suite，可能包含多个测试类。
- 测试运行器则决定了用什么方式偏好去运行这些测试集/类/方法。
- 而 @Runwith 就是放在测试类名之前，用来确定这个类怎么运行的。也可以不标注，会使用默认运行器。常见的运行器有： 
    - @RunWith(Parameterized.class) 参数化运行器，配合 @Parameters 使用 junit 的参数化功能 
    - @RunWith(Suite.class) @SuiteClasses({ATest.class,BTest.class,CTest.class}) 测试集运行器配合使用测试集功能
    - @RunWith(JUnit4.class) junit4 的默认运行器 
    - @RunWith(JUnit38ClassRunner.class) 用于兼容 junit3.8 的运行器
    - 一些其它运行器具备更多功能。例如 @RunWith(SpringJUnit4ClassRunner.class) 集成了 spring 的一些功能
## @Parameters
用于使用参数化功能

# 常用注解 - JUnit5
## @Test
表示方法是一种测试方法。与 JUnit 4 的 @Test 注解不同，此注释不会声明任何属性。
## @ParameterizedTest
表示方法是参数化测试 @RepeatedTest 表示方法是重复测试模板 
## @TestFactory
表示方法是动态测试的测试工程
## @DisplayName
为测试类或者测试方法自定义一个名称
## @BeforeEach
表示方法在每个测试方法运行前都会运行 
## @AfterEach
表示方法在每个测试方法运行之后都会运行 
## @BeforeAll
表示方法在所有测试方法之前运行
## @AfterAll
表示方法在所有测试方法之后运行
## @Nested
表示带注解的类是嵌套的非静态测试类，@BeforeAll 和 @AfterAll 方法不能直接在 @Nested 测试类中使用，除非修改测试实例生命周期。
## @Tag
用于在类或方法级别声明用于过滤测试的标记 
## @Disabled
用于禁用测试类或测试方法 
## @ExtendWith
用于注册自定义扩展，该注解可以继承 
## @FixMethodOrder(MethodSorters.NAME_ASCENDING)
控制测试类中方法执行的顺序，这种测试方式将按方法名称的进行排序，由于是按字符的字典顺序，所以以这种方式指定执行顺序会始终保持一致；不过这种方式需要对测试方法有一定的命名规则，如 测试方法均以 testNNN 开头（NNN 表示测试方法序列号 001-999）


```

::::




:::: tabs

@tab 11

## 🍀 正则表达式

```md
# 简介
正则表达式是用字符串描述的一个**匹配规则**，
使用正则表达式可以快速判断给定的字符串_是否符合_匹配规则。

# 匹配规则
**从左到右**按规则匹配
- 匹配任意字符： `.`
- 匹配任意单个数字： `\d`
- 匹配常用字符： `\w`  ~~不能匹配 `#` \ `空格` 等~~
- 匹配空格： `\s`  包括 tab
- 匹配非数字、非常用字符、非空格： `\D` \ `\W` \ `\S`
- 重复匹配： 
    - 任意个： `*` 包括 0 个字符
    - 至少 1 个： `+`
    - 0 或 1 个： `?`
    - n 个： `{n}`
    - n～m 个： `{n,m}`
    - 至少 n 个： `{n,}`

# 复杂匹配规则
- 多行匹配：开头 `^` 结尾 `$`
- 匹配指定范围： 
    - 数字 1～9 `[1-9]` 
    - 字符 a～f / A~F `[a-f]` `[A-F]`
    - 排除 1～9 `[^1-9]`
    - 例：6 位十六进制数（大小写不限） `[0-9a-fA-F]{6}`
- 或规则匹配： `│`
- 使用括号： `learn\s(java│php│go)`

# 分组匹配
1. 用 Pattern 对象匹配规则
`Pattern p = Pattern.compile("(\\d{3,4})\\-(\\d{7,8})");`
2. 匹配后获得一个 Matcher 对象
`Matcher m = p.matcher("010-12345678");`
3. 如果匹配成功，就可以返回子串：
`if (m.matches()) {`
    `String g1 = m.group(1);` // 010
    `String g2 = m.group(2);}` // 12345678
    // m.group(0) 会返回 010-12345678

# 非贪婪匹配
非贪婪匹配：总是尽可能**少**地向后匹配
正则表达式匹配默认使用贪婪匹配，可以使用 `?` 表示对某一规则进行非贪婪匹配
例：给定一个字符串表示的数字，判断该数字末尾 `0` 的个数
    `(\\d+?)(0*)`
注意区分多个 `?` 的含义，例如 `(\d??)(9*)`：
    `\d?` 表示匹配 0 个或 1 个数字，后面的 `?` 表示非贪婪匹配
    "9999" 就会匹配成 "" 和 "9999" 两个子串

# 搜索与替换
## 分割字符串
- `String.split()` 方法传入的正是正则表达式
`"a b c".split("\\s"); // { "a", "b", "c" }`
`"a b  c".split("\\s"); // { "a", "b", "","c" }`
`"a, b ;; c".split("[\\,\\;\\s]+"); // { "a", "b", "c" }`

## 搜索字符串
获取到 `Matcher` 对象后，反复调用 `find()` 方法，
`String s = "the quick brown fox jumps over the lazy dog.";`
`Pattern p = Pattern.compile("\\wo\\w");`
`Matcher m = p.matcher(s);`
`while (m.find()) {`
    `String sub = s.substring(m.start(), m.end());`
    `System.out.println(sub);}`
在整个串中搜索能匹配上 `\\wo\\w` 规则的子串，并打印出来

## 替换字符串❗️
调用 `String.replaceAll()` 使用正则表达式替换字符串
`String s = "The     quick\t\t brown   fox  jumps   over the  lazy dog.";`
`String r = s.replaceAll("\\s+", " ");`
第一个参数是正则表达式，第二个参数是待替换的字符串

## 反向引用
`String s = "the quick brown fox jumps over the lazy dog.";`
`String r = s.replaceAll("\\s([a-z]{4})\\s", " <b>$1</b> ");`
结果：
the quick brown fox jumps <b>over</b> the <b>lazy</b> dog.

```

@tab 12

## 🍀 加密与安全

```md
# 编码算法
- ASCII 编码：最多 128 个字符
- Uincode 编码
- UTF-8 编码
## URL 编码
- URL 编码是对字符进行编码，表示成 `%xx` 的形式
- URL 编码后的文本仅包含 `A`～`Z`，`a`～`z`，`0`～`9`，`-`，`_`，`.`，`*` 和 `%`，
  便于浏览器和服务器处理
- Java 编码
  `String encoded = URLEncoder.encode("中文!", StandardCharsets.UTF_8);`
- Java 解码
  `String decoded = URLDecoder.decode("%E4%B8%AD%E6%96%87%21", StandardCharsets.UTF_8);`
## Base64 编码
- Base64 编码是对二进制数据进行编码，表示成文本格式
- 原理是把 3 字节的二进制数据按 6bit 一组，用 4 个 int 整数表示，
  然后查表，把 int 整数用索引对应到字符，得到编码后的字符串。
- 编码
  `byte[] input = new byte[] { (byte) 0xe4, (byte) 0xb8, (byte) 0xad };`
  `String b64encoded = Base64.getEncoder().encodeToString(input);`
- 解码
`byte[] output = Base64.getDecoder().decode("5Lit");`
- 编码后数据量会增加 1/3

# 哈希算法
- 哈希算法（Hash）又称摘要算法（Digest）
- 对任意一组输入数据进行计算，得到一个固定长度的输出摘要
    - 相同的输入一定得到相同的输出；
    - 不同的输入大概率得到不同的输出。
- 目的是 **验证原始数据是否被篡改**
> 例： `String.hashCode();` // 输入是任意字符串，输出是固定的 4 字节 int 整数
- _哈希算法的输出长度越长，就越难产生碰撞，也就越安全_
- 输入计算哈希举例（MD5）
    1. 创建一个 MessageDigest 实例:
    `MessageDigest md = MessageDigest.getInstance("MD5");`
    2. 反复调用 update 输入数据:
    `md.update("Hello".getBytes("UTF-8"));`
    `md.update("World".getBytes("UTF-8"));`
    3. 获得 byte[] 数组表示的摘要
    `byte[] result = md.digest();`
    4. 转换为十六进制的字符串
    `System.out.println(new BigInteger(1, result).toString(16));`
- 常用重要用途：存储用户口令
    - 注意防止彩虹表攻击：**加盐**——对每个口令额外添加随机数
    `digest = md5(salt+inputPassword)`

# BouncyCastle
一个提供了很多哈希算法和加密算法的第三方库，使用方法如下：
1. 把 BouncyCastle 提供的 jar 包放到 classpath 中
2. 注册 BouncyCastle（注册只需要在启动时进行一次）
   `Security.addProvider(new BouncyCastleProvider());`
3. 按加密算法名称正常调用

# Hmac 算法
- Hmac 算法是一种基于密钥的消息认证码算法，是一种更安全的消息摘要算法
- Hmac 算法总是和某种哈希算法配合起来用的，
  例如，我们使用 MD5 算法，对应的就是 HmacMD5 算法
  - 为了保证安全，我们不会自己指定 key，而是通过 Java 标准库的 KeyGenerator 生成一个安全的随机的 key
  - 使用步骤
    1. 通过名称 `HmacMD5` 获取 `KeyGenerator` 实例；
    `KeyGenerator keyGen = KeyGenerator.getInstance("HmacMD5");`
    2. 通过 `KeyGenerator` 创建一个 `SecretKey` 实例；
    `SecretKey key = keyGen.generateKey();`
    3. 通过名称 `HmacMD5` 获取 `Mac` 实例；
    `Mac mac = Mac.getInstance("HmacMD5");`
    4. 用 `SecretKey` 初始化 `Mac` 实例；
    `mac.init(key);`
    5. 对 `Mac` 实例反复调用 `update(byte[])` 输入数据；
    `mac.update("HelloWorld".getBytes("UTF-8"));`
    6. 调用 `Mac` 实例的 `doFinal()` 获取最终的哈希值。
    `byte[] result = mac.doFinal();`
    7. 打印
    `System.out.println(new BigInteger(1, result).toString(16));`
  - 恢复 SecretKey 的语句就是 `new SecretKeySpec(hkey, "HmacMD5")`  
    
# 对称加密算法
对称加密算法使用同一个密钥进行加密和解密，常用算法有 DES、AES 和 IDEA 等
- 加密 `secret = encrypt(key, message);`
- 解密 `plain = decrypt(key, secret);`
_密钥长度由算法设计决定_
## AES 加密
目前应用最广泛，AES 的密钥长度是 128/192/256 位
- ECB 模式：最简单的 AES 加密模式，它只需要一个固定长度的密钥，
  固定的明文会生成固定的密文，这种一对一的加密方式会导致安全性降低
- CBC 模式：它需要一个随机数作为 IV 参数，这样对于同一份明文，每次生成的密文都不同
- 使用对称加密算法需要指定算法名称、工作模式和填充模式。

# 口令加密算法
PBE 就是 Password Based Encryption
PBE 的作用就是把用户输入的口令和一个安全随机的口令采用杂凑后计算出真正的密钥
`key = generate(userPassword, secureRandomPassword);`
- PBE 算法通过用户口令和安全的随机 salt 计算出 Key，然后再进行加密；
- Key 通过口令和安全的随机 salt 计算得出，大大提高了安全性；
- PBE 算法内部使用的仍然是标准对称加密算法（例如 AES）。

# 密钥交换算法
DH 算法：Diffie-Hellman 算法
_解决了密钥在双方不直接传递密钥的情况下完成密钥交换_
- 本质：双方各自生成自己的私钥和公钥，私钥仅对自己可见，然后交换公钥，并根据自己的私钥和对方的公钥，生成最终的密钥 `secretKey`
- DH 算法 ~~没有解决中间人攻击~~

# 非对称加密算法
加密和解密使用的不是相同的密钥，典型算法：RSA 算法
相比对称加密的显著优点：
- 对称加密需要协商密钥，而非对称加密可以安全地公开各自的公钥
- 在 N 个人之间通信的时候：
  - 使用非对称加密只需要 N 个密钥对，每个人只管理自己的密钥对。
  - 而使用对称加密需要则需要 `N*(N-1)/2` 个密钥，因此每个人需要管理 `N-1` 个密钥，密钥管理难度大，而且非常容易泄漏。
缺点：运算速度非常慢
实际应用：用 AES 加密任意长度的明文，用 RSA 加密 AES 口令
~~**只**使用非对称加密算法不能防止中间人攻击~~

# 签名算法
即**数字签名**，用发送方的私钥对原始数据进行签名，只有用发送方公钥才能通过签名验证
- 防止伪造；
- 防止抵赖；
- 检测篡改

# 数字证书
数字证书就是集合了多种密码学算法，用于实现数据加解密、身份认证、签名等多种功能的一种安全标准。
_数字证书采用链式签名认证，可以防止中间人攻击。_
```

@tab 13

## 🍀 多线程

```md
# 多线程基础
在计算机中，我们把一个任务称为一个进程（浏览器/微信），把任务的子任务称为线程
一个进程可以包含一个或多个线程，但至少会有一个线程。
## 进程 VS 线程
- 创建进程比创建线程开销大，尤其是在 Windows 系统上；
- 进程间通信比线程间通信要慢，因为线程间通信就是读写同一个变量，速度很快。
- 多进程稳定性比多线程高，因为在多进程的情况下，一个进程崩溃不会影响其他进程，
  而在多线程的情况下，任何一个线程崩溃会直接导致整个进程崩溃
## 多线程编程
- 多线程经常需要读写共享数据，并且需要同步；
- 多线程模型是 Java 程序最基本的并发模型；
- 读写网络、数据库、Web 开发等都依赖 Java 多线程模型。

# 创建新线程
实例化一个 `Thread` 实例，然后调用它的 `start()` 方法
- 方法一：从 `Thread` 派生一个自定义类，然后重写 `run()` 方法：
      `Thread t = new MyThread();`
  `class MyThread extends Thread {`
      `@Override`
      `public void run() { ... }}`
- 方法二：创建 `Thread` 实例时，传入一个 `Runnable` 实例：
      `Thread t = new Thread(new MyRunnable());`
  `class MyRunnable implements Runnable {`
      `@Override`
      `public void run() { ... }}`
> 在线程中调用 `Thread.sleep()`，可强迫当前线程暂停一段时间
- 可以对线程设定优先级
  `Thread.setPriority(int n)` // 1~10, 默认值 5
- 注意：
    1. _一个线程对象只能调用一次 `start()` 方法_
    2. 线程的执行代码写在 `run()` 方法中；
    3. 线程调度由操作系统决定，程序本身无法决定调度顺序；

# 线程的状态
- Java 线程对象 `Thread` 的状态包括： `New`、`Runnable`、`Blocked`、`Waiting`、`Timed Waiting` 和 `Terminated` ；
- 通过对另一个线程对象调用 `join()` 方法可以等待其执行结束；
    - 可以指定等待时间，超过等待时间线程仍然没有结束就不再等待；
- 对已经运行结束的线程调用 `join()` 方法会立刻返回。

# 中断线程
- 对目标线程调用 `interrupt()` 方法可以请求中断一个线程，目标线程通过检测 `isInterrupted()` 标志获取自身是否已中断。如果目标线程处于等待状态，该线程会捕获到 `InterruptedException` ；
- 目标线程检测到 `isInterrupted()` 为 `true` 或者捕获了 `InterruptedException` 都应该立刻结束自身线程；
- 通过标志位判断需要正确使用 `volatile` 关键字；
- `volatile` 关键字解决了共享变量在线程间的可见性问题。

# 守护线程
指为其他线程服务的线程，JVM 退出时，不必关心守护线程是否已结束
`Thread t = new MyThread();`
`t.setDaemon(true);` // 
`t.start();`
守护线程不能持有任何需要关闭的资源

# 线程同步
- 多线程**同时**读写共享变量时，可能会造成逻辑错误，因此需要通过 `synchronized` 同步；
- 同步的本质就是给指定对象加锁，加锁后才能继续执行后续代码；
- 注意加锁对象必须是同一个实例；JVM 只保证同一个锁在任意时刻只能被一个线程获取；
- 对 JVM 定义的单个原子操作不需要同步，不可变对象无需同步
- 多线程同时执行的是**方法**
_成员变量能被多线程同时读写，局部变量只有当前线程可见_（一般情况）

# 同步方法 
- 用 `synchronized` 修饰方法可以把整个方法变为同步代码块，`synchronized` 方法加锁对象是 `this`；
- 通过合理的设计和数据封装可以让一个类变为 “线程安全”；

# 死锁
Java 的线程锁是可重入锁，即能被同一个线程反复获取的锁。
获取锁的时候，不但要判断是否是第一次获取，还要记录这是第几次获取。
**死锁**：两个线程各自持有不同的锁，然后各自试图获取对方手里的锁，造成了双方无限等待下去
如何避免死锁：线程获取锁的顺序要一致

# 使用 wait 和 notify
**多线程协调运行的原则**：_当条件不满足时，线程进入等待状态；当条件满足时，线程被唤醒，继续执行任务_。
- 在 `synchronized` 内部可以调用 `wait()` 使线程进入等待状态；
- 必须在已获得的锁对象上调用 `wait()` 方法；
- 在 `synchronized` 内部可以调用 `notify()` 或 `notifyAll()` 唤醒其他等待线程；
- 必须在已获得的锁对象上调用 `notify()` 或 `notifyAll()` 方法；
- 已唤醒的线程还需要重新获得锁后才能继续执行。

# 使用 ReentrantLock
- ReentrantLock 可以替代 synchronized 进行同步，更安全；
`private final Lock lock = new ReentrantLock();`
`lock.lock();` // 上锁
`lock.unlock();` // 解锁
- ReentrantLock 需要考虑异常，先获取到锁，再进入 `try {...}` 代码块，最后使用 finally 中释放锁
- 和 synchronized 不同的是，ReentrantLock 可以使用 `tryLock()` 尝试获取锁
`lock.tryLock(1, TimeUnit.SECONDS)`

# 使用 Condition 
- Condition 对象必须从 Lock 对象获取。
- 使用 Condition 对象来实现 wait 和 notify 的功能：
`private final Condition condition = lock.newCondition();`
`condition.signalAll();` // 唤醒
`condition.await();` // 等待
- `await()` 可以在等待指定时间后，如果还没有被其他线程唤醒，可以自己醒来
`condition.await(1, TimeUnit.SECOND)`

# 使用 ReadWriteLock 
使用 ReadWriteLock 可以提高读取效率：
1. 只允许一个线程写入；
2. 允许多个线程在没有写入时同时读取；
3. 适合读多写少的场景。
`private final ReadWriteLock rwlock = new ReentrantReadWriteLock();`
`private final Lock rlock = rwlock.readLock();`
`private final Lock wlock = rwlock.writeLock();`
_潜在的问题：读的过程中不允许写（悲观锁）_

# 使用 StampedLock 
把读锁细分为乐观读和悲观读，读的过程中也允许获取写锁后写入（乐观锁）
_`StampedLock` 是不可重入锁_
`long stamp = stampedLock.writeLock();` // 获取写锁
`long stamp = stampedLock.tryOptimisticRead();` // 获得一个乐观读锁
`stampedLock.validate(stamp)` // 如果乐观读锁后没有其他写锁发生，返回 true
`stamp = stampedLock.readLock();` // 获取一个悲观读锁

# 使用 Semaphore 
对某一受限资源进行限流访问，可以使用 Semaphore，保证同一时刻最多有 N 个线程能访问
`final Semaphore semaphore = new Semaphore(3);`
1. 使用 Semaphore 先调用 `semaphore.acquire();` 获取，
2. 然后通过 `try ... finally{ semaphore.release(); }` 释放。
可以使用 `tryAcquire()` 指定等待时间

# 使用 Concurrent 集合
针对 List、Map、Set、Deque 等，`java.util.concurrent` 包也提供了对应的并发集合类：
- CopyOnWriteArrayList
- ConcurrentHashMap
- CopyOnWriteArraySet
- ArrayBlockingQueue
- LinkedBlockingQueue
所有的同步和加锁的逻辑都在集合内部实现
_使用 java.util.concurrent 包提供的线程安全的并发集合可以大大简化多线程编程_

# 使用 Atomic 
使用 `java.util.concurrent.atomic` 提供的原子操作可以简化多线程编程：
- 原子操作实现了无锁的线程安全；
- 适用于计数器，累加器等。

# 使用线程池 
线程池内部维护了若干个线程，可以高效执行大量小任务；
- 没有任务的时候，这些线程都处于等待状态。
- 如果有新任务，就分配一个空闲线程执行。
- 如果所有线程都处于忙碌状态，新任务要么放入队列等待，要么增加一个新线程进行处理。
Java 标准库提供了 `ExecutorService` 接口表示线程池，常用实现类有
- `FixedThreadPool`：线程数固定的线程池；
- `CachedThreadPool`：线程数根据任务动态调整的线程池；
- `SingleThreadExecutor`：仅单线程执行的线程池。
- `ScheduledThreadPool`：可以定期调度多个任务（可定期反复执行）
    - FixedRate 是指任务总是以固定时间间隔触发，不管任务执行多长时间
    - FixedDelay 是指上一次任务执行完毕后，等待固定的时间间隔，再执行下一次任务
必须调用 `shutdown()` 关闭 `ExecutorService`；

# 使用 Future 
对线程池提交一个 `Callable` 任务，可以获得一个 `Future` 对象；
可以用 `Future` 在将来某个时刻获取结果。

# 使用 CompletableFuture（❌ 不太懂）
`CompletableFuture` 可以指定异步处理流程：
- `thenAccept()` 处理正常结果；
- `exceptional()` 处理异常结果；
- `thenApplyAsync()` 用于串行化另一个 `CompletableFuture`；
- `anyOf()` 和 `allOf()` 用于并行化多个 `CompletableFuture`

# 使用 ForkJoin 
- Fork/Join 是一种基于 “分治” 的算法：通过分解任务，并行执行，最后合并结果得到最终结果。
- `ForkJoinPool` 线程池可以把一个大任务分拆成小任务并行执行，任务类必须继承自 `RecursiveTask` 或 `RecursiveAction`。
- 使用 Fork/Join 模式可以进行并行计算以提高效率。

# 使用 ThreadLocal 
- `ThreadLocal` 表示线程的 “局部变量”，它确保每个线程的 `ThreadLocal` 变量都是各自独立的；
- `ThreadLocal` 适合在一个线程的处理流程中保持上下文（避免了同一参数在所有方法中传递）；
- 使用 `ThreadLocal` 要用 `try ... finally` 结构，并在 `finally` 中清除。

# 使用虚拟线程
Java 19 引入，为了能高效执行 IO 密集型任务
- IO 密集型任务：真正由 CPU 执行的代码消耗的时间非常少，线程的大部分时间都在等待 IO
- 可以高效通过少数线程去调度大量虚拟线程
- 虚拟线程在执行到 IO 操作或 Blocking 操作时，会自动切换到其他虚拟线程执行，
  从而避免当前线程等待，能最大化线程的执行效率；
- 虚拟线程使用普通线程相同的接口，最大的好处是无需修改任何代码，
  就可以将现有的 IO 操作异步化获得更大的吞吐能力。
- 计算密集型任务不应使用虚拟线程，只能通过增加 CPU 核心解决，或者利用分布式计算资源。

```

@tab 14

## 🍀 Maven

```md
# Maven 介绍
Maven 是专门为 Java 项目打造的管理和构建工具
默认结构：
    a-maven-project
    ├── pom.xml // 项目描述文件
    ├── src
    │   ├── main
    │   │   ├── java // java 源码
    │   │   └── resources // 资源文件
    │   └── test
    │       ├── java // 测试源码
    │       └── resources // 测试资源
    └── target // 所有编译、打包生成的文件

# 依赖管理
Maven 定义了几种依赖关系，分别是 compile、test、runtime 和 provided：
- compile：编译时需要用到该 jar 包（默认，如 commons-logging）
- test：仅在测试时使用，正常运行时并不需要（如 JUnit）
- runtime：编译时不需要，但运行时需要（如 MySQL 驱动）
- provided：编译时需要，但运行时不需要（如 Servlet API）
Maven 使用 `groupId`，`artifactId` 和 `version` 唯一定位一个依赖
Maven 从中央仓库下载所需的 jar 包并缓存在本地；

# 构建流程
Maven 通过 lifecycle、phase 和 goal 来提供标准的构建流程。
最常用的构建命令是指定 phase，然后让 Maven 执行到指定的 phase：
- `mvn clean`
- `mvn clean compile`
- `mvn clean test`
- `mvn clean package`
通常情况，我们总是执行 phase 默认绑定的 goal，因此不必指定 goal。

# 使用插件
Maven 通过自定义插件可以执行项目构建时需要的额外功能，
使用自定义插件必须在 pom.xml 中声明插件及配置；

# 模块管理
Maven 可以有效地管理多个模块，我们只需要把每个模块当作一个独立的 Maven 项目，
它们有各自独立的 pom.xml：
    multiple-projects
    ├── module-a
    │   ├── pom.xml
    │   └── src
    ├── module-b
    │   ├── pom.xml
    │   └── src
    └── module-c
        ├── pom.xml
        └── src
- 可以通过继承在 parent 的 `pom.xml` 统一定义重复配置；
- 可以通过 `<modules>` 编译多个模块。

# 使用 mvnw（Maven Wrapper）
- 给一个项目提供一个独立的，指定版本的 Maven 给它使用
- 另一个作用是把项目的 `mvnw`、`mvnw.cmd` 和 `.mvn` 提交到版本库中，
  可以使所有开发人员使用统一的 Maven 版本

# 发布 Artifact
把自己的库发布到 Maven 的 repo 中
```

@tab 15

## 🍀 网络编程

```md
# 基础
- 计算机网络：由两台或更多计算机组成的网络；
- 互联网：连接网络的网络；
- **IP 地址**：计算机的网络接口（通常是网卡）在网络中的唯一标识；
- **网关**：负责连接多个网络，并在多个网络之间转发数据的计算机，通常是路由器或交换机；
- 网络协议：互联网使用 TCP/IP 协议，它泛指互联网协议簇；
- IP 协议：一种分组交换传输协议；
- TCP 协议：一种面向连接，可靠传输的协议；
- UDP 协议：一种无连接，不可靠传输的协议。

# TCP 编程
- 服务器端用 `ServerSocket` 监听指定端口；
- 客户端使用 `Socket(InetAddress, port)` 连接服务器；
- 服务器端用 `accept()` 接收连接并返回 Socket；
- 双方通过 Socket 打开 InputStream/OutputStream 读写数据；
- 服务器端通常使用多线程同时处理多个客户端连接，利用线程池可大幅提升效率；
- `flush()` 用于强制输出缓冲区到网络。

# UDP 编程
- 服务器端用 `DatagramSocket(port)` 监听端口；
- 客户端使用 `DatagramSocket.connect()` 指定远程地址和端口；
- 双方通过 `receive()` 和 `send()` 读写数据；
- `DatagramSocket` 没有 IO 流接口，数据被直接写入 `byte[]` 缓冲区。

# 发送 Email


# 接收 Email

# HTTP 编程

# RMI 远程调用

```

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
