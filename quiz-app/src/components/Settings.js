import React, { useEffect, useState } from 'react'

function Settings() {
    // useState hook 
    const [options, setOptions] = useState(null);

    // useEffect hook
    useEffect(() => {
        const apiUrl = `https://opentdb.com/api_category.php`;
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(apiUrl)
            .then((res) => res.json())
            .then((response) => {
                setOptions(response.trivia_categories);
            }).catch(err=>{
                console.log(err)
            })

    }, [setOptions]);

    return (
        <div>
            <h2>Settings</h2>
        </div>
    )
}

export default Settings
