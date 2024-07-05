const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - stock
 *       properties:
 *         id:
 *           type: string
 *           description: El ID auto-generado del producto
 *         name:
 *           type: string
 *           description: El nombre del producto
 *         price:
 *           type: number
 *           description: El precio del producto
 *         stock:
 *           type: number
 *           description: La cantidad en stock del producto
 *       example:
 *         id: d5fE_asz
 *         name: Producto de ejemplo
 *         price: 100
 *         stock: 20
 */

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: API para la gestión de productos
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retorna la lista de todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: La lista de los productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/', productController.getAllProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Obtiene el producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del producto
 *     responses:
 *       200:
 *         description: La descripción del producto por ID
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: El producto no fue encontrado
 */
router.get('/:id', productController.getProductById);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: El producto fue creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Algún error del servidor
 */
router.post('/', productController.createProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Actualiza el producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: El producto fue actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: El producto no fue encontrado
 *       500:
 *         description: Algún error del servidor
 */
router.put('/:id', productController.updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Elimina el producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del producto
 *     responses:
 *       200:
 *         description: El producto fue eliminado exitosamente
 *       404:
 *         description: El producto no fue encontrado
 *       500:
 *         description: Algún error del servidor
 */
router.delete('/:id', productController.deleteProduct);

module.exports = router;
