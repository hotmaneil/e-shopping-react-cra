import { useSelector } from 'react-redux'

function Message() {
  const messages = useSelector((state) => state.message)
  console.log(messages)

  return (
    <>
      <div
        className="toast-container position-fixed"
        style={{ top: '64px', right: '15px' }}
      >
        {messages?.length &&
          messages.map((msg) => {
            return (
              <div
                className="toast show"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className={`toast-header text-white bg-${msg.type}`}>
                  <strong className="me-auto">{msg.title}</strong>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  />
                </div>
                <div className="toast-body">{msg.text}</div>
              </div>
            )
          })}
        {/* {message.title && (
          <div
            className="toast show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className={`toast-header text-white bg-${message.type}`}>
              <strong className="me-auto">{message.title}</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              />
            </div>
            <div className="toast-body">{message.text}</div>
          </div>
        )} */}
      </div>
    </>
  )
}

export default Message
