import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className='fixed-bottom bg-dark text-white text-capitalize text-center'>
            <p className='my-2'> All contents are copyright &copy; {year}</p>
        </footer>

    )
}

export default Footer;