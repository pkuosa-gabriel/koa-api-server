#! /bin/sh

export NOW_SUBDOMAIN=koa-api-server

now --token $NOW_TOKEN
now --target production --token $NOW_TOKEN
now rm $NOW_SUBDOMAIN --safe --yes --token $NOW_TOKEN