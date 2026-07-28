// user card
const UserCard = ({ user: {name, role, skills = ['html', 'css', 'js'], bio} }) => {
  return (
    <div className='user-card'>
      {/* <img src={profileImg} alt="Surakshya Khatri" className="profile-img" /> */}
      <h2 className="user-name">{name}</h2>
      <p className="user-role">{role}</p>
      <p className="user-bio">{bio}</p>
      <p className="user-skills">{skills.join()}</p>
      <button className="btn-follow">Follow</button>
    </div>
  );
};

export default UserCard;