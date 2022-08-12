import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'

export default function useChat() {
  const [users, setUsers] = useState([])
  const [log, setLog] = useState('')
  const [messages, setMessages] = useState([])

  const { current: socket } = useRef(
    io('http://localhost:5000', {
      query: {
        userName: "Vasya Pupkin"
      }
    })
  )

  useEffect(() => {
    socket.emit('user:add', { name: 'Vasya' })

    socket.on('log', log => {
      setLog(log)
    })

    socket.on('user_list:update', users => {
      setUsers(users)
    })

    socket.on('message_list:update', messages => {
      setMessages(messages)
    })

  }, [socket])

  const sendMessage = message => {
    socket.emit('message:add', message)
  }

  return { users, messages, log, sendMessage }
}