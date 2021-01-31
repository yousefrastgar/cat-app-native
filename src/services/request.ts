export const request = {
    get: async (url: string, access_token: string) => {
        let headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + access_token
        };
        return await fetch(url, {
            method: "GET",
            headers: headers
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        });
    },

    post: async (formData: { [index: string]: any }, url: string, access_token: string, encode: boolean = false) => {
        let formBodyString: string = "";
        if (encode) {
            let formBody = [];
            for (let key in formData) {
                if (formData.hasOwnProperty(key)) {
                    let encodedKey: string = encodeURIComponent(key);
                    let encodedValue: string = encodeURIComponent(formData[key]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
            }
            formBodyString = formBody.join("&");
        }
        let headers;
        if (access_token !== null)
            headers = {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + access_token
            };
        else
            headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
        return await fetch(url, {
            method: "POST",
            headers: headers,
            body: encode ? formBodyString : JSON.stringify(formData)
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        });
    }
};
