import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import { GrLocation } from 'react-icons/gr';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

import Macbook1 from '../assets/images/others/laptops/Macbook-1.png';
import Macbook2 from '../assets/images/others/laptops/Macbook-2.png';
import Macbook3 from '../assets/images/others/laptops/Macbook-3.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    },
}));

const ProductDetails = () => {
    const classes = useStyles();

    const initialCount = 1;
    const [count, setCount] = useState(initialCount);

    return (
        <>
            <div id='product-detail'>
                <Container>
                    <Row>
                        <Col sm className='product-detail-image'>
                            <img src={Macbook3} alt='macbook-pro-2020' />
                        </Col>
                        <Col sm>
                            <p className='product-detail-title'>MACBOOK PRO 13-INCH 2020</p>
                            <Row className='product-detail-option'>
                                <Col lg={3}>
                                    <h6 className='price'>$1799.00</h6>
                                </Col>
                                <Col lg={9} className={classes.root}>
                                    <Box component='fieldset' mb={3} borderColor='transparent'>
                                        <Rating name='read-only' value={5} size='small' readOnly />
                                    </Box>
                                </Col>
                            </Row>
                            <Row className='product-detail-option'>
                                <Col sm={3}>
                                    <p>COLOR: </p>
                                </Col>
                                <Col sm={9}>
                                    <button className='color-picker space-gray'>&nbsp;</button>
                                    <button className='color-picker white'>&nbsp;</button>
                                </Col>
                            </Row>
                            <Row className='product-detail-option'>
                                <Col sm={3}>
                                    <p>RAM: </p>
                                </Col>
                                <Col sm={9}>
                                    <button className='laptop-ram'>8 GB</button>
                                    <button className='laptop-ram'>16 GB</button>
                                </Col>
                            </Row>
                            <Row className='product-detail-option'>
                                <Col md={3}>
                                    <p>STORAGE: </p>
                                </Col>
                                <Col md={9}>
                                    <button className='laptop-storage'>128 GB</button>
                                    <button className='laptop-storage'>256 GB</button>
                                </Col>
                            </Row>
                            <Row className='product-detail-option'>
                                <Col lg={4}>
                                    <form class='quantity-input'>
                                        <div
                                            class='value-button'
                                            id='decrease'
                                            onClick={() =>
                                                setCount((prevCount) =>
                                                    prevCount > 1 ? prevCount - 1 : null
                                                )
                                            }>
                                            -
                                        </div>
                                        <input type='number' id='number' value={count} />
                                        <div
                                            class='value-button'
                                            id='increase'
                                            onClick={() => setCount((prevCount) => prevCount + 1)}>
                                            +
                                        </div>
                                    </form>
                                </Col>
                                <Col lg={8}>
                                    <button className='add-to-cart-btn'>ADD TO CART</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div id='specification'>
                    <div className='specification-title'>
                        <span>SPECIFICATION</span>
                    </div>
                    <Container className='specification-details'>
                        <Row className='mt-5'>
                            <Col sm={3}>
                                <p>CPU / Processor</p>
                            </Col>
                            <Col sm={9}>
                                <p>
                                    2.3GHz quad core 10th generation Intel Core i7, Turbo Boost up to 4.1GHz,
                                    with 6MB shared L3 cache
                                </p>
                            </Col>
                            <Col sm={3}>
                                <p>Operating Systems</p>
                            </Col>
                            <Col sm={9}>
                                <p>macOS Catalina</p>
                            </Col>
                            <Col sm={3}>
                                <p>RAM / Memory</p>
                            </Col>
                            <Col sm={9}>
                                <p>8GB of 3733MHz LPDDR4X onboard memory</p>
                            </Col>
                            <Col sm={3}>
                                <p>Storage</p>
                            </Col>
                            <Col sm={9}>
                                <p>128GB SSD</p>
                            </Col>
                            <Col sm={3}>
                                <p>Graphic</p>
                            </Col>
                            <Col sm={9}>
                                <p>Intel Iris Plus Graphics</p>
                            </Col>
                            <Col sm={3}>
                                <p>Display</p>
                            </Col>
                            <Col sm={9}>
                                <p>
                                    13.3 inch LED-backlit display with IPS technology; 2560x1600 native
                                    resolution at 227 pixels per inch
                                </p>
                            </Col>
                            <Col sm={3}>
                                <p>Wireless</p>
                            </Col>
                            <Col sm={9}>
                                <p>802.11ac Wi-Fi wireless networking, IEEE 802.11a/b/g/n compatible</p>
                            </Col>
                            <Col sm={3}>
                                <p>Sound</p>
                            </Col>
                            <Col sm={9}>
                                <p>Stereo speakers with high dynamic range</p>
                            </Col>
                            <Col sm={3}>
                                <p>Webcam</p>
                            </Col>
                            <Col sm={9}>
                                <p>720p FaceTime HD camera</p>
                            </Col>
                            <Col sm={3}>
                                <p>Ports</p>
                            </Col>
                            <Col sm={9}>
                                <p>Four Thunderbolt 3 (USB-C) ports</p>
                            </Col>
                            <Col sm={3}>
                                <p>Battery</p>
                            </Col>
                            <Col sm={9}>
                                <p>Up to 10 hours wireless web, Up to 10 hours Apple TV app movie playback</p>
                            </Col>
                            <Col sm={3}>
                                <p>Weight</p>
                            </Col>
                            <Col sm={9}>
                                <p>1.4kg</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div id='review'>
                    <div className='review-title'>
                        <span>REVIEWS</span>
                    </div>
                    <div>
                        <FormControl
                            className={classes.formControl}
                            style={{ width: '150px', marginRight: '30px' }}>
                            <NativeSelect
                                defaultValue='newest'
                                style={{ fontSize: '12px', color: '#ff6600' }}>
                                <option value='newest'>NEWEST</option>
                                <option value='oldest'>OLDEST</option>
                            </NativeSelect>
                            <FormHelperText style={{ fontSize: '9px' }}>SORTED BY</FormHelperText>
                        </FormControl>
                        <button className='write-a-review-btn'>WRITE A REVIEW</button>
                    </div>
                </div>
                <Container className='mt-5'>
                    <Row className='review-item'>
                        <Col sm={4}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src='/static/images/avatar/1.jpg' />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<span className='reviewer-name'>Kevin Wisky</span>}
                                    secondary={
                                        <>
                                            <GrLocation />
                                            <span className='reviewer-location'>Phnom Penh</span>
                                        </>
                                    }
                                />
                            </ListItem>
                        </Col>
                        <Col sm={8} className={classes.root} style={{ paddingTop: '12px' }}>
                            <div className='d-flex'>
                                <Box component='fieldset' mb={3} borderColor='transparent'>
                                    <Rating name='read-only' value={5} size='small' readOnly />
                                </Box>
                                <span className='review-datetime'>08/08/2020</span>
                            </div>
                            <p className='comment'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia conseq duis enim velit mollit. Exercitation veniam consequat
                                sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
                                do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </Col>
                    </Row>
                    <Row className='review-item'>
                        <Col sm={4}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src='/static/images/avatar/1.jpg' />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<span className='reviewer-name'>Devid Dom</span>}
                                    secondary={
                                        <>
                                            <GrLocation />
                                            <span className='reviewer-location'>Phnom Penh</span>
                                        </>
                                    }
                                />
                            </ListItem>
                        </Col>
                        <Col sm={8} className={classes.root} style={{ paddingTop: '12px' }}>
                            <div className='d-flex'>
                                <Box component='fieldset' mb={3} borderColor='transparent'>
                                    <Rating name='read-only' value={5} size='small' readOnly />
                                </Box>
                                <span className='review-datetime'>07/08/2020</span>
                            </div>
                            <p className='comment'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia conseq duis enim velit mollit. Exercitation veniam consequat
                                sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
                                do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </Col>
                    </Row>
                    <Row className='review-item'>
                        <Col sm={4}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src='/static/images/avatar/1.jpg' />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<span className='reviewer-name'>Jenny Ry</span>}
                                    secondary={
                                        <>
                                            <GrLocation />
                                            <span className='reviewer-location'>Phnom Penh</span>
                                        </>
                                    }
                                />
                            </ListItem>
                        </Col>
                        <Col sm={8} className={classes.root} style={{ paddingTop: '12px' }}>
                            <div className='d-flex'>
                                <Box component='fieldset' mb={3} borderColor='transparent'>
                                    <Rating name='read-only' value={5} size='small' readOnly />
                                </Box>
                                <span className='review-datetime'>06/08/2020</span>
                            </div>
                            <p className='comment'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia conseq duis enim velit mollit. Exercitation veniam consequat
                                sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
                                do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </Col>
                    </Row>
                    <div className='center'>
                        <button className='load-more-btn'>Load More</button>
                    </div>
                </Container>
            </div>
            <hr className='seperated-line' />
            <div id='recommendation'>
                <div className='recommend-title'>
                    <span>YOU MAY ALSO LIKE</span>
                    <div>
                        <AiFillLeftCircle className='prev-next-btn' />
                        <AiFillRightCircle className='prev-next-btn' />
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col lg className='recommended-card'>
                            <img src={Macbook1} alt='macbook-pro-2020' />
                            <h6>MACBOOK PRO 16-INCH 2020</h6>
                            <Box component='fieldset' borderColor='transparent'>
                                <Rating name='read-only' value={5} size='small' readOnly />
                            </Box>
                            <p>$2099.00</p>
                        </Col>
                        <Col lg className='recommended-card'>
                            <img src={Macbook3} alt='macbook-pro-2020' />
                            <h6>MACBOOK PRO 15-INCH 2020</h6>
                            <Box component='fieldset' borderColor='transparent'>
                                <Rating name='read-only' value={5} size='small' readOnly />
                            </Box>
                            <p>$1999.00</p>
                        </Col>
                        <Col lg className='recommended-card'>
                            <img src={Macbook2} alt='macbook-pro-2020' />
                            <h6>MACBOOK AIR 2020</h6>
                            <Box component='fieldset' borderColor='transparent'>
                                <Rating name='read-only' value={5} size='small' readOnly />
                            </Box>
                            <p>$1199.00</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default ProductDetails;