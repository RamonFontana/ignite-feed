import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({ comment, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    function handleLikeCommnet() {
        setLikeCount(likeCount+1)
    }
    
    function handleDeleteComment () {
        onDeleteComment(comment)
    }
    
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/RamonFontana.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Fulano Beltrano</strong>
                            <time title="11 de maio as 11:13" dateTime='2022-05-11 00:13:30'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{ comment }</p>
                </div>

                <footer>
                    <button onClick={handleLikeCommnet}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}