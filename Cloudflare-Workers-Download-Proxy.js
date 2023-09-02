addEventListener('fetch', event => {
  const { pathname } = new URL(event.request.url)
  
  if (pathname === '/') {
    event.respondWith(handlePageRequest(event.request))
  } else if (pathname === '/download') {
    event.respondWith(handleDownloadRequest(event.request))
  } else {
    event.respondWith(new Response('Not Found', { status: 404 }))
  }
})

async function handlePageRequest(request) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>文件下载</title>
        <script>
          function getDownloadLink() {
            var urlInput = document.getElementById('url');
            var downloadLink = document.getElementById('download-link');
            var proxyLink = window.location.origin + '/download?url=' + encodeURI(urlInput.value);
            downloadLink.textContent = proxyLink;
          }
        </script>
      </head>
      <body>
        <h1>文件下载</h1>
        <form action="/download" method="get">
          <label for="url">下载链接：</label>
          <input type="text" id="url" name="url" required>
          <button type="submit">下载</button>
        </form>
        <br>
        <button onclick="getDownloadLink()">获取下载链接</button>
        <p id="download-link"></p>
        <p>作者博客：<a href="https://blog.968968.xyz" target="_blank">https://blog.968968.xyz</a></p>
        <p>本项目仓库：<a href="https://github.com/zyz0323/Cloudflare-Workers-Download-Proxy" target="_blank">https://github.com/zyz0323/Cloudflare-Workers-Download-Proxy</a></p>
      </body>
    </html>
  `
  
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  })
}

async function handleDownloadRequest(request) {
  const url = new URL(request.url)
  const downloadUrl = url.searchParams.get('url')
  
  if (!downloadUrl) {
    return new Response('请提供文件下载链接。', { status: 400 })
  }
  
  const response = await fetch(downloadUrl)
  const modifiedHeaders = new Headers(response.headers)
  modifiedHeaders.set('Content-Disposition', `attachment; filename=${getFileName(downloadUrl)}`)
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: modifiedHeaders
  })
}

function getFileName(url) {
  const urlObj = new URL(url)
  const pathname = urlObj.pathname
  return pathname.substring(pathname.lastIndexOf('/') + 1)
}
