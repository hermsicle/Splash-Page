let mainContent = document.getElementById('main-content');
let form = document.getElementById('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    let formData = new FormData(event.target);

    let firstNameData = formData.get('firstName');
    let emailAddressData = formData.get('emailAddress');

    let updatedMainContent = `
    <div id="main-content" class="intro container">
    <div class="title">
        <h1>Thank you for signing up with us today!</h1>
        <h2>We are glad to have you on our team, ${firstNameData}!</h2>
    </div>
    <p id="disclaimer">We'll send you updates at ${emailAddressData}.</p>
</div>
    `

    mainContent.innerHTML = updatedMainContent;
})