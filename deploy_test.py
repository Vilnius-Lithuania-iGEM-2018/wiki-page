#!/usr/bin/env python3
#
# Deployment to test server
# File serving with nginx, standard path for files /usr/share/nginx/html

import sys
import os
from subprocess import call
from os.path import isfile, join
from fabric import Connection

build_path = os.getenv('BUILD_PATH', "build/")
assets_path = os.getenv('ASSETS_PATH', "files/")

remote_path = "/usr/share/nginx/html/"

try:
    host = sys.argv[1]
except:
    print("You need to specify a target host")
    sys.exit(1)

c = Connection(host, user="root")
asset_files = [f for f in os.listdir(build_path + assets_path) if isfile(join(build_path + assets_path, f))]
index = {}

print("Uploading assets...")
for i, asset in enumerate(asset_files):
    print(asset)
    index[asset] = "http://" + host + "/" + assets_path + asset
    c.put(build_path + assets_path + asset, remote_path + assets_path + asset)
with open("file_index.dict", "w") as f:
    f.write(str(index))

call(["./build.py"])

print("Uploading categories...")
categories = [f for f in os.listdir(build_path) if isfile(join(build_path, f))]
for i, category in enumerate(categories):
    if category == "Home.html":
        print(category + "as index.html")
        c.put(build_path + category, remote_path + "index.html")
    else:
        print(category)
        #folder = category.rpartition('.')[0] + "/"
        #c.cd(remote_path)
        #c.run("mkdir " + folder)
        #c.put(build_path + category, remote_path + folder + "index.html")
        c.put(build_path + category, remote_path + category)