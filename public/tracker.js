(function() {
    const SERVER_URL = '';
    let isTrackingActive = false;
    const sessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);

    function sendTrackRequest(data) {
        fetch(`${SERVER_URL}/api/track`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, sessionId }),
        }).catch(error => console.error('Error tracking event:', error));
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function observeFormVisibility() {
        const formElement = document.querySelector('.multi-step-form_component');
        if (!formElement) {
            console.log('Tracking script: Form element not found.');
            return;
        }

        const checkAndStartTracking = () => {
            if (window.getComputedStyle(formElement).display !== 'none' && !isTrackingActive) {
                isTrackingActive = true;
                sendTrackRequest({ event: 'formView' });
                console.log('form viewed');
                startStepTracking();
                observer.disconnect();
            }
        };

        const observer = new MutationObserver(checkAndStartTracking);
        observer.observe(formElement, { attributes: true });

        checkAndStartTracking();
    }

    function startStepTracking() {
        const currentStepElement = document.querySelector('[data-text="current-step"]');
        if (!currentStepElement) {
            console.log('Tracking script: Current step element not found.');
            return;
        }

        let lastStep = currentStepElement.textContent.trim();
        sendTrackRequest({ event: 'stepChange', step: lastStep });
        console.log(`Initial step detected: ${lastStep}`);

        const processStepChange = () => {
            const newStep = currentStepElement.textContent.trim();
            if (newStep && newStep !== lastStep) {
                lastStep = newStep;
                sendTrackRequest({ event: 'stepChange', step: newStep });
                console.log(`step changed to ${newStep}`);
            }
        };
        
        const debouncedProcessStepChange = debounce(processStepChange, 50);

        const observer = new MutationObserver(debouncedProcessStepChange);

        observer.observe(currentStepElement, { childList: true, characterData: true, subtree: true });

        observeFormSubmission();
    }

    function observeFormSubmission() {
        const successElement = document.querySelector('.form_message-success-wrapper');
        if (!successElement) {
            console.log('Tracking script: Success element not found.');
            return;
        }

        let submissionSent = false;
        const observer = new MutationObserver(() => {
            if (window.getComputedStyle(successElement).display !== 'none' && !submissionSent) {
                submissionSent = true;
                sendTrackRequest({ event: 'formSubmission' });
                console.log('Form submission tracked');
                observer.disconnect();
            }
        });

        observer.observe(successElement, { attributes: true });
    }

    document.addEventListener('DOMContentLoaded', () => {
        observeFormVisibility();
    });
})(); 