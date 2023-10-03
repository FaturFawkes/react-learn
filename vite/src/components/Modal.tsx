import React, { Component } from "react";

interface Props {
  id: string;
  handleModal: boolean;
  children?: React.ReactNode;
}
export class Modal extends Component<Props> {
  render() {
    const { id, handleModal, children } = this.props;
    return (
      <>
        {handleModal ? (
          <div id={id} className="w-60 h-40 bg-white rounded-md shadow-md">
            <div>
              {children}
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Modal;
