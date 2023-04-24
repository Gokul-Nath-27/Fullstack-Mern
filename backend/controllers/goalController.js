const asyncHandler = require("express-async-handler");
const Goal = require("../model/goalModel")

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.json(goals);
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.goal) {
    res.status(400);
    throw new Error("Please Set a Goal Field");
  }

  const goal = await Goal.create({
    goal: req.body.goal
  })

  res.status(200).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400);
    throw new Error("Please Set a Goal Field to Update");
  }
  const Updatedgoal = await Goal.findByIdAndUpdate(req.params.id,  {goal: req.body.goal})
  res.status(200).json(Updatedgoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found");
  }

  await goal.remove()

  res.status(200).json({id: req.params.id});
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
