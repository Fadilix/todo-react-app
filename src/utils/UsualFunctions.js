// this is cood -> This is cool

const capitalize = (str) => {
    const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedStr;
}

// something like this -> something lik...
export const shrinkText = (str, len= 100) => {
    return str?.toString().substring(0, len) + "...";
}

export default capitalize;