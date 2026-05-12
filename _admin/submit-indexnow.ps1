$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)

$site = "https://musclelove-777.github.io/ai-tenshoku-compass/"
$key = (Get-Content -Encoding UTF8 -Raw ".\indexnow-key.txt").Trim()
$urls = @(
  "https://musclelove-777.github.io/ai-tenshoku-compass/",
  "https://musclelove-777.github.io/ai-tenshoku-compass/articles/ai-tenshoku-agent-comparison.html",
  "https://musclelove-777.github.io/ai-tenshoku-compass/articles/ai-career-roadmap.html",
  "https://musclelove-777.github.io/ai-tenshoku-compass/articles/generative-ai-side-hustle.html"
)

$payload = @{
  host = "musclelove-777.github.io"
  key = $key
  keyLocation = "$site" + "indexnow-key.txt"
  urlList = $urls
} | ConvertTo-Json -Depth 4

$tmp = New-TemporaryFile
try {
  Set-Content -Encoding UTF8 -LiteralPath $tmp.FullName -Value $payload
  $status = & curl.exe `
    -sS `
    -o NUL `
    -w "%{http_code}" `
    -X POST "https://api.indexnow.org/indexnow" `
    -H "Content-Type: application/json; charset=utf-8" `
    --data-binary "@$($tmp.FullName)"

  [pscustomobject]@{
    status = [int]$status
    submitted = $urls.Count
    keyLocation = "$site" + "indexnow-key.txt"
  }
}
finally {
  Remove-Item -LiteralPath $tmp.FullName -Force -ErrorAction SilentlyContinue
}
