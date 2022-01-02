const express = require('express')
const router = express.Router()
const {question, getQuestion} = require('../controllers/QnaController')


router.post('/question',question)
router.get('/question',getQuestion)
router.post('/answers',getQuestion)


module.exports = router