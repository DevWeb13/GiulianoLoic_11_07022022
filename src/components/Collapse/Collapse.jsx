import React, { useState } from 'react'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const openOrCloseCollapse = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <section
      className={isOpen ? 'collapse collapseOpen' : 'collapse collapseClose'}
    >
      <div className="title">
        <h3>{title}</h3>
        <button
          className={isOpen ? 'btReverse' : 'bt'}
          type="button"
          onClick={openOrCloseCollapse}
          name={isOpen ? 'close' : 'open'}
        >
          <svg
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3705 0.736755L0.0120851 2.10285L7.61003 9.69312L15.208 2.09518L13.8495 0.736756L7.61003 6.97628L1.3705 0.736755Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <ul className={isOpen ? 'content contentOpen' : 'content contentClose'}>
        {typeof content === 'string' ? (
          <li>{content}</li>
        ) : (
          content.map((elm, index) => <li key={index}>{elm}</li>)
        )}
      </ul>
    </section>
  )
}

export default Collapse
