interface IOptionCookie {
    [key: string]: string | number | undefined;
    path?: string;
    'max-age'?: number;
    maxAge?: number;
}

// interface ISetCookie {
//     name: string;
//     value: string;
//     options?: IOptionCookie;
// }

export const setCookie = (
    name: string,
    value: string,
    options: IOptionCookie = {}
) => {
    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    // if (options.expires instanceof Date) {
    //     options.expires = options.expires.toUTCString();
    // }

    let updatedCookie =
        encodeURIComponent(name) + '=' + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += '; ' + optionKey;
        console.log(options[optionKey]);
        let optionValue = options[optionKey];
        console.log(optionValue);
        console.log(!!optionValue);
        console.log(!!optionValue !== true);
        if (!!optionValue) {
            updatedCookie += '=' + optionValue;
        }
    }
    console.log(updatedCookie);

    document.cookie = updatedCookie;
};
