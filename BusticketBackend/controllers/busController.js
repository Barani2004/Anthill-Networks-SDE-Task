const Bus = require('../models/Bus');

const getBuses = async (req, res) => {
    try {
        const buses = await Bus.find().populate('route');
        res.json(buses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addBus = async (req, res) => {
    try {
        // Check if bus number already exists
        const existingBus = await Bus.findOne({ number: req.body.number });
        if (existingBus) {
            return res.status(400).json({ error: "Bus with this number already exists" });
        }

        // Create new bus
        const bus = await Bus.create(req.body);
        res.status(201).json({ message: 'Bus added successfully', bus });
    } catch (error) {
        console.error("Error adding bus:", error.message);
        res.status(400).json({ error: error.message });
    }
};



const updateBus = async (req, res) => {
    try {
        const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!bus) return res.status(404).json({ error: 'Bus not found' });
        res.json({ message: 'Bus updated successfully', bus });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteBus = async (req, res) => {
    try {
        const bus = await Bus.findByIdAndDelete(req.params.id);
        if (!bus) return res.status(404).json({ error: 'Bus not found' });
        res.json({ message: 'Bus deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getBuses, addBus, updateBus, deleteBus };
