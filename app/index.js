const func = () => new Promise(
  (resolve, reject) => {
    if (!obj) return reject(new Error('obj didn\'t exist'))
    return resolve(obj)
  })


func()
  .then(
    result => result, // { a: 'b' }
    error => error
  ).catch(
    error => console.error(error) // => 'obj didn't exist'
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

const obj = { a: { b: { c: 'd' } } }

const { a: { b: {c} } } = obj // c = 'd'

value
42
[ a, b, c ] => [ a, b, c, d ]
concat [ a, b, c ] [ d ] => [ a, b, c, d ]

entity

time

state: the _value_ of an _entity_ at a given moment in _time_

# react redux:

  initialState = {}

  const email = 'some@email.com'
  const password = 'some_password'

  ACTION

  const addUserToAuth = () => ({
    type: ADD_USER_TO_AUTH,
    email,
    password
  })

  REDUCER

  const auth = ( state = initialState, action ) => {

    if ( type === 'ADD_USER_TO_AUTH' ) {

      const { email, password } = action
      return Object.assign({}, state, { email, password })

    }

  }

  STORE

  dispatch(addUserToAuth())
  getState()

  const store = createStore(auth)

  {}

const obj = { a: 'b' }
Object.assign(obj, { a: 'd' }) // => { a: 'd' }

