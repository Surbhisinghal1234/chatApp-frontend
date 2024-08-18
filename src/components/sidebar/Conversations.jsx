import React from "react"
import Conversation from "./Conversation"
import useGetConversations from "../../hooks/useGetConversation"

const Coversations = () => {
  const { loading, conversations } =useGetConversations()
  console.log(conversations)

  return (
    <div className="py-2 flex flex-col overflow-y-scroll">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIndex={index === conversation.length - 1}
        />
      ))}

      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  )
}

export default Coversations


