## ReactNative配置
### Node 版本必须高于 8.3
### Yarn、React Native 的命令行工具（react-native-cli）
用yarn add 某第三方库名代替npm install 某第三方库名
> npm install -g yarn react-native-cli

>yarn config set registry https://registry.npm.taobao.org --global

> yarn config set disturl https://npm.taobao.org/dist --global
### Python2 版本必须为 2.x（不支持 3.x）
### JDK 版本必须是 1.8（目前不支持 1.9 及更高版本）
### Android 开发环境
1. 安装 Android Studio
2. 安装 Android SDK
- Android SDK Platform 26
- Intel x86 Atom_64 System Image
- "Android SDK Build-Tools"26.0.3版本
3. 配置 ANDROID_HOME 环境变量
### 创建项目
> react-native init AwesomeProject
### 使用 Android 模拟器
### 启动项目
>react-native run-android
### 调试工具
>npm install -g react-devtools

>react-devtools

### 查看连接设备
>adb devices
### 连接夜神
>adb.exe connect 127.0.0.1:62001
### debugger地址
>http://localhost:8081/debugger-ui/