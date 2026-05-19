const fs = require("node:fs");
const list = [
    {
        id: 1,
        name: "Sheila on 7",
        songs: ["Dan", "Kisah Klasik", "Seberapa Pantas", "Melompat Lebih Tinggi", "Hari Bersamanya"],
    },
    {
        id: 2,
        name: "Peterpan",
        songs: ["Mimpi Yang Sempurna", "Ku Katakan Dengan Indah", "Ada Apa Denganmu", "Mungkin Nanti", "Khayalan Tingkat Tinggi"],
    },
    {
        id: 3,
        name: "Dewa 19",
        songs: ["Kangen", "Pupus", "Separuh Nafas", "Arjuna", "Kamulah Satu-Satunya"],
    },
];

list.forEach((m) => {
  console.log(m.name);

  if (!fs.existsSync(m.name)) {
    fs.mkdirSync(m.name);
  }

  m.songs.forEach((list) => {
    console.log(list);
    fs.writeFile(`./${m.name}/${list}.mp3`, m.name, "utf8", (err) => {
      if (!err) {
        console.log("Berhasil");
      }
    });
  });
});