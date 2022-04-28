import PropTypes from "prop-types";

function MainBar(props) {
    const {onRefreshClick} = props;

    return (
        <div className={'main-bar'}>
            <h2>Notes App, Amigo!</h2>
            <button className={'main-bar-refresh'}
                onClick={onRefreshClick}>Refresh</button>
        </div>
    )
}

MainBar.propTypes = {
    onRefreshClick: PropTypes.func,
}

export default MainBar;
