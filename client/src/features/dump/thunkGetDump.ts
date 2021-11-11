import {AppThunk} from "../../utils/redux";

export function thunkGetDump(): AppThunk {
    return async () => {
        await fetch(`${process.env.REACT_APP_API_URL}/api/v1/dump`,
                {
                    headers: {
                        ['Authorization']: `Bearer ${localStorage.getItem("token")}`,
                        'Content-Type': 'application/vnd.sqlite3',
                    }
                }
            )
            .then((response) => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = "Kadzura.db";
                document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
                a.click();
                a.remove();  //afterwards we remove the element again         
            })
            .catch(p => alert(p));
    }
}
