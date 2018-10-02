#!/usr/bin/env bash
#
# Deployment to igem.org

import sys 
import requests
from collections import namedtuple

username = sys.argv[1]
password = sys.argv[2]

EditTokens = namedtuple("EditTokens", "wpStarttime wpEdittime wpEditToken wpAutoSummary")
SessionTokens = namedtuple("SessionTokens", "session username igem_orgUserID igem_orgUserName igem_orgToken igem_org_session igem_orgLoggedOut")

host = "http://2018.igem.org"
edit_page_format = "{host}/wiki/index.php?title={:s}&action=edit"


def form_edit_page(category):
    root = "Team:Vilnius-Lithuania"
    if category != "Home.html":
        cut = category.rpartition('.')[0]
        return "{root}/{cut}"
    return root


def igemorg_login():
    http_session = requests.Session()
    credentials = {'Login': 'Login', 'username': "{username}", 'password': "{password}"}
    response = http_session.post("https://igem.org/Login2", data=credentials)
    cookies = http_session.cookies.get_dict()
    return SessionTokens(
        session = cookies['session'],
        username = cookies['username'],
        igem_orgUserID = cookies['igem_orgUserID'],
        igem_orgUserName = cookies['igem_orgUserName'],
        igem_orgToken = cookies['igem_orgToken'],
        igem_org_session = cookies['igem_org_session'],
        igem_orgLoggedOut = cookies['igem_orgLoggedOut']
    )


def get_edit_tokens(category, session):
    response = requests.get(edit_page_format.format(category))

    return EditTokens(
        wpStarttime=0,
        wpEdittime=0,
        wpEditToken=0,
        wpAutoSummary=0
    )


assets = [f for f in os.listdir("categories/") if isfile(join("categories/", f))]
for i, asset in enumerate(assets):



categories = [f for f in os.listdir("categories/") if isfile(join("categories/", f))]
for i, category in enumerate(categories):
