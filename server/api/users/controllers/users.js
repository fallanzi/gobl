import jwt from 'jsonwebtoken'
import User from '../models/users'
import getPostUser from '../config/getUser'
import cfg from '../config/config'

exports.list = async (req, res) => {
  try {
    res.status(200).json(await User.find())
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.create = async (req, res) => {
  try {
    res.status(201).json(await getPostUser(req).save())
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.read = async (req, res) => {
  try {
    res.status(200).json(await User.findById(req.params.id))
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.update = async (req, res) => {
  try {
    res.status(200).json(await User.findByIdAndUpdate(req.params.id, req.body))
  } catch (err) {
    res.status(304).json({ error: err.message })
  }
}

exports.delete = async (req, res) => {
  try {
    res.status(200).json(await User.findByIdAndRemove(req.params.id))
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.login = async (req, res) => {
  try {
    const data = req.body
    const user = await User.findOne({ email: data.email })
    if (!user) {
      res.status(404).json({ error: 'Does not exist.' })
    }
    if (!user.isMatch(data.password)) {
      res.status(401).json({ error: 'Wrong password' })
    } else {
      const payload = jwt.sign({ id: user.id, email: user.email }, cfg.secretKey, cfg.opts)
      res.status(200).json({ token: payload })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

