const download = (path, filename = 'file') => {
  const link = document.createElement('a')
  link.href = path // Specify the path to your file here
  link.download = filename // Specify the default filename for downloading
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function useFileDownloader() {
  return download
}
