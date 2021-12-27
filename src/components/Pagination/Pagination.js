import React, { useState } from 'react';

import PropTypes from 'prop-types'

import PaginationArrowLeft from '../../assets/icons/pagination-arrow-left'
import PaginationArrowRight from '../../assets/icons/pagination-arrow-right'

import {
  PaginationList,
  PaginationListItem,
  PaginationListItemText,
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

  Pagination.propTypes = {
    itemsTotalCount: PropTypes.number,
    itemsPerPage: PropTypes.number,
  }

  const pagesCount = Math.ceil(itemsTotalCount / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1)

  let array = []

  for (let i = 1; i <= pagesCount; i++) {
    array.push(i)
  }

  let newData = data.slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage)

  const increaseCurrentPage = () => {
    if(currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  const decreaseCurrentPage = () => {
    if(currentPage !== pagesCount) setCurrentPage(currentPage + 1)
  }

  return (
    <>
      {
        newData.map((user) => (
          <div
            key={user.id}
            style={{
              fontFamily: 'ProximaNova-Medium',
              fontSize: '14px',
              lineHeight: '22px',
            }}
          >
            {user.id}-{user.name}
          </div>
        ))
      }

      <PaginationList>
        <PaginationListItem onClick={increaseCurrentPage}>
          <PaginationArrowLeft />
        </PaginationListItem>

        {
          array.map((item, index) => 
            <PaginationListItem
              key={index}
              isActive={currentPage === item}
              onClick={() => setCurrentPage(item)}
            >
              <PaginationListItemText>{item}</PaginationListItemText>
            </PaginationListItem>
          )
        }

        <PaginationListItem onClick={decreaseCurrentPage}>
          <PaginationArrowRight />
        </PaginationListItem>
      </PaginationList>
    </>
  );
}

export default Pagination