import json

with open('readme.json') as f:
  var_dic = json.load(f)

with open('README.md','r') as f:
  content = f.readlines()

var_dic["age"] += 1

jsoncontent = '{"age": ' + str(var_dic["age"]) + '}'

content[5] = "@          @.O$@@@@@@$O.@          @  |  Uptime: " + str(var_dic["age"]) + " years\n"

with open('readme.json','w') as f:
  f.write(jsoncontent)

with open('README.md','w') as f:
  f.writelines(content)
