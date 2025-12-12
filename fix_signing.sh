#!/usr/bin/env bash
set -e

PROJECT_FILE="platforms/ios/Saudi-AcomMed.xcodeproj/project.pbxproj"

echo "Limpando configurações manuais de assinatura..."

# Remove todas as linhas relacionadas à assinatura manual
sed -i '' '/CODE_SIGN_STYLE/d' "$PROJECT_FILE"
sed -i '' '/CODE_SIGN_IDENTITY/d' "$PROJECT_FILE"
sed -i '' '/DEVELOPMENT_TEAM =/d' "$PROJECT_FILE"
sed -i '' '/PROVISIONING_PROFILE /d' "$PROJECT_FILE"
sed -i '' '/PROVISIONING_PROFILE_SPECIFIER/d' "$PROJECT_FILE"

# Força o Xcode a usar assinatura automática
echo "Inserindo DEVELOPMENT_TEAM e CODE_SIGN_STYLE Automatic..."

sed -i '' 's/buildSettings = {/buildSettings = {\nDEVELOPMENT_TEAM = SSADB2592Z;\nCODE_SIGN_STYLE = Automatic;/' "$PROJECT_FILE"

echo "Finalizado."
