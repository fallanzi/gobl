import { Blog, Category } from '../models/blog'

exports.list_cat = async (req, res) => {
  try {
    const cats = await Category.find()
    res.status(200).json(cats)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}
exports.create_cat = async (req, res) => {
  try {
    const cat = Category.create(req.body)
    res.status(201).json(cat)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
exports.read_cat = async (req, res) => {
  try {
    const cat = Category.findById(req.params.id)
    res.status(200).json(cat)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}
exports.update_cat = async (req, res) => {
  try {
    const cat = Category.findByIdAndUpdate(req.params.id)
    res.status(200).json(cat)
  } catch (err) {
    res.status(304).json({ error: err.message })
  }
}
exports.delete_cat = async (req, res) => {
  try {
    const cat = Category.findByIdAndRemove(req.params.id)
    res.status(200).json(cat)
  } catch (err) {
    res.status(304).json({ error: err.message })
  }
}

exports.list_blog = async (req, res) => {
  try {
    const cats = await Blog.find()
    res.status(200).json(cats)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}
exports.create_blog = async (req, res) => {
  try {
    const cat = Blog.create(req.body)
    res.status(201).json(cat)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
exports.read_blog = async (req, res) => {
  try {
    const cat = Blog.findById(req.params.id)
    res.status(200).json(cat)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}
exports.update_blog = async (req, res) => {
  try {
    const cat = Blog.findByIdAndUpdate(req.params.id)
    res.status(200).json(cat)
  } catch (err) {
    res.status(304).json({ error: err.message })
  }
}
exports.delete_blog = async (req, res) => {
  try {
    const cat = Blog.findByIdAndRemove(req.params.id)
    res.status(200).json(cat)
  } catch (err) {
    res.status(304).json({ error: err.message })
  }
}

