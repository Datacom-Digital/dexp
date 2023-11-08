#! /bin/bash

if [[ "$OSTYPE" == "msys" ]] 
then
echo "vercel and turso require a unix shell (eg wsl2)"
exit 1
fi

SCOPE=datacom-digital
EMAIL_FROM=no-reply@dexp.nz

read -p "Project name: " PROJECT_NAME
read -p "Domain: " DOMAIN
read -p "Master email: " MASTER_EMAIL
read -p "Uploadthing secret: " UPLOADTHING_SECRET
read -p "Uploadthing app id: " UPLOADTHING_APP_ID

npx vercel project add $PROJECT_NAME --scope=$SCOPE
npx vercel link -p $PROJECT_NAME --scope=$SCOPE --yes

if ! command -v turso &> /dev/null
then
curl -sSfL https://get.tur.so/install.sh | bash
fi
turso auth login

DEV_DB_NAME="$PROJECT_NAME-dev"
turso db create $DEV_DB_NAME
turso db show $DEV_DB_NAME --url | npx vercel env add TURSO_URL preview
turso db tokens create $DEV_DB_NAME | npx vercel env add TURSO_TOKEN preview

PROD_DB_NAME="$PROJECT_NAME-prod"
turso db create $PROD_DB_NAME
turso db show $PROD_DB_NAME --url | npx vercel env add TURSO_URL production
turso db tokens create $PROD_DB_NAME | npx vercel env add TURSO_TOKEN production

openssl rand -hex 32 | npx vercel env add AUTH_SECRET development
openssl rand -hex 32 | npx vercel env add AUTH_SECRET preview
openssl rand -hex 32 | npx vercel env add AUTH_SECRET production

echo "$DOMAIN" | npx vercel env add DOMAIN production

echo "$MASTER_EMAIL" | npx vercel env add MASTER_EMAIL development
echo "$MASTER_EMAIL" | npx vercel env add MASTER_EMAIL preview
echo "$MASTER_EMAIL" | npx vercel env add MASTER_EMAIL production

echo "$EMAIL_FROM" | npx vercel env add EMAIL_FROM development
echo "$EMAIL_FROM" | npx vercel env add EMAIL_FROM preview
echo "$EMAIL_FROM" | npx vercel env add EMAIL_FROM production


echo "$UPLOADTHING_SECRET" | npx vercel env add UPLOADTHING_SECRET development
echo "$UPLOADTHING_SECRET" | npx vercel env add UPLOADTHING_SECRET preview
echo "$UPLOADTHING_SECRET" | npx vercel env add UPLOADTHING_SECRET production

echo "$UPLOADTHING_APP_ID" | npx vercel env add UPLOADTHING_APP_ID development
echo "$UPLOADTHING_APP_ID" | npx vercel env add UPLOADTHING_APP_ID preview
echo "$UPLOADTHING_APP_ID" | npx vercel env add UPLOADTHING_APP_ID production


npx vercel pull .env.local
