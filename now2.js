Show dbs
use kirtikaKart
show collections

db.items.find({price: 22000})

// Deleting items from the Mongo Database
db.items.deleteOne({price: 22000})
// deleteOne will delete the matching document entry and will delete the first entry in case of multi document match

db.items.deleteMany({price: 29000})