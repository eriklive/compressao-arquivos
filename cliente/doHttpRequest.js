const sendToServer = (endpoint, fileString, tree) => {
    const data = new FormData();
    const httpHeader = new Headers();

    data.append('file', new Blob([fileString], { type: 'text/txt' }));
    data.append('file', new Blob([JSON.stringify(tree)], { type: 'text/txt' }));

    //sending
    const httpRequisition = {
        method: 'POST',
        headers: httpHeader,
        mode: 'cors',
        origin: '*',
        cache: 'default',
        body: data
    };

    const request = new Request('http://localhost:3001/' + endpoint, httpRequisition);

    fetch(request).then(response => response.blob())
}