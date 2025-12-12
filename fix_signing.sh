#!/usr/bin/env bash

echo "Limpando configurações manuais de assinatura..."

FILES=$(find platforms/ios -name project.pbxproj)

for FILE in $FILES; do
  echo "Limpando: $FILE"
  sed -i "" '/CODE_SIGN_IDENTITY/d' "$FILE"
  sed -i "" '/CODE_SIGN_STYLE/d' "$FILE"
  sed -i "" '/PROVISIONING_PROFILE/d' "$FILE"
  sed -i "" '/PROVISIONING_PROFILE_SPECIFIER/d' "$FILE"
  sed -i "" '/DEVELOPMENT_TEAM =/d' "$FILE"
done

CONFIG_FILES=$(find platforms/ios -name project.xcconfig)

for FILE in $CONFIG_FILES; do
  echo "Limpando: $FILE"
  sed -i "" '/CODE_SIGN_IDENTITY/d' "$FILE"
  sed -i "" '/DEVELOPMENT_TEAM/d' "$FILE"
  sed -i "" '/PROVISIONING_PROFILE/d' "$FILE"
done

echo "ETAPA FINAL: forçando assinatura automática no Xcode PROJETO"
PROJECT_FILE="platforms/ios/Saudi-AcomMed.xcodeproj/project.pbxproj"

if [ -f "$PROJECT_FILE" ]; then
  echo "Inserindo: CODE_SIGN_STYLE = Automatic"
  sed -i "" 's/PRODUCT_BUNDLE_IDENTIFIER = /CODE_SIGN_STYLE = Automatic;\nPRODUCT_BUNDLE_IDENTIFIER = /' "$PROJECT_FILE"
fi

echo "Pronto. Xcode vai assinar automaticamente."
