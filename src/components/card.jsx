import profileThumbnail from '../assets/react.svg'

const Card= ({imgUrl, userName, testimony})=>{
    return(
        <div className='w-[340px] top-[240px] rounded-md border-solid shadow-md p-[24px]'>
            <div className='flex gap-x-4'>
                <img src={imgUrl || profileThumbnail} alt='user profile photo' className="w-[48px] h-[48px] rounded-full"/>
                <h3>{userName}</h3>
            </div>
            <div>
                <p className='mt-[16px] text-wrap turncate'>{testimony}</p>
            </div>
        </div>
    )
}

export default Card