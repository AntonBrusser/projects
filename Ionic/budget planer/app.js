const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const newBtn = document.querySelector('#btn-new');
const expansesList = document.querySelector('#expanses-list');
const totalExpensesOutput = document.querySelector('#total-expanses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

const clear  = () => {
    reasonInput.value = '';
    amountInput.value = '';
};

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (
        enteredReason.trim().length <= 0 ||
        enteredAmount <= 0 ||
        enteredAmount.trim().length <= 0
    ) {
        alertCtrl.create({
            message:'Please enter a valid reason and amount!',
            header:'Invalid inputs',
            buttons: ['OK']
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expansesList.appendChild(newItem);

    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalExpenses;
    clear();
});

cancelBtn.addEventListener('click', clear);

newBtn.addEventListener('click', () => {
    clear();
    totalExpenses = 0;
    totalExpensesOutput.textContent = totalExpenses;
    expansesList.innerHTML = '';
});