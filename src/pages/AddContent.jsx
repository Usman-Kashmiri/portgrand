import React, { useState, useEffect, forwardRef } from 'react'
import IconsSideNav from "../components/layout/IconsSideNav";
import { Container } from 'react-bootstrap';
import { Avatar, Grid, Group, Input, Select, Text, TextInput, Button, Loader, FileInput } from '@mantine/core';
import { paymentmethods } from '../data/data'
import AuthUser from '../Config/UserAuth';

import { useLocation } from 'react-router-dom';




const AddContent = () => {

    const { http, alertMessage } = AuthUser();
    const [alert, setAlert] = useState('')


    const location = useLocation();
    const detail = location.state;
    const [isEdit, setIsEdit] = useState(false)


    const [inputVal, setInputVal] = useState({
        id: '',
        title: '',
        reach: '',
        date_published: '',
        engagements: '',
        like_reactions: '',
    })


    const [inputFile, setInputFile] = useState('');

    useEffect(() => {
        if (detail) {
            setInputVal({ ...inputVal, ...detail });
            setIsEdit(true)
        }
    }, [detail]);


    const handleInput = (e, ename = '') => {
        if (ename == '') {
            let name = e.target.name;
            let value = e.target.value;

            setInputVal({ ...inputVal, [name]: value });
        } else {
            setInputVal({ ...inputVal, [ename]: e });

        }
    }

    const [isSubmit, setIsSubmit] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmit(true)

        
        let apiPath = 'addContent'
        if (isEdit) {
            apiPath = 'updatecontent'
        }


        let formdata = new FormData();
        formdata.append('file', inputFile);
        formdata.append('data', JSON.stringify(inputVal));
        http.post(apiPath, formdata).then((res) => {
            setAlert(alertMessage(res.data.status, res.data.msg));
            if (res.data.status == 'success') {
                if (!isEdit) {
                    
                    e.target.reset();
                }
        
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
                        <span className="font-poppins fw-bold fs-5"> {isEdit? 'Update' : 'Add'} Content</span>
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
                                placeholder="Enter content title"
                                radius="md"
                                size="md"
                                name='title'
                                value={inputVal.title}
                                onChange={handleInput}
                                label='Title'
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <FileInput
                                label="Upload Image"
                                name='file'
                                placeholder="Upload files"
                                accept="image/png,image/jpeg"
                                onChange={(e) => setInputFile(e)} />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput
                                placeholder="Reach"
                                label="Reach"
                                radius="md"
                                size="md"
                                type='text'
                                value={inputVal.reach}
                                name='reach'
                                onChange={handleInput}
                            />


                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput
                                placeholder="Date published"
                                label="Date published"
                                radius="md"
                                size="md"
                                type='date'
                                name='date_published'
                                value={inputVal.date_published}
                                onChange={handleInput}
                            />


                        </Grid.Col>

                        <Grid.Col span={6}>
                            <TextInput
                                placeholder="Engagements"
                                label="Engagements"
                                radius="md"
                                size="md"
                                type='text'
                                name='engagements'
                                value={inputVal.engagements}
                                onChange={handleInput}
                            />

                        </Grid.Col>

                        <Grid.Col span={6}>
                            <TextInput
                                placeholder="Likes and reaction"
                                label="Likes and reaction"
                                name='like_reactions'
                                radius="md"
                                size="md"
                                type='text'
                                value={inputVal.like_reactions}
                                onChange={handleInput}
                            />
                        </Grid.Col>
                        <Grid.Col span={12}>

                            <Button variant="gradient" disabled={isSubmit} type='submit' gradient={{ from: 'indigo', to: 'cyan' }}>
                                {!isSubmit ?
                                    (<>{isEdit ? 'Update Changes' : 'Save Changes'}</>)
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

export default AddContent