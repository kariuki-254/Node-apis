const Joi= require('joi');
const express= require ("express");
const app= express();
app.use(express.json());

const genres=[
    {id:1, genre:'Action'},
    {id:2, genre:'Horror'},
    {id:3, genre:'Crime'},
    {id:4, genre:'Drama'},
    {id:5, genre:'Comedy'},
    {id:6, genre:'Science Fiction'},
    {id:7, genre:'Thriler'}
]

app.get('/',(req ,res) =>{
res.send("hello forks")
});



app.get('/api/genres', (req, res) => {
res.send(genres);
});

app.get('/api/genres/:id',(req, res)=>{
    const genre= genres.find(c =>c.id === parseInt(req.params.id))
    if (!genre) return res.status(404).send('The genre with that id does not exist.');
    res.send(genre);
});

app.post('/api/genres',(req, res) => {
const genre={
    id: genres.length + 1,
    genre:req.body.genre,
};
genres.push(genre);
res.send(genre);
});
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening to port ${port} ......`)
);