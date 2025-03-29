import React from 'react';

const FAQData = [
  {
    id: 1,
    question: "What are the common signs of drug addiction?",
    answer: "Common signs include sudden behavioral changes, withdrawal from family and friends, neglecting responsibilities, financial issues, and physical health deterioration."
  },
  {
    id: 2,
    question: "How can I help a friend struggling with drug addiction?",
    answer: "Offer emotional support, encourage them to seek professional help, avoid enabling their addiction, and educate yourself on addiction recovery resources."
  },
  {
    id: 3,
    question: "Are there any helplines available for drug abuse support?",
    answer: "Yes, many organizations offer 24/7 helplines. For example, you can contact the National Drug Helpline at +1-800-662-HELP (4357)."
  },
  {
    id: 4,
    question: "What are some effective ways to prevent drug addiction?",
    answer: "Education, building strong coping skills, fostering healthy relationships, staying engaged in positive activities, and seeking early intervention can help prevent addiction."
  },
  {
    id: 5,
    question: "What are the long-term effects of drug abuse?",
    answer: "Long-term effects may include organ damage, mental health disorders, financial and legal troubles, relationship issues, and a higher risk of overdose."
  },
  {
    id: 6,
    question: "Is drug addiction a disease?",
    answer: "Yes, drug addiction is considered a chronic brain disease that affects self-control and decision-making, often requiring medical and psychological treatment."
  },
  {
    id: 7,
    question: "Can someone recover from drug addiction completely?",
    answer: "Yes, with the right treatment, support, and lifestyle changes, many people successfully recover and lead healthy, drug-free lives."
  }
];

const FAQ = () => {
  return (
    <div className="container my-5">
        <div className='common-heading-container'>
      <h2 className="text-center mb-4 common-heading" >Frequently Asked Questions</h2>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div className="accordion accordion-flush w-75" id="accordionFlushExample">
          {FAQData.map((data, index) => (
            <div className="accordion-item" key={data.id}>
              <h2 className="accordion-header" id={`flush-heading${index}`}>
                <button 
                  className="accordion-button collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target={`#flush-collapse${index}`} 
                  aria-expanded="false" 
                  aria-controls={`flush-collapse${index}`}
                >
                  {data.question}
                </button>
              </h2>
              <div 
                id={`flush-collapse${index}`} 
                className="accordion-collapse collapse" 
                aria-labelledby={`flush-heading${index}`} 
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">{data.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
