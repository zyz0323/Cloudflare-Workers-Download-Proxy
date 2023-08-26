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
      </head>
      <body>
        <h1>文件下载</h1>
        <form action="/download" method="get">
          <label for="url">下载链接：</label>
          <input type="text" id="url" name="url" required>
          <button type="submit">下载</button>
        </form>
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
  modifiedHeaders.set('Content-Disposition', 'inline')
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: modifiedHeaders
  })
}
