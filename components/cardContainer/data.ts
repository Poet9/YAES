const fetchingData = async (url: string | undefined) => {
    // here I will do the fetch and retreive
    if (!url) return [];
    try {
        const res = await fetch(url);
        var data = await res.json();
    } catch (err) {
        console.log({ err });
    }
    return data;
};

export { fetchingData as fetchCards };
