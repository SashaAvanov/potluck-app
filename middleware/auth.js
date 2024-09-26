const Event = require('../models/Event')

module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/')
      }
    },
    ensureCreator: async function (req, res, next) {
      try {
        const event = await Event.findById(req.params.id)
        if (req.isAuthenticated() && req.user.username == event.createdBy) {
          return next()
        } else {
          req.flash('errors', { msg: 'Only event creator can update details' })
          res.redirect(`/event/getEvent/${req.params.id}`)
        }
      }catch(err){
        console.log(err)
      }
    }
}