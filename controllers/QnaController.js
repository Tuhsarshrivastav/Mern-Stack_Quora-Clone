const Question = require('../models/Question')
const Answer = require('../models/Answer')


module.exports.question = async (req, res) => {
    const { questionName, questionUrl } = req.body
    try {
        await Question.create({
            questionName, questionUrl
        }).then(() => {
            res.status(201).send({
                status: true,
                message: "Question added successfully"
            })
        }).catch((err) => {
            res.status(400).send({
                status: false,
                message: "Bad formet"
            })
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            message: "Error while adding question"
        })
    }
}

module.exports.getQuestion = async (req, res) => {
    try {
        await Question
            .aggregate([
                {
                    $lookup: {
                        from: "answers", //collection to join
                        localField: "_id", //field from input document
                        foreignField: "questionId",
                        as: "allAnswers", //output array field
                    },
                },
            ])
            .exec()
            .then((doc) => {
                res.status(200).send(doc);
            })
            .catch((error) => {
                res.status(500).send({
                    status: false,
                    message: "Unable to get the question details",
                });
            });
    } catch (e) {
        res.status(500).send({
            status: false,
            message: "Unexpected error",
        });
    }
}


module.exports.GetAllAnswers = async (req,res) => {
    try {
        await Answer
            .create({
                answer: req.body.answer,
                questionId: req.body.questionId,
            })
            .then(() => {
                res.status(201).send({
                    status: true,
                    message: "Answer added successfully",
                });
            })
            .catch((e) => {
                res.status(400).send({
                    status: false,
                    message: "Bad request",
                });
            });
    } catch (e) {
        res.status(500).send({
            status: false,
            message: "Error while adding answer",
        });
    }
}