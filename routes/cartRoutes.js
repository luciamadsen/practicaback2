const express = require('express');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Cart:
 *       type: object
 *       required:
 *         - products
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the cart
 *         products:
 *           type: array
 *           items:
 *             type: string
 *             description: The products in the cart
 *       example:
 *         id: d5fE_asz
 *         products: ['productId1', 'productId2']
 */

/**
 * @swagger
 * /api/carts:
 *   get:
 *     summary: Returns the list of all the carts
 *     tags: [Carts]
 *     responses:
 *       200:
 *         description: The list of the carts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cart'
 */

router.get('/', (req, res) => {
    // Get all carts
});

/**
 * @swagger
 * /api/carts/{id}:
 *   get:
 *     summary: Get the cart by id
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The cart id
 *     responses:
 *       200:
 *         description: The cart description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       404:
 *         description: The cart was not found
 */

router.get('/:id', (req, res) => {
    // Get cart by id
});

/**
 * @swagger
 * /api/carts:
 *   post:
 *     summary: Create a new cart
 *     tags: [Carts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cart'
 *     responses:
 *       200:
 *         description: The cart was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       500:
 *         description: Some server error
 */

router.post('/', (req, res) => {
});

module.exports = router;
