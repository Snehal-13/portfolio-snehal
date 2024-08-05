import React from 'react'

const FillButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string; icon : React.ReactNode, position:
    string; handleClick?: () => void; otherClasses?:string;
}) => {
  return (
<button className="p-[3px] relative z-10">
  <div className="absolute inset-0 bg-gradient-to-tl from-[#CBACF9] to-[#5C1CB2] rounded-lg" />
  <div className="px-8 py-2 rounded-[6px] flex flex-row gap-3  relative group transition duration-200 text-white hover:bg-black">
  {position === 'left' && icon}
        {title}
        <span className='pt-1'>{position === 'right' && icon}</span>
  </div>
</button>
  )
}

export default FillButton