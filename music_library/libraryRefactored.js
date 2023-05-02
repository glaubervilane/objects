const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists: function() {
    for (const playlist of Object.values(library.playlists)) {
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },
  printTracks: function() {
    for (const track of Object.values(library.tracks)) {
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },
  printPlaylist: function(playlistId) {
    const playlist = library.playlists[playlistId];
    const tracks = playlist.tracks;
    const playlistName = playlist.name;
    const numTracks = tracks.length;
    console.log(`${playlistId}: ${playlistName} - ${numTracks} tracks`);
    for (let trackId of tracks) {
      const track = library.tracks[trackId];
      const trackName = track.name;
      const trackArtist = track.artist;
      const trackAlbum = track.album;
      console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`);
    }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    const playlist = library.playlists[playlistId];
    playlist.tracks.push(trackId);
    console.log(`Added "${library.tracks[trackId].name}" to playlist "${playlist.name}".`);
  },
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function(name, artist, album) {
    const id = 't' + generateUid(); // use the generated ID instead of incrementing the length of the tracks array
    library.tracks[id] = {
      id: id,
      name: name,
      artist: artist,
      album: album
    };
  },
  addPlaylist: function(name) {
    const playlistId = 'p' + (Object.keys(library.playlists).length + 1);
    library.playlists[playlistId] = {
      id: playlistId,
      name: name,
      tracks: []
    };
  },
  printSearchResults: function(query) {
    const tracks = Object.values(library.tracks);
  
    const matchingTracks = tracks.filter(function(track) {
      const nameMatches = track.name.toLowerCase().includes(query.toLowerCase());
      const artistMatches = track.artist.toLowerCase().includes(query.toLowerCase());
      const albumMatches = track.album.toLowerCase().includes(query.toLowerCase());
  
      return nameMatches || artistMatches || albumMatches;
    });
  
    console.log(`Search results for query "${query}":`);
    if (matchingTracks.length > 0) {
      matchingTracks.forEach(function(track) {
        console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
      });
    } else {
      console.log("No matching tracks found.");
    }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
//Test debugging: printPlaylists()
console.log("Testing printPlaylists:");
library.printPlaylists();  // Expects:
/*
p01: Coding Music - 2 tracks
p02: Other Playlist - 1 tracks
*/


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
//Test debugging: printTracks()
console.log("Testing printTracks:");
library.printTracks();  // Expects:
/*
t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
t02: Model View Controller by James Dempsey (WWDC 2003)
t03: Four Thirty-Three by John Cage (Woodstock 1952)
*/

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
//Test debugging: printPlaylist("p01")
console.log("Testing printPlaylist:");
library.printPlaylist;  // Expects:
/*
p01: Coding Music - 2 tracks
t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
t02: Model View Controller by James Dempsey (WWDC 2003)
*/
library.printPlaylist("p02");  // Expects:
/*
p02: Other Playlist - 1 tracks
t03: Four Thirty-Three by John Cage (Woodstock 1952)
*/


// adds an existing track to an existing playlist
//Test debugging: addTrackToPlaylist('t01', 'p01')
console.log("Testing addTrackToPlaylist:");
library.addTrackToPlaylist('t01', 'p02');  // Expects: Added "Code Monkey" to playlist "Other Playlist".
library.printPlaylist("p02");  // Expects:
/*
p02: Other Playlist - 2 tracks
t03: Four Thirty-Three by John Cage (Woodstock 1952)
t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
*/

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

// adds a track to the library
// Tests for addTrack
console.log("Testing addTrack:");
library.addTrack("Test Track", "Test Artist", "Test Album");
library.printTracks();  // Expects:
/*
t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
t02: Model View Controller by James Dempsey (WWDC 2003)
t03: Four Thirty-Three by John Cage (Woodstock 1952)
t04: Test Track by Test Artist (Test Album)
*/

// adds a playlist to the library
// Tests for addPlaylist
console.log("Testing addPlaylist:");
library.addPlaylist("Test Playlist");
library.printPlaylists();  // Expects:
/*
p01: Coding Music - 2 tracks
p02: Other Playlist - 2 tracks
p03: Test Playlist - 0 tracks
*/

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
console.log("Testing printSearchResults:");
library.printSearchResults("John");  // Expects:
/*
Search results for query "John":
t03: Four Thirty-Three by John Cage (Woodstock 1952)
*/
library.printSearchResults("Model");  // Expects:
/*
Search results for query "Model":
t02: Model View Controller by James Dempsey (WWDC 2003)
*/
library.printSearchResults("test");  // Expects:
/*
Search results for query "test":
t04: Test Track by Test Artist (Test Album)
p03: Test Playlist - 0 tracks
*/
library.printSearchResults("Invalid Query");  // Expects:
/*
Search results for query "Invalid Query":
No matching tracks found.
*/