import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  // useEffect(() => {
  //   console.log("Like is updated",  like);
  // }, [like, disLike])

  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(disLike + 1);
  return (
    <div className="counter-container">
      <IconButton color="primary" aria-label="like-button" onClick={incrementLike}>
        <Badge color="primary" badgeContent={like}>👍</Badge>
      </IconButton>
      <IconButton aria-label="dislike-button" color="primary" onClick={incrementDisLike}>
        <Badge color="error" badgeContent={disLike}>👎</Badge>
      </IconButton>
    </div>
  );
}
