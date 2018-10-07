#!/bin/bash
cd "$(dirname "$0")"
scp -r build/files root@wiki.devblok.me:/usr/share/nginx/html
scp -r build/Home.html root@wiki.devblok.me:/usr/share/nginx/html
ssh root@wiki.devblok.me
cd /usr/share/nginx/html
rm -f index.html
mv Home.html index.html
