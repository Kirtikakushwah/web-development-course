// Inserting data in mongo db

use kirtikaKart
db.items.insertOne({name: "Nokia 5", price: 22000, rating: 4.5,qyt: 233, sold: 98})



db.items.insertMany([{name: "Nokia 5", price: 22000, rating: 4.5, qyt: 233, sold: 98},{name: "Moto 5", price: 29000, rating: 3.5, qyt: 233, sold: 105},{name: "Samsung 30s", price: 300000, rating: 2.5, qyt: 433, sold: 423, isBig: true}])





