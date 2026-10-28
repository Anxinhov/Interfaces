// RETO 1 · Dividir unha lista en dúas
//
// Agora móstranse todas as linguaxes nunha única lista.
// Cambia o compoñente para que se vexan dúas listas, unha despois da outra:
//   1. "Interpretadas": as que teñen tipo === "interpretada".
//   2. "Outras": todas as demais.
//
// Como usalo: copia este código en src/App.jsx.
// Comproba que non hai avisos na consola do navegador.

// const linguaxes = [
//   { id: 0, nome: "JavaScript", tipo: "interpretada", ano: 1995 },
//   { id: 1, nome: "Java", tipo: "compilada", ano: 1995 },
//   { id: 2, nome: "Python", tipo: "interpretada", ano: 1991 },
//   { id: 3, nome: "C", tipo: "compilada", ano: 1972 },
//   { id: 4, nome: "PHP", tipo: "interpretada", ano: 1995 },
//   { id: 5, nome: "Go", tipo: "compilada", ano: 2009 },
// ];

// export default function App() {
//   const Interpretadas = linguaxes.filter((linguaxe) =>linguaxe.tipo == "interpretada").map((linguaxe) => (
//     <li key={linguaxe.id}>
//       <b>{linguaxe.nome}</b> ({linguaxe.tipo}, {linguaxe.ano})
//     </li>
//   ))
//   const Compiladas = linguaxes.filter((linguaxe) =>linguaxe.tipo == "compilada").map((linguaxe) => (
//     <li key={linguaxe.id}>
//       <b>{linguaxe.nome}</b> ({linguaxe.tipo}, {linguaxe.ano})
//     </li>
//   ))

//   return (
//     <article>
//       <h1>Linguaxes de programación</h1>
//       <h2>Interpretadas</h2>
//       <ul>{Interpretadas}</ul>
//       <h2>Compiladas</h2>
//       <ul>{Compiladas}</ul>
//     </article>
//   );
// }

// RETO 2 · Listas aniñadas nun só compoñente
//
// Cada playlist ten un array de cancións, pero agora só se mostra o seu nome.
// Cambia o compoñente para que debaixo de cada nome apareza a lista das súas cancións.
//
// Como usalo: copia este código en src/App.jsx.
// Comproba que non hai avisos na consola do navegador.

const playlists = [
  {
    id: 1,
    nome: "Para estudar",
    cancions: ["Mañá de luns", "Bosque de cores", "Cafeteira"],
  },
  {
    id: 2,
    nome: "Para correr",
    cancions: ["Tren de medianoite", "Ritmo de présa", "Costa arriba", "Meta"],
  },
  {
    id: 3,
    nome: "Para cociñar",
    cancions: ["Sal e pementa", "Lume lento"],
  },
];

export default function App() {
  const elementos = playlists.map((playlist) => (
    <section key={playlist.id}>
      <h2>{playlist.nome}</h2>
      <ul>{playlist.cancions.map((cancion) => <li key={cancion}>{cancion}</li>)}</ul>
    </section>
  ));

  return (
    <article>
      <h1>As miñas playlists</h1>
      {elementos}
    </article>
  );
}