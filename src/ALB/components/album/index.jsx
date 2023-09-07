import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({ album }) {
    return (

        <div className='film-profile'>
            <div className='film-img'> <img src={album.picture} alt={album.name} /></div>

            <p className='film-title'>{album.name}</p>

        </div>

    );
}

export default Album;