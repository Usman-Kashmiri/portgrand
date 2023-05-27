import React, { useState, useEffect, forwardRef } from 'react'
import IconsSideNav from "../components/layout/IconsSideNav";
import { Container } from 'react-bootstrap';
import { Avatar, Grid, Group, Input, Select, Text, TextInput, Button, Loader, FileInput } from '@mantine/core';
import AuthUser from '../Config/UserAuth';
import { DatePickerInput } from "@mantine/dates";
import { json, useLocation } from 'react-router-dom';




const AddContent = () => {

    const { http, alertMessage } = AuthUser();
    const [alert, setAlert] = useState('')
    const [selectedDate, setSelectedDate] = useState([
        new Date(2023, 3, 17),
        new Date(),
    ]);

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
    function getDatesInRange(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const dateArray = [];

        // Iterate through each day between start and end dates
        for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
            const currentDate = new Date(date);
            const formattedDate = currentDate.toLocaleDateString('en-GB');
            dateArray.push(formattedDate);
        }

        return dateArray;
    }



    const [inputFile, setInputFile] = useState([]);

    useEffect(() => {
        if (detail) {
            setInputVal({ ...inputVal, ...detail });
            setIsEdit(true)
        }
    }, [detail]);




    const [isSubmit, setIsSubmit] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()

        const date = getDatesInRange(selectedDate[0], selectedDate[1]);
     
        if (inputFile.length !== date.length) {
            setAlert(alertMessage('warning', 'image and date lenght not equal'))
            return;
        }
        // setIsSubmit(true)
        let apiPath = 'addContent'
        if (isEdit) {
            apiPath = 'updatecontent'
        }

        let formdata = new FormData();
        date.forEach((item) => formdata.append('date[]', item));
        inputFile.forEach((item) => formdata.append('file[]', item));
        http.post(apiPath, formdata)
            .then((res) => {
                setAlert(alertMessage(res.data.status, res.data.msg));
                if (res.data.status === 'success') {
                    if (!isEdit) {
                        e.target.reset();
                    }
                    setIsSubmit(false);
                }
            })
            .catch((error) => {
                console.log(error);
                setIsSubmit(false);
            });
    }

    useEffect(() => {
        setTimeout(() => {
            setAlert(' ');
        }, 5000);
    }, [alert]);
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

            <Container fluid className="bg-grey-color py-4 px-5 d-flex flex-column w-100" >
                <Grid className="justify-content-between">
                    <Grid.Col span={11}>
                        <span className="font-poppins fw-bold fs-5"> {isEdit ? 'Update' : 'Add'} Content</span>
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

                            <FileInput
                                label="Upload Image"
                                name='file'
                                placeholder="Upload files"
                                accept="image/png,image/jpeg"
                                multiple
                                onChange={(e) => setInputFile(e)} />
                            <p className='text-end'>Total selected files (<b> {inputFile?.length} </b>) </p>
                        </Grid.Col>

                        <Grid.Col span={6} mt={'15px'}>
                            <DatePickerInput
                                className="select-grey-color font-poppins contentdatepicker"
                                placeholder="Pick dates range"
                                value={selectedDate}
                                onChange={setSelectedDate}
                                type="range"
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