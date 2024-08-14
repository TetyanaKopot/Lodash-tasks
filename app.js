let users = [
  { id: 1, name: 'Alice', age: 25, active: true },
  { id: 2, name: 'Bob', age: 30, active: false },
  { id: 3, name: 'Charlie', age: 35, active: true },
  { id: 4, name: 'David', age: 40, active: false },
]

const getActiveUsers = (users) => {
  return _.filter(users, { active: true })
}
console.log(getActiveUsers(users))

const getSortedUsersByAge = (users) => {
  return _.sortBy(users, 'age')
}
console.log(getSortedUsersByAge(users))

const getUserNames = (users) => {
  return _.map(users, 'name')
}
console.log(getUserNames(users))

const getUserById = (users, id) => {
  const user = _.find(users, { id: id })
  return user || null
}
console.log(getUserById(users, 3))

const addUser = (users, newUser) => {
  return _.concat(users, newUser)
}
console.log(addUser(users, { id: 5, name: 'Mery', age: 23, active: false }))

const removeUserById = (users, id) => {
  _.remove(users, (el) => el.id === id)
  return users
}
console.log(removeUserById([...users], 1))

const updateUser = (users, updatedUser) => {
  return _.map(users, (el) => (el.id === updatedUser.id ? updatedUser : el))
}
console.log(updateUser(users, { id: 2, name: 'Alex', age: 20, active: true }))
