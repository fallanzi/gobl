import User from '../models/users'

// Reset request body id before all
exports.all = (req, res, next) => {
  delete req.body.id
  next()
}
// '/gobl/v1/' : List users 
exports.gel = async (req, res) => {
  try {
    res.status(200).json(await User.find())
  } catch (err) {
    res.status(204).json({ error: err.message })
  }
}
// '/gobl/v1/' : Create a user
exports.post = async (req, res) => {
  req.body.created = new Date()
  try {
    let result = await User.create(req.body)
    result.local.password = await result.hash(result.local.password)
    result = await result.save()
    res.status(201).json(result)
  } catch (err) {
    res.status(412).json({ error: err.message })
  }
}
// '/gobl/v1/users/1' : GET a user
exports.get = async (req, res) => {
  try {
    res.status(200).json(await User.findById(req.params.id))
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.put = async (req, res) => {
  try {
    res.status(200).json(await User.findByIdAndUpdate(req.params.id))
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.delete = async (req, res) => {
  try {
    res.status(200).json(await User.findByIdAndRemove(req.params.id))
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}
