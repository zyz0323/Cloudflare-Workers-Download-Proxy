# Cloudflare-Workers-Download-Proxy
利用Cloudflare Workers代理/连通/加速你的下载任务。

使用方法：

一、部署代码

直接将js文件内的代码复制到Workers，无需做任何修改。
用户可以通过xxx.xxx.workers.dev/?url=下载链接，这样的形式以利用Workers代理下载。
例如，要下载https://example.com/file.zip，用户可以使用以下链接：`xxx.xxx.workers.dev/?url=https://example.com/file.zip`。

二、For中国大陆用户

workers.dev域名被GFW认证了，若你在中国大陆使用Workers，请绑定自己的域名。

三、About Me

欢迎关注我的博客：https://blog.968968.xyz

注意：这个示例仅用于研究和学习目的，并且无法安全地处理大型或未知的文件。
