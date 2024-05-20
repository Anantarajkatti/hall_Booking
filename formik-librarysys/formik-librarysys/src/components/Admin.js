import React from 'react'
import BookManage from './BookManage'
import AuthorManange from './AuthorManange'

function Admin() {
  return (
    <div className="container">
      <h1 className="heading">Admin Dashboard - Library Management System</h1>
      <div className="grid">
        <div>
          
          <BookManage/>
        </div>
        <div>
          
          <AuthorManange/>
        </div>
      </div>
    </div>
  )
}

export default Admin