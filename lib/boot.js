module.exports = app => {
  app.listen(process.env.PORT, () => {
    console.log(`gobl is running on ${process.env.PORT} port`)
  })
}
