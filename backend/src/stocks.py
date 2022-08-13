from flask import Flask
import csv

app = Flask(__name__)

@app.route("/stocks/<id>", methods=["GET"])
def get_stock(id):
    with open("../data/" + id + ".csv", mode="r") as csv_file:
        reader = csv.DictReader(csv_file)
        price = dict()
        for row in reader:
            price[row['Date']] = {k:v for (k,v) in row.items() if k != 'Date'}
        return {
            'id': id, 
            'price': price,
        }