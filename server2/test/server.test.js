// const expect = require('expect');
// const request = require('supertest');
// const {Todo} = require('./../models/todo');
// const {app} = require('./../server');
// beforeEach(function(done){
//   Todo.remove({}).then(()=>done());
// });
// describe('POST/todo',function(){
//   it('should create a new todo',function(done){
//     var text = 'hello tickle';
//     request(app)
//     .post('/todos')
//     .send({text:text})
//     .expect(200)
//     .expect(res.body.text).toBe(text);
//   })
//   .end(function(err,res){
//     if(err){
//       return done(err);// return will stop further execution
//     }
//     Todo.find().then(function(todos){
//       expect(todos.length).toBe(1);
//         expect(todos[0].text).toBe(text);
//         done();
//     }).catch((e=>done(e)));
//   });
// });

const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => {
  Todo.remove({}).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
});
