# restore-directus.ps1

$BackupDir = ".\backup"

Write-Host ""
Write-Host "=== Starting Fresh Directus Environment ==="
Write-Host ""

Write-Host "Stopping existing containers..."
docker compose down

Write-Host "Starting fresh containers..."
docker compose up -d

Write-Host "Waiting for Directus to initialize..."
Start-Sleep -Seconds 20

Write-Host "Applying schema..."

docker cp "$BackupDir/schema.yaml" dpsm-directus:/directus/schema.yaml

docker exec dpsm-directus `
npx directus schema apply /directus/schema.yaml --yes

Write-Host "Restoring uploads..."

robocopy "$BackupDir\uploads" ".\uploads" /E

Write-Host "Uploads restored."

Write-Host "Restarting Directus..."

docker compose restart directus

Write-Host ""
Write-Host "========================================"
Write-Host "Migration Complete"
Write-Host "========================================"
Write-Host ""
Write-Host "Open: http://localhost:8055"
Write-Host "Login using the admin credentials in .env"
Write-Host ""
