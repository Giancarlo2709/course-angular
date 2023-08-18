interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Giancarlo Yarlequé",
        year: 2023
    }
}

const song = 'New Song';
// Desestructuración
const { song: anothersong, songDuration: duration, details } = audioPlayer;
const { author } = details;

console.log('Song: ', anothersong);
console.log('Duration: ', duration);
console.log('Author: ', author);

const dbz: string[] = ['Goku', 'Vegueta', 'Trunks'];
const dbz2: string[] = ['Goku', 'Vegueta'];

//const trunks = dbz[3] || 'No hay personaje';


const [p1, p2, trunks3] = dbz;
const [, , trunks] = dbz;
const[, , trunks2 = 'Not found'] = dbz2;

console.log('Personaje 3: ', trunks);
console.log('Personaje 3: ', trunks2);


export {};