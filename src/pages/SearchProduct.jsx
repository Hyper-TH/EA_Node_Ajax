

export const SearchProduct = () => {
    const searchProduct = async () => {
        setIsLoading(true);
        setError("");    

        try {
            const response = await Axios.get(
                `${process.env.REACT_APP_LOCALHOST}/getProds`, {
                    params: { id: currID }
                }
            );

            console.log(response);
            console.log(response.data.product);
            console.log("Total", response.data.total);
            console.log("Index", response.data.index);

            setCurrProduct(response.data.product);
            setCurrID(response.data.product._id)
            setCurrTotal(response.data.total);
            setCurrIndex(response.data.index)
            setError('');
        } catch (err) {
            setError('Failed to fetch product');
            setCurrProduct(null);
            console.error(err);
        }
    };

    
    return (
        <>
        </>
    )
};