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
                    states[states.index(state)]['pet ownership'] = li.text.split("%")[0].split(' ')[-1]
                if 'dog' in li.text:
                    states[states.index(state)]['dog ownership'] = li.text.split("%")[0].split(' ')[-1]
                if 'cat' in li.text:
                    states[states.index(state)]['cat ownership'] = li.text.split("%")[0].split(' ')[-1]

with open('pet_data.json','w') as f:
    json.dump(states, f)

