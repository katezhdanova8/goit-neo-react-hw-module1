import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.Profile}>
      <div className={css.Profile__main}>
        <img
          className={css.Profile__img}
          src={image}
          alt='User avatar'
        />
        <p className={css.Profile__name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.Profile__info}>
        <li className={css.Profile__infoItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.Profile__infoItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.Profile__infoItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}

export default Profile