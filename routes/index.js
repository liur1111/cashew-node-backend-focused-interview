const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client');

const prismaClient = new PrismaClient();

router.get('/', function (req, res, next) {
    res.send('Hello world!');
});

router.get('/example', function (req, res, next) {
    console.log('query:', req.query, req.query.foo);
    res.send('GET example');
});

router.post('/example', function (req, res, next) {
    console.log('body:', req.body, req.body.foo);
    res.send('POST example');
});

router.get('/drivers', async function (req, res, next) {
    // Prisma
    // const drivers = await prismaClient.driver.findMany();

    // Raw SQL
    const drivers = await prismaClient.$queryRawUnsafe('SELECT * FROM driver');
    res.send(JSON.stringify(drivers));
});

router.post('/drivers', async function (req, res, next) {
    // Prisma
    // const driver = await prismaClient.driver.create({data: {name: req.body.name}});

    // Raw SQL
    const driver = await prismaClient.$executeRawUnsafe('INSERT INTO driver (name) VALUES ($1)', req.body.name);
    res.send(JSON.stringify(driver));
});


module.exports = router;
