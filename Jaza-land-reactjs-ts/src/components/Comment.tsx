import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";


interface CommentProps{
  content:string;
  onDeleteComment: (comment: string)=>void;
}


export function Comment({content, onDeleteComment}:CommentProps) {


  const [likeCount, setlikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setlikeCount((state)=>{
      return state + 1
    });
  }
  return (
    <div className={styles.comment}>


      <Avatar hasBorder={false} src="https://github.com/jaazieljr.png" alt="" />


      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jaaziel Junior</strong>
              <time title="17 de julho às 21:28h" dateTime="2024-07-17 21:27">Cerca de 1h atrás </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar coentário">
              <Trash size={24}/>
            </button>

          </header>
          <p>{content}</p>

        </div>
        
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Curtir <span>{likeCount}</span>
          </button>
          </footer>
      </div>




    </div>
  )
}