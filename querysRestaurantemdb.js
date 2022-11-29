use("restaurante");
db.restaurante.find();
db.restaurante.find({}, { restauranteId: 1, name: 1, borough: 1, cuisine: 1 });
db.restaurante.find({},{ restauranteId: 1, name: 1, borough: 1, cuisine: 1, _id: 0 });
db.restaurante.find({},{restauranteId: 1, name: 1, borough: 1, cuisine: 1, address: { zipcode: 1 },_id: 0});
db.restaurante.find({}, { borough: 'Bronx' });
db.restaurante.find({}, { borough: 'Bronx' }).limit(5);
db.restaurante.find({}, { borough: 'Bronx' }).skip(5).limit(5);
db.restaurante.find({grades:{$elemMatch:{score: {$gt: 90}}}});
db.restaurante.find({grades: {score:{$elemMatch: {$gt: 80,$lt:100}}}});
db.restaurante.find({address:{coord: {$lt: -95.754168}}});  

db.restaurante.find({{cuisine: {$ne: "American "}}, grades.score: {$gt: 70}}, address.coord: {$lt : -65.754168} );
db.restaurante.find({name: {$regex: /^Wil/}}, {restaurant_id: 1, name: 1, cuisine: 1});
db.restaurante.find({name: {$regex: /ces$/}}, {restaurant_id: 1, name: 1, cuisine: 1});

db.restaurante.find({name: {$regex: /Reg/i}}, {restaurant_id: 1, name: 1, cuisine: 1});
db.restaurante.find({borough: "Bronx" , $or: [{cuisine: "American "}, {cuisine: "Chinese"}]}); 
db.restaurante.find({borough: {$in: ["Staten Island","Queens","Bronx","Brooklyn"]}}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurante.find({borough :{$nin :["Staten Island","Queens","Bronx","Brooklyn"]}}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurante.find({address:{coord: {$gt : 42, $lt : 52}}}, {restaurant_id: 1, name: 1, address: 1});
db.restaurante.find().sort({name: 1});
db.restaurante.find().sort({name: -1});
db.restaurante.find().sort({cuisine: 1, borough: -1});
db.restaurante.find({address:{street: {$ne: null}}});


