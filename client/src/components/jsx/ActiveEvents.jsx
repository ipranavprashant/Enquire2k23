import React, { useState } from 'react';
import '../styles/Events.css';
import '../styles/Heading.css'
import EventCard from './EventCard';
import EventDetailsModal from './EventDetailsModal';

const ActiveEvents = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventCardClick = (event) => {
        setSelectedEvent(event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    const eventCards = [
        {
            id: 1,
            title: 'Adizya',
            venueName: 'ELHC 201',
            venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
            streetAddress: 'NIT Calicut Campus',
            locality: 'Kattangal, Kozhikode, Kerala',
            imageUrl: `${process.env.PUBLIC_URL}/assets/events/adizya/banner.jpg`,
            date: 'dd-mm-yyyy',
            time: 'hh:mm',
            detailsLink: 'https://example.com/details1',
            registerLink: '/registration-panel/adizya',
        },
        // {
        //     id: 2,
        //     title: 'Akashvani',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/Akashvani/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details2',
        //     registerLink: '/registration-panel/akashvani',
        // },
        // {
        //     id: 3,
        //     title: 'Aloha',
        //     venueName: 'ELHC 201',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/aloha/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details3',
        //     registerLink: '/registration-panel/aloha',
        // },
        // Event 4
        // {
        //     id: 4,
        //     title: 'Answer The World',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/answertheworld/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details4',
        //     registerLink: '/registration-panel/answertheworld',
        // },
        // // Event 5
        // {
        //     id: 5,
        //     title: 'Bazinga',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/bazinga/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details5',
        //     registerLink: '/registration-panel/bazinga',
        // },
        // // Event 6
        // {
        //     id: 6,
        //     title: 'Beatles',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/beatles/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details6',
        //     registerLink: '/registration-panel/beatles',
        // },
        // // Event 7
        // {
        //     id: 7,
        //     title: 'Boomerang',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/boomerang/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details7',
        //     registerLink: '/registration-panel/boomerang',
        // },
        // // Event 8
        // {
        //     id: 8,
        //     title: 'Casuals',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/casuals/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details8',
        //     registerLink: '/registration-panel/casuals',
        // },
        // // Event 9
        // {
        //     id: 9,
        //     title: 'Chaipe Challenge',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/chaipechallenge/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details9',
        //     registerLink: '/registration-panel/chaipechallenge',
        // },
        // // Event 10
        // {
        //     id: 10,
        //     title: 'Club House',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/clubhouse/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details10',
        //     registerLink: '/registration-panel/clubhouse',
        // },
        // // Event 11
        // {
        //     id: 11,
        //     title: 'Clueless',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/clueless/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details11',
        //     registerLink: '/registration-panel/clueless',
        // },
        // // Event 12
        // {
        //     id: 12,
        //     title: 'Cross Roads',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/crossroads/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details12',
        //     registerLink: '/registration-panel/crossroads',
        // },
        // // Event 13
        // {
        //     id: 13,
        //     title: 'Enquesta',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/enquesta/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details13',
        //     registerLink: '/registration-panel/enquesta',
        // },
        // Event 14
        // {
        //     id: 14,
        //     title: 'Enquire Quiz League',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/eql/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details14',
        //     registerLink: '/registration-panel/enquirequizleague',
        // },
        // Event 15
        // {
        //     id: 15,
        //     title: 'Friends',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/friends/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details15',
        //     registerLink: '/registration-panel/friends',
        // },
        // // Event 16
        // {
        //     id: 16,
        //     title: 'Game of Stones',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/gameofstones/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details16',
        //     registerLink: '/registration-panel/gameofstones',
        // },
        // // Event 17
        // {
        //     id: 17,
        //     title: 'Good Great Awesome',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/ggg/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details17',
        //     registerLink: '/registration-panel/goodgreatawesome',
        // },
        // // Event 18
        // {
        //     id: 18,
        //     title: 'Guess who?',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/guesswho2k20/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details18',
        //     registerLink: '/registration-panel/guesswho',
        // },
        // // Event 19
        // {
        //     id: 19,
        //     title: 'Hatrick',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/hatrick2k20/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details19',
        //     registerLink: '/registration-panel/hatrick',
        // },
        // // Event 20
        // {
        //     id: 20,
        //     title: 'House of Cards',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/houseofcards2k20/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details20',
        //     registerLink: '/registration-panel/houseofcards',
        // },
        // // Event 21
        // {
        //     id: 21,
        //     title: 'Improvision',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/improvision2k20/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details21',
        //     registerLink: '/registration-panel/improvision',
        // },
        // // Event 22
        // {
        //     id: 22,
        //     title: 'Kryptex',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/kryptex2k21/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details22',
        //     registerLink: '/registration-panel/kryptex',
        // },
        // // Event 23
        // {
        //     id: 23,
        //     title: 'Literary Quiz',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/litrerary/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details23',
        //     registerLink: '/registration-panel/literaryquiz',
        // },
        // Event 24
        {
            id: 24,
            title: 'Mela',
            venueName: 'NLHC 404',
            venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
            streetAddress: 'NIT Calicut Campus',
            locality: 'Kattangal, Kozhikode, Kerala',
            imageUrl: `${process.env.PUBLIC_URL}/assets/events/mela/banner.jpg`,
            date: 'dd-mm-yyyy',
            time: 'hh:mm',
            detailsLink: 'https://example.com/details24',
            registerLink: '/registration-panel/mela',
        },
        // Event 25
        // {
        //     id: 25,
        //     title: 'Mission Control',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/missioncontrol/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details25',
        //     registerLink: '/registration-panel/missioncontrol',
        // },
        // // Event 26
        // {
        //     id: 26,
        //     title: 'Open Mela',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/openmela/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details26',
        //     registerLink: '/registration-panel/openmela',
        // },
        // // Event 27
        // {
        //     id: 27,
        //     title: 'Parkour',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/parkour/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details27',
        //     registerLink: '/registration-panel/parkour',
        // },
        // Event 28
        // {
        //     id: 28,
        //     title: 'Pragyan',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/pragyan2/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details28',
        //     registerLink: '/registration-panel/pragyan',
        // },
        // Event 29
        // {
        //     id: 29,
        //     title: 'Prahelika',
        //     venueName: 'NLHC 404',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/prahelika/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details29',
        //     registerLink: '/registration-panel/prahelika',
        // },
        // // Event 30
        // {
        //     id: 30,
        //     title: 'Qflix',
        //     venueName: 'ELHC 201',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/Qflix2k21/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details30',
        //     registerLink: '/registration-panel/qflix',
        // },
        // Event 31
        // {
        //     id: 31,
        //     title: 'Queerious',
        //     venueName: 'ELHC 201',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/queerios/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details31',
        //     registerLink: '/registration-panel/queerious',
        // },
        // Event 32
        {
            id: 32,
            title: 'Quizmas',
            venueName: 'ELHC 201',
            venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
            streetAddress: 'NIT Calicut Campus',
            locality: 'Kattangal, Kozhikode, Kerala',
            imageUrl: `${process.env.PUBLIC_URL}/assets/events/quizmas/banner.jpg`,
            date: 'dd-mm-yyyy',
            time: 'hh:mm',
            detailsLink: 'https://example.com/details32',
            registerLink: '/registration-panel/quizmas',
        },
        // Event 33
        // {
        //     id: 33,
        //     title: 'Quriozity',
        //     venueName: 'ELHC 201',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/quriozity2k20/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details33',
        //     registerLink: '/registration-panel/quriozity',
        // },
        // // Event 34
        // {
        //     id: 34,
        //     title: 'Ready Player One?',
        //     venueName: 'ELHC 201',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/readyplayerone/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details34',
        //     registerLink: '/registration-panel/readyplayerone',
        // },
        // Event 35
        // {
        //     id: 35,
        //     title: 'Reverse',
        //     venueName: 'ELHC 201',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/reverse2k20/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details35',
        //     registerLink: '/registration-panel/reverse',
        // },
        // Event 36
        {
            id: 36,
            title: 'Rewind',
            venueName: 'ELHC 201',
            venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
            streetAddress: 'NIT Calicut Campus',
            locality: 'Kattangal, Kozhikode, Kerala',
            imageUrl: `${process.env.PUBLIC_URL}/assets/events/rewind2k21/banner.jpg`,
            date: 'dd-mm-yyyy',
            time: 'hh:mm',
            detailsLink: 'https://example.com/details36',
            registerLink: '/registration-panel/rewind',
        },
        // Event 37
        // {
        //     id: 37,
        //     title: 'Roar',
        //     venueName: 'ELHC 201',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/roar/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details37',
        //     registerLink: '/registration-panel/roar',
        // },
        // Event 38
        {
            id: 38,
            title: 'Samasya',
            venueName: 'ELHC 201',
            venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
            streetAddress: 'NIT Calicut Campus',
            locality: 'Kattangal, Kozhikode, Kerala',
            imageUrl: `${process.env.PUBLIC_URL}/assets/events/samasya2/banner.jpg`,
            date: 'dd-mm-yyyy',
            time: 'hh:mm',
            detailsLink: 'https://example.com/details38',
            registerLink: '/registration-panel/samasya',
        },
        // Event 39
        // {
        //     id: 39,
        //     title: 'Solong',
        //     venueName: 'ELHC 201',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/solong/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details39',
        //     registerLink: '/registration-panel/solong',
        // },
        // // Event 40
        // {
        //     id: 40,
        //     title: 'Spardha',
        //     venueName: 'ELHC 201',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/spardha/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details40',
        //     registerLink: '/registration-panel/spardha',
        // },
        // // Event 41
        // {
        //     id: 41,
        //     title: 'Spent',
        //     venueName: 'ELHC 201',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/spent/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details41',
        //     registerLink: '/registration-panel/spent',
        // },
        // // Event 42
        // {
        //     id: 42,
        //     title: 'Tech Quiz',
        //     venueName: 'ELHC 201',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/tech/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details42',
        //     registerLink: '/registration-panel/tech-quiz',
        // },
        // // Event 43
        // {
        //     id: 43,
        //     title: 'The Final Problem',
        //     venueName: 'ELHC 201',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/tfp/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details43',
        //     registerLink: '/registration-panel/the-final-problem',
        // },
        // // Event 44
        // {
        //     id: 44,
        //     title: 'Vigyaan',
        //     venueName: 'ELHC 201',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/vigyaan/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details44',
        //     registerLink: '/registration-panel/vigyaan',
        // },
        // Event 45
        {
            id: 45,
            title: 'Weekenders - [Every weekend]',
            venueName: 'ELHC 201',
            venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
            streetAddress: 'NIT Calicut Campus',
            locality: 'Kattangal, Kozhikode, Kerala',
            imageUrl: `${process.env.PUBLIC_URL}/assets/events/weekend/banner.jpg`,
            date: 'dd-mm-yyyy',
            time: 'hh:mm',
            detailsLink: 'https://example.com/details45',
            registerLink: '/registration-panel/weekenders',
        },
        // Event 46
        // {
        //     id: 46,
        //     title: 'Why so serious?',
        //     venueName: 'ELHC 201',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/whysoserious2k20/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details46',
        //     registerLink: '/registration-panel/why-so-serious',
        // },
        // // Event 47
        // {
        //     id: 47,
        //     title: 'Year Gone By',
        //     venueName: 'ELHC 201',
        //     venueLink: 'https://maps.app.goo.gl/fy1fVnoyVHnFyV8G7',
        //     streetAddress: 'NIT Calicut Campus',
        //     locality: 'Kattangal, Kozhikode, Kerala',
        //     imageUrl: `${process.env.PUBLIC_URL}/assets/events/ygb/banner.jpg`,
        //     date: 'dd-mm-yyyy',
        //     time: 'hh:mm',
        //     detailsLink: 'https://example.com/details47',
        //     registerLink: '/registration-panel/year-gone-by',
        // },

    ];

    const filteredEventCards = eventCards.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="your-component-container">
            <div className='beautify-heading'>
                <h1>Active Events</h1>
            </div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-box"
            />

            <div className="event-cards-container">
                {filteredEventCards.length > 0 ? (
                    filteredEventCards.map((card) => (
                        <EventCard
                            key={card.id}
                            title={card.title}
                            venueName={card.venueName}
                            venueLink={card.venueLink}
                            streetAddress={card.streetAddress}
                            locality={card.locality}
                            imageUrl={card.imageUrl}
                            date={card.date}
                            time={card.time}
                            detailsLink={card.detailsLink}
                            registerLink={card.registerLink}
                            onClick={() => handleEventCardClick(card)}
                        />
                    ))
                ) : (
                    <p className="no-events-message">
                        Zzz... No events found. Check back later or try a different search.
                    </p>
                )}
            </div>

            {selectedEvent && (
                <EventDetailsModal event={selectedEvent} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default ActiveEvents;
