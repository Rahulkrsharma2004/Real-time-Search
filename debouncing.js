const fetchResults = (query) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const allResults = ["apple", "apricot", "banana", "blueberry", "cherry", "grape", "kiwi", "lemon", "lime", "mango", "orange", "peach", "pear", "pineapple", "plum", "strawberry", "watermelon"];
            const filteredResults = allResults.filter(item => item.includes(query.toLowerCase()));
            resolve(filteredResults);
        }, 1000);
    });
};

const debounce = (func, delay) => {
    let timeoutId;
    // console.log(timeoutId)
    console.log("line 14")
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

const handleSearch = async (event) => {
    const query = event.target.value;
    // console.log(query)
    if (query.length === 0) {
        displayResults([]);
        return;
    }
    
    try {
        const results = await fetchResults(query);
        // console.log(results)
        displayResults(results);
    } catch (error) {
        console.error("Error fetching results:", error);
    }
};

const displayResults = (results) => {
    const resultsList = document.getElementById('results');
    resultsList.innerHTML = results.map(result => `<li>${result.charAt(0).toUpperCase() + result.slice(1)}</li>`).join('');
};

document.getElementById('search').addEventListener('input', debounce(handleSearch, 500));
