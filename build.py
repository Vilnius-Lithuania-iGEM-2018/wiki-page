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
import shutil
from os.path import isfile, join, isdir
from shutil import copyfile, rmtree
from subprocess import call
from jinja2 import Template, Environment, FileSystemLoader

build_path = os.getenv('BUILD_PATH', "build/")
assets_path = os.getenv('ASSETS_PATH', "files/")

js_path = os.getenv('ASSETS_PATH', "files/js")
images_path = os.getenv('ASSETS_PATH', "files/images/")
fonts_path = os.getenv('ASSETS_PATH', "files/fonts/")
model_path = os.getenv('ASSETS_PATH', "files/model/")

sass_assets_path = os.getenv('SASS_ASSETS_PATH', "files/css/")

# This mechanism is for asset links in templates.
# BEWARE not to expose this function where you don't mean it
# since it uses eval. Though mostly safe since this file is our own.
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


def build_sass():
    sass_files = [f for f in os.listdir(sass_assets_path) if isfile(join(sass_assets_path, f))]
    for i, sass_file in enumerate(sass_files):
        call([
            'sass', 
            sass_assets_path + sass_file, 
            build_path + assets_path + sass_file.rpartition('.')[0] + ".css"
        ])


def copy_files():
    try:
        os.mkdir(build_path + assets_path)
    except OSError:
        if os.path.isdir(build_path + assets_path):
            shutil.rmtree(build_path + assets_path)
            os.mkdir(build_path + assets_path)
    asset_files = [f for f in os.listdir(assets_path) if isfile(join(assets_path, f))]
    asset_dirs = [f for f in os.listdir(assets_path) if isdir(join(assets_path, f))]
    for i, asset in enumerate(asset_files):
        copyfile(images_path + image, build_path + assets_path + image)
    for i, folder in enumerate(asset_dirs):
        if folder != "css":
            shutil.copytree(assets_path+folder, build_path + assets_path + folder);

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

def readonly_handler(func, path, execinfo): 
    os.chmod(path, 128) #or os.chmod(path, stat.S_IWRITE) from "stat" module
    func(path)       
# Build procedure
file_index = read_file_index_or_make_local_links()
shutil.rmtree('build', onerror=readonly_handler)

while os.path.isdir('build'):
    pass
template_files = [f for f in os.listdir("categories/") if isfile(join("categories/", f))]
try:
    if os.path.exists(build_path):
        shutil.rmtree(build_path, ignore_errors=True)
        os.mkdir(build_path)
except OSError:
    shutil.rmtree(build_path, ignore_errors=True)
    os.mkdir(build_path)

copy_files()
build_sass()
render_all(template_files)