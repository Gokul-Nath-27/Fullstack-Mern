const asyncHandler = require("express-async-handler");
const Goal = require("../model/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.json(goals);
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.goal) {
    res.status(400);
    throw new Error("Please Set a Goal Field");
  }

  const goal = await Goal.create({
    goal: req.body.goal, 
  });

  res.status(200).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findByIdAndUpdate(id, req.body);

  if (!goal) {
    res.status(400);
    throw new Error(`No Goal Found with an id ${id} to update or edit.`);
  }
  
  const Updatedgoal = await Goal.findById(id);
  res.status(200).json(Updatedgoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findByIdAndDelete(id);

  if (!goal) {
    res.status(400);
    throw new Error(`No Goal Found with an id ${id} to delete.`);
  }

  res.status(200).json(goal);
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
