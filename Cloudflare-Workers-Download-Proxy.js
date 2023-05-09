addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const downloadUrl = url.searchParams.get('url')
  
  // 检查是否提供了文件下载链接
  if (!downloadUrl) {
    return new Response('请提供文件下载链接。', {status: 400})
  }
  
  // 使用fetch API下载文件
  const response = await fetch(downloadUrl)
  
  // 将响应头中的Content-Disposition字段替换为inline
  const modifiedHeaders = new Headers(response.headers)
  modifiedHeaders.set('Content-Disposition', 'inline')
  
  // 返回响应
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: modifiedHeaders
  })
}
