 export const urlparser = ()=>{
    const url = window.location.hash.toLocaleLowerCase();

    var urlsplit = url.split('/');

    return {
        resourse : urlsplit[1],
        param : urlsplit[2]
    };
    
    

    
}

