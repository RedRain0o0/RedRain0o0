import json

with open('readme.json') as f:
  var_dic = json.load(f)

with open('README.md','r') as f:
  content = f.read()

content = content + "test"

with open('README.md','w') as f:
  f.write(content)
