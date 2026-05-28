const fs = require("node:fs");

/**
 * Daftar musik dengan struktur nama band dan lagu-lagunya.
 * @type {Array<{id: number, name: string, songs: string[]}>}
 */
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

/**
 * Fungsi untuk membuat folder dan file lagu berdasarkan list yang diberikan.
 * @param {Array} list - Array of music objects, each containing a name and an array of songs.
 * @return {Array} - Mengembalikan list yang sama setelah proses pembuatan folder dan file selesai.
 */
function generateMusicList (list) {
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
  return list;
}

if (require.main === module) {
  generateMusicList(list);
}

module.exports = { generateMusicList, list };
