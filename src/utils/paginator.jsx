import React, {useState} from "react";
import s from '../profile/users/users.module.css';

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionLeftNumber = (portionNumber - 1) * props.pageSize + 1;
  let rigthPortionLeftNumber = portionNumber * props.pageSize;
  if (props.currentPage < leftPortionLeftNumber || props.currentPage > rigthPortionLeftNumber) {props.onPageChanged(leftPortionLeftNumber)};
  let pages =[];
  for(let i = 1; i <= pagesCount; i++) { pages.push(i); }
  return (
    <div>
      { portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button> }
			{pages
        .filter(p => p >= leftPortionLeftNumber && p<=rigthPortionLeftNumber)
        .map(p => { return <button key={p} className={props.currentPage === p && s.selectedPage}
					onClick={() => { props.onPageChanged(p) }}>{p}</button>
			})}
      { pagesCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
		</div>
  )
}


export default Paginator;