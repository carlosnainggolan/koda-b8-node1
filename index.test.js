const { describe, it } = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const { generateMusicList, list } = require("./index");

describe("Testing generateMusicList directly using describe and it", () => {

    it("Case 1: Should create folders and files when they do not exist", (t, done) => {
        list.forEach((m) => {
            if (fs.existsSync(m.name)) {
                fs.rmdirSync(m.name, { recursive: true });
            }
        });
        generateMusicList(list);
        setTimeout(() => {
            list.forEach((m) => {
                assert.ok(fs.existsSync(m.name), `Folder ${m.name} harusnya dibuat`);

                m.songs.forEach((song) => {
                    const filePath = `./${m.name}/${song}.mp3`;
                    assert.ok(fs.existsSync(filePath), `File ${filePath} harusnya ada`);
                    fs.unlinkSync(filePath);
                });
                fs.rmdirSync(m.name);
            });
            done();
        }, 150);
    });

    it("Case 2: Should skip creation branch if folders already exist", () => {
        list.forEach((m) => {
            if (!fs.existsSync(m.name)) {
                fs.mkdirSync(m.name);
            }
        });
        generateMusicList(list);
        list.forEach((m) => {
            assert.ok(fs.existsSync(m.name));
            fs.rmdirSync(m.name);
        });
    });
});