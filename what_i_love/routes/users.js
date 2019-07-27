var express = require('express');
var router = express.Router();

const users=[];

/* GET users listing. */

/* 输入'localhost:3000/users?quan=3'
 * data为
 *{
 *"name":"liming",
 *"age":20
 *}
 */
router.route('/')
.get(function(req, res, next) {
  res.json(users);
})
.post((req,res)=>{
  const user=req.body;
  users.push(user);
  res.json(user);
});

module.exports = router;
