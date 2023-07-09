import { useState } from "react"

export function FollowCard({ username, name, isFollowing = false }: { username: string, name: string, isFollowing?: boolean }) {
  const [follow, setfollow] = useState(isFollowing)
  const src = `https://unavatar.io/${username}`
  const optionText = follow ? { text: "Siguiendo", class: "is-Following" } : { text: "Seguir" }

  const changeFollow = () => {
    setfollow(!follow)
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={src} alt="Prueba"></img>
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span> @{username}</span>
        </div>
      </header>

      <aside>
        <button className={`tw-followCard-button ${optionText.class}`} onClick={changeFollow}>
          {optionText.text}
        </button>
      </aside>
    </article>
  )
}