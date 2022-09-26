const showContactInfo = () => {
  const contact = document.getElementById('contact-section');

  const contactData = [{
    head: 'Contact Information',
    ask: 'Do you have any question or you just want to say "Hello"? <br>You can reach out to us!',
    email: 'Our email: mail@mail.com',
    phone: 'Our phone number: 0043686634422',
    address: 'Our address: street name 1T2,8450330, country',
  }];
  const showContact = contactData.map((data) => `    <h2 class="contact-title">${data.head}</h2>
    <p class="contact-info">${data.ask}</p>
    <ul class="contact-address">
        <li>${data.email} </li>
        <li>${data.phone}</li>
        <li>${data.address}</li>
    </ul>`);
  contact.innerHTML = showContact;
};

export default showContactInfo;