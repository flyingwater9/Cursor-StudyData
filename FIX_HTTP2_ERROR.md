# 解决 Git HTTP2 错误

## 🔍 错误信息

```
fatal: unable to access 'https://github.com/...': Error in the HTTP2 framing layer
```

或

```
fatal: unable to access 'https://github.com/...': Empty reply from server
```

## ✅ 已应用的修复

1. ✅ 已禁用 HTTP/2，改用 HTTP/1.1
2. ✅ 已增加缓冲区大小
3. ✅ 已配置超时设置

## 🎯 解决方案

### 方案一：在 Cursor GUI 中推送（推荐）

由于命令行可能有网络问题，建议在 Cursor 的 GUI 中操作：

1. **打开 Source Control 面板**：
   - 按 `Cmd+Shift+G`

2. **点击推送**：
   - 点击 "Sync Changes" 按钮
   - Cursor 的 GUI 通常能更好地处理网络问题

3. **输入 Token**（如果需要）

### 方案二：使用 SSH 方式（最稳定）

如果 HTTPS 一直有问题，可以改用 SSH：

#### 步骤 1：检查是否有 SSH 密钥

```bash
ls -la ~/.ssh/id_*.pub
```

#### 步骤 2：如果没有，生成 SSH 密钥

```bash
ssh-keygen -t ed25519 -C "flyingwater.young@gmail.com"
# 按回车使用默认路径
# 可以设置密码或直接回车
```

#### 步骤 3：添加 SSH 密钥到 GitHub

```bash
# 复制公钥
cat ~/.ssh/id_ed25519.pub
# 或
pbcopy < ~/.ssh/id_ed25519.pub  # macOS 自动复制到剪贴板
```

然后：
1. 访问：https://github.com/settings/keys
2. 点击 "New SSH key"
3. 粘贴公钥
4. 保存

#### 步骤 4：修改远程 URL 为 SSH

```bash
git remote set-url origin git@github.com:flyingwater9/Cursor-StudyData.git
```

#### 步骤 5：测试并推送

```bash
# 测试 SSH 连接
ssh -T git@github.com

# 推送
git push origin main
```

### 方案三：检查网络和代理

如果使用代理，需要配置：

```bash
# 设置代理（如果有）
git config --global http.proxy http://proxy.example.com:8080
git config --global https.proxy https://proxy.example.com:8080

# 或者取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

### 方案四：临时禁用 SSL 验证（不推荐，仅测试用）

```bash
git config --global http.sslVerify false
```

**注意**：这只是临时测试，完成后应该恢复：
```bash
git config --global http.sslVerify true
```

## 🔧 当前 Git 配置

已应用的配置：

```bash
http.version=HTTP/1.1
http.postBuffer=524288000
http.lowSpeedLimit=0
http.lowSpeedTime=999999
```

## 💡 推荐操作

**最简单的方法**：在 Cursor 的 Source Control 面板中点击 "Sync Changes"

如果还是不行，建议改用 SSH 方式（方案二），这是最稳定的方法。

## 🆘 如果所有方法都不行

1. **检查网络**：确保能正常访问 GitHub
2. **检查防火墙**：确保没有阻止 Git
3. **尝试其他网络**：可能是当前网络环境的问题
4. **使用 GitHub Desktop**：图形化工具可能更稳定

