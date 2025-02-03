function generateName() {
    const adjective = document.getElementById("adjective-input").value;
    const shopName = document.getElementById("shop-input").value;
    const extraWord = document.getElementById("extra-word-input").value;

    const name = `${adjective || 'Creative'} ${shopName || 'Designs'} ${extraWord || 'Hub'}`;

    const businessNameElement = document.getElementById("business-name");
    businessNameElement.innerText = name;
}

function clearFields() {
    document.getElementById("adjective-input").value = '';
    document.getElementById("shop-input").value = '';
    document.getElementById("extra-word-input").value = '';
    document.getElementById("business-name").innerText = 'Your business name will appear here';
}