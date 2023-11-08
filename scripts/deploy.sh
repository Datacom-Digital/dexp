#! /bin/bash
set -e

if [[ "$OSTYPE" == "msys" ]] 
then
echo "vercel build requires unix shell (eg wsl2)"
exit 1
fi

if [[ -n $ENVIRONMENT ]]
then
ENV_FLAG=--environment=$ENVIRONMENT
else
ENV_FLAG=--environment=Developement
fi

if [[ $ENVIRONMENT == "production" ]]
then
PROD_FLAG=--prod
else
PROD_FLAG=
fi

if [[ -n $VERCEL_API_TOKEN ]]
then
TOKEN_FLAG=--token=$VERCEL_API_TOKEN
else
TOKEN_FLAG=
fi

if [[ -n $VERCEL_SCOPE ]]
then
SCOPE_FLAG=--token=$VERCEL_API_TOKEN
else
SCOPE_FLAG=
fi

npx vercel pull --yes --environment=$ENVIRONMENT $SCOPE_FLAG $TOKEN_FLAG
npx vercel build $PROD_FLAG $SCOPE_FLAG $TOKEN_FLAG
npx vercel deploy --prebuilt $SCOPE_FLAG $TOKEN_FLAG
