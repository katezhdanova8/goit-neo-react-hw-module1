import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.FriendList}>
      {friends.map((friend) => 
        <FriendListItem 
          key={friend.id} 
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      )}
    </ul>
  )
}

export default FriendList