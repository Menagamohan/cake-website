import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import './Home.css'

// Import images
import b1 from './images/b1.webp';
import b4 from './images/b4.webp';
import b5 from './images/b5.webp';
import b6 from './images/b6.webp';
import b7 from './images/b7.webp';
import bs from './images/bs.webp';
import js from './images/js.webp';
import rs from './images/rs.webp';
import sd from './images/sd.webp';
import ns1 from './images/ns1.webp';
import jw from './images/jw.webp';
import ns2 from './images/ns2.webp';
import ec from './images/ec.webp';
import an from './images/an.webp';
import bwc from './images/bwc.webp';
import bwp from './images/bwp.webp';
import bwpl from './images/bwpl.webp';
import bwch from './images/bwch.webp';
import bwf from './images/bwf.webp';
import bd from './images/bd.webp';
import anc from './images/anc.webp';
import anp from './images/anp.webp';
import anpg from './images/anpg.webp';
import angh from './images/angh.webp';
import anh from './images/anh.webp';
import any from './images/any.webp';
import hd from './images/hd.webp';
import tg from './images/tg.webp';
import j from './images/j.webp';
import i from './images/i.webp';
import tnc from './images/tnc.webp';
import wd from './images/wd.webp';
import rose from './images/rose.webp';
import pf from './images/pf.webp';
import cn from './images/cn.webp';
import or from './images/or.webp';
import cc from './images/cc.webp';
import bc from './images/bc.webp';
import pc from './images/pc.webp';
import fc from './images/fc.webp';
import usa from './images/usa.jpg';
import uk from './images/uk.jpg';
import canada from './images/canada.jpg';
import australia from './images/australia.jpg';
import uae from './images/uae.jpg';
import germany from './images/germany.jpg';
import singapore from './images/singapore.jpg';
import worldwide from './images/worldwide.jpg';
import bn1 from './images/bn1.webp';
import bn2 from './images/bn2.webp';
import c5 from './images/c5.webp';
import c8 from './images/c8.webp';
import airplane from './images/airplane.jpeg';
import message from './images/message.jpeg';
import lock from './images/lock.jpeg';
import payment from './images/payment.png';

