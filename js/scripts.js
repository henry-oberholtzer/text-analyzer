// Utility Logic

function isEmpty() {
    for (let i=0; i < arguments.length; i++) {
        if (arguments[i].trim().length === 0) {
            return true;
        }
    }
    return false;
}

// Business Logic

function wordCounter(text) {
    if (isEmpty(text)) {
        return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function (word) {
        if (!Number(word)) {
            wordCount++;
        }
    });
    return wordCount;
}

function numberOfOccurrencesInText(word, text) {
    if (isEmpty(word)) {
        return 0;
    }
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function (element) {
        if (element.toUpperCase().includes(word.toUpperCase())) {
            wordCount++
        }
    });
    return wordCount;
}

function censor(text) {
    const textArray = text.split(" ");
    let cleanText = ""
    textArray.forEach(function (element) {
        if (element.toUpperCase().includes("ZOINKS") || element.toUpperCase().includes("MUPPETEER") || element.toUpperCase().includes("BIFFARONI") || element.toUpperCase().includes("LOOPDALOOP")) {
            const beep = "*"
            cleanText += element.charAt(0) + beep.repeat(element.length - 1) + " ";
        } else cleanText += element + " ";
    });
    return cleanText.trim();
}

function boldPassage(word, text) {
    if (isEmpty(word, text)) {
        return null;
    }
    const p = document.createElement("p");
    const textArray = text.split(" ");
    textArray.forEach(function (element, index) {
        if (element === word) {
            const bold = document.createElement("strong");
            bold.append(element);
            p.append(bold);
        } else {
            p.append(element);
        }
        if (index !== (textArray.length - 1)) {
            p.append(" ");
        }
    });
    return p;
}

function firstInstanceOfWord(word, text) {
    if (isEmpty(word)) {
        return 0;
    }
    const textArray = text.split(" ");
    for (let i = 0; i < textArray.length; i++) {
        if (word === textArray[i]){
            return i;
        }
    }
    return -1;
}

// WIP
function wordStat(text) {
    let textArray = text.split(" ");
    const statArray = []
    textArray.forEach(function(element) {
        let newArray = [element, 0];
        let specificWord = element;
        textArray.forEach(function (element, index) {
            if (element === specificWord) {
                newArray[1]++;
                textArray.splice(index);
            };
        });
        statArray.push(newArray);
    });
    console.log(statArray);
}

// UI Logic

function handleFormSubmission(event) {
    event.preventDefault();
    const passage = censor(document.getElementById("text-passage").value);
    const word = document.getElementById("word").value;
    const wordCount = wordCounter(passage);
    const occurencesOfWord = numberOfOccurrencesInText(word, passage);
    const firstOccurence = firstInstanceOfWord(word, passage);
    document.getElementById("total-count").innerText = wordCount;
    document.getElementById("selected-count").innerText = occurencesOfWord;
    document.getElementById("first-occurence").innerText = firstOccurence;
    let boldedPassage = boldPassage(word, passage);
    if (boldedPassage) {
        document.querySelector("div#bolded-passage").append(boldedPassage);
    } else {
        document.querySelector("div#bolded-passage").innerText = null;
    }
}

window.addEventListener("load", function () {
    document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});