show dbs 
use kirtikaKart
show collections

db.anotherCollection.insertOne({a: 89})
use newDb

db.items.find()
db.items.updateOne({name: "Samsung 30s"},{$set: {price: 2}})
db.items.find()
db.items.updateMany({name: "samsung 30s"}, {$set: {price: 3, rating: 1}})