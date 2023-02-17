// My name is M. Adil Raheel Dated: 16th Feb 2023

type musicAlbum= {
    artistName:  string,
    albumTitle: string,
    no_Of_Tracks?: number,
}

const album1: musicAlbum={
    artistName:" ",
    albumTitle: " ",
};
let album2: musicAlbum ={
    artistName:" ",
    albumTitle: " ",
};
let album3: musicAlbum={
    artistName:" ",
    albumTitle: " ",
    no_Of_Tracks: 0,
};


function make_album(album_copy:object, a: string, b: string, c?: number){
    album_copy={
        artistName:a,
        albumTitle: b,
        no_Of_Tracks: c,
    }
    return album_copy;
}



console.log(make_album(album1, "Katty Perry", "Smile"));
console.log(make_album(album2, "Rihana", "Work Work"));
console.log(make_album(album2, "Wiz Khalifa", "Tell you about", 12));

export{}




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