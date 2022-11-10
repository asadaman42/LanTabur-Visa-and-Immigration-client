import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const HomepageStatistics = () => {
    return (


        <Row xs={1} md={4} className="g-4">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            1000+
                        </Card.Title>

                        <Card.Subtitle>
                            Visas Granted
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            5
                        </Card.Title>

                        <Card.Subtitle>
                            Immigration Destination
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            90%
                        </Card.Title>

                        <Card.Subtitle>
                            Clients are from references
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            100+
                        </Card.Title>

                        <Card.Subtitle>
                            Ongoing Cases
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        // <div class="container-fluid">
        //     <h3>Hundreds Of People Choose Our Services</h3>
        //     <div class="header-body">
        //         <div class="row">
        //             <div class="col-xl-3 col-lg-6">
        //                 <div class="card card-stats mb-4 mb-xl-0">
        //                     <div class="card-body">
        //                         <div class="row">
        //                             <div class="col">
        //                                 <span class="h2 font-weight-bold mb-0">1000+</span>
        //                                 <h5 class="card-title text-uppercase text-muted mb-0">Visas Granted</h5>
        //                             </div>
        //                             <div class="col-auto">
        //                                 <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
        //                                     <i class="fas fa-chart-bar"></i>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <p class="mt-3 mb-0 text-muted text-sm">
        //                             <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
        //                             <span class="text-nowrap">Since last month</span>
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="col-xl-3 col-lg-6">
        //                 <div class="card card-stats mb-4 mb-xl-0">
        //                     <div class="card-body">
        //                         <div class="row">
        //                             <div class="col">


        //                                 <span class="h2 font-weight-bold mb-0">5</span>
        //                                 <h5 class="card-title text-uppercase text-muted mb-0">Immigration Destinations</h5>
        //                             </div>
        //                             <div class="col-auto">
        //                                 <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
        //                                     <i class="fas fa-chart-pie"></i>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <p class="mt-3 mb-0 text-muted text-sm">
        //                             <span class="text-danger mr-2"><i class="fas fa-arrow-down"></i> 3.48%</span>
        //                             <span class="text-nowrap">Since last week</span>
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="col-xl-3 col-lg-6">
        //                 <div class="card card-stats mb-4 mb-xl-0">
        //                     <div class="card-body">
        //                         <div class="row">
        //                             <div class="col">
        //                                 <h5 class="card-title text-uppercase text-muted mb-0">Sales</h5>
        //                                 <span class="h2 font-weight-bold mb-0">924</span>
        //                             </div>
        //                             <div class="col-auto">
        //                                 <div class="icon icon-shape bg-yellow text-white rounded-circle shadow">
        //                                     <i class="fas fa-users"></i>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <p class="mt-3 mb-0 text-muted text-sm">
        //                             <span class="text-warning mr-2"><i class="fas fa-arrow-down"></i> 1.10%</span>
        //                             <span class="text-nowrap">Since yesterday</span>
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="col-xl-3 col-lg-6">
        //                 <div class="card card-stats mb-4 mb-xl-0">
        //                     <div class="card-body">
        //                         <div class="row">
        //                             <div class="col">
        //                                 <h5 class="card-title text-uppercase text-muted mb-0">Performance</h5>
        //                                 <span class="h2 font-weight-bold mb-0">49,65%</span>
        //                             </div>
        //                             <div class="col-auto">
        //                                 <div class="icon icon-shape bg-info text-white rounded-circle shadow">
        //                                     <i class="fas fa-percent"></i>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <p class="mt-3 mb-0 text-muted text-sm">
        //                             <span class="text-success mr-2"><i class="fas fa-arrow-up"></i> 12%</span>
        //                             <span class="text-nowrap">Since last month</span>
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>



        //     <section id="statistic-3" data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://livcs.com/wp-content/themes/immiex/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-parallax_style="" data-position="cover" data-repeat="cover" data-attachment="scroll" class="bg-image white-color statistic-section division bg-tra"><div class="bg-tra wide-60 statistic-section     bg-scroll"><div class="container"><div class="vc_row wpb_row vc_row-fluid bg-tra bg-cover vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-12 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        //         <div class="statistic-3-title primary-border text-center">
        //             <h3 class="Default h3-lg none">Hundreds Of People Choose Our Services</h3>

        //         </div></div></div></div></div><div class="vc_row wpb_row vc_row-fluid bg-tra bg-cover vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-1 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper "></div></div></div><div class="wpb_column vc_column_container vc_col-sm-10 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper "><div class="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-3"><div class="vc_column-inner"><div class="wpb_wrapper ">
        //             <div class="statistic-block icon-sm text-center">
        //                 <div class="Inherit-icon b-icon box-icon-md"><span class=" Inherit"></span></div>
        //                 <h5 class="yellow-color none statistic-number txt-700"><span class="count-element">1000</span>+</h5>
        //                 Visas Granted

        //             </div></div></div></div>

        //             <div class="wpb_column vc_column_container vc_col-sm-3"><div class="vc_column-inner"><div class="wpb_wrapper ">
        //                 <div class="statistic-block icon-sm text-center">
        //                     <div class="Inherit-icon b-icon box-icon-md"><span class=" Inherit"></span></div>
        //                     <h5 class="yellow-color none statistic-number txt-700"><span class="count-element">5</span></h5>
        //                     Immigration Destinations

        //                 </div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-3"><div class="vc_column-inner"><div class="wpb_wrapper ">
        //                     <div class="statistic-block icon-sm text-center">
        //                         <div class="Inherit-icon b-icon box-icon-md"><span class=" Inherit"></span></div>
        //                         <h5 class="yellow-color none statistic-number txt-700"><span class="count-element">90</span>%</h5>
        //                         Clients are from references

        //                     </div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-3"><div class="vc_column-inner"><div class="wpb_wrapper ">
        //                         <div class="statistic-block icon-sm text-center">
        //                             <div class="Inherit-icon b-icon box-icon-md"><span class=" Inherit"></span></div>
        //                             <h5 class="yellow-color none statistic-number txt-700"><span class="count-element">100</span>+</h5>
        //                             Ongoing Cases

        //                         </div></div></div></div></div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-1 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper "></div></div></div></div></div></div></section>
        // </div>
        // <div>
        //     <body class="bg-default">
        //         <div class="main-content">
        //             <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">

        //             </div>

        //         </div>

        //     </body>
        // </div>



    );
};

export default HomepageStatistics;