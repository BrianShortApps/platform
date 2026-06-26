$ErrorActionPreference = "Stop"

$PlatformRoot = (Resolve-Path (Join-Path $PSScriptRoot "..\..")).Path

$DocsRoot = Join-Path $PlatformRoot "docs"
$StandardsRoot = Join-Path $PlatformRoot "standards"
$TargetStandards = Join-Path $DocsRoot "standards"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host " Brian Short Apps - Documentation Sync" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Platform Root:"
Write-Host "  $PlatformRoot"
Write-Host ""

if (!(Test-Path $StandardsRoot)) {
    throw "Standards folder not found: $StandardsRoot"
}

if (Test-Path $TargetStandards) {
    Remove-Item $TargetStandards -Recurse -Force
}

Copy-Item `
    -Path $StandardsRoot `
    -Destination $TargetStandards `
    -Recurse `
    -Force

Write-Host ""
Write-Host "[OK] Standards synchronized successfully." -ForegroundColor Green
Write-Host ""