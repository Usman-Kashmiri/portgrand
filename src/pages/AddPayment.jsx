import React, { useState, useEffect, forwardRef } from 'react'
import IconsSideNav from "../components/layout/IconsSideNav";
import { Container } from 'react-bootstrap';
import { Avatar, Grid, Group, Input, Select, Text, TextInput, Button, Loader } from '@mantine/core';
import { paymentmethods } from '../data/data'
import AuthUser from '../Config/UserAuth';
import { useLocation } from 'react-router-dom';





const AddPayment = () => {


    const { http, alertMessage } = AuthUser();
    const [alert, setAlert] = useState('')

    const location = useLocation(); 
    const detail = location.state;

    const [inputVal, setInputVal] = useState({
        transaction_id: '',
        date: '',
        amount: '',
        payment_method_id: '',
        payment_status: '',
        invoice_id: '',
    })
    useEffect(() => {
        if(detail){
            setInputVal({ ...inputVal, ...detail });
        } 
     console.log(inputVal); 
    }, [detail]);

   
    function removeNonNumeric(inputString) {
        return inputString.replace(/[^0-9.]/g, '')
    }
    const handleInput = (e, ename = '') => {
        if (ename == '') {
            let name = e.target.name;
            let value = e.target.value;
            if (name == 'amount') {

                value = removeNonNumeric(value)
            }
            setInputVal({ ...inputVal, [name]: value });

        } else {
            setInputVal({ ...inputVal, [ename]: e });
        }

    }

    const [isSubmit, setIsSubmit] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmit(true)
        let formdata = new FormData();
        formdata.append('data', JSON.stringify(inputVal));
        http.post('addPayment', formdata).then((res) => {
            setAlert(alertMessage(res.data.status, res.data.msg));
            if (res.data.status == 'success') {
                e.target.reset();
                setIsSubmit(false)
            }
        }).catch((e) => {
            console.log(e);
            setIsSubmit(false)
        })
    }


    const SelectItem = forwardRef(({ image, label, description, ...others }, ref) => (
        <div ref={ref} {...others}>
            <Group noWrap>
                <Avatar className='bg-grey-color ' style={{ objectFit: 'cover', padding: '2px' }} src={image} />

                <div>
                    <Text size="sm">{label}</Text>
                    <Text size="xs" opacity={0.65}>
                        {description}
                    </Text>
                </div>
            </Group>
        </div>
    )
    );

    return (

        <div className="payment-activity custom-grid max-width-100vw">
            <IconsSideNav />

            <Container
                fluid
                className="bg-grey-color py-4 px-5 d-flex flex-column w-100"
            >
                <Grid className="justify-content-between">
                    <Grid.Col span={11}>
                        <span className="font-poppins fw-bold fs-5">Add Payment</span>
                    </Grid.Col>
                    <Grid.Col span={1}>
                        <button onClick={() => {
                            window.history.back();
                        }} className='btn btn-blue '>Go Back</button>
                   
                </Grid.Col>

            </Grid>
            <form onSubmit={handleSubmit}>
                {alert}
                <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50} className='justify-content-between mt-4 p-2 bg-white rounded-container'>
                    <Grid.Col span={6}>

                        <TextInput
                            placeholder="x000xxxxxxx-xxxxx9"
                            radius="md"
                            size="md"
                            name='transaction_id'
                            onChange={handleInput}
                            label='Transaction ID'
                            value={inputVal.transaction_id}
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <TextInput
                            placeholder="x000xxxxxxx-xxxxx9"
                            radius="md"
                            size="md"
                            label="Date"
                            name='date'
                            type='date'
                            value={inputVal.date}
                            onChange={handleInput}
                        />


                    </Grid.Col>
                    <Grid.Col span={6}>
                        <TextInput
                            placeholder="Amount"
                            label="Amount"
                            radius="md"
                            size="md"
                            type='text'
                            name='amount'
                            value={inputVal.amount}
                            onChange={handleInput}
                        />


                    </Grid.Col>

                    <Grid.Col span={6}>
                        <Select
                            label="Select Payment Method"
                            placeholder="Pick one"
                            itemComponent={SelectItem}
                            data={paymentmethods}
                            searchable
                            maxDropdownHeight={400}
                            nothingFound="Nobody here"
                            value={inputVal.payment_method_id}
                            onChange={(e) => handleInput(e, 'payment_method')}
                            filter={(value, item) =>
                                item.label.includes(value.trim()) ||
                                item.description.includes(value.trim())
                            }
                        /> 

                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Select
                            label="Payment status"
                            placeholder="Payment status"
                            value={inputVal.payment_status}
                            onChange={(e) => handleInput(e, 'payment_status')}
                            data={[
                                { value: 'Paid', label: 'Paid' },
                                { value: 'Pending', label: 'Pending' },
                                { value: 'Cancel', label: 'Cancel' },
                            ]}
                        />

                    </Grid.Col>
                    <Grid.Col span={6}>
                        <TextInput
                            placeholder="Enter VAt invoice ID"
                            label="VAt invoice ID"
                            name='invoice_id'
                            radius="md"
                            size="md"
                            type='text'
                            value={inputVal.invoice_id}
                            onChange={handleInput}
                        />
                    </Grid.Col>
                    <Grid.Col span={12}>

                        <Button variant="gradient" disabled={isSubmit} type='submit' gradient={{ from: 'indigo', to: 'cyan' }}>
                            {!isSubmit ?
                                'Save Changes'
                                : (<> loading <Loader ml={'lg'} size={'sm'} /></>)
                            }
                        </Button>

                    </Grid.Col>
                </Grid>
            </form>
        </Container>
        </div >
    )
}

export default AddPayment