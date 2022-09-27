// Rendering various links
const addNewBook = document.getElementById('add-book-form');
const sectionBook = document.querySelector('.book-list-section');
const sectionContact = document.querySelector('.contact-section');

const listView = () => {
  const list = document.getElementById('link-a');
  list.addEventListener('click', () => {
    addNewBook.style.display = 'none';

    sectionBook.style.display = 'block';

    sectionContact.style.display = 'none';
  });
};
listView();

const addNewView = () => {
  const addNew = document.getElementById('add-new-a');
  addNew.addEventListener('click', () => {
    sectionBook.style.display = 'none';

    addNewBook.style.display = 'flex';

    sectionContact.style.display = 'none';
  });
};
addNewView();

const contactView = () => {
  const contact = document.getElementById('contact-a');
  contact.addEventListener('click', () => {
    sectionBook.style.display = 'none';

    addNewBook.style.display = 'none';
    sectionContact.style.display = 'block';
  });
};
contactView();

export { listView, addNewView, contactView };
