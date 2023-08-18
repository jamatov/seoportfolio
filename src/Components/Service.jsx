import React from 'react'

export default function Service() {
  return (
    <section className='serviceSection' id='loyiha'>
      <div className="container">
        <h2 className='serviceTitle'>02 <span>мои услуги</span></h2>
        <div className='row '>
          <div className="col-12 col-md-6 col-lg-3">
              <div className='serviceCard'>
            <i class='bx bx-edit'></i>
            <h2>Google Ads</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco</p>
          </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className='serviceCard'>
              <i class='bx bx-category' ></i>
              <h2>Yandex Direct</h2>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
              <div className='serviceCard'>
            <i class='bx bx-bar-chart-square' ></i>
            <h2>SEO optimization</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco</p>
          </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
              <div className='serviceCard'>
            <i class='bx bxs-universal-access'></i>
            <h2>Создать телеграм бот</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
