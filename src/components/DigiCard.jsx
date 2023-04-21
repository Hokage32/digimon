import React from 'react'

const DigiCard = ({digimon}) => {



    const digi = digimon.map((digimon) => {
        return (
        <div>
            <img className='digi-img' src={digimon.img} alt="" />
            <h4>{digimon.name}</h4>

        </div>)
       })

   


  return (
    <div className='card'>
        
        {digi}
    </div>
  )
}

export default DigiCard