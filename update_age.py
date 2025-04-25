import json

with open('readme.json') as f:
  var_dic = json.load(f)

with open('README.md','r') as f:
  content = f.read()

#var_dic.update(age=(var_dic.get(age)+1))
#var_dic["age"] + 1

jsoncontent = '{"age": ' + var_dic["age"] + '}'

with open('readme.json','w') as f:
  f.write(var_dic)

with open('README.md','w') as f:
  f.write(content)
