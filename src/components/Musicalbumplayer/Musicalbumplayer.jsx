import React from 'react'

const Musicalbumplayer = (props) => {
    const { _id, artists,image,songs,title} = props;
    console.log('Musicalbumplayer',_id,artists,image,songs,title);
  return (
    <div>
        <div className="music_player" key={_id}>
        <img className="music_player_image" src={image}/>
        <div className="music_title" >{title}</div>
        <audio  controls src={audio_url}></audio>
        </div>
    </div>
  )
}

export default Musicalbumplayer