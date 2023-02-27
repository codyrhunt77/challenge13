const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
 Tag.findOne({ include: [{
  model: Product,
  through: ProductTag,
 },],})
});

router.get('/:id', (req, res) => {
  Tag.findAll({ where: { id: req.params.id},
  include: [{
    model: Product,
    through: ProductTag,
  },],})
});

router.post('/', (req, res) => {
  Tag.update(req.body, {
    where: { id: req.params.id,},
  })
});

router.put('/:id', (req, res) => {
  Tag.create(req.body)
});

router.delete('/:id', (req, res) => {
 Tag.destroy({ where: { id: req.params.id,},})
});

module.exports = router;
