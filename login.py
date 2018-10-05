#!/usr/bin/env python

import requests
from collections import namedtuple

usr = 'devblok'
psw = 'Xta-oZw-zQq-ye3'

SessionTokens = namedtuple("SessionTokens", "session username igem_orgUserID igem_orgUserName igem_orgToken igem_org_session igem_orgLoggedOut")

def igemorg_login(username, password):
    http_session = requests.Session()
    credentials = {
        'Login': 'Login', 
        'username': username, 
        'password': password,
        'Cookie': 'username=devblok; igem_orgUserName=Devblok; igem_org_session=ss51mr4ebtev33u5tg3fpukun4; igem_orgLoggedOut=1538597828'
    }
    response = http_session.post(
        "https://igem.org/Login2", 
        data=credentials
    )
    http_session.get('http://2018.igem.org/Team:Vilnius-Lithuania')
    print(response.text)
    cookies = http_session.cookies.get_dict()
    return SessionTokens(
        session = cookies.get('session', 'empty'),
        username = cookies.get('username', 'empty'),
        igem_orgUserID = cookies.get('igem_orgUserID', 'empty'),
        igem_orgUserName = cookies.get('igem_orgUserName', 'empty'),
        igem_orgToken = cookies.get('igem_orgToken', 'empty'),
        igem_org_session = cookies.get('igem_org_session', 'empty'),
        igem_orgLoggedOut = cookies.get('igem_orgLoggedOut', 'empty')
    )

print(igemorg_login(usr, psw))