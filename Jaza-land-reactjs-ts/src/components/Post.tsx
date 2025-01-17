

import styles from './Post.module.css';

import { format, formatDistanceToNow } from 'date-fns';
import { Comment } from "./Comment";
import { Avatar } from './Avatar';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';
import { ptBR } from 'date-fns/locale';



interface Author{
  name: string;
  role: string;
  avatarUrl: string;
}


interface Content{
  type:string;
  content:string;
}

interface PostProps{
  author: Author;
  publishedAt: Date;
  content : Content[];

}


export function Post({ author, publishedAt, content }: PostProps) {



  const [comments, setComments] = useState([
    'Post muito bacana'
  ])



  const [newCommentText, setNewCommentText] = useState('')




  const publishedDateFormatted = format(

    publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale:ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNmewComment(event:FormEvent) {
    event.preventDefault()


    setComments([...comments, newCommentText]);
    setNewCommentText('')

  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }


  function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commenttoDelete:string) {
    const commentsWithoutDeleteOne = comments.filter(comment=>{
      return comment != commenttoDelete
    })
    setComments(commentsWithoutDeleteOne);



  }
  const isNewCommentEmpty = newCommentText.length==0;
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
          />


          <div className={styles.authorInfo}>
            <strong>{
             
              author.name}
            </strong>
            <span>{
              
              author.role
            }</span>
          </div>
        </div>

        <time title={publishedDateFormatted}
          
          dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          
          content.map(line => {
            if (line.type == 'paragraph') {
             
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type == 'link') {
            
              return <p key={line.content}><a href="">{line.content}</a></p>;
            }
          })}
      </div>

      <form onSubmit={handleCreateNmewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>



        <textarea name='comment'
          placeholder="Deixe seu comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />



        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
            </button>
        </footer>




      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
         
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        }

        )}

      </div>

    </article>
  )
}