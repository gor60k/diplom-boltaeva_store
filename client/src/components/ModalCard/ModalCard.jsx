import React from 'react'
import { ButtonComponent } from '../ButtonComponent'

export const ModalCard = () => {
  return (
    <>
    
      <div className="modal_card">
          <ButtonComponent text={'кнопка'} onClick={() => {console.log(123)}} />
      </div>

    </>
  )
}
