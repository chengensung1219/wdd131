import { activityTemplate, successTemplate } from './Templates.js';

document.addEventListener('DOMContentLoaded', () => {
    let activityCount = 1;

    const addActivityButton = document.getElementById('add');
    const form = document.querySelector('form');
    const summary = document.getElementById('summary');
    const successModal = document.getElementById('successModal');
    const modalSummary = document.getElementById('modal-summary');
    const closeButton = document.querySelector('.close-button');

    addActivityButton.addEventListener('click', () => {
        activityCount++;
        const newActivityHTML = activityTemplate(activityCount);
        addActivityButton.insertAdjacentHTML('beforebegin', newActivityHTML);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const Name = form.querySelector('#fullname').value;

        const summaryHTML = successTemplate({
            name: Name,
            count: activityCount,
        });

        modalSummary.innerHTML = summaryHTML;
        successModal.style.display = 'block';
        
        form.reset();
    });

    closeButton.addEventListener('click', () => {
        successModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == successModal) {
            successModal.style.display = 'none';
        }
    });
});