export const renderElement = (container, html) => {
    container.innerHTML = html;
};

export const appendElement = (container, html) => {
    container.insertAdjacentHTML('beforeend', html);
};

export const clearElement = (container) => {
    container.innerHTML = '';
};
