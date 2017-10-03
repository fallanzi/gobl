import Post from '../models/posts'

exports.list = async (req, res) => {
  try {
    const result = await Post.find().populate('category').populate('author').exec()
    res.status(200).json(result)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.create = async (req, res) => {
  try {
    res.status(201).json(await Post.create(req.body))
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.read = async (req, res) => {
  try {
    res.status(201).json(await Post.findById(req.params.id)
      .populate('category')
      .populate('author')
      .exec())
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.update = async (req, res) => {
  try {
    const result = await Post.findByIdAndUpdate(req.params.id, req.body)
      .populate('category')
      .populate('author')
      .exec()
    res.status(201).json(result)
  } catch (err) {
    res.status(304).json({ error: err.message })
  }
}

exports.delete = async (req, res) => {
  try {
    await Post.findByIdAndRemove(req.params.id)
    res.status(200).json({ delete: 'Success' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
