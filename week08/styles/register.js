import { participantTemplate, successTemplate } from './styles/Templates.js';
document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;

    const addParticipantButton = document.getElementById('add');
    const form = document.querySelector('form');
    const summary = document.getElementById('summary');

    addParticipantButton.addEventListener('click', () => {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addParticipantButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const totalFees = calculateTotalFees();
        const adultName = form.querySelector('#adult_name').value;

        const summaryHTML = successTemplate({
            name: adultName,
            count: participantCount,
            totalFees: totalFees
        });

        form.classList.add('hide');
        summary.innerHTML = summaryHTML;
        summary.classList.remove('hide');
    });

    function calculateTotalFees() {
        const feeElements = [...document.querySelectorAll("[id^=fee]")];
        const total = feeElements.reduce((sum, feeElement) => sum + parseFloat(feeElement.value || 0), 0);
        return total;
    }
});