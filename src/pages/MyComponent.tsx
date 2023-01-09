import React from 'react'
type MyProp={
    name:string
    num:number
    isLoggedIn:boolean
}
const MyComponent = ({name,num,isLoggedIn}:MyProp) => {
  return (
    <div>
<table>
    <tbody>
        <tr>
            <td>name:</td>
            <td>{name}</td>
        </tr>
        <tr>
            <td>num:</td>
            <td>{num}</td>
        </tr>
        <tr>
            <td>isLoggedIn:</td>
            <td>{isLoggedIn.toString()}</td>
        </tr>
    </tbody>
</table>

    </div>
  )
}

export default MyComponent