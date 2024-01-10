import React from 'react'

export default function MyTextbox(props) {
  return (
    <div>
        <div>{props.label}</div>
          <input disabled={props.disabled} type={props.type} placeholder={props.placeholder} className={`bg-[#ececec] placeholder-black ${props.width} h-[40px] px-2 rounded-md`} onChange={props.onChange} />
    </div>
  )
}
