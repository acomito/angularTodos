var mongoose = require('mongoose');
var Todo = require('server/db/db').Todo;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    Todo.find(function(err, results) {
        if (err) { console.log(err); }
        res.send({ todos: results });
    });
});

router.post('/', function(req, res) {
    var todo = new Todo(req.body);
    todo.save(function(err) {
        if (err) { console.log(err); }
        res.send('ToDo saved');
    });
});

router.put('/:id', function(req, res) {
	var id = req.params.id;
	var newTask = req.body.task;
	Todo.update({_id: id}, {$set: { task: newTask}}, function(err){
		if (err) { console.log(err); }
		res.send('Todo Updated');
	});
});

router.put('/checkbox/:id', function(req, res) {
	var id = req.params.id;
	var isCompleted = req.body.isCompleted;
	Todo.update({_id: id}, {$set: { isCompleted: isCompleted}}, function(err){
		if (err) { console.log(err); }
		res.send('isCompleted Updated');
	});
});

router.delete('/:id', function(req, res) {
	var id = req.params.id;
	Todo.remove({_id: id}, function(err){
		if (err) { console.log(err); }
		res.send('Todo Deleted!');
	});
});

module.exports = router;