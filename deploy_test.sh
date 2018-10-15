#!/bin/bash
cd "$(dirname "$0")"
scp -r build/* root@wiki.devblok.me:/usr/share/nginx/html
ssh -t root@wiki.devblok.me "cd /usr/share/nginx/html && mv Main.html index.html"
