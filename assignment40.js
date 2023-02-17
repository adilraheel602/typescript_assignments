"use strict";
// My name is M. Adil Raheel Dated: 16th Feb 2023
Object.defineProperty(exports, "__esModule", { value: true });
const album1 = {
    artistName: " ",
    albumTitle: " ",
};
let album2 = {
    artistName: " ",
    albumTitle: " ",
};
let album3 = {
    artistName: " ",
    albumTitle: " ",
    no_Of_Tracks: 0,
};
function make_album(album_copy, a, b, c) {
    album_copy = {
        artistName: a,
        albumTitle: b,
        no_Of_Tracks: c,
    };
    return album_copy;
}
console.log(make_album(album1, "Katty Perry", "Smile"));
console.log(make_album(album2, "Rihana", "Work Work"));
console.log(make_album(album2, "Wiz Khalifa", "Tell you about", 12));
// type musicAlbum= {
//     artistName: string,
//     albumTitle: string,
//     age: number,
//     teaching: boolean,
//     dob: Date;
//     certifications : string[],
// };
// function make_album(artist: string,album1: string ){
//     let album: musicAlbum;
//     album.artistName = artist;
//     album.albumTitle = album1;
//     return album
// };
// make_album("AtifAslam",)
