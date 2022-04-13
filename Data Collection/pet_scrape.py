from unicodedata import numeric
from urllib import request
from bs4 import BeautifulSoup as bs
import requests, json

url = 'https://www.pawlicy.com/blog/us-pet-ownership-statistics/'

page = requests.get(url).text

soup = bs(page,'html.parser')

list_items = soup.find_all('li')
file = open('../Resources/states_titlecase.json')
states = json.load(file)
file.close()
for state in states:
    print(state['abbreviation'])
    for li in list_items:       
        if '%' in li.text:
            if state['name'] in li.text:
                if 'pet' in li.text:
                    temp = li.text.split("%")[0].split(' ')[-1]
                    print(temp)
                    if temp.isnumeric() :
                        if float(temp)<100:
                            states[states.index(state)]['pet ownership'] = temp
                if 'dog' in li.text:
                    temp = li.text.split("%")[0].split(' ')[-1]
                    if temp.isnumeric() :
                        if float(temp)<100:
                            states[states.index(state)]['dog ownership'] = temp
                if 'cat' in li.text:
                    temp = li.text.split("%")[0].split(' ')[-1]
                    if temp.isnumeric() :
                        if float(temp)<100:
                            states[states.index(state)]['cat ownership'] = temp

with open('pet_data.json','w') as f:
    json.dump(states, f)

