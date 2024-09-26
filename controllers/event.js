const Item = require('../models/Item')
const Request = require('../models/Request')
const Event = require('../models/Event')

module.exports = {
    dashboard: async (req, res)=>{
        try {
            const potlucks = await Event.find({createdBy: req.user.username}) 
            res.render('dashboard.ejs', {potlucks: potlucks, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getEvent: async (req, res) => {
        try {
            const potluck = await Event.findById(req.params.id);
            const requests = await Request.find({event: req.params.id});
            const items = await Item.find({event: req.params.id});
            res.render("event.ejs", {potluck: potluck, requests: requests, items: items, user: req.user})
        } catch (err) {
            console.log(err);
        }
    },
    newPotluck: async (req, res) =>{
        try {
            if (req.body.eventName == '' ||
                req.body.eventDate == '' ||
                req.body.eventTime == '' ||
                req.body.eventLocation == ''
            ) { req.flash('errors', { msg: 'Please fill out every event field. They can be changed later.' });
                return res.redirect('/dashboard'); }
                
            await Event.create({createdBy: req.user.username, user: req.user.id, name: req.body.eventName, date: req.body.eventDate, time: req.body.eventTime, location: req.body.eventLocation})
            console.log('Potluck has been created!')
            res.redirect('/dashboard')
        } catch(err){
            console.log(err)
        }
    },
    deletePotluck: async (req, res) => {
        try{
            await Event.findOneAndDelete({_id: req.params.id})
            console.log('Deleted Event')
            res.redirect('/dashboard')
        }catch(err){
            console.log(err)
        }
    },
    updateName: async (req, res)=>{
        try{
            await Event.findOneAndUpdate({_id: req.params.id}, {name: req.body.eventName})
            console.log('Potluck name has been updated!')
            res.redirect(`/event/getEvent/${req.params.id}`)
        }catch(err){
            console.log(err)
        }
    },
    updateDate: async (req, res)=>{
        try{
            await Event.findOneAndUpdate({_id: req.params.id}, {date: req.body.eventDate})
            console.log('Potluck date has been updated!')
            res.redirect(`/event/getEvent/${req.params.id}`)
        }catch(err){
            console.log(err)
        }
    },
    updateTime: async (req, res)=>{
        try{
            await Event.findOneAndUpdate({_id: req.params.id}, {time: req.body.eventTime})
            console.log('Potluck time has been updated!')
            res.redirect(`/event/getEvent/${req.params.id}`)
        }catch(err){
            console.log(err)
        }
    },
    updateLocation: async (req, res)=>{
        try{
            await Event.findOneAndUpdate({_id: req.params.id}, {location: req.body.eventLocation})
            console.log('Potluck location has been updated!')
            res.redirect(`/event/getEvent/${req.params.id}`)
        }catch(err){
            console.log(err)
        }
    },
    createRequest: async (req, res)=>{
        try{
            await Request.create({item: req.body.requestItem, dietaryRestrictions: req.body.dietaryRestrictions, completed: false, event: req.params.id})
            console.log('Request has been added!')
            res.redirect(`/event/getEvent/${req.params.id}`)
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Request.findOneAndUpdate({_id: req.params.id},{
                completed: true
            })
            console.log('Marked Complete')
            res.redirect(`/event/getEvent/${req.params.eventId}`)
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Request.findOneAndUpdate({_id: req.params.id},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.redirect(`/event/getEvent/${req.params.eventId}`)
        }catch(err){
            console.log(err)
        }
    },
    deleteRequest: async (req, res)=>{
        try{
            await Request.findOneAndDelete({_id: req.params.id})
            console.log('Deleted Request')
            res.redirect(`/event/getEvent/${req.params.eventId}`)
        }catch(err){
            console.log(err)
        }
    },
    createItem: async (req, res)=>{
        try{
            await Item.create({item: req.body.itemName, dietaryRestrictions: req.body.dietaryRestrictions, notes: req.body.extraNotes, person: req.body.personName, event: req.params.id})
            console.log('Item has been added!')
            res.redirect(`/event/getEvent/${req.params.id}`)
        }catch(err){
            console.log(err)
        }
    },
    deleteItem: async (req, res)=>{
        try{
            await Item.findOneAndDelete({_id: req.params.id})
            console.log('Deleted Item')
            res.redirect(`/event/getEvent/${req.params.eventId}`)
        }catch(err){
            console.log(err)
        }
    } 
}    