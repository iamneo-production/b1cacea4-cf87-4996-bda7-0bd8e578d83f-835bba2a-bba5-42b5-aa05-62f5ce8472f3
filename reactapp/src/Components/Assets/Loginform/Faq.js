
import React, { useState } from 'react';
import"./Faq.css";
import Sidebar from '../Loginform/Sidebar';
export default function Faq() {

    const [expandedFAQs, setExpandedFAQs] = useState([]);

    // FAQ data
    const faqs = [
      {
        question: '1.What is an online wildlife watching tour?',
        answer: 'An online wildlife watching tour is a virtual experience that allows you to explore and observe wildlife from the comfort of your own home using live-streaming, pre-recorded videos, and interactive content.',
      },
      {
        question: '2. How does it work?',
        answer: 'Our website provides live camera feeds, recorded videos, and other multimedia content from various wildlife reserves and natural habitats. Users can access these resources to watch animals and learn about their behavior.',
      },
      {
          question: '3. Can I interact with the animals during the online tour?',
          answer: 'No, our online tours are designed for observation and educational purposes only. Interacting with wild animals in their natural habitat is neither safe nor ethical.',
      },
      {
          question: '4. Where can I find information about upcoming online tours and events?',
          answer: "You can find information about upcoming tours and events on our website's homepage or in the events section. We regularly update this information.",
      },
      {
          question: '5. Is there a fee for accessing the online wildlife tours?',
          answer: "Some tours may be free, while others may require a subscription or one-time payment. The pricing details can be found on the tour's respective page.",
      },
      {
          question: '6. Can I watch the tours on my mobile device or tablet?',
          answer: 'Yes, our website is optimized for mobile devices and tablets, allowing you to enjoy wildlife tours on various platforms.',
      },
      {
          question: '7. Are the tours available 24/7?',
          answer: "Tour availability varies depending on the location and time zone. Some tours are live-streamed 24/7, while others may have specific viewing hours. Check the tour's details for specific times.",
      },
      {
        question: '8. Can I ask questions or get additional information during the tour?',
        answer:'Some tours may offer live chat or Q&A sessions with wildlife experts. Check the tour details to see if this feature is available',
      }
      // Add more FAQs as needed
    ];
  
    // Function to toggle FAQ visibility
    const toggleFAQ = (index) => {
      if (expandedFAQs.includes(index)) {
        setExpandedFAQs(expandedFAQs.filter((item) => item !== index));
      } else {
        setExpandedFAQs([...expandedFAQs, index]);
      }
    };


  return (
   
    <div className='ran'>
    <Sidebar/>
    <div className='rectangle88'>
    <div className='kab'>
    <img src="https://st3.depositphotos.com/16453400/19086/i/450/depositphotos_190860462-stock-photo-faq-wood-blocks.jpg" height="300px" width="800px"/>
    </div>
    
    <div className="faq-container">
   
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`faq-question ${expandedFAQs.includes(index) ? 'expanded' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </div>
            {expandedFAQs.includes(index) && <div className="faq-answer">{faq.answer}</div>}
          </div>
        
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}
   