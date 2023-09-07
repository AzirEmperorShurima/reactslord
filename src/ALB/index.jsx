import React from 'react';
// import PropTypes from 'prop-types';
import AlbumList from './components/list_album';

FilmList.propTypes = {

};

function FilmList(props) {
    const listfilm = [
        {
            id: 1,
            name: 'Mày nhìn cái chóa gì',
            picture: 'https://1.bp.blogspot.com/-uaKPT5xftTs/YbCmm_fGUFI/AAAAAAAAAtc/IYfgjh1AGMkoGgGBTmyWwRyLZhe2_ROvACNcBGAsYHQ/s0/anh-sex-1221-08193514-001.jpg',

        }, {
            id: 2,
            name: 'có làm thì mới có ăn',
            picture: 'https://pixabay.com/vi/photos/nh%E1%BB%AFng-b%C3%B4ng-hoa-%C4%91%E1%BB%93ng-c%E1%BB%8F-276014/'
        }, {
            id: 3,
            name: 'Anh bạn à',
            picture: 'https://pixabay.com/vi/photos/nh%E1%BB%AFng-b%C3%B4ng-hoa-%C4%91%E1%BB%93ng-c%E1%BB%8F-276014/'
        }, {
            id: 4,
            name: 'Anh em con c*c tình nghĩa xạo l*n',
            picture: 'https://pixabay.com/vi/photos/nh%E1%BB%AFng-b%C3%B4ng-hoa-%C4%91%E1%BB%93ng-c%E1%BB%8F-276014/'
        }
    ];
    const y = listfilm[1].name ;
    return (
        <div>
            <h2>Còn cái nịt (CoderLord) {y}</h2>
            
            <AlbumList albumList={listfilm} />
        </div>
    );
}

export default FilmList;