// user card
const UserCard = () => {
  return (
    <div className='user-card'>
      <img src={profileImg} alt="Surakshya Khatri" className="profile-img" />
      <h2 className="user-name">Surakshya Khatri</h2>
      <p className="user-role">Frontend Developer</p>
      <p className="user-bio">Learning HTML, CSS, React for develop website</p>
      <button className="btn-follow">Follow</button>
    </div>
  );
};

export default UserCard;