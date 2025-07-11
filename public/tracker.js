(function() {
    console.log('[Tracker] Script loaded.');
    const SERVER_URL = 'https://tracker.whatifweb.co.nz';
    let isTrackingActive = false;
    const sessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);

    // === TEAM IP BLOCKING CONFIGURATION ===
    const TESTING_MODE = false; // Set to true when testing tracking functionality
    
    // Add your team's IP addresses here
    const BLOCKED_IPS = [
        '222.154.251.228',  // Your current IP
        // Add more team member IPs here, e.g.:
        // '203.123.45.67',  // Office IP
        // '192.168.1.100',  // Another team member IP
    ];

    // Check if current user should be blocked from tracking
    async function shouldBlockTracking() {
        if (TESTING_MODE) {
            console.log('[Tracker] 🧪 TESTING_MODE is ON - tracking enabled for team IPs');
            return false;
        }

        try {
            // Get user's IP address
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            const userIP = data.ip;
            
            if (BLOCKED_IPS.includes(userIP)) {
                console.log(`[Tracker] 🚫 Team IP detected (${userIP}) - tracking disabled`);
                console.log('[Tracker] To enable tracking: Set TESTING_MODE = true in tracker.js');
                return true;
            }
            
            console.log(`[Tracker] ✅ External IP (${userIP}) - tracking enabled`);
            return false;
        } catch (error) {
            console.error('[Tracker] Could not determine IP address:', error);
            // If we can't determine IP, allow tracking to continue
            return false;
        }
    }

    // Initialize tracking after IP check
    async function initializeTracking() {
        const shouldBlock = await shouldBlockTracking();
        if (shouldBlock) {
            return; // Exit without initializing tracking
        }

        // Original tracking initialization
        observeFormVisibility();
    }

    function sendTrackRequest(data) {
        fetch(`${SERVER_URL}/api/track`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, sessionId }),
        })
        .then(response => {
            if (!response.ok) {
                console.error(`[Tracker] API Error: ${response.status} ${response.statusText}`);
            } else {
                console.log(`[Tracker] Successfully sent event: ${data.event}`);
            }
        })
        .catch(error => console.error('[Tracker] Network Error:', error));
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
            console.error('[Tracker] Could not find form element with selector: .multi-step-form_component');
            return;
        }
        console.log('[Tracker] Form element found. Observing for visibility.');

        const checkAndStartTracking = () => {
            if (window.getComputedStyle(formElement).display !== 'none' && !isTrackingActive) {
                console.log('[Tracker] Form is visible. Starting tracking session.');
                isTrackingActive = true;
                sendTrackRequest({ event: 'formView' });
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
            console.error('[Tracker] Could not find step element with selector: [data-text="current-step"]');
            return;
        }
        console.log('[Tracker] Step element found. Observing for changes.');

        let lastStep = currentStepElement.textContent.trim();
        sendTrackRequest({ event: 'stepChange', step: lastStep });

        const processStepChange = () => {
            const newStep = currentStepElement.textContent.trim();
            if (newStep && newStep !== lastStep) {
                console.log(`[Tracker] Detected step change to: ${newStep}`);
                lastStep = newStep;
                sendTrackRequest({ event: 'stepChange', step: newStep });
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
            console.error('[Tracker] Could not find success element with selector: .form_message-success-wrapper');
            return;
        }
        console.log('[Tracker] Success element found. Observing for submission.');

        let submissionSent = false;
        const observer = new MutationObserver(() => {
            if (window.getComputedStyle(successElement).display !== 'none' && !submissionSent) {
                console.log('[Tracker] Form submission detected.');
                submissionSent = true;
                sendTrackRequest({ event: 'formSubmission' });
                observer.disconnect();
            }
        });

        observer.observe(successElement, { attributes: true });
    }

    document.addEventListener('DOMContentLoaded', () => {
        console.log('[Tracker] DOMContentLoaded event fired. Initializing observer.');
        initializeTracking();
    });
})(); 