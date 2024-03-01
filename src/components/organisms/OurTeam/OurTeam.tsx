import { useEffect, useState } from 'react'
import { Circle } from '../../../assets/Circle'
import './OurTeam.styles.css'

const OurTeam = () => {
    const [team, setTeam] = useState<{ name: string, current_position: string, img?: string }[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/team')
      .then(response => response.json())
      .then(data => setTeam(data));
  }, []);

  const currentItems = team.slice();

  return(
  <div className='our-team'>
    <div className='our-team__container'>
      <h1 className='our-team__title'>
        Our team
      </h1>
      <div className='our-team__list'>
        {currentItems.map((team, index) => (
          <div key={index} className='team-member'>
            <img src={team.img ? team.img : "/non_image.png"} alt={team.name} className='team-member__img' />
            <div className='team-member__info'>
              <span className='team-member__name'>{team.name}</span>
              <span className='team-member__position'>{team.current_position}</span>
          </div>
          </div>
          ))}
      </div>
      <div className='our-team__decoration'>
        <Circle radius={343} filled={true} color='#F14F4F' className='circle circle--filled' />
        <Circle radius={322} className='circle circle--outlined' />
      </div>
    </div>
  </div>
)
}

export default OurTeam
