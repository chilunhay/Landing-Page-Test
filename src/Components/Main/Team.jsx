import React from 'react';
import './Team.css';
import HeadText from '../HeadText/HeadText';
import TeamImage1 from '../../Assets/team-image-1.png';
import TeamImage2 from '../../Assets/team-image-2.png';
import TeamImage3 from '../../Assets/team-image-3.png';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Team = () => {
  const teamData = [
    {
      image: TeamImage1,
      name: 'Alison Kiara',
      address: 'Michigan, TX',
      phone: '989-653-2986',
      mail: 'alisonkiara@hommy.com',
    },
    {
      image: TeamImage2,
      name: 'Dianne Sabin',
      address: 'New Jeresy, TX',
      phone: '989-653-2550',
      mail: 'hidianne@hommy.com',
    },
    {
      image: TeamImage3,
      name: 'Shawn Ramirez',
      address: 'Illinois, NZ',
      phone: '989-653-2986',
      mail: 'iamrami@hommy.com',
    },
  ];
  return (
    <div className="team-container">
      <div className="team-text-container">
        <HeadText head="Our Featured Agents" text="Meet our amazing team members" />
      </div>

      <div className="team-content-container">
        {teamData.map((data, key) => (
          <div className="team-info-boxes" key={key}>
            <div className="team-info">
              <span className="team-star-icon">
                <StarOutlineOutlinedIcon />
              </span>
              <span className="team-more-icon">
                <MoreVertOutlinedIcon />
              </span>
              <div className="team-info-content">
                <div className="team-info-boxes-img-container">
                  <img className="team-info-image" src={data.image} alt={data.image} />
                </div>
                <div className="team-info-name">{data.name}</div>
                <div className="team-info-address">{data.address}</div>
                <div className="team-info-contact-section">
                  <div className="team-info-phone">{data.phone}</div>
                  <div className="team-info-mail">{data.mail}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
