const func = (obj) => new Promise(
  (resolve, reject) => {
    if (!obj) return reject(new Error(`obj didn't exist`))
    return resolve(obj)
  })


func({ a: 'b' })
  .then(
    result => result, // { a: 'b' }
    error => error
  ).catch(
    error => console.error(error) // if an error thrown, => `obj didn't exist`
  )


function doSomethingAsync(data, cb) {
  // some processing or API call or async action
  return cb(null, data)
}

function newFunc(error, data) {
  if (error) console.error(error)
  // do something with data
}

dosomethingAsync({a : 'b'}, newFunc)

const register = ({ email, password }) => { // user = { email: 'some@email.com', password: 'some_password' }
  return createUser(email, password)
    .then(
      () => loginUser(email, password)
    )
}

OBJECT.ASSIGN

const obj = { a: 'b' }
Object.assign({}, obj, { c: 'd' }) // => { a: 'b', c: 'd' }
Object.assign({}, obj, { a: 'd' }) // => { a: 'd' }

OBJECT DESTRUCTURING

const obj = { a: { b: { c: 'd' } } }
const { a: { b: {c} } } = obj      // c = 'd'

ARRAY DESTRUCTURING

const arr = [ 'a', 'b', 'c' ]
const [ unicorn ] = arr            // unicorn = 'a'
const [ ponies, jumprope ] = arr   // ponies  = 'a', jumprope = 'b'

VALUE
42
[ a, b, c ] => [ a, b, c, d ]
concat [ a, b, c ] [ d ] => [ a, b, c, d ]

ENTITY
[ a collection of values ]
  with which we associate a sense of continuity through time,
  often associated with a word,
    though it is not that word

  , e.g.,

  New York Yankees: {                                                in this collection,
    1937 : [ { some: 'player' }, { some: 'other_player' } ],      <- each year contains a collection
    2000 : [ { another: 'player' }, { another: 'other_player' } ]    of distinct values with which
  }                                                                  we associate the notion of the
                                                                     New York Yankees, an "entity"
                                                                     that persists continually through
                                                                     time
TIME
a [ before, after ] ordering of events
  with which we associate a [ cause, effect ] relationship

STATE
the _value_ of an _entity_ at a given moment in _time_

  , e.g.,

  the _state_ of the New York Yankees in 1937 was
    [ { some: 'player' }, { some: 'other_player' } ]

# react redux:

  const email = 'some@email.com'
  const password = 'some_password'

  ACTION

  const addUserToUsers = () => ({
    type: ADD_USER_TO_USERS,
    email,
    password
  })

  REDUCER

  initialState = []
  const users = ( state = initialState, action ) => {

    if ( type === 'ADD_USER_TO_AUTH' ) {

      const { email, password } = action
      return state.concat([{ email, password }])

    }

  }

  STORE

  const store = createStore(auth)

  const user = { email: 'a@b.com', password: 'asdf' }
  store.dispatch( addUserToUsers(user) )
  store.getState() // => { users: [ { email:'a@b.com', password: 'asdf' } ] }

  const anotherUser = { email: 'c@d.com', password: 'qwer' }
  store.dispatch( addUserToUsers(anotherUser) )
  store.getState() // => { users: [ { email: 'a@b.com', password: 'asdf' },
                   //               { email: 'c@d.com', password: 'qwer' } ] }

HIGHER ORDER FUNCTIONS: functions that take other functions as arguments or return other functions

const addition = (a) => (b) => (a + b)
const subtraction = (someLibrary) => (a) => (b) => (someLibrary(a)(0 - b))

subtraction(addition)(1)(2) // => -1
// OR,
subtraction = (a) => (b) => addition(a)(0 - b)
subtraction(1)(2)           // => -1

this style of using functions is called CURRYING.

([1,2,3]).map((el) => el + 1)
(map %(+ 1 %) [1 2 3]) // <- clojure
