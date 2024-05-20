import React, { useState } from 'react';
import { UserList } from './UserList';
import { ADDUser } from './ADDUser';
//import React, { useState, useEffect } from 'react';


function App(){
  const [users,setUsers]=useState([])
   
  return(
  <div>
    <h1>AXIOS CRUD operations</h1>
     <ADDUser users={users} setUsers={setUsers}/>
     <UserList users={users} setUsers={setUsers}/>
 </div>
  )
}
export default App;

