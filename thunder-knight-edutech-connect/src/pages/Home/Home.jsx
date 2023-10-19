import React from 'react';
import Carousal from '../../Carousal/Carousal';
import GetReady from '../../GetReady/GetReady';
import Cards from '../../Cards/Cards';
import Feature from '../../Feature/Feature';

const Home = () => {
    return (
        <div>
            {/* <h1 className='min-h-screen font-bold text-center'>This is Home </h1> */}
            <Carousal></Carousal>
            <GetReady></GetReady>
            <Cards></Cards>
            <Feature></Feature>
        </div>
    );
};

export default Home;