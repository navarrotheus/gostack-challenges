const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs, likes } = request.body;

  if (likes !== 0) {
    return response.status(400).json({ error: 'Likes should start at 0' });
  }

  const project = { id: uuid(), title, url, techs, likes };

  repositories.push(project);

  return response.json(project);

});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repositorieIndex = repositories.findIndex(repositorie => repositorie.id = id);

  if (repositorieIndex < 0) {
    return response.status(400).json({ error: 'Repositorie not found' });
  }

  const { title, url, techs, likes } = request.body;

  if (likes) {
    return response.status(401).json({ error: 'Insuficient permissions' });
  }


  if (title) {
    repositories[repositorieIndex].title = title;
  }

  if (url) {
    repositories[repositorieIndex].url = url;
  }

  if (techs) {
    repositories[repositorieIndex].techs = techs;
  }

  return response.json(repositories[repositorieIndex]);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repositorieIndex = repositories.findIndex(repositorie => repositorie.id = id);

  if (repositorieIndex < 0) {
    return response.status(400).json({ error: 'Repositorie not found' });
  }

  repositories.splice(repositorieIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repositorieIndex = repositories.findIndex(repositorie => repositorie.id = id);

  if (repositorieIndex < 0) {
    return response.status(400).json({ error: 'Repositorie not found' });
  }

  repositories[repositorieIndex].likes++;

  return response.json(repositories[repositorieIndex]);
});

app.delete("/repositories/:id/dislike", (request, response) => {
  const { id } = request.params;

  const repositorieIndex = repositories.findIndex(repositorie => repositorie.id = id);

  if (repositorieIndex < 0) {
    return response.status(400).json({ error: 'Repositorie not found' });
  }

  repositories[repositorieIndex].likes--;

  return response.json(repositories[repositorieIndex]);
});

module.exports = app;
