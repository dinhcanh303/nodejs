const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 5000

var users = [
  { id:1 , name:'Dinh Canh'},
  { id:2 , name:'Kim Oanh'}
]
//app.use(morgan('combined'))
app.set('view engine', 'pug')
app.set('views', 'src/views')
app.get('/', (req, res) => {
  res.render('index',{
    name:'Ngo Dinh Canh'
  });
});
app.get('/users', (req, res) => {
  res.render('users/index',{
    users: users
  });
});
app.get('/users/search',(req,res) => {
  var q = req.query.q;
  var matchedUsers = users.filter(function(user){
    return user.name.toLocaleLowerCase().indexOf(q) !== -1;
  })
  
  res.render('users/index',{
    users: matchedUsers
  });
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})