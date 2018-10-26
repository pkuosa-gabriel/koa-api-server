#! /bin/sh

export NOW_SUBDOMAIN=koa-api-server

NOW_DEPLOY_ID=$( now --token $NOW_TOKEN )
now alias $NOW_DEPLOY_ID --token $NOW_TOKEN
now rm $NOW_SUBDOMAIN --safe --yes --token $NOW_TOKEN