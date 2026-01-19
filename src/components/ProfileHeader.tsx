import '../styles/ProfileHeader.scss';
import profilePic from '../assets/profile.jpg'
export default function ProfileHeader() {
  const userName = "Sovanna"; 
  const greeting = "សួស្តី!"; 

  return (
    <div className="profile-header">
      <div className="background-overlay"></div>
      
      <div className="content">
        <div className="avatar">
         
          <img 
            src={profilePic}
            alt="User avatar" 
          />
        </div>
        
        <div className="greeting">
          <h2>{greeting}</h2>
          <p>{userName}</p>
        </div>
      </div>
    </div>
  );
}