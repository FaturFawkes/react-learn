import React, { Component } from 'react'

export class CustomerService extends Component {
  render() {
    const img = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png"
    return (
      <img src={img} height={70} width={70} alt="whatsapp-icon" />
    )
  }
}

export default CustomerService