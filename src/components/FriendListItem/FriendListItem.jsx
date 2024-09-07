import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.FriendListItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(css.FriendListItem__status, {
        [css.FriendListItem__statusOnline]: isOnline,
        [css.FriendListItem__statusOffline]: !isOnline,
      })}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  )
}

export default FriendListItem;