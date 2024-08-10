import React from 'react'

function Price(props) {
  return (
    <div>
        <div><h1>Ürün Hakkında</h1></div>
        <div><h3>İsim = {props.name}</h3>
        </div>
        <div><h5>Fiyat = {props.price}</h5></div>
    </div>
  )
}

export default Price