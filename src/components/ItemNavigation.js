import '../styles/productInfo.css';

export const ItemNavigation = (props) => {    
    return (
        <>
        <div className="item_btn_navigation">

            <button 
                onClick={() => props.prevItem(props.index)} 
                disabled={props.index === 0} 
                className="nav_left">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 m-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>

            <p className="nav_mid_text">
                {props.index + 1} / {props.total}
            </p>

            <button 
                onClick={() => props.nextItem(props.index)}
                disabled={props.index === (props.total - 1)}
                className="nav_right">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 m-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
        </>
    );
}