import React from 'react'

const Musicplayer = (props) => {
    const {title, _id, audio_url, thumbnail} = props;
  return (
    <>
    <div>
    <div className="music_player" key={_id}>
        <img className="music_player_image" src={thumbnail}/>
        <div className="music_title" >{title}</div>
        <audio  controls src={audio_url}></audio>
        </div>
    </div>
    </>
  )
}

export default Musicplayer

