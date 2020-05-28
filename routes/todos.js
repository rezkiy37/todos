const { Router } = require('express')
const Todo = require('../models/Todo')
const Movie = require('../models/movie')
const Director = require('../models/director')
const router = Router()

router.get('/', async (req, res) => {
    const todos = await Todo.find({})

    res.render('index', {
        title: 'Todos list',
        isIndex: true,
        todos
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create todo',
        isCreate: true
    })
})

router.post('/createtodo', async (req, res) => {
    const todo = new Todo({
        title: req.body.title
    })

    await todo.save()
    res.redirect('/')
})

router.post('/complete', async (req, res) => {
    const todo = await Todo.findById(req.body.id)

    todo.completed = !!req.body.completed

    await todo.save()
    res.redirect('/')
})

router.post('/movie', async (req, res) => {
    const movie = new Movie({
        name: req.body.movieName
    })

    await movie.save()
    res.redirect('/create')
})

router.post('/director', async (req, res) => {
    const director = new Director({
        name: req.body.directorName
    })

    await director.save()
    res.redirect('/create')
})

module.exports = router