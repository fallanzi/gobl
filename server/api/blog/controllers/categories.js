import Category from '../models/categories'

exports.list = async (req, res) => {
  try {
    res.status(200).json(await Category.find())
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.create = async (req, res) => {
  try {
    res.status(201).json(await Category.create(req.body))
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.read = async (req, res) => {
  try {
    res.status(200).json(await Category.findById(req.params.id))
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.update = async (req, res) => {
  try {
    const result = await Category.findByIdAndUpdate(req.params.id, req.body)
    res.status(201).json(result)
  } catch (err) {
    res.status(304).json({ error: err.message })
  }
}

exports.delete = async (req, res) => {
  try {
    await Category.findByIdAndRemove(req.params.id)
    res.status(200).json({ delete: 'Success' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
