from sqlalchemy import create_engine

from sqlalchemy.ext.declarative import declarative_base

import pandas as pd

engine = create_engine("sqlite:///happiness_comparisons.sqlite")

pet_table = pd.read_json('Raw Data Files/pet_data.json')

pet_table.to_sql('pets', engine)

income_table = pd.read_csv('Raw Data Files/IncomeData.csv')


states_table = pd.read_csv('Raw Data Files/states.csv')

states_table.to_sql('states',engine)

income_table.to_sql('income',engine)

