const express = require('express')
const router = express.Router()
const {question, getQuestion, GetAllAnswers} = require('../controllers/QnaController')


router.post('/question',question)
router.get('/question',getQuestion)
router.post('/answers',GetAllAnswers)


module.exports = router