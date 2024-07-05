const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

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
 *           description: El ID auto-generado del carrito
 *         products:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 description: El ID del producto
 *               quantity:
 *                 type: number
 *                 description: La cantidad del producto
 *       example:
 *         id: d5fE_asz
 *         products:
 *           - productId: 123
 *             quantity: 2
 */

/**
 * @swagger
 * tags:
 *   name: Carritos
 *   description: API para la gestión de carritos
 */

/**
 * @swagger
 * /api/carts:
 *   get:
 *     summary: Retorna la lista de todos los carritos
 *     tags: [Carritos]
 *     responses:
 *       200:
 *         description: La lista de los carritos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cart'
 */
router.get('/', cartController.getAllCarts);

/**
 * @swagger
 * /api/carts/{id}:
 *   get:
 *     summary: Obtiene el carrito por ID
 *     tags: [Carritos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del carrito
 *     responses:
 *       200:
 *         description: La descripción del carrito por ID
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       404:
 *         description: El carrito no fue encontrado
 */
router.get('/:id', cartController.getCartById);

/**
 * @swagger
 * /api/carts:
 *   post:
 *     summary: Crea un nuevo carrito
 *     tags: [Carritos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cart'
 *     responses:
 *       200:
 *         description: El carrito fue creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       500:
 *         description: Algún error del servidor
 */
router.post('/', cartController.createCart);

/**
 * @swagger
 * /api/carts/{id}:
 *   put:
 *     summary: Actualiza el carrito por ID
 *     tags: [Carritos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del carrito
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cart'
 *     responses:
 *       200:
 *         description: El carrito fue actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       404:
 *         description: El carrito no fue encontrado
 *       500:
 *         description: Algún error del servidor
 */
router.put('/:id', cartController.updateCart);

/**
 * @swagger
 * /api/carts/{id}:
 *   delete:
 *     summary: Elimina el carrito por ID
 *     tags: [Carritos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del carrito
 *     responses:
 *       200:
 *         description: El carrito fue eliminado exitosamente
 *       404:
 *         description: El carrito no fue encontrado
 *       500:
 *         description: Algún error del servidor
 */
router.delete('/:id', cartController.deleteCart);

/**
 * @swagger
 * /api/carts/{id}/purchase:
 *   post:
 *     summary: Finaliza la compra del carrito
 *     tags: [Carritos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del carrito
 *     responses:
 *       200:
 *         description: La compra fue realizada exitosamente
 *       404:
 *         description: El carrito no fue encontrado
 *       500:
 *         description: Algún error del servidor
 */
router.post('/:id/purchase', cartController.purchaseCart);

module.exports = router;

