import posts from "../tuits/tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit._id = (new Date()).getTime()+'';
  newTuit.topic = "NA";
  newTuit.username = "NA";
  newTuit.liked = true;
  newTuit.verified = false;
  newTuit.handle = "NA";
  newTuit.time = "NA";
  newTuit.title = "NA";
  newTuit.tuit = "NA";
  newTuit.video = "NA";
  newTuit.image = "NA";
  newTuit.logoImage = "/Tuiter/images/reactJS.jpeg";
  newTuit.avatarImage = "/Tuiter/images/reactJS.jpeg";
  newTuit.comments = 0;
  newTuit.retuits = 0;
  newTuit.likes = 0;
  newTuit.dislikes = 0;
  tuits.push(newTuit);
  res.json(newTuit);
}

const findAllTuits = async (req, res) => {
  console.log(tuits)
  res.json(tuits);
}

const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
  res.sendStatus(200);
}

const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
  res.sendStatus(200);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
};