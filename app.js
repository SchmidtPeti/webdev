const toggleStyleSheet = () => {
    let emptyStyle = document.getElementById("contrast");
    let currentPath = emptyStyle.href.substring(emptyStyle.href.lastIndexOf("/")+1,emptyStyle.href.length);
    if(currentPath!=="nincs.css"){
        emptyStyle.href="nincs.css";
    }
    else{
        let van = document.location.href;
        let idx = van.lastIndexOf('/');
        let newPath = van.substring(0,idx);
        newPath += "/bigContrast.css";
        emptyStyle.href = newPath;
    }
}