import React, { useState } from 'react';
import '../App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const Checkout = () => {
    const { register, handleSubmit, errors } = useForm({
        criteriaMode: 'all',
    });
    const [value, onChange] = useState(new Date());
    const onSubmit = (data) => {
        console.log(data);
    };
    const [startDate, setStartDate] = useState(null);
    return (
        <Container id='cart'>
            <Row>
                <Col md={7}>
                    <h1 className='productHeader mb-5'>Checkout</h1>
                    <p className='productHeader mb-4'><strong>Shipping Details</strong>
                        <hr></hr>
                    </p>
                    <Form fluid='md' onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Group className='label-text' controlId='formBasicUserName'>
                                    <div className='input-field'>
                                        <Form.Control
                                            autoComplete='off'
                                            ref={register({
                                                required: 'This is required.',
                                                pattern: {
                                                    value: /^[a-z]*$/i,
                                                    message: 'User Name Must Contain Letters Only',
                                                },
                                            })}
                                            name='firstName'
                                            className='from-control'
                                            type='text'
                                            placeholder='First Name'
                                            required
                                        />
                                        {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>}

                                    </div>
                                    <Form.Text className='text-muted'></Form.Text>
                                </Form.Group>

                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Group className='label-text' controlId='formBasicUserName'>
                                    <div className='input-field'>
                                        <Form.Control
                                            autoComplete='off'
                                            ref={register({
                                                required: 'This is required.',
                                                pattern: {
                                                    value: /^[a-z]*$/i,
                                                    message: 'User Name Must Contain Letters Only',
                                                },
                                            })}
                                            name='lastName'
                                            className='from-control'
                                            type='text'
                                            placeholder='Last Name'
                                            required
                                        />
                                        {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}

                                    </div>
                                    <Form.Text className='text-muted'></Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md={12} className="mb-3">
                                <Form.Group className='label-text' controlId='formBasicUserName'>
                                    <div className='input-field'>
                                        <Form.Control
                                            autoComplete='off'
                                            name='address'
                                            className='from-control'
                                            type='text'
                                            placeholder='Address'
                                            required
                                        />

                                    </div>
                                    <Form.Text className='text-muted'></Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Group className='label-text' controlId='formBasicUserName'>
                                    <div className='input-field'>
                                        <Form.Control
                                            autoComplete='off'
                                            ref={register({
                                                required: 'This is required.',
                                                pattern: {
                                                    value: /^[a-z]*$/i,
                                                    message: 'City or Province Must Contain Letters Only',
                                                },
                                            })}
                                            name='city'
                                            className='from-control'
                                            type='text'
                                            placeholder='City/Province'
                                            required
                                        />
                                        {errors.city && <p style={{ color: 'red' }}>{errors.city.message}</p>}

                                    </div>
                                    <Form.Text className='text-muted'></Form.Text>
                                </Form.Group>

                            </Col>

                            <Col md={6}>
                                <Form.Group className='label-text' controlId='formBasicUserName'>
                                    <div className='input-field'>
                                        <Form.Control
                                            autoComplete='off'
                                            name='postalCode'
                                            className='from-control'
                                            type='text'
                                            placeholder='Postal Code'
                                            required
                                        />
                                        {errors.postalCode && <p style={{ color: 'red' }}>{errors.postalCode.message}</p>}

                                    </div>
                                    <Form.Text className='text-muted'></Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Group className='label-text'>
                                    <div className='input-field'>
                                        <Form.Control
                                            autoComplete='off'
                                            ref={register({
                                                required: 'This is required.',
                                                pattern: {
                                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                    message: 'Invalid Email Address',
                                                },
                                            })}
                                            name='email'
                                            className='from-control'
                                            type='email'
                                            placeholder='Enter Email'
                                            required
                                        />
                                        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                                    </div>
                                    <Form.Text className='text-muted'></Form.Text>
                                </Form.Group>

                            </Col>

                            <Col md={6}>
                                <Form.Group className='label-text' controlId='formBasicUserName'>
                                    <div className='input-field'>
                                        <Form.Control
                                            autoComplete='off'
                                            name='postalCode'
                                            className='from-control'
                                            type='text'
                                            placeholder='Phone Number'
                                            required
                                        />
                                        {errors.postalCode && <p style={{ color: 'red' }}>{errors.postalCode.message}</p>}

                                    </div>
                                    <Form.Text className='text-muted'></Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <p className='productHeader mb-4 mt-5'><strong>Payment Details</strong>
                            <hr></hr>
                        </p>
                        <Row>
                            <Col md={12} className="mb-3">
                                <Form.Group className='label-text'>
                                    <div className='input-field'>
                                        <Form.Control
                                            autoComplete='off'
                                            name='creditCard'
                                            className='from-control'

                                            placeholder='Credit Card'
                                            required
                                        />
                                        {errors.creditCard && <p style={{ color: 'red' }}>{errors.creditCard.message}</p>}
                                    </div>
                                    <Form.Text className='text-muted'></Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md={12} className="mb-3">
                                <Form.Group className='label-text'>
                                    <div className='input-field'>
                                        <Form.Control
                                            autoComplete='off'
                                            name='cardNumber'
                                            className='from-control'
                                            placeholder='Card Number'
                                            required
                                        />

                                        {errors.cardNumber && <p style={{ color: 'red' }}>{errors.cardNumber.message}</p>}
                                    </div>
                                    <Form.Text className='text-muted'></Form.Text>

                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={7} className="mb-3" >
                                <div className="date-picker">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                        dateFormat="MM/yyyy"
                                        showMonthYearPicker
                                        placeholderText="Expire Date"
                                    />
                                </div>

                            </Col>
                            <Col md={5}>
                                <Form.Group className='label-text'>
                                    <div className='input-field'>
                                        <Form.Control
                                            autoComplete='off'
                                            name='cardNumber'
                                            className='from-control'
                                            placeholder='CVV Code'
                                            required
                                        />

                                        {errors.cardNumber && <p style={{ color: 'red' }}>{errors.cardNumber.message}</p>}
                                    </div>
                                    <Form.Text className='text-muted'></Form.Text>

                                </Form.Group>
                            </Col>

                        </Row>
                        <Row className="mt-3">
                            <Col md={8}>
                                <a href='$' className='go-back'>
                                    <strong>
                                        <BsArrowLeft className='arrow-left mr-2' style={{ fontSize: '30px' }} />
                    Go Back
                </strong>
                                </a>
                            </Col>
                            <Col md={4}>
                                <button className='apply-button' variant='white' type='submit'>
                                    Purchase Now
                                </button>
                            </Col>
                        </Row>
                    </Form>
                </Col>


                <Col style={{ "backgroundColor": "#f9f9f9" }}>
                    <h1 className='productHeader mb-5' >Order Summary</h1>
                    <div className='d-flex justify-content-between mb-4'>
                        <strong>Items : 2</strong>
                        <strong> $XXXX</strong>
                    </div>
                    <strong>Shipping Method</strong>
                    <div className='radio-group mb-4 mt-4'>
                        <label class='radio'>
                            <input type='radio' value='free-delivery' name='pickup-method'></input>
                            Free Delivery <span></span>
                        </label>
                        <label class='radio'>
                            <input type='radio' value='pick-up' name='pickup-method'></input>
                            Pick Up <span></span>
                        </label>
                    </div>
                    <div className='mb-4'>
                        <strong>Promocode</strong>
                        <Row className='mt-4'>
                            <Col md={8}>
                                <Form>
                                    <Form.Group controlId=''>
                                        <Form.Control type='text' placeholder='Enter Your Code' />
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col md={4}>
                                <button className='apply-button' variant='white' type='submit'>
                                    Apply
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <hr></hr>
                    <div className='d-flex justify-content-between mb-4'>
                        <strong>Total Cost</strong>
                        <strong> $XXXX</strong>
                    </div>
                    <button className='checkout-button' variant='white' type='submit'>
                        Checkout
                    </button>
                </Col>
            </Row>

            <br></br>

        </Container>
    );
};

export default Checkout;