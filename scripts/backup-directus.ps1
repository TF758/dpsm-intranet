$BackupDir = ".\backup"

New-Item -ItemType Directory -Force -Path $BackupDir | Out-Null

Write-Host "Backing up uploads..."
docker cp dpsm-directus:/directus/uploads "$BackupDir/uploads"

Write-Host "Backing up schema..."
docker exec dpsm-directus npx directus schema snapshot /directus/schema.yaml
docker cp dpsm-directus:/directus/schema.yaml "$BackupDir/schema.yaml"

Write-Host "Backing up database..."
docker exec dpsm-postgres pg_dump -U dpsm -d dpsm -Fc -f /tmp/dpsm.dump
docker cp dpsm-postgres:/tmp/dpsm.dump "$BackupDir/dpsm.dump"

Write-Host ""
Write-Host "Backup complete."
Write-Host "Copy the entire backup folder somewhere safe."