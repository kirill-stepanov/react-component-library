import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types'

import {
  // Container,
  // CardImage,
  // CardTitle,
  // CardInfo,
  // CardInfoText,
} from './Pagination.styles';

const Pagination = (props) => {
  const {
    itemsTotalCount = 20,
    itemsPerPage = 4,
  } = props;

  const data = [
    {"id":1,"name":"Anna-maria","email":"ajehaes0@vinaora.com"},
    {"id":2,"name":"Kenyon","email":"kvarfalameev1@wikimedia.org"},
    {"id":3,"name":"Twila","email":"tkelby2@amazon.com"},
    {"id":4,"name":"Rudd","email":"rcatling3@about.me"},
    {"id":5,"name":"Robby","email":"rbenini4@behance.net"},
    {"id":6,"name":"Viviyan","email":"vcurlis5@addtoany.com"},
    {"id":7,"name":"Gabriello","email":"gdaines6@purevolume.com"},
    {"id":8,"name":"Carter","email":"ckoubek7@wikipedia.org"},
    {"id":9,"name":"Berna","email":"bdimatteo8@umich.edu"},
    {"id":10,"name":"Marlow","email":"mhedditch9@usda.gov"},
    {"id":11,"name":"Corella","email":"cdiperausa@newsvine.com"},
    {"id":12,"name":"Cherida","email":"cstarkieb@vk.com"},
    {"id":13,"name":"Zackariah","email":"zbathoc@cam.ac.uk"},
    {"id":14,"name":"Orelee","email":"ogabitsd@msu.edu"},
    {"id":15,"name":"Alonzo","email":"aclaire@fc2.com"},
    {"id":16,"name":"Vonnie","email":"vkillbyf@cornell.edu"},
    {"id":17,"name":"Weidar","email":"wdeyesg@whitehouse.gov"},
    {"id":18,"name":"Cyb","email":"cternouthh@surveymonkey.com"},
    {"id":19,"name":"Melisent","email":"modayi@loc.gov"},
    {"id":20,"name":"Darbee","email":"djanecekj@stumbleupon.com"}
  ]
  
  const pagesCount = Math.ceil(itemsTotalCount / itemsPerPage);
  if (pagesCount === 1) return null;

  const [dataPerPage, setDataPerPage] = useState(data.slice(0, itemsPerPage))
  const [currentPage, setCurrentPage] = useState(1)

//   function NewArray(size) {
//     let array = [];
//     for (let i = 1; i <= size; i++) {
//       array.push(i)
//     }
//     return array;
//   }

  // const pagginationArray = NewArray(5);


  return (
    <div>
      {
        data.map((user) => (
          <div key={user.id}>
            {user.id}
            {user.name}
          </div>
        ))
      }

      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
      }}>
        ergerg
      </div>
    </div>
  );
}

export default Pagination