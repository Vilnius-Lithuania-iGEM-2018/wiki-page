#!/usr/bin/env python3
#
# Renders all templates into the build folder,
# builds sass and copies all assets into build.
# For local use, do not use the baseurl option
#
# Usage: ./build.py [baseurl]
# baseurl   - Optional parameter for assets, if not specified
#             creates links for local use

import os
from os.path import isfile, join
from shutil import copyfile, rmtree
from jinja2 import Template, Environment, FileSystemLoader

build_path = os.getenv('BUILD_PATH', "build/")
assets_path = os.getenv('ASSETS_PATH', "files/")
sass_assets_path = os.getenv('SASS_ASSETS_PATH', "files/css/")

# This mechanism is for asset links in templates.
# eval is safe since this file is our own.
# I'd reccomend to commit this file, to always have a build
def read_file_index_or_make_local_links():
    index = {}
    try:
        index = eval(open('file_index.dict', 'r').read())
    except OSError:
        print("Info: file_index.dict cannot open, building local file index")
        index = make_file_index()
    except:
        print("Something is wrong with file_index.dict. Exiting")
        raise
    return index


def copy_files():
    os.mkdir(build_path + assets_path)
    asset_files = [f for f in os.listdir(assets_path) if isfile(join(assets_path, f))]
    for i, asset in enumerate(asset_files):
        copyfile(assets_path + asset, build_path + assets_path + asset)

def make_file_index():
    index = {}
    asset_files = [f for f in os.listdir(assets_path) if isfile(join(assets_path, f))]
    for i, asset in enumerate(asset_files):
        index[asset] = assets_path + asset
    return index


def make_link(asset):
    return file_index.get(asset)


def render_all(templates):
    for i, filename in enumerate(templates):
        template = load_template(filename)
        with open(build_path + filename.rpartition('.')[0], "wb") as f:
            page = template.render(asset=make_link)
            f.write(page.encode("utf-8"))


def load_template(template):
    loader = FileSystemLoader(["./categories", "./templates"])
    environment = Environment(loader=loader)
    return environment.get_template("Home.html.j2")

    
# Build procedure
file_index = read_file_index_or_make_local_links()
template_files = [f for f in os.listdir("categories/") if isfile(join("categories/", f))]
try:
    os.mkdir(build_path)
except OSError:
    rmtree(build_path)
    os.mkdir(build_path)

copy_files() # Modifies file_index
render_all(template_files) # Uses file_index