function handleUserInput(userInput) {
    const responses = {
        'hello siri': 'yes mother fucker?',
        'hey siri': 'what mother fucker?',
        'jarvis': 'Yes sir, How can I help you?',
        'how are you': 'why do you need, you mother fucker!',
    };

    for (const phrase in responses) {
        if (userInput.toLowerCase().includes(phrase)) {
            storeUserInput(userInput);
            respond(responses[phrase]);
            break;
        }
    }
}