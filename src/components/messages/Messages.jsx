import React, { useEffect, useRef } from "react"
import Message from "./Message"
import useGetMessages from "../../hooks/useGetMessages"
import useListenMessages from "../../hooks/useListenMessages"
import "../../pages/home/home.css"

const Messages = () => {
  const { messages, loading } = useGetMessages()

  // console.log(messages)

  useListenMessages()

  const lastMessageRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" })
    })
  }, [messages])

  return (
    <div className="px-4 boxScroll ">
      {!loading && messages.length === 0 && (
        <p className="text-center">Say hello to start the chat!</p>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  )
}

export default Messages