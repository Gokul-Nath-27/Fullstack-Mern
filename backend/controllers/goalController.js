

const getGoals = (req, res) => {
  res.json({ message: "Get Goals" });
};

const setGoal = (req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Please Set a Text Field')
  } 
  res.status(200).json({ message: "Set Goal" });
};

const updateGoal = (req, res) => {
  res.json({ message: `Updated Goal with id ${req.params.id}` });
};

const deleteGoal = (req, res) => {
  res.json({ message: `Deleted Goal with id ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
