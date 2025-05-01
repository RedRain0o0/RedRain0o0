from datetime import datetime
import urllib.request
import json

with urllib.request.urlopen('https://api.github.com/users/redrain0o0') as api:
    apireq = json.load(api)

with open('README.md','r') as f:
  content = f.readlines()

if datetime.now().strftime("%H:%M,%d:%m") == '00:00,10:07:
  print("Happy birthday!")
  with open('readme.json') as f:
    var_dic = json.load(f)
  var_dic["age"] += 1
  jsoncontent = '{"age": ' + str(var_dic["age"]) + '}'
  content[5] = "@          @.O$@@@@@@$O.@          @  |  Uptime: " + str(var_dic["age"]) + " years\n"

content[8] = "@          @:          :@          @  |  Repos: " + str(apireq["public_repos"]) + "\n"

with open('README.md','w') as f:
  f.writelines(content)
