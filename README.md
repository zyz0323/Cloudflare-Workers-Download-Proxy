# Cloudflare-Workers-Download-Proxy

使用Cloudflare Workers代理/连接/加速您的下载任务。

## 部署方法

1. 复制程序代码：[Cloudflare-Workers-Download-Proxy.js](https://github.com/zyz0323/Cloudflare-Workers-Download-Proxy/blob/main/Cloudflare-Workers-Download-Proxy.js)，替换您原来的Worker中的内容，无需进行任何修改。
2. 如果您位于中国大陆，请为Worker绑定您自己的域名。由于workers.dev域名在中国大陆的网络环境中无法访问，因此需要使用其他域名。

## 网页界面

当您访问您的网页时，将显示一个带有输入框和按钮的页面。按照以下步骤操作：

1. 在输入框中输入要下载的文件链接。
2. 若点击`下载`按钮，将会自动将您跳转下载。
3. 若点击`获取下载链接`，则会在网页上输出代理后的下载链接。

## 终端使用

最初创建这个程序时，并没有考虑到添加网页界面，只是为了让国内服务器能够连接到GitHub。因此，如果您在没有图形化界面的终端中使用，可以尝试使用以下链接格式：`域名/download?url=下载链接`。

## 注意事项

- 确保提供的链接是有效的，并且指向可下载的文件。
- 下载链接应包含完整的URL，包括协议（例如 `http://` 或 `https://`）。
- 此示例仅用于研究和学习目的，并且无法安全地处理大型或未知的文件。

## 关于作者

我的博客：https://blog.968968.xyz
