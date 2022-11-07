const data = require('./database');

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.get('/notes', (req, res) => {
 return data.notes
});
server.post('/notes', (req, res) => {
      let newNote = req.body;
      data.push({
        "id": newNote.id,
        "text": newNote.text,
        "date": newWord.date
    });
      note = data.find(item => {return item.text == newNote.text});
      return res.send(note);

});

server.put('/notes/:id', (req, res) => {
    let updateNote = req.body
    let id = req.params.id
    let unuptateNote = date.find(item => {return item.id == id})
    let index = date.indexOf(unuptateNote)
    data.splice(index, 1, updateNote)
    return res.status(200);
})

server.listen(port);