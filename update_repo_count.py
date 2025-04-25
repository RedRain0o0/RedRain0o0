import urllib.request
import json

with urllib.request.urlopen('https://api.github.com/users/redrain0o0') as api:
    apireq = json.load(api)


with open('README.md','r') as f:
  content = f.readlines()


content[8] = "@          @:          :@          @  |  Repos: " + str(apireq["public_repos"]) + "\n"

with open('README.md','w') as f:
  f.writelines(content)
