const { Router } = require("express");
const Result = require("./model");

const router = new Router();

router.post("/result", async (request, response, next) => {
  const { name, money, days } = request.body;
  Result.create({
    name,
    money,
    days
  })
    .then(result => response.send(result))
    .catch(err => next(err));
});

router.get("/money", (request, response, next) => {
  const limit = request.query.limit || 10
  const offset = request.query.offset || 0

  Result.findAndCountAll({
    order: [["money", "DESC"]],
    offset,
    limit
  })
    .then(result => {
      response.send({
        result: result.rows,
        total: result.count
      })
    })
    .catch(err => next(err))
});

router.delete('/result/:id', (request, response, next) => {
  Result.destroy({
    where: {
      id: request.params.id
    }
  })
    .then(number => response.send({ number }))
    .catch(err => next(err))
})

module.exports = router;
