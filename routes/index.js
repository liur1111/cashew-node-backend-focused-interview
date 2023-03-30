const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client');
const prismaClient = new PrismaClient();

router.get('/', function (req, res) {
    res.send('Hello world!');
});

/**
 * Create an address
 */
router.post('/addresses', async function (req, res) {
    const {name, street, city} = req.body;
    const count = await prismaClient.$executeRawUnsafe(
        'INSERT INTO address (name, street, city) VALUES ($1, $2, $3)',
        name,
        street,
        city
    );
    res.send(JSON.stringify(count));
});

/**
 * Get all addresses
 */
router.get('/addresses', async function (req, res) {
    const addresses = await prismaClient.$queryRawUnsafe('SELECT * FROM address');
    res.send(JSON.stringify(addresses));
});

/**
 * Delete an address
 */
router.delete('/addresses/:id', async function (req, res) {
    const {id} = req.params;
    const count = await prismaClient.$executeRawUnsafe('DELETE FROM address WHERE id = $1::INT', id);
    res.send(JSON.stringify(count));
});

/**
 * Create a driver
 */
router.post('/drivers', async function (req, res) {
    const {name} = req.body;
    const count = await prismaClient.$executeRawUnsafe(
        'INSERT INTO driver (name) VALUES ($1)',
        name
    );
    res.send(JSON.stringify(count));
});

/**
 * Get all drivers
 */
router.get('/drivers', async function (req, res) {
    const drivers = await prismaClient.$queryRawUnsafe('SELECT * FROM driver');
    res.send(JSON.stringify(drivers));
});

/**
 * Delete a driver
 */
router.delete('/drivers/:id', async function (req, res) {
    const {id} = req.params;
    const count = await prismaClient.$executeRawUnsafe('DELETE FROM driver WHERE id = $1::INT', id);
    res.send(JSON.stringify(count));
});

/**
 * Create a package
 */
router.post('/packages', async function (req, res) {
    // TODO
});

/**
 * Get all packages
 */
router.get('/packages', async function (req, res) {
    // TODO
});

/**
 * Update a package
 */
router.put('/packages/:id', async function (req, res) {
    // TODO
});


module.exports = router;
