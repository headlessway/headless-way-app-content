async function setup() {
    const container = document.getElementsByClassName('random-container')[0];

    if (!container) {
        return false;
    }

    const visualization = container.getElementsByClassName('random-visualization')[0];

    if (visualization) {
        const outerDiv = document.createElement('div');
        const innerDiv = document.createElement('div');
        outerDiv.classList.add('random-indicator');
        outerDiv.appendChild(innerDiv);
        visualization.appendChild(outerDiv);
        visualization.classList.add('visible');
    }

    await new Promise(r => setTimeout(() => r(), 4000));

    visualization.classList.remove('visible');

    const choicesContainer = container.getElementsByClassName('random-choices')[0];
    const redirectAfterDraw = choicesContainer.classList.contains('redirect');

    const choiceIndex = Math.floor(Math.random() * choicesContainer.childElementCount);
    const choice = choicesContainer.children[choiceIndex];

    if (redirectAfterDraw) {
        const targetUrl = choice.getAttribute('href');

        if (!targetUrl) {
            return false;
        } else {
            window.location.href = targetUrl;
            displayDelayedFinalResult();

            return true;
        }
    } else {
        const resultContainer = container.getElementsByClassName('random-result')[0];
        resultContainer.appendChild(choice);
        resultContainer.classList.add('visible');
        displayDelayedFinalResult();
        return true;
    }

    function displayDelayedFinalResult() {
        setTimeout(() => {
            const finalResultContainer = container.getElementsByClassName('final-result')[0];
            finalResultContainer?.classList.add('visible');
        }, 1000);
    }
}


void setup();
