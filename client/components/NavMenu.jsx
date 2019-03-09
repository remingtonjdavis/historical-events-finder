import React from 'react';

const navMenu = ({handleSubmit, handleChange, value}) => {
  return (
    <div className="nav-menu">
      <h1>Historical Events Finder</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange}className="search-bar" />
      </form>
    </div>
  )
}
export default navMenu;