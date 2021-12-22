const baseset = [
  { id: 1, path: "/baseset/bulbasaur-base-set-bs-44.jpeg" },
  { id: 2, path: "/baseset/ivysaur-base-set-bs-30.jpeg" },
  { id: 3, path: "/baseset/venusaur-base-set-bs-15.jpeg" },
  { id: 4, path: "/baseset/squitle-base-set-bs-63.jpeg" },
  { id: 5, path: "/baseset/wartortle-base-set-bs-42.jpeg" },
  { id: 6, path: "/baseset/blastoise-base-set-bs-2.jpeg" },
  { id: 7, path: "/baseset/blastoise-base-set-bs-2.jpeg" },
  { id: 8, path: "/baseset/charmander-base-set-bs-46.jpeg" },
  { id: 9, path: "/baseset/charmeleon-base-set-bs-24.jpeg" },
  { id: 10, path: "/baseset/charizard-base-set-bs-4.jpeg" },
  { id: 11, path: "/baseset/pickachu-base-set-bs-58.jpeg" },
  { id: 12, path: "/baseset/mewtwo-base-set-bs-10.jpeg" },
];

export function getBaseSet() {
  return (
    <>
      {baseset.map((card) => {
        <img src={card.path} key={card.id} />;
      })}
    </>
  );
}
