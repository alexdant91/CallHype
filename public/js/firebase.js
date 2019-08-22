const save = (schema, data) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `https://robotic-algebra-250107.firebaseio.com/${schema}.json`,
            accept: "application/json",
            method: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(data),
            success: function (data) {
                resolve(null, data);
            },
            error: function (a, b, c) {
                reject(a);
            }
        })
    })
}