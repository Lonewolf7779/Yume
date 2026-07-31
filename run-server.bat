@echo off
title Yume Web Application Server
echo Starting Yume server on http://localhost:3000 ...
set PORT=3000
set PATH=C:\Users\SantoshPrajapati-Tec\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;%PATH%
cd /d "%~dp0server"
node src/server.js
pause
