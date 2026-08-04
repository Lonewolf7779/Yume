$env:PORT = "3000"
$env:PATH = "C:\Users\SantoshPrajapati-Tec\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;" + $env:PATH
Set-Location "$PSScriptRoot\server"
Write-Host "Starting Yume server on http://localhost:3000 ..." -ForegroundColor Green
node src/server.js
