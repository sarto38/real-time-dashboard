# Define the paths
$componentDir = "src/app"
$oldComponentName = "navigation-pane"
$newComponentName = "toolbar"

# Rename component files
Rename-Item "$componentDir\$oldComponentName\$oldComponentName.component.ts" "$componentDir\$oldComponentName\$newComponentName.component.ts"
Rename-Item "$componentDir\$oldComponentName\$oldComponentName.component.html" "$componentDir\$oldComponentName\$newComponentName.component.html"
Rename-Item "$componentDir\$oldComponentName\$oldComponentName.component.css" "$componentDir\$oldComponentName\$newComponentName.component.css"

# Update component class name and selector in the TypeScript file
(Get-Content "$componentDir\$oldComponentName\$newComponentName.component.ts") -replace $oldComponentName, $newComponentName | Set-Content "$componentDir\$oldComponentName\$newComponentName.component.ts"
(Get-Content "$componentDir\$oldComponentName\$newComponentName.component.html") -replace $oldComponentName, $newComponentName | Set-Content "$componentDir\$oldComponentName\$newComponentName.component.html"
(Get-Content "$componentDir\$oldComponentName\$newComponentName.component.css") -replace $oldComponentName, $newComponentName | Set-Content "$componentDir\$oldComponentName\$newComponentName.component.css"

# Update references in app.component.ts
(Get-Content "$componentDir\app.component.ts") -replace $oldComponentName, $newComponentName | Set-Content "$componentDir\app.component.ts"

# Update references in app.component.html
(Get-Content "$componentDir\app.component.html") -replace $oldComponentName, $newComponentName | Set-Content "$componentDir\app.component.html"

# Update references in sidenav.component.html
(Get-Content "$componentDir\sidenav\sidenav.component.html") -replace $oldComponentName, $newComponentName | Set-Content "$componentDir\sidenav\sidenav.component.html"

Write-Output "Renaming completed successfully."