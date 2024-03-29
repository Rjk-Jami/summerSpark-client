import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructorsSection from '../PopularInstructorsSection/PopularInstructorsSection';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {

    
    return (
        <div className='max-w-screen-lg mx-auto'>
           <Helmet>
                <title>SummerSpark | Home</title>
            </Helmet> 
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructorsSection></PopularInstructorsSection>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;