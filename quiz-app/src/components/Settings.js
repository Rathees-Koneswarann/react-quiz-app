import React, { useEffect, useState } from 'react'

function Settings() {
    // useState hook 
    const [options, setOptions] = useState(null);
    const [questionCategory, setQuestionCategory] = useState("");
    // useEffect hook
    useEffect(() => {
        const apiUrl = `https://opentdb.com/api_category.php`;

        fetch(apiUrl)
            .then((res) => res.json())
            .then((response) => {
                setOptions(response.trivia_categories);
            }).catch(err => {
                console.log(err)
            })

    }, [setOptions]);

    // event that is called when an option is chosen
    const handleCategoryChange = event => {
        setQuestionCategory(event.target.value)
        console.log(questionCategory)
    }

    return (
        <div>
            <div>
                <h2>Select Category:</h2>
                <select value={questionCategory} onChange={handleCategoryChange}>
                    <option>All</option>
                    {options &&
                        options.map((option) => (
                            <option value={option.id} key={option.id}>
                                {option.name}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    )
}

export default Settings
