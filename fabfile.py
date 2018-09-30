from fabric import task
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


def copy_files():
    mkdir(build_dir + files_path)
    asset_files = [f for f in listdir(files_path) if isfile(join(files_path, f))]
    for i, asset in enumerate(asset_files):
        file_index[asset] = files_path + asset
        copyfile(files_path + asset, build_dir + files_path + asset)


def render_all(templates):
    for i, filename in enumerate(templates):
        template = load_template(filename)
        with open(build_dir + filename.rpartition('.')[0], "wb") as f:
            page = template.render(asset=make_link)
            f.write(page.encode("utf-8"))


def load_template(template):
    loader = FileSystemLoader(["./categories", "./templates"])
    environment = Environment(loader=loader)
    return environment.get_template("Home.html.j2")


############ igem.org "API"

def edit_page(content):
    # Need to retrieve from edit request:
    # submit form data
    return


############ Template function injections

def make_link(asset):
    return file_index.get(asset)
