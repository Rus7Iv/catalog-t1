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
  <div className='ourTeam'>
    <div className='ourTeam-container'>
      <h1 className='ourTeam-title'>
        Our team
      </h1>
      <div className='ourTeam-list'>
        {currentItems.map((team, index) => (
          <div key={index} className='team-member'>
            <img src={team.img ? team.img : "/non_image.png"} alt={team.name} className='team-member-img' />
            <div className='team-info'>
              <span className='team-name'>{team.name}</span>
              <span className='team-current_position'>{team.current_position}</span>
          </div>
          </div>
          ))}
      </div>
      <div className='ourTeam-decoration'>
        <Circle radius={343} filled={true} color='#F14F4F' className='ourTeam-circle--filled' />
        <Circle radius={322} className='ourTeam-circle--outlined' />
      </div>
    </div>
  </div>
)
}

export default OurTeam
