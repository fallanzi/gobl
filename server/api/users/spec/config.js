import superagent from 'superagent'

const agent = superagent.agent()
const account = {
  email: 'test@zost.com',
  password: '12345678',
}

exports.login = (request, done) => {
  request
    .post('/gobl/v1/users/login')
    .send(account)
    .end((err, res) => {
      if (err) throw err
      agent.saveCookies(res)
      done(agent)
    })
}
