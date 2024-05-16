---
title: Macbook pro M1(ARM)安装 CentOS 7
icon: centos
sidebarDepth: 0 
category: Tools 
tag: Linux
author: wu@55555
---


## 🍀 0. 引言

mac 发布了 m1 芯片，其强悍的性能收到很多开发者的追捧，但是也因为其架构的更换，导致很多软件或环境的安装成了问题，今天就来谈谈如何在 m1 中安装 [linux 虚拟机](https://so.csdn.net/so/search?q=linux虚拟机&spm=1001.2101.3001.7020)

## 🍀 1. 下载

### 1.1 安装 VMware Fusion

我选择在 VMware 上运行虚拟机，所以需要下载 VMware Fusion
下载地址：[VMware Fusion for M1](https://customerconnect.vmware.com/downloads/get-download?downloadGroup=FUS-PUBTP-2021H1)
选择 ARM 版本下载，目前是官方推出的针对 M1 的试用版本，无需激活，后续是否收费还未可知


![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172254736.png)

下载后双击安装即可

### 1.2 下载 centos

centos for m1 下载地址：[centos for m1](https://www.centos.org/download/)
北京外国语大学镜像地址（`注意`下载下来的镜像文件不能直接使用，有很多同学没有仔细看我下面的解释，导致安装不成功，特此提示！！！往下看）：[centos for m1 国内镜像](https://mirrors.bfsu.edu.cn/centos-altarch/7.9.2009/isos/aarch64/)
文件：CentOS-7-aarch64-Everything-2009.iso

`上述地址下载出来的镜像并不能直接使用！！！会一直卡在安装界面`，想要使用的话还需要进行一系列的操作，为了方便我另外使用一个民间高手制作出来的 centos7 镜像，但是因为是非官方，所以有什么问题还未可知，目前我自己使用除了 yum 下载因为镜像地址原因不可用外其他的还没发现问题。如果要配置上述地址的镜像，可以参考这位博主的博客 [arm64(aarch64) 安装 centos 7.5.1804](https://blog.csdn.net/feixiang3839/article/details/808571380)
链接如果失效可参考这个：[arm64(aarch64) 安装 centos 7.5.1804](https://blog.csdn.net/feixiang3839/article/details/80857138/)

我所用的镜像已上传到网盘（想直接安装的话请使用这个镜像！！！）：

[天翼网盘地址：centos7 for m1](https://cloud.189.cn/t/nyQfIrVbEjEj（访问码：s8xw）)

[百度网盘地址：centos7 for m1](https://pan.baidu.com/s/1-ToTP8kY3BZRRWuKcDzZDA)
密码: c81n
文件：CentOS-7-aarch64-08191738.iso（注意因为百度网盘限制，安装包被拆分成三份，选择 001 或者三个文件全选解压即可（mac 默认的解压工具不能解压，提前下载好 fastZip 等解压工具）。阿里网盘暂不支持压缩包格式文件分享）

### 1.3 下载 ubuntu

如果需要安装 ubuntu 可以参考另一篇文章：
[mac pro M1(ARM) 安装：ubuntu 虚拟机](https://blog.csdn.net/qq_24950043/article/details/123764210)

### 1.4 安装 centos8

本文讲解的是 centos7 的安装过程，如果想要安装 centos8，可查看我另一篇文章：
[mac pro M1(ARM) 安装：centos8.0 桌面版虚拟机](https://blog.csdn.net/qq_24950043/article/details/128158507)

## 🍀 2. 安装 centos

1、打开 VMware，点击新建虚拟机
2、将下载的镜像拖入到窗口中，我这里因为之前安装过其他镜像所以会有历史显示

![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172254191.png)


3、选择任意一个操作系统即可，因为镜像内部已经设置过了

![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16.png)

4、这里你可以选择自定义调整配置，或者直接点击完成进行安装。我这里点击自定义修改下配置

![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172254577.png)

4、修改下虚拟机文件名称

![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172254586.png)

5、因为我不需要声卡和摄像头，所以将声卡和摄像头都移除了

![](https://img-blog.csdnimg.cn/0df3b910e4f54dc097250f93204f769f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16)
6、点击播放按钮开始安装

![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172255098.png)

`如果这里点击没有反应，可按以下步骤排错`：
（1）确保你使用的是 arm 架构的 centos 镜像，如果不清楚就用我网盘中提供的镜像文件
（2）确保 VMware 是适配了 m1 芯片的版本，安装包也可在我网盘中提供的地址下载
（3）如果上述还是不能解决，那就使用`App Cleaner & Uninstaller`等软件将 [VMware 彻底卸载](https://so.csdn.net/so/search?q=VMware 彻底卸载 & spm=1001.2101.3001.7020) 干净，可能因为你之前安装过并且没有成功，但配置文件已经被影响，导致再次安装使用了之前的配置文件，所以需要彻底卸载干净，注意直接删除 VM 并不生效，请使用深度卸载软件卸载。安装包也放到网盘中了，可自行下载

7、 选择 Install centos 7，剩下的步骤如果安装过 centos 的同学应该很清楚了，但为了满足第一次接触的同学，这里继续给出步骤，安装过的可直接跳过

![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172254719.png)

8、语言是用英文就好，不要改成中文![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172255267.png)

9、点击 system，点击 done

![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172255628.png)

10、默认是最小化安装，是没有 vim 等工具的， 但是目前这个版本通过 yum 下载又是有问题的，所以我这里选择 web application 安装，这样可以自带上 vim 等工具
点击 Software Selection

![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172255992.png)

11、点击 Time & Date，选择时区为上海

![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172256136.png)


12、点击 root password，给 root 账号设置密码，设置完成后点击 done，注意要点击两次
另外我这里因为安装的环境需要一个非 root 账号，所以我再创建了一个 elastic 账号，如果有需要可以点击 User creation 创建

完成后点击 begin install 开启安装

![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172255999.png)


补充一点：有的同学到这里没有开启网络，导致后续连接不上网络，这里要点击`NetWork & Host Name`，开启网络


![](./assets/0ecabf314501470bb058f65e8fab16ab.png)


13、等待一段时间后，安装结束，点击 reboo 重启系统

![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172254843.png)

14、输入账户密码，登录成功

![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172254960.png)

到这里 centos 就安装成功了

```
如果本文对你有用的话，不妨点个赞，点个收藏，你的鼓励是我创作的动力
```

15、如果安装后虚拟机 ip 与宿主机 ip 不一致，将网络类型该为 “自动检测” 即可

```
# 查看 ip
ip addr
12
```


![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172255667.png)



![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172254463.png)


## 🍀 3 开启网卡，修改 ip，开启 ssh 服务

### 3.1 开启网卡

因为 centos7 默认是关闭网卡的，所以需要手动开启
1、修改网卡配置文件

```
# 之前安装都是 ens33，这个版本是 ens160。如果没有安装 vim 的话，可以使用 vi 命令替代
vim /etc/sysconfig/network-scripts/ifcfg-ens160
12
```

2、将 ONBOOT 设置为 yes 即可开启网卡

![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172255012.png)

3、重启网卡

```
service network restart
1
```

输入 ip addr 查询 ip。出现 ip 即说明开启成功

![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172255093.png)


### 3.2 修改 IP

1、修改网卡配置文件

```
vim /etc/sysconfig/network-scripts/ifcfg-ens160
1
```

2、在配置文件中添加：

```
IPADDR=192.168.244.12 #静态 IP，你要修改的 ip
GATEWAY=192.168.244.1 #默认网关
NETMASK=255.255.255.0 #子网掩码
1234
```

3、重启网卡

```
service network restart
1
```

4、查询 ip，发现配置的 ip 已经出现

```
ip addr
1
```


![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172254664.png)

5、如果出现虚拟机无法 ping 同主机的情况，说明主机与虚拟机不在一个网段上，将虚拟机的网段与主机的保持一致即可。
比如主机为 192.168.0.2
那么虚拟机就要为 192.168.0.x

### 3.3 开启 ssh 服务

通过 ssh 服务，我们可以使用 ssh 指令来远程操作虚拟机，非常的方便

centos7 默认安装 ssh 服务，该服务通过 22 端口传输，所以需要开启 22 端口或者关闭防火墙。但在生产环境中不允许关闭防火墙
1、如果未开启 ssh 服务，可以通过以下指令开启

```
service sshd start
# 重启 sshd
service sshd restart
# 关闭 sshd
service sshd stop
12345
```

如果上述方式不管用，可以尝试这种方式重启 ssh

```
systemctl restart sshd
1
```

2、开启 22 端口

```
# 查询 22 端口是否开放
firewall-cmd --query-port=22/tcp
#查询所有已开放的端口
netstat -anp
# 开启端口
firewall-cmd --add-port=22/tcp --permanent
# 开启后重新加载
firewall-cmd --reload
12345678
```

关闭端口指令

```
# 关闭指定端口
firewall-cmd --permanent --remove-port=22/tcp
12
```

如需关闭 / 开启防火墙，操作如下

```
查看防火墙状态 systemctl status firewalld
开启防火墙 systemctl start firewalld
关闭防火墙 systemctl stop firewalld
禁止防火墙开机自启 systemctl disable firewalld
若遇到无法开启
先用：systemctl unmask firewalld.service
然后：systemctl start firewalld.service
1234567
```

3、连接测试

```
# 在 mac 中运行
ssh root@192.168.244.12
12
```

如果仍然报错 22 端口关闭，可以重启下虚拟机再试

![](./assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAd3VfNTU1NTU=,size_20,color_FFFFFF,t_70,g_se,x_16-20240321172255992-1012975.png)

4、如果发现 ssh 连接慢或者传输慢，可以通过以下指令关闭 DNS

```
sudo vim /etc/ssh/sshd_config
1
```

修改内容，大概在 115 行

```
UseDNS no
1
```

重启 ssh

```
systemctl restart sshd
1
```

### 3.4 无法连接外网问题解决

[解决 mac m1 环境下 centos 虚拟机无法连接网络](https://blog.csdn.net/qq_24950043/article/details/124413491)

## 🍀 重启后需要重新安装问题解决

不少同学反馈，安装后再重启需要重新安装，这是因为又连接了镜像文件，并且从镜像启动了

我们需要修改两项配置

1、关闭虚拟机，打开虚拟机设置，打开`CD/DVD`


![](./assets/1cbda9eecb0b43ec8da8dcb825c78e85.png)


2、将`连接 CD/DVD 驱动器`勾选去掉


![](./assets/31c7e90c843442e9a70206e380ccfac9.png)


3、其次打开`启动磁盘`


![](./assets/459fc8c485eb48f5a36f3f579c02f34c.png)


4、选择从磁盘启动


![](./assets/20eec2be52cf4249ab9c5463f8d324db.png)


### 3.5 解决无法使用 yum 安装软件

[解决 mac arm 下的 centos/ubuntu 无法使用 yum 安装软件](https://wu55555.blog.csdn.net/article/details/128175716)