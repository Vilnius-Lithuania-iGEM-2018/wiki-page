from fabric import task
from shutil import rmtree
from os import listdir
from os import mkdir
from os.path import isfile, join
from jinja2 import Template
from jinja2 import Environment
from jinja2 import FileSystemLoader

file_prefix = "T--Vilnius-Lithuania--"
categories_path = "./categories"
files_base_url = "http://2018.igem.org/wiki/images/7/74/T--Vilnius-Lithuania--Cover.jpg"
pages_base_url = "http://2018.igem.org/Team:Vilnius-Lithuania"

@task
def render(ctx):
    build_dir = "build"
    template_files = [f for f in listdir(categories_path) if isfile(join(categories_path, f))]

    try:
        mkdir(build_dir)
    except OSError:
        rmtree(build_dir)
        mkdir(build_dir)

    for i, filename in enumerate(template_files):
        template = load_template(filename)
        with open(build_dir + '/' + filename.rpartition('.')[0], "wb") as f:
            page = template.render()
            f.write(page.encode("utf-8"))

    print(ctx.host)


# This deployment method is for 
@task
def deployAPI(ctx):
    template_files = [f for f in listdir(categories_path) if isfile(join(categories_path, f))]
    print(template_files)

    template = load_template("Home.html.j2")

    print(template.render(baseurl=pages_base_url, files_baseurl=files_base_url))
    return

def load_template(template):
    loader = FileSystemLoader(["./categories", "./templates"])
    environment = Environment(loader=loader)
    return environment.get_template("Home.html.j2")

# Upload tools
def edit_page(content):
    # Need to retrieve from edit request:
    # submit form data
    return