import React from 'react';
import PropTypes from 'prop-types';
import Album from '../album';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};
AlbumList.defaultProps = {
    albumList: [],
}

function AlbumList({albumList}) {
    return (

        <ul className='al-li'>
            {
                albumList.map(album => (
                    <li key={album.id}>
                        <Album album={album} />
                    </li>
                ))
            }
        </ul>


    );
}

export default AlbumList;