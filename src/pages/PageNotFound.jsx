import React from 'react'

const PageNotFound = () => {
    return (
        <div className='bg-gray-color' style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
            <div className='align-content-center bg-grey-color d-flex flex-column gap-5 justify-content-center my-auto p-4 w-50'>
                <h4 className='text-center'>404 Page was not found :(</h4>
                <button onClick={() => {
                    window.history.back();
                }}
                    className='btn btn-blue '>
                    Go Back
                </button>
            </div>
        </div>
    )
}

export default PageNotFound