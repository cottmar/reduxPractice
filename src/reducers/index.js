import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05'},
        { title: 'Macarena', duration: '2:30'},
        { title: 'Spice Up Your Life', duration: '3:30'},
        { title: 'I Want it That Way', duration: '2:55'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});