const Home = () => {
    return (
        <div>
            {/* Carousel */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={b1} className="d-block w-100" alt="Banner 1" style={{ height: "500px" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={b4} className="d-block w-100" alt="Banner 2" style={{ height: "500px" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={b5} className="d-block w-100" alt="Banner 3" style={{ height: "500px" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={b6} className="d-block w-100" alt="Banner 4" style={{ height: "500px" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={b7} className="d-block w-100" alt="Banner 5" style={{ height: "500px" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Cards Group */}
            <div className="card-group my-4">
                <div className="card" style={{ width: '10rem' }}>
                <img src={bs} className="card-img-top" alt="Janmashtami Gifts" style={{ borderRadius: '20px' }} />
                    
                    <div className="card-body">
                        <p className="card-text">Birthday</p>
                    </div>
                </div>
                <div className="card" style={{ width: '10rem' }}>
                    <img src={js} className="card-img-top" alt="Janmashtami Gifts" style={{ borderRadius: '20px' }} />
                    <div className="card-body">
                        <p className="card-text">Janmashtami</p>
                    </div>
                </div>
                <div className="card" style={{ width: '10rem' }}>
                    <img src={rs} className="card-img-top" alt="Rakhi Gifts" style={{ borderRadius: '20px' }} />
                    <div className="card-body">
                        <p className="card-text">Rakhi Gifts</p>
                    </div>
                </div>
                <div className="card" style={{ width: '10rem' }}>
                    <img src={sd} className="card-img-top" alt="2-Hour Delivery" style={{ borderRadius: '20px' }} />
                    <div className="card-body">
                        <p className="card-text">2-Hour Delivery</p>
                    </div>
                </div>
                <div className="card" style={{ width: '10rem' }}>
                    <img src={ns1} className="card-img-top" alt="Personalised Gifts" style={{ borderRadius: '20px' }} />
                    <div className="card-body">
                        <p className="card-text">Personalised</p>
                    </div>
                </div>
                <div className="card" style={{ width: '10rem' }}>
                    <img src={jw} className="card-img-top" alt="Jewellery Gifts" style={{ borderRadius: '20px' }} />
                    <div className="card-body">
                        <p className="card-text">Jewellery</p>
                    </div>
                </div>
                <div className="card" style={{ width: '10rem' }}>
                    <img src={ns2} className="card-img-top" alt="Best Of Flowers" style={{ borderRadius: '20px' }} />
                    <div className="card-body">
                        <p className="card-text">Best Of Flowers</p>
                    </div>
                </div>
                <div className="card" style={{ width: '10rem' }}>
                    <img src={ec} className="card-img-top" alt="Eggless Cakes" style={{ borderRadius: '20px' }} />
                    <div className="card-body">
                        <p className="card-text">Eggless Cakes</p>
                    </div>
                </div>
                <div className="card" style={{ width: '10rem' }}>
                    <img src={an} className="card-img-top" alt="Anniversary Gifts" style={{ borderRadius: '20px' }} />
                    <div className="card-body">
                        <p className="card-text">Anniversary</p>
                    </div>
                </div>
            </div>

            {/* Gift Finder */}
            <div className="container-fluid d-flex justify-content-center">
                <div className='row g-3'>
                    <div className='col-12 col-md-6 col-lg-3 mb-3'>
                        <h5>GIFT FINDER</h5>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 mb-3'>
                        <input type='text' placeholder='Enter Pincode' className='form-control' />
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 mb-3'>
                        <h5>Occasion</h5>
                        <p>Birthday, Anniversary etc..</p>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 mb-3'>
                        <h5>Gift Type</h5>
                        <p>Flowers, Cakes, Plants etc..</p>
                    </div>
                </div>
            </div>

            {/* Trending Gifts Section */}
            <div className="text-center my-4">
                <button type="button" className="btn btn-info">FIND GIFTS</button>
                <h3 className="mt-4">Trending Gifts Online</h3>
                <p>Thoughtfully curated 139,821 Gift Ideas. Get 2-Hour Delivery & Free Shipping in India.</p>
            </div>

            {/* Additional Cards */}
            <center><h3>BIRTHDAY GIFTS</h3></center>
            <div className="container my-4">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={bwc} className="card-img-top" alt="Birthday Gifts" />
                            <div className="card-body">
                                <p className="card-text">Combos</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={bwp} className="card-img-top" alt="Personalised Gifts" />
                            <div className="card-body">
                                <p className="card-text">Personalised Gifts</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={bwpl} className="card-img-top" alt="Plants" />
                            <div className="card-body">
                                <p className="card-text">Plants</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={bwch} className="card-img-top" alt="Chocolates" />
                            <div className="card-body">
                                <p className="card-text">Chocolates</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={bwf} className="card-img-top" alt="Fashion Gifts" />
                            <div className="card-body">
                                <p className="card-text">Fashion Gifts</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '60rem' }}>
                            <img src={bd} className="card-img-top" alt="Fashion Gifts" />
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Cards */}
            <center><h3>ANNIVERSARY GIFTS</h3></center>
            <div className="container my-4">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={anc} className="card-img-top" alt="Birthday Gifts" />
                            <div className="card-body">
                                <p className="card-text">Combos</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={anp} className="card-img-top" alt="Personalised Gifts" />
                            <div className="card-body">
                                <p className="card-text">Personalised</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={anpg} className="card-img-top" alt="Plants" />
                            <div className="card-body">
                                <p className="card-text">Premium Gifts</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={angh} className="card-img-top" alt="Chocolates" />
                            <div className="card-body">
                                <p className="card-text">Home & Living</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={anh} className="card-img-top" alt="Fashion Gifts" />
                            <div className="card-body">
                                <p className="card-text">Gift Hampers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '60rem' }}>
                            <img src={any} className="card-img-top" alt="Fashion Gifts" />
                            
                        </div>
                    </div>
                </div>
            </div>


            {/* Additional Cards */}
            <center><h3>UNIQUE GIFTS</h3></center>
            <div className="container my-4">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={hd} className="card-img-top" alt="Birthday Gifts" />
                            <div className="card-body">
                                <p className="card-text">Home Decor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={tg} className="card-img-top" alt="Personalised Gifts" />
                            <div className="card-body">
                                <p className="card-text">Toys & Games</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={j} className="card-img-top" alt="Plants" />
                            <div className="card-body">
                                <p className="card-text">Jewellery</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={i} className="card-img-top" alt="Chocolates" />
                            <div className="card-body">
                                <p className="card-text">Idols</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={tnc} className="card-img-top" alt="Fashion Gifts" />
                            <div className="card-body">
                                <p className="card-text">Tea n Coffee Hampers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card" style={{ width: '60rem' }}>
                            <img src={wd} className="card-img-top" alt="Fashion Gifts" />
                            
                        </div>
                    </div>
                </div>
            </div><br/><br/><br/><br/>


            {/* Additional Cards */}
<center><h3>FLOWERS DELIVERY</h3></center><br/><br/><br/>
<div className="container my-4">
    <div className="row">
        <div className="col-12 col-md-6 col-lg-3 mb-3">
           <img src={rose} className=" card-img-top  rounded-circle h-80 w-80" alt="..."/><br/><br/>
            <p className="card-text" style={{textAlign:'center'}}>Roses</p>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3">
            <img src={pf} className="card-img-top rounded-circle h-80 w-80" alt="..." /><br/><br/>
            <p className="card-text" style={{textAlign:'center'}}>Personalised Flowers</p>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3">
            <img src={cn} className="card-img-top rounded-circle h-80 w-80" alt="..." /><br/><br/>
            <p className="card-text" style={{textAlign:'center'}}>Carnations</p>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3">
           <img src={or} className="card-img-top rounded-circle h-80 w-80" alt="Idols" /><br/><br/>
            <p className="card-text" style={{textAlign:'center'}}>orchids</p>
        </div>
    </div><br/><br/><br/><br/>

        <center><h3>ORDER CAKES</h3></center><br/><br/><br/>
<div className="container my-4">
    <div className="row">
        <div className="col-12 col-md-6 col-lg-3 mb-3">
           <img src={cc} className=" card-img-top  rounded-circle h-80 w-80" alt="..."/><br/><br/>
            <p className="card-text" style={{textAlign:'center'}}>Chocolates Cakes</p>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3">
            <img src={bc} className="card-img-top rounded-circle h-80 w-80" alt="..." /><br/><br/>
            <p className="card-text" style={{textAlign:'center'}}>Butterscotch Cakes</p>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3">
            <img src={pc} className="card-img-top rounded-circle h-80 w-80" alt="..." /><br/><br/>
            <p className="card-text" style={{textAlign:'center'}}>Pineapple Cakes</p>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3">
           <img src={fc} className="card-img-top rounded-circle h-80 w-80" alt="Idols" /><br/><br/>
            <p className="card-text" style={{textAlign:'center'}}>Flower N Cakes</p>
        </div>
    </div>    
    </div><br/><br/><br/><br/>

    
    {/* Cards Group */}
    <center>
        <h3>INTERNATIONAL GIFT DELIVERY</h3>
    </center><br/><br/>
    <div className="card-group my-4">
                <div className="card" style={{ width: '10rem' }}>
                <img src={usa} className="card-img-top" alt="Janmashtami Gifts" style={{ borderRadius: '20px' }} />
                    
                    <div className="card-body">
                        <p className="card-text">USA</p>
                    </div>
                </div>
                <div className="card" style={{ width: '10rem' }}>
                    <img src={uk} className="card-img-top" alt="Janmashtami Gifts" style={{ borderRadius: '20px' }} />
                    <div className="card-body">
                        <p className="card-text">UK</p>
                    </div>
                </div>
                <div className="card" style={{ width: '10rem' }}>
                    <img src={canada} className="card-img-top" alt="Rakhi Gifts" style={{ borderRadius: '20px' }} />
                    <div className="card-body">
                        <p className="card-text">Canada</p>
                    </div>
                </div>
                <div className="card" style={{ width: '10rem' }}>
                    <img src={australia} className="card-img-top" alt="2-Hour Delivery" style={{ borderRadius: '20px' }} />
                    <div className="card-body">
                        <p className="card-text">Australia</p>
                    </div>
                </div>
                <div className="card" style={{ width: '10rem' }}>
                    <img src={uae} className="card-img-top" alt="Personalised Gifts" style={{ borderRadius: '20px' }} />
                    <div className="card-body">
                        <p className="card-text">UAE</p>
                    </div>
                </div>
                <div className="card" style={{ width: '10rem' }}>
                    <img src={germany} className="card-img-top" alt="Jewellery Gifts" style={{ borderRadius: '20px' }} />
                    <div className="card-body">
                        <p className="card-text">Germany</p>
                    </div>
                </div>
                <div className="card" style={{ width: '10rem' }}>
                    <img src={singapore} className="card-img-top" alt="Best Of Flowers" style={{ borderRadius: '20px' }} />
                    <div className="card-body">
                        <p className="card-text">Singapore</p>
                    </div>
                </div>
                <div className="card" style={{ width: '10rem' }}>
                    <img src={worldwide} className="card-img-top" alt="Eggless Cakes" style={{ borderRadius: '20px' }} />
                    <div className="card-body">
                        <p className="card-text">Worldwide</p>
                    </div>
                </div>
            </div><br/><br/>
            <hr/>
            <h4>Elevate Your Gifting Experience with FNP</h4>
            <p>Gifts are a way to express our heartfelt feelings and make the other person feel special, loved and cared for! Thus, it is important to opt for a perfect gift that touches the recipient’s heart. Keeping the same in mind, FNP has come up with an array of exquisite gifts that cater to people with diverse tastes and preferences. Whether you want to explore our cakes collection to sweeten the celebrations, meaningful gifts to make a special gesture on a special occasion, plants for a meaningful gift, gadgets for a tech-savvy, stationery gifts for a workaholic or gift hampers to spoil them with a collection of gifts in place of one, we have it all waiting for you to pick the best one! Any gift that you choose will surely make the recipient smile from ear to ear all day long!</p>
            <br/>
            <h4>FNP: Perfect Platform to Order Gifts Online</h4>
            <p>In the advanced era that we are living in, gone are the days when we used to step out to shop for gifts and miss out on some special moments. Whether you are looking for a gift for brothers, sisters, friends or family, FNP is your go-to place for all gifting needs. Our user-friendly website and seamless delivery ensure that your chosen gift is delivered to the destination on time and in perfect condition. Want to surprise your father because it’s his birthday? Explore our gifts for father and we bet you will end up ordering some thoughtful gifts like plants, watches, perfumes and more. Just feeling a little extra love towards your mom? Surprise her with amazing picks from FNP’s collection of gifts for mother. Moreover, you can order flowers, cakes, chocolates and other basic gifts anytime just to make a special gesture for your loved ones. Hope you enjoy shopping gifts online with us and make your loved ones feel loved now and then!</p>
            <br/>
            <h4>Send Gifts Online that Win Over Anyone’s Heart</h4>
            <p>When the next time you order a gift online make sure it is thoughtful enough to win over the recipient’s heart. And to grab one, all you have to do is explore our website to choose the ones that resonate with the recipient. Here are a few options for you to send gifts online to all your loved ones with love and care!</p>
            <br/>
            <h4>Bouquet with a Cake:</h4>
            <p>An all-time perfect gift to make anyone’s day memorable is our combo of flowers with cake. Available in a variety of flavours like chocolate, vanilla, black forest with a bunch of orchids, sunflowers, roses, carnations and more, you can pick any arrangement to surprise the recipient.</p>
            <br/>
            <hr/><br/><br/><br/>
              

            <center><h5>RECENTLY VIEWED BY YOU</h5><br/><br/>
             <div className="row">
      <div className="col-md-3">
        <div className="card" style={{ width: '18rem' }}>
          <img src={bn1} className="card-img-top" alt="Rose Thandai" />
          <div className="card-body">
            <h5 className="card-title">ROSE THANDAI</h5>
            <cite style={{ fontSize: 'large', fontWeight: 'bolder', fontStyle: 'italic', color: 'red' }}>
              <cite style={{ color: 'black' }}>$</cite>50
            </cite>
            <p>
              <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                Buy Now
              </button>
            </p>
            <div className="collapse" id="collapseExample1">
              <div className="card card-body">
                $420<br />
                Plot 55 ABCD & 56 D, Kandivali<br />
                Industrial Estate, Charkop, Kandivali<br />
                (W), Mumbai – 400 067.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card" style={{ width: '18rem' }}>
          <img src={bn2} className="card-img-top" alt="Rose Thandai" />
          <div className="card-body">
            <h5 className="card-title">ROSE THANDAI</h5>
            <cite style={{ fontSize: 'large', fontWeight: 'bolder', fontStyle: 'italic', color: 'red' }}>
              <cite style={{ color: 'black' }}>$</cite>50
            </cite>
            <p>
              <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                Buy Now
              </button>
            </p>
            <div className="collapse" id="collapseExample2">
              <div className="card card-body">
                $420<br />
                Plot 55 ABCD & 56 D, Kandivali<br />
                Industrial Estate, Charkop, Kandivali<br />
                (W), Mumbai – 400 067.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card" style={{ width: '18rem' }}>
          <img src={c5} className="card-img-top" alt="Rose Thandai" />
          <div className="card-body">
            <h5 className="card-title">ROSE THANDAI</h5>
            <cite style={{ fontSize: 'large', fontWeight: 'bolder', fontStyle: 'italic', color: 'red' }}>
              <cite style={{ color: 'black' }}>$</cite>50
            </cite>
            <p>
              <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                Buy Now
              </button>
            </p>
            <div className="collapse" id="collapseExample1">
              <div className="card card-body">
                $420<br />
                Plot 55 ABCD & 56 D, Kandivali<br />
                Industrial Estate, Charkop, Kandivali<br />
                (W), Mumbai – 400 067.
              </div>
            </div>
          </div>
        </div>
      </div>
            
      <div className="col-md-3">
        <div className="card" style={{ width: '18rem' }}>
          <img src={c8} className="card-img-top" alt="Rose Thandai" />
          <div className="card-body">
            <h5 className="card-title">ROSE THANDAI</h5>
            <cite style={{ fontSize: 'large', fontWeight: 'bolder', fontStyle: 'italic', color: 'red' }}>
              <cite style={{ color: 'black' }}>$</cite>50
            </cite>
            <p>
              <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                Buy Now
              </button>
            </p>
            <div className="collapse" id="collapseExample1">
              <div className="card card-body">
                $420<br />
                Plot 55 ABCD & 56 D, Kandivali<br />
                Industrial Estate, Charkop, Kandivali<br />
                (W), Mumbai – 400 067.
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </center><br/><br/><br/>
           
    <div className="container-fluid d-flex justify-content-center">
    <div className='row g-4'>
        <div className='col-12 col-md-12 col-lg-8 mb-4'>
            <img src={airplane} alt='' style={{width: "80px", height: "80px"}} />
            <h6>Worldwide Delivery</h6>
            <p>We deliver gifts to over 70 countries</p>
        </div>
    </div>
    <div className='row g-4'>
        <div className='col-12 col-md-12 col-lg-8 mb-4'>
            <img src={message} alt='' style={{width: "80px", height: "80px"}} />
            <h6>Message Delivery</h6>
            <p>Send heartfelt messages along with gifts</p>
        </div>
    </div>
    <div className='row g-4'>
        <div className='col-12 col-md-12 col-lg-8 mb-4'>
            <img src={lock} alt='' style={{width: "80px", height: "80px"}} />
            <h6>Secure Transactions</h6>
            <p>Your data and transactions are safe with us</p>
        </div>
    </div>
</div>

<hr className="my-4"/>

<div className="container-fluid d-flex justify-content-center">
    <div className='row g-4'>
        <div className='col-12 col-md-6 col-lg-3 mb-4'>
            <h6>POLICY INFO</h6>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Disclaimer</p>
        </div>
        <div className='col-12 col-md-6 col-lg-3 mb-4'>
            <h6>ABOUT COMPANY</h6>
            <p>About Us</p>
            <p>FNP Team</p>
            <p>Careers</p>
            <p>Testimonials</p>
            <p>News Room</p>
        </div>
        <div className='col-12 col-md-6 col-lg-3 mb-4'>
            <h6>FNP BUSINESS</h6>
            <p>Decoration Services</p>
            <p>Corporate Service</p>
            <p>Affiliate Program</p>
            <p>Retail Stores</p>
            <p>Franchise</p>
        </div>
        <div className='col-12 col-md-6 col-lg-3 mb-4'>
            <h6>NEED HELP?</h6>
            <p>Contact Us</p>
            <p>FAQs</p>
        </div>
    </div>
    <div className='row g-4'>
        <div className='col-12 col-md-12 col-lg-6 mb-4'>
            <h6>USEFUL LINKS</h6>
            <p>Quotes N Wishes</p>
            <p>Flower Astrology</p>
            <p>Article Hub</p>
            <p>Care Guide</p>
            <p>Blog</p>
        </div>
        <div className='col-12 col-md-12 col-lg-6 mb-4'>
            <h6>SUBSCRIBE</h6>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Email" aria-label="Email" />
                <button className="btn btn-outline-warning" type="submit">Search</button>
            </form>
            <p>Get updates on promotions and offers coupons.</p>
        </div>
    </div>
    
</div><br/>
<center>
    <img src={payment} className="img" alt="Rose Thandai" />
</center>



</div>
</div>
    );
};

export default Home;


