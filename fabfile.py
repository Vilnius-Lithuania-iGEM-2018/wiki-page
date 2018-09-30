#!/usr/bin/env python3

import sys
from fabric import task
from fabric import Connection
from shutil import rmtree
from shutil import copyfile
from os import listdir
from os import mkdir
from os.path import isfile, join
from jinja2 import Template
from jinja2 import Environment
from jinja2 import FileSystemLoader

file_prefix = "T--Vilnius-Lithuania--"
categories_path = "./categories"
files_path = "files/"
sass_path = "files/css/"
files_base_url = "http://2018.igem.org/wiki/images/7/74/T--Vilnius-Lithuania--Cover.jpg"
pages_base_url = "http://2018.igem.org/Team:Vilnius-Lithuania"
build_dir = "build/"

file_index = {} # Contains all proper links for files


############ Fabric tasks

@task
def ssh_copy_files(ctx):
    connection = Connection(host="wiki.devblok.me", user="root")
    asset_files = [f for f in listdir(files_path) if isfile(join(files_path, f))]
    with connection.cd("/usr/share/nginx/html/"):
        for i, asset in enumerate(asset_files):
            file_index[asset] = "http://wiki.devblok.me/" + files_path + asset
            connection.put(files_path + asset, files_path + asset)
    print(file_index)

@task
def render(ctx):
    template_files = [f for f in listdir(categories_path) if isfile(join(categories_path, f))]

    try:
        mkdir(build_dir)
    except OSError:
        rmtree(build_dir)
        mkdir(build_dir)

    copy_files() # Modifies file_index
    render_all(template_files) # Uses file_index


# This deployment method is for 
#@task
#def deployAPI(ctx):
#    template_files = [f for f in listdir(categories_path) if isfile(join(categories_path, f))]
#    return


############ Render and build tools


# Uploads to igem org and collects links
def upload_files():
    file_index = {}


def load_template(template):
    loader = FileSystemLoader(["./categories", "./templates"])
    environment = Environment(loader=loader)
    return environment.get_template("Home.html.j2")


############ igem.org "API"

def edit_page(content):
    # Need to retrieve from edit request:
    # submit form data
    return

