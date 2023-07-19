import React from 'react'
import { styled } from 'styled-components'
import notelogo from '../assets/note.svg'



function Note({children}) {
  return (
    <NoteDivSt>
        <NoteHdSt>
            <img src={notelogo} alt="note" />
            <NoteHP>შენიშვნა</NoteHP>
        </NoteHdSt>
        {children}
    </NoteDivSt>
  )
}

export const NoteDivSt = styled.div`
    margin-top: 6rem;
    background-color: #f4fbf9;
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
`

export const NoteHdSt = styled.div`
    display: flex;
`
export const NoteHP = styled.p`
  color: rgb(68, 172, 153);
  font-weight: 700;
  font-size: 2.4rem;
  margin-left: 1.5rem;
`
export const NoteP = styled.p`
  margin-top: 1rem;
  padding: 1.5rem;
  font-size: 1.5rem;
`



export default Note