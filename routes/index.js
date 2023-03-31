const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client');
const prismaClient = new PrismaClient();

router.get('/', function (req, res) {
    res.send('Hello world!');
});

/**
 * Get all addresses
 */
router.get('/addresses', async function (req, res) {
    const addresses = await prismaClient.$queryRawUnsafe('SELECT * FROM address');
    res.send(JSON.stringify(addresses));
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
 * Delete an address
 */
router.delete('/addresses/:id', async function (req, res) {
    const {id} = req.params;
    const count = await prismaClient.$executeRawUnsafe('DELETE FROM address WHERE id = $1::INT', id);
    res.send(JSON.stringify(count));
});

/**
 * Get all packages
 */
router.get('/packages', async function (req, res) {
    const packages = await prismaClient.$queryRawUnsafe('SELECT * FROM package');
    res.send(JSON.stringify(packages));
});

/**
 * Create a package
 */
router.post('/packages', async function (req, res) {
    const {name, weight, addressId} = req.body;
    const count = await prismaClient.$executeRawUnsafe(
        'INSERT INTO package (name, weight, address_id) VALUES ($1, $2, $3)',
        name,
        weight,
        addressId,
    );
    res.send(JSON.stringify(count));
});

/**
 * Delete a package
 */
router.delete('/packages/:id', async function (req, res) {
    const {id} = req.params;
    const count = await prismaClient.$executeRawUnsafe('DELETE FROM package WHERE id = $1::INT', id);
    res.send(JSON.stringify(count));
});

module.exports = router;
