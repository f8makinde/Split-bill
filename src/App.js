import React, { useState } from 'react'
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false)
    function handleClick(){
      setShowAddFriend(!showAddFriend)
    }
  return (
    <div className='app'>
      <div className='sidebar'>
      <FriendList />
      {showAddFriend && <FormAddFriend />}
       <Button onToggle={handleClick}>{showAddFriend ? 'Close' : 'Add friends'}</Button>
      </div>
      <FormSplitBill />
    </div>
  )
}
 
function FriendList(){
  const friends = initialFriends
  return (
    <ul>
      {friends.map((friend) => {
      return <Friend friend={friend} key={friend.id} />
      })}
    </ul>
  )
}
function Friend({friend}){
  const {name, image, balance} = friend
  return(
    <li>
      <img src={image} alt={name} />
    <h3>{name}</h3>
     {balance < 0 && (
       <p className='red'>You owe {name} {Math.abs(balance)}</p>
     )}
      {balance > 0 && (
       <p className='green'>{name} owes you  {Math.abs(balance)}</p>
     )}
      {balance === 0 && (
       <p>You and {name} are even</p>
     )}
     <Button>
      Select
     </Button>
    </li>
  )
}
function Button({children, onToggle}){
  return <button className='button' onClick={onToggle}>{children}</button>
}
function FormAddFriend(){
  return <form className='form-add-friend'>
    <label>Friend name</label>
    <input type='text' />
    <label>Image URL</label>
    <input type='text' />
    <Button>Add</Button>
  </form>
}
function FormSplitBill(){
  return(
    <form className='form-split-bill'>
      <h2>Split a bill with x</h2>
      <label>Bill value</label>
    <input type='text' />
    <label>Your expense</label>
    <input type='text' />
    <label>x's expense</label>
    <input type='text' className='disapbled'/>
    <label>Who is paying the bills</label>
    <input type='text' />
    <select>
      <option value='user'>
        You
      </option>
      <option value='friend'>x</option>
    </select>
    <Button>Split bill</Button>
    </form>
  )
}
export default App
