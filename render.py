#!/usr/bin/env python

from jinja2 import Template
from jinja2 import Environment
from jinja2 import FileSystemLoader

loader = FileSystemLoader(["./categories", "./templates"])
environment = Environment(loader=loader)
template = environment.get_template("Home.html.j2")

print(template.render())