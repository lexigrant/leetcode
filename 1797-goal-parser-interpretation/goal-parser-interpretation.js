/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const commands = ["G", "()", "(al)"]
    let currentSubString = ""
    let output = ""
    for(let i = 0; i < command.length; i++) {
        currentSubString += command[i]
        if(commands.includes(currentSubString)) {
            if(currentSubString === commands[0]) {
                output += "G"
            } else if(currentSubString === commands[1]) {
                output += "o"
            } else {
                output += "al"
            }
            currentSubString = ""
        }
    }
    return output
};