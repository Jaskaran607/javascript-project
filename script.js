const selectedServices = new Set();

function selectService(service) {
    if (selectedServices.has(service)) {
        selectedServices.delete(service);
    } else {
        selectedServices.add(service);
    }
    renderServices();
}

function renderServices() {
    const list = document.getElementById('services-list');
    list.innerHTML = '';

    selectedServices.forEach(service => {
        const li = document.createElement('li');
        li.textContent = service;
        list.appendChild(li);
    });
}

