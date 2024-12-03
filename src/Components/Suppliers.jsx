import React from 'react'
import '../assets/css/suppliers.css'
const Suppliers = () => {
  return (
    <section className="section-suppliers my-5 py-5" data-aos="zoom-in">
        <div className="container">
           <div className='row py-5'>
             <div className="col-md-8">
                 <h2 className='suppliers-text'>Let Suppliers <span className='border-orange'>Find You</span></h2>
             </div>
             <div className="col-md-4 d-flex justify-content-center align-items-center">
                 <button className="btn btn-primary orange-btn">Get Verified</button>
             </div>
           </div>
        </div>
    </section>
  )
}

export default Suppliers