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

#############################
# some fundamental concepts #
#############################

what are... value, entity, time, state
// source: http://www.infoq.com/presentations/Datomic-Database-Value

VALUE

an immutable magnitude, quantity, or number, or a composite thereof

  , e.g.,

  42 does not "become" 43 by "changing" 42.
  rather, the function (+) takes 2 or more values as arguments and returns a third value.
  (+ 42 1) => 43

  similarly, the collection [ a, b, c ] does not "become" [ a, b, c, d ] by "changing" [ a, b, c].
  rather, the function (concat) takes 2 or more collections and concatenates them, returning a third collection.
  (concat [ a, b, c ] [ d ]) => [ a, b, c, d ]


IDENTITY

a putative entity we associate with a series of causally related values over time

an idea in our head, usually associated with a name, though it is not the name, that we connect
to a series of causally related things over time

  , e.g.,

  New York Yankees
  over time, ^ represents a different team, but we still refer to each team as "The Yankees"

  Rivers - same deal.
    "The river up and the river down are one in the same." - Heraclitus,
    but you also never step in the same river twice.

identity is independent of state

  , e.g.,

  a roster
  contains different at different points in time,
  yet the same identity of "Yankees" is applied to each of these values


TIME

a relative before/after ordering of causal values


STATE

the _value_ of an _identity_ at a given moment in _time_

  , e.g.,

  the _state_ of the New York Yankees in 1937 was
    [ { some: 'player' }, { some: 'other_player' } ]


###############
# react redux #
###############

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

HIGHER ORDER FUNCTIONS

functions that take other functions as arguments or return other functions

const addition = (a) => (b) => (a + b)
const subtraction = (someLibrary) => (a) => (b) => (someLibrary(a)(0 - b))

subtraction(addition)(1)(2) // => -1
// OR,
subtraction = (a) => (b) => addition(a)(0 - b)
subtraction(1)(2)           // => -1

this style of using functions is called CURRYING.

([1,2,3]).map((el) => el + 1)
(map %(+ 1 %) [1 2 3]) // <- clojure
