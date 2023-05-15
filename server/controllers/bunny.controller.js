const Bunny = require('../models/bunny.model')

// Find All Bunnies
module.exports.findAllBunnies = (req, res) => {
    Bunny.find()
        .then(allBunnies => res.json({ bunnies: allBunnies }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Find One Bunny
module.exports.findOneBunny = (req, res) => {
    Bunny.findById(req.params.id) // Since we have findById() method we dont need to put {_id: req.params} b/c it knows i'm loooking for id
        .then(oneBunny => res.json({ bunny: oneBunny }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Create a Bunny
module.exports.createBunny = (req, res) => {
    Bunny.create(req.body)
        .then(newBunny => res.json({ bunny: newBunny }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Update a Bunny
module.exports.updateBunny = (req, res) => {
    // { new: true, runValidators: true } is going to return the new object and also its going to make sure out new values match out validators
    Bunny.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }) 
        .then(updatedBunny => res.json({ bunny: updatedBunny }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Delete a Bunny
module.exports.deleteBunny = (req, res) => {
    Bunny.findByIdAndDelete(req.params.id)
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}