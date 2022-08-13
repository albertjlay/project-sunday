from flask import Flask
import csv

app = Flask(__name__)



@app.route("/stocks/<id>", methods=["GET"])
def get_stock(id):
    with open("../data/" + id + ".csv", mode="r") as csv_file:
        reader = csv.reader(csv_file)
        res = ""
        for row in reader:
            res += str(row) + "\n"
        return res