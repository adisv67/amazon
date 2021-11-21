import React from 'react';
import "./Home.css";
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/71wCZE4P7xL._SX3000_.jpg" alt="baner"/>
                <div className="home__row">
                    <Product id='2345' title='The lean startup' price={19.99} image='https://images-eu.ssl-images-amazon.com/images/I/51aEhyjQGrL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg' rating={5}/>
                    <Product id='4774' title='The best seller chair' price={39.67} image='https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_furniture_pc_cc_379x304_in-en._SY304_CB643322439_.jpg' rating={4}/>
                </div>
                <div className="home__row">
                    <Product id='5546' title='All time used gardening pots' price={99.99} image='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/CategorycardPC/Gardendecor379x304._SY304_CB432664123_.jpg' rating={3}/>
                    <Product id='5654' title='Every house needs coocking items' price={188} image='https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/kitchenbaupccc/xcm_banners_bau_pc_cc_379x304_379x304_in-en._SY304_CB643325611_.jpg' rating={4}/>
                    <Product id='9711' title='Increse your productive power' price={2000} image='https://m.media-amazon.com/images/I/316ArzLeJ2L._AC_SY200_.jpg' rating={5} />
                </div>
                <div className="home__row">
                    <Product id='4468' title='Get best viewing experience' price={2300} image='https://m.media-amazon.com/images/I/81Lh2jUJlfS._AC_UY218_.jpg' rating={4}/>
                </div>
            </div>
        </div>
    );
}

export default Home
