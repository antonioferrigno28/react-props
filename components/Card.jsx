// Partendo dall'esercizio di ieri e dall'array di posts allegato, l'obiettivo è creare dinamicamente gli articoli all'interno della pagina.
//I dati relativi a ciascun post dovranno essere passati come props ai componenti.
// Ogni post ha una proprietà published, e gli articoli devono essere mostrati solo se questa proprietà è impostata su true.
// Assegnate colori diversi ai tag dei posts, ad esempio: verde per html, rosa per css, etc…
// Se un post non ha un'immagine, inserite un'immagine di default, potete utilizzare uno dei tanti servizi online come:
// https://placehold.co/
// https://picsum.photos/
// Aggiungi una sezione nella pagina in cui mostrare la lista dei tag distinti senza ripetizioni.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import placeholder from "../src/assets/img/placeholder.png";
import Button from "../components/Button/Button";
import { posts } from "../src/data/posts";

export default function Card() {
  const publishedPosts = posts.filter((post) => post.published);
  const uniqueTags = [];
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag);
      }
    });
  });
  return (
    <>
      <div className="tags-section text-center py-4">
        <h3 className="mb-3">Tags Disponibili</h3>
        <div className="d-flex justify-content-center flex-wrap">
          {uniqueTags.map((tag, index) => (
            <span key={index} className={`badge me-2 mb-2 tag-${tag} fs-2`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="row">
        {publishedPosts.map((post) => (
          <div className="col">
            <div className="card w-75 mx-auto my-2 shadow-lg" key={post.id}>
              <div>
                <img
                  className="card-img-top img-fluid"
                  src={post.image || placeholder}
                  alt={post.title}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fs-2">{post.title}</h5>
                <p className="card-text fs-5">{post.content}</p>

                <div className="tags my-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className={`badge me-2 tag-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-light bg-warning border-0 py-3 px-4">
                  LEGGI DI PIÙ
                </button>
                <Button />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
