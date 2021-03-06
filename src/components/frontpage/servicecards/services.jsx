import React, {useState} from 'react';

import ServiceCards from './service-cards';
import CardDetail from './servicecard_details';

function Services() {
  const [cardNum, setcardNum] = useState(0);

  return (
    <section className="services" id="services">
      <div className="services-head">
        <h3>Our Core Services</h3>
        <p>We specialize in these areas:</p>
      </div>
      <div className="services-body">
        <ServiceCards callback={setcardNum.bind(this)}/>
        <CardDetail data={cardNum}/>
      </div>
    </section>
  )
}



export default Services;