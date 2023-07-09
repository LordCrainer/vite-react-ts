export function FollowCard({ username, name }: { username: string, name: string }) {
  const src = "https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
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
        <button className="tw-followCard-button">
          Seguir
        </button>
      </aside>
    </article>
  )
